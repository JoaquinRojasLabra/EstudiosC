import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useEffect, useState } from "react";
import { navLinks, PHONE, PHONE_HREF } from "../data";
import logoH from "../assets/logo-h-512.png";
import { cn } from "../utils/cn";
import { Button, ease } from "./ui";

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(latest > prev && latest > 320);
    setScrolled(latest > 40);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden && !open ? -110 : 0, opacity: 1 }}
        transition={{ duration: 0.7, ease, delay: hidden ? 0 : 0 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-500",
          scrolled && !open
            ? "border-b border-ivory/10 bg-ink/70 backdrop-blur-xl"
            : "border-b border-transparent",
        )}
      >
        <div className="container-x flex h-20 items-center justify-between">
          <a href="#top" className="group flex items-center" aria-label="Estudio SC, inicio">
            {/* Logo real del estudio (variante horizontal). La tinta del logo es
                oscura sobre transparente: se invierte para el fondo oscuro del nav. */}
            <img
              src={logoH}
              alt="Estudio SC"
              width={512}
              height={164}
              className="h-10 w-auto max-w-[190px] object-contain object-left [filter:invert(1)_sepia(.06)_brightness(1.06)]"
            />
          </a>

          {/* Solo la hamburguesa: el teléfono vive en el menú y en Contacto. */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[6px]"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block h-px w-7 bg-ivory"
            />
            <motion.span
              animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="block h-px w-7 bg-ivory"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block h-px w-7 bg-ivory"
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ clipPath: "circle(0% at 92% 4%)" }}
            animate={{ clipPath: "circle(150% at 92% 4%)" }}
            exit={{ clipPath: "circle(0% at 92% 4%)" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-navy px-8"
          >
            <div className="grid-lines pointer-events-none absolute inset-0" />
            <nav className="relative flex flex-col gap-2" aria-label="Móvil">
              {navLinks.map((l, i) => (
                <div key={l.href} className="overflow-hidden">
                  <motion.a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ y: "110%" }}
                    animate={{ y: 0, transition: { delay: 0.35 + i * 0.07, duration: 0.8, ease } }}
                    exit={{ y: "110%", transition: { duration: 0.3 } }}
                    className="flex items-baseline gap-4 py-2 font-serif text-4xl text-ivory"
                  >
                    <span className="font-sans text-xs text-gold">0{i + 1}</span>
                    {l.label}
                  </motion.a>
                </div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.9, duration: 0.8, ease } }}
              exit={{ opacity: 0 }}
              className="relative mt-12 flex flex-col items-start gap-6"
            >
              <Button href="#contacto" onClick={() => setOpen(false)}>
                Agendar consulta
              </Button>
              <a href={PHONE_HREF} className="text-sm tracking-[0.15em] text-ivory/70">
                {PHONE}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
