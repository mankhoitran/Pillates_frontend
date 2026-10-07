import puppeteer from 'puppeteer-core';
import { resolve } from 'node:path';
import { mkdirSync } from 'node:fs';

const SCREENSHOT_DIR = resolve('docs/screenshots');
mkdirSync(SCREENSHOT_DIR, { recursive: true });

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  console.log('Starting puppeteer-core capture sequence...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-gpu',
      '--window-size=1440,960',
      '--hide-scrollbars'
    ]
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });

    console.log('Navigating to http://localhost:3001/...');
    await page.goto('http://localhost:3001/', { waitUntil: 'networkidle0', timeout: 30000 });
    await sleep(2500);

    // 1. Hero Banner
    console.log('1. Capturing 01_hero_banner.png...');
    await page.evaluate(() => window.scrollTo(0, 0));
    await sleep(600);
    await page.screenshot({ path: resolve(SCREENSHOT_DIR, '01_hero_banner.png') });

    // 2. Philosophy & Sanctuary Space
    console.log('2. Capturing 02_philosophy_practice.png...');
    await page.evaluate(() => {
      const el = document.getElementById('practice');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
    });
    await sleep(800);
    await page.screenshot({ path: resolve(SCREENSHOT_DIR, '02_philosophy_practice.png') });

    // 3. Pilates Disciplines (Reformer / Barre / Cadillac)
    console.log('3. Capturing 03_pilates_disciplines.png...');
    await page.evaluate(() => {
      const el = document.getElementById('experience');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    });
    await sleep(800);
    await page.screenshot({ path: resolve(SCREENSHOT_DIR, '03_pilates_disciplines.png') });

    // 4. Health & Therapy Benefits
    console.log('4. Capturing 04_health_benefits.png...');
    await page.evaluate(() => {
      const el = document.getElementById('health-benefits');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    });
    await sleep(800);
    await page.screenshot({ path: resolve(SCREENSHOT_DIR, '04_health_benefits.png') });

    // 5. Consultation & Member Policies Slider
    console.log('5. Capturing 05_consultation_policies.png...');
    await page.evaluate(() => {
      const el = document.getElementById('tu-van');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    });
    await sleep(800);
    await page.screenshot({ path: resolve(SCREENSHOT_DIR, '05_consultation_policies.png') });

    // 6. Member Policy Table & Trainer Info
    console.log('6. Capturing 06_policy_table_and_trainers.png...');
    await page.evaluate(() => {
      const tuvan = document.getElementById('tu-van');
      if (tuvan) {
        const top = tuvan.getBoundingClientRect().top + window.scrollY;
        window.scrollTo(0, top + 900);
      }
    });
    await sleep(800);
    await page.screenshot({ path: resolve(SCREENSHOT_DIR, '06_policy_table_and_trainers.png') });

    // 7. Studio Schedule Timetable & Search with Active Results
    console.log('7. Capturing 07_schedule_lookup_results.png...');
    await page.evaluate(() => {
      const timetable = document.getElementById('timetable');
      if (timetable) timetable.scrollIntoView({ behavior: 'instant', block: 'start' });
    });
    await sleep(500);

    // Type query into search input using React setter
    await page.evaluate(() => {
      const input = document.querySelector('#timetable input');
      if (input) {
        const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
        nativeSetter.call(input, '090 123 4567');
        input.dispatchEvent(new Event('input', { bubbles: true }));
      }
      const searchBtn = document.querySelector('#timetable form button[type="submit"]') || document.querySelector('#timetable button:has(svg.lucide-search)');
      if (searchBtn) searchBtn.click();
    });
    await sleep(1000);
    await page.screenshot({ path: resolve(SCREENSHOT_DIR, '07_schedule_lookup_results.png') });

    // 8. Testimonials Section
    console.log('8. Capturing 08_testimonials_section.png...');
    await page.evaluate(() => {
      const all = Array.from(document.querySelectorAll('section'));
      const sec = all.find(s => s.textContent.includes('Lời Nhắn') || s.textContent.includes('Học Viên'));
      if (sec) sec.scrollIntoView({ behavior: 'instant', block: 'start' });
    });
    await sleep(800);
    await page.screenshot({ path: resolve(SCREENSHOT_DIR, '08_testimonials_section.png') });

    // 9. Location & Google Maps
    console.log('9. Capturing 09_location_maps.png...');
    await page.evaluate(() => {
      const all = Array.from(document.querySelectorAll('section'));
      const sec = all.find(s => s.textContent.includes('VỊ TRÍ STUDIO') || s.textContent.includes('Trung Tâm Bảo Lộc'));
      if (sec) sec.scrollIntoView({ behavior: 'instant', block: 'start' });
    });
    await sleep(800);
    await page.screenshot({ path: resolve(SCREENSHOT_DIR, '09_location_maps.png') });

    // 10. Studio Sanctuary Footer & 432 Hz Solfeggio Audio Player
    console.log('10. Capturing 10_footer_sanctuary.png...');
    await page.evaluate(() => {
      const footer = document.querySelector('footer');
      if (footer) footer.scrollIntoView({ behavior: 'instant', block: 'start' });
    });
    await sleep(800);
    await page.screenshot({ path: resolve(SCREENSHOT_DIR, '10_footer_sanctuary.png') });

    // 11. Full Page Screenshot
    console.log('11. Capturing 11_full_page_preview.png...');
    await page.evaluate(() => window.scrollTo(0, 0));
    await sleep(600);
    await page.screenshot({
      path: resolve(SCREENSHOT_DIR, '11_full_page_preview.png'),
      fullPage: true
    });

    console.log('=== ALL SCREENSHOTS REFRESHED AND OPTIMIZED ===');
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error('Fatal error during screenshot execution:', err);
  process.exit(1);
});
