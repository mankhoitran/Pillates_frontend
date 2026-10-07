import { spawn } from 'node:child_process';
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const SCREENSHOT_DIR = resolve('docs/screenshots');
mkdirSync(SCREENSHOT_DIR, { recursive: true });

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const PORT = 9222;

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function startChrome() {
  const proc = spawn(CHROME_PATH, [
    '--headless=new',
    `--remote-debugging-port=${PORT}`,
    '--disable-gpu',
    '--no-sandbox',
    '--no-first-run',
    '--hide-scrollbars',
    '--window-size=1440,900',
    'about:blank'
  ]);

  for (let i = 0; i < 40; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      if (res.ok) return proc;
    } catch (e) {}
    await sleep(200);
  }
  throw new Error('Chrome did not start in time');
}

async function run() {
  console.log('Starting Chrome...');
  const proc = await startChrome();
  console.log('Chrome started');

  try {
    const list = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
    console.log('Target tab found:', list[0]?.webSocketDebuggerUrl);
    const ws = new WebSocket(list[0].webSocketDebuggerUrl);

    let id = 1;
    const callbacks = new Map();

    ws.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      if (data.id && callbacks.has(data.id)) {
        const { resolve, reject } = callbacks.get(data.id);
        callbacks.delete(data.id);
        if (data.error) {
          console.error('CDP Error:', data.error);
          reject(new Error(data.error.message || 'CDP Error'));
        } else {
          resolve(data.result);
        }
      }
    };

    await new Promise((resolve, reject) => {
      ws.onopen = resolve;
      ws.onerror = reject;
    });
    console.log('WebSocket connected');

    function send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const curId = id++;
        callbacks.set(curId, { resolve, reject });
        ws.send(JSON.stringify({ id: curId, method, params }));
      });
    }

    await send('Page.enable');
    await send('Runtime.enable');

    // 1440 x 900 resolution
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false
    });

    console.log('Navigating to http://localhost:3001/...');
    await send('Page.navigate', { url: 'http://localhost:3001/' });
    await sleep(4000);

    async function evaluate(code) {
      const res = await send('Runtime.evaluate', { expression: code, returnByValue: true });
      return res.result?.value;
    }

    async function capture(filename) {
      console.log(`Capturing ${filename}...`);
      const res = await send('Page.captureScreenshot', { format: 'png' });
      writeFileSync(resolve(SCREENSHOT_DIR, filename), Buffer.from(res.data, 'base64'));
      console.log(`Saved ${filename}`);
    }

    // 1. Hero
    await evaluate(`window.scrollTo(0, 0);`);
    await sleep(600);
    await capture('01_hero_overview.png');

    // 2. Philosophy
    await evaluate(`document.querySelector('#philosophy')?.scrollIntoView({ behavior: 'instant', block: 'center' });`);
    await sleep(800);
    await capture('02_philosophy_pillars.png');

    // 3. Rooms & Equipment
    await evaluate(`document.querySelector('#rooms')?.scrollIntoView({ behavior: 'instant', block: 'start' });`);
    await sleep(800);
    await capture('03_rooms_equipment.png');

    // 4. Disciplines / Experience
    await evaluate(`document.querySelector('#experience')?.scrollIntoView({ behavior: 'instant', block: 'start' });`);
    await sleep(800);
    await capture('04_disciplines_experience.png');

    // 5. Trainers
    await evaluate(`document.querySelector('#trainers')?.scrollIntoView({ behavior: 'instant', block: 'start' });`);
    await sleep(800);
    await capture('05_trainers_team.png');

    // 6. Schedule Timetable
    await evaluate(`document.querySelector('#schedule')?.scrollIntoView({ behavior: 'instant', block: 'start' });`);
    await sleep(800);
    await capture('06_schedule_timetable.png');

    // 7. Schedule Lookup Tab
    await evaluate(`
      (() => {
        const btns = Array.from(document.querySelectorAll('button'));
        const lookupBtn = btns.find(b => b.textContent.includes('Tra cứu lịch cá nhân') || b.textContent.includes('Tra Cứu'));
        if (lookupBtn) lookupBtn.click();
      })()
    `);
    await sleep(800);
    await capture('07_schedule_lookup.png');

    // 8. Open Booking Modal
    await evaluate(`
      (() => {
        const btns = Array.from(document.querySelectorAll('button'));
        const bookBtn = btns.find(b => b.textContent.includes('Đặt lịch ngay') || b.textContent.includes('Giữ chỗ'));
        if (bookBtn) bookBtn.click();
      })()
    `);
    await sleep(800);
    await capture('08_booking_modal.png');

    // Close Modal
    await evaluate(`
      (() => {
        const closeBtn = document.querySelector('button[aria-label="Đóng"]') || document.querySelector('.lucide-x')?.closest('button');
        if (closeBtn) closeBtn.click();
      })()
    `);
    await sleep(500);

    // 9. Consultation & Policies
    await evaluate(`document.querySelector('#consultation')?.scrollIntoView({ behavior: 'instant', block: 'start' });`);
    await sleep(800);
    await capture('09_consultation_policies.png');

    // 10. Contact & Footer
    await evaluate(`document.querySelector('#contact')?.scrollIntoView({ behavior: 'instant', block: 'start' });`);
    await sleep(800);
    await capture('10_location_footer.png');

    // 11. Full page screenshot
    console.log('Capturing full page...');
    const layout = await send('Page.getLayoutMetrics');
    const contentHeight = Math.ceil(layout.contentSize.height);
    const contentWidth = Math.ceil(layout.contentSize.width);
    const fullRes = await send('Page.captureScreenshot', {
      format: 'png',
      clip: {
        x: 0,
        y: 0,
        width: contentWidth,
        height: contentHeight,
        scale: 1
      },
      captureBeyondViewport: true
    });
    writeFileSync(resolve(SCREENSHOT_DIR, '11_full_page_preview.png'), Buffer.from(fullRes.data, 'base64'));
    console.log('Saved 11_full_page_preview.png');

    console.log('All screenshots completed successfully!');
    ws.close();
  } catch (err) {
    console.error('Error during capture:', err);
  } finally {
    proc.kill();
  }
}

run();
