// Web Audio API ambient chime and resonant harmonic generator for HPILATES & Wellness
class StudioAudioAmbience {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private intervalId: any = null;

  private init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  public playHarmonicChime() {
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const now = this.ctx.currentTime;
      const baseFreq = 432; // Solfeggio / meditative natural frequency

      // 3 subtle soothing harmonics
      const freqs = [baseFreq, baseFreq * 1.5, baseFreq * 2];
      freqs.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.04 / (idx + 1), now + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5 + idx * 0.5);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 3.5);
      });
    } catch (e) {
      console.warn('Audio feedback error', e);
    }
  }

  public toggleAmbience(): boolean {
    try {
      this.init();
      if (!this.ctx) return false;

      if (this.isPlaying) {
        this.stopAmbience();
        return false;
      } else {
        this.startAmbience();
        return true;
      }
    } catch {
      return false;
    }
  }

  private startAmbience() {
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.isPlaying = true;
    this.playHarmonicChime();

    // Gentle periodic gentle chime
    this.intervalId = setInterval(() => {
      if (this.isPlaying) {
        this.playHarmonicChime();
      }
    }, 12000);
  }

  private stopAmbience() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const studioAudio = new StudioAudioAmbience();
