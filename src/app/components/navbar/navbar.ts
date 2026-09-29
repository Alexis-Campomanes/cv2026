import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:scroll)': 'onScroll()',
  },
})
export class Navbar {
  private readonly themeService = inject(ThemeService);

  readonly links = [
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#trayectoria', label: 'Trayectoria' },
    { href: '#notas', label: 'Notas' },
  ];

  readonly isDark = computed(() => this.themeService.theme() === 'dark');
  readonly progress = signal(0);

  toggleTheme(): void {
    this.themeService.toggle();
  }

  onScroll(): void {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    this.progress.set(max > 0 ? Math.min(1, window.scrollY / max) * 100 : 0);
  }
}
