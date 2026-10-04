/**
 * Scroll cinematográfico entre secciones, portado de la versión anterior.
 *
 * El `scroll-behavior: smooth` nativo se percibe como un salto: dura ~500ms
 * con una curva fija del navegador. Acá el scroll se anima con
 * requestAnimationFrame y una curva casi lineal (velocidad constante durante
 * el trayecto, solo ablanda arranque y aterrizaje), con duración proporcional
 * a la distancia. Si el usuario toma el control (rueda, dedo, tecla) la
 * animación se cancela. Con `prefers-reduced-motion` salta directo.
 */

let raf = 0;
let active = false;

function easeScroll(t: number): number {
  const inOut = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  return t * 0.72 + inOut * 0.28;
}

function stop(): void {
  if (!active) return;
  active = false;
  cancelAnimationFrame(raf);
}

function headerOffset(): number {
  const h = document.querySelector("header");
  return (h instanceof HTMLElement ? h.offsetHeight : 80) + 12;
}

function scrollToY(targetY: number): void {
  stop();
  const maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  targetY = Math.max(0, Math.min(maxY, targetY));
  const startY = window.pageYOffset;
  const dist = Math.abs(targetY - startY);
  if (dist < 2) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo(0, targetY);
    return;
  }
  const duration = Math.max(1200, Math.min(2600, 1100 + dist * 0.35));
  let t0: number | null = null;
  active = true;
  const step = (now: number): void => {
    if (!active) return;
    if (t0 === null) t0 = now;
    const p = Math.min(1, (now - t0) / duration);
    window.scrollTo(0, startY + (targetY - startY) * easeScroll(p));
    if (p < 1) {
      raf = requestAnimationFrame(step);
    } else {
      active = false;
    }
  };
  raf = requestAnimationFrame(step);
}

/** Intercepta todos los enlaces `#seccion` de la página. Devuelve cleanup. */
export function initSmoothScroll(): () => void {
  const onClick = (ev: MouseEvent): void => {
    const t = ev.target as HTMLElement | null;
    const link = t?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
    if (!link) return;
    const hash = link.getAttribute("href");
    if (!hash || hash === "#") return;
    const id = hash.slice(1);
    let y: number;
    if (id === "top") {
      y = 0;
    } else {
      const target = document.getElementById(id);
      if (!target) return;
      y = target.getBoundingClientRect().top + window.pageYOffset - headerOffset();
    }
    ev.preventDefault();
    scrollToY(y);
    if (history.replaceState) history.replaceState(null, "", hash);
  };
  const cancel = (): void => stop();
  const onKey = (e: KeyboardEvent): void => {
    if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(e.key)) stop();
  };
  document.addEventListener("click", onClick);
  window.addEventListener("wheel", cancel, { passive: true });
  window.addEventListener("touchstart", cancel, { passive: true });
  window.addEventListener("mousedown", cancel);
  document.addEventListener("keydown", onKey);
  return () => {
    document.removeEventListener("click", onClick);
    window.removeEventListener("wheel", cancel);
    window.removeEventListener("touchstart", cancel);
    window.removeEventListener("mousedown", cancel);
    document.removeEventListener("keydown", onKey);
  };
}
