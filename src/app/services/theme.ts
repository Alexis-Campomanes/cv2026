import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, effect, inject, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'ac-portfolio-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly theme = signal<Theme>(this.readSaved());

  constructor() {
    effect(() => {
      this.document.documentElement.setAttribute('data-theme', this.theme());
    });
  }

  toggle(): void {
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(next);
    if (this.isBrowser) {
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // almacenamiento no disponible: el tema sólo dura esta visita
      }
    }
  }

  private readSaved(): Theme {
    if (!this.isBrowser) return 'dark';
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'dark' || saved === 'light') return saved;
    } catch {
      // ignorado
    }
    return this.getSystemPreference();
  }

  private getSystemPreference(): Theme {
    if (!this.isBrowser) return 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
