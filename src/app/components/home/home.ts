import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  computed,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import {
  COMMANDS,
  CONTACT_LINKS,
  FACTS,
  FILTERS,
  INITIAL_LINES,
  NOTES,
  PROJECTS,
  SERVICES,
  STACK,
  STATS,
  TERM_COLORS,
  TIMELINE,
  TYPE_PHRASES,
  TermLine,
} from './home.data';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:scroll)': 'onScroll()',
  },
})
export class Home {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  /** Muestra la etiqueta "Disponible para proyectos". */
  readonly disponible = input(true);
  /** Muestra los precios de referencia en Servicios. */
  readonly mostrarPrecios = input(true);

  readonly stats = STATS;
  readonly stackLoop = [...STACK, ...STACK];
  readonly filters = FILTERS;
  readonly services = SERVICES;
  readonly timeline = TIMELINE;
  readonly facts = FACTS;
  readonly notes = NOTES;
  readonly contactLinks = CONTACT_LINKS;
  readonly quickCmds = ['ayuda', 'stack', 'proyectos', 'contacto'];

  // Hero
  readonly typed = signal('');
  readonly parallax = signal(0);

  // Terminal
  readonly lines = signal<TermLine[]>(INITIAL_LINES);
  readonly cmd = signal('');
  private readonly termInput = viewChild<ElementRef<HTMLInputElement>>('termInput');
  private readonly termBody = viewChild<ElementRef<HTMLElement>>('termBody');

  // Proyectos
  readonly filter = signal('Todos');
  readonly visibleProjects = computed(() => {
    const f = this.filter().toLowerCase();
    return f === 'todos'
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.some((t) => t.toLowerCase().includes(f)));
  });

  // Contacto
  readonly formName = signal('');
  readonly formMail = signal('');
  readonly formMsg = signal('');
  readonly sent = signal(false);
  readonly saludo = computed(() => this.formName().trim() || 'de nuevo');

  constructor() {
    afterNextRender(() => {
      this.setupReveal();
      this.startTyping();
      this.onScroll();
    });
  }

  onScroll(): void {
    this.parallax.set(window.scrollY * 0.18);
  }

  // ---- Terminal ----

  run(raw: string): void {
    const q = raw.trim().toLowerCase();
    if (!q) return;
    if (q === 'limpiar' || q === 'clear') {
      this.lines.set([]);
      this.cmd.set('');
      return;
    }
    const echo: TermLine = { text: 'alexis@portfolio ~ % ' + raw, color: TERM_COLORS.dim };
    const found = COMMANDS[q] ?? COMMANDS[q.replace(/\s+/g, '-')];
    const out = found ?? [
      { text: 'zsh: comando no encontrado: ' + raw, color: TERM_COLORS.warn },
      { text: "Probá 'ayuda' para ver la lista.", color: TERM_COLORS.dim },
    ];
    this.lines.update((l) => [...l, echo, ...out].slice(-60));
    this.cmd.set('');
    requestAnimationFrame(() => {
      const body = this.termBody()?.nativeElement;
      if (body) body.scrollTop = body.scrollHeight;
    });
  }

  quick(c: string): void {
    this.run(c);
    this.focusTerm();
  }

  focusTerm(): void {
    this.termInput()?.nativeElement.focus();
  }

  // ---- Efectos de puntero ----

  tilt(e: PointerEvent): void {
    const card = e.currentTarget as HTMLElement;
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(900px) rotateY(${(px * 7).toFixed(2)}deg) rotateX(${(-py * 7).toFixed(2)}deg) translateY(-5px)`;
  }

  magnet(e: PointerEvent): void {
    const b = e.currentTarget as HTMLElement;
    const r = b.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
    const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
    b.style.transform = `translate(${(dx * 7).toFixed(1)}px,${(dy * 5 - 3).toFixed(1)}px) scale(1.02)`;
  }

  resetTransform(e: PointerEvent): void {
    (e.currentTarget as HTMLElement).style.transform = '';
  }

  // ---- Formulario ----

  submit(): void {
    this.sent.set(true);
  }

  // ---- Animaciones de entrada ----

  private setupReveal(): void {
    const root = this.host.nativeElement;
    const nodes = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'));
    const show = (n: HTMLElement, i: number) => {
      setTimeout(() => {
        n.classList.add('is-visible');
        this.animateCounters(n);
      }, (i % 4) * 90);
    };

    if (!('IntersectionObserver' in window)) {
      nodes.forEach(show);
      return;
    }

    document.documentElement.classList.add('reveal-ready');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            show(e.target as HTMLElement, i);
            obs.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    nodes.forEach((n) => obs.observe(n));
    const fallback = setTimeout(() => nodes.forEach(show), 2400);

    this.destroyRef.onDestroy(() => {
      obs.disconnect();
      clearTimeout(fallback);
    });
  }

  private animateCounters(scope: HTMLElement): void {
    scope.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
      if (el.dataset['done']) return;
      el.dataset['done'] = '1';
      const target = parseFloat(el.dataset['count'] ?? '0') || 0;
      const suffix = el.dataset['suffix'] ?? '';
      const t0 = performance.now();
      const dur = 1400;
      const step = (now: number) => {
        const p = Math.min(1, (now - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }

  private startTyping(): void {
    let pi = 0;
    let ci = 0;
    let del = false;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const full = TYPE_PHRASES[pi];
      ci += del ? -1 : 1;
      this.typed.set(full.slice(0, ci));
      let wait = del ? 34 : 62;
      if (!del && ci === full.length) {
        del = true;
        wait = 1700;
      } else if (del && ci === 0) {
        del = false;
        pi = (pi + 1) % TYPE_PHRASES.length;
        wait = 380;
      }
      timer = setTimeout(tick, wait);
    };
    timer = setTimeout(tick, 700);
    this.destroyRef.onDestroy(() => clearTimeout(timer));
  }
}
