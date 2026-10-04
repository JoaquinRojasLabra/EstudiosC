import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useMemo, useRef, type MouseEvent } from "react";
import heroImg from "../assets/hero.jpg";
import { metrics } from "../data";
import { Button, Counter, Eyebrow, SplitWords, ease } from "./ui";

const D = 1.9; // delay base (after preloader)

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const mx = useMotionValue(400);
  const my = useMotionValue(300);
  const spot = useMotionTemplate`radial-gradient(520px circle at ${mx}px ${my}px, rgba(200,169,107,0.13), transparent 62%)`;
  const onMove = (e: MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  const particles = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        left: (Math.sin(i * 12.9898) * 43758.5453) % 1,
        top: (Math.sin(i * 78.233) * 12345.678) % 1,
        size: 1 + (i % 3),
        dur: 9 + (i % 7) * 2,
        delay: (i % 5) * 0.8,
      })),
    [],
  );

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMove}
      className="grain relative flex min-h-[100svh] flex-col overflow-hidden bg-ink"
    >
      {/* Imagen */}
      <motion.div style={{ y: imgY }} className="absolute inset-y-0 right-0 w-full lg:w-[64%]">
        <motion.img
          src={heroImg}
          alt="Despacho del estudio, con biblioteca jurídica y vista a Santiago al atardecer"
          initial={{ scale: 1.25, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 2.8, delay: D - 0.8, ease }}
          className="h-[115%] w-full object-cover object-[50%_40%]"
        />
        <div className="absolute inset-0 bg-ink/55 lg:bg-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent lg:via-ink/30" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/80 to-transparent" />
      </motion.div>

      <motion.div className="pointer-events-none absolute inset-0" style={{ background: spot }} />

      {/* Partículas */}
      <div className="pointer-events-none absolute inset-0">
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-gold/60"
            style={{
              left: `${Math.abs(p.left) * 100}%`,
              top: `${Math.abs(p.top) * 100}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{ y: [0, -70, 0], opacity: [0, 0.8, 0] }}
            transition={{ duration: p.dur, delay: p.delay + D, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Líneas decorativas */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.8, delay: D, ease }}
        className="absolute top-0 left-6 hidden h-full w-px origin-top bg-gradient-to-b from-transparent via-gold/30 to-transparent lg:left-10 xl:block"
      />

      <motion.div
        style={{ y: textY, opacity: fade }}
        className="container-x relative z-10 flex flex-1 flex-col justify-center pt-32 pb-10"
      >
        <Eyebrow immediate delay={D}>
          Asesoría legal · Santiago de Chile
        </Eyebrow>

        <h1 className="mt-8 max-w-4xl font-serif text-[2.9rem] leading-[0.98] font-medium text-ivory sm:text-6xl md:text-7xl lg:text-[5.6rem]">
          <SplitWords text="Criterio jurídico, relaciones de confianza" immediate delay={D + 0.2} accentFrom={2} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: D + 0.9, ease }}
          className="mt-8 max-w-xl text-base leading-relaxed text-ivory/70 md:text-lg"
        >
          Acompañamos a empresas y organizaciones que necesitan criterio jurídico,
          respuesta oportuna y seguimiento real de sus asuntos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: D + 1.1, ease }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button href="#contacto">Agendar consulta</Button>
          <Button href="#areas" variant="ghost">
            Áreas de práctica
          </Button>
        </motion.div>
      </motion.div>

      {/* Métricas */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: D + 1.3, ease }}
        className="container-x relative z-10 pb-10"
      >
        <div className="grid grid-cols-3 border-t border-ivory/15 pt-8 lg:max-w-2xl">
          {metrics.map((m, i) => (
            <div key={m.label} className={i > 0 ? "border-l border-ivory/10 pl-4 sm:pl-8" : ""}>
              <div className="font-serif text-4xl text-gold-grad sm:text-5xl md:text-6xl">
                <Counter to={m.value} suffix={m.suffix} delay={D + 1.4} />
              </div>
              <div className="mt-2 text-[10px] tracking-[0.2em] text-ivory/55 uppercase sm:text-[11px]">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Pie de foto + scroll */}
      <div className="absolute right-6 bottom-28 z-10 hidden origin-bottom-right rotate-90 text-[10px] tracking-[0.3em] text-ivory/40 uppercase lg:right-10 lg:block">
        Foto referencial
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: D + 2 }}
        className="absolute bottom-0 left-1/2 z-10 hidden h-14 w-px -translate-x-1/2 overflow-hidden bg-ivory/10 md:block"
      >
        <span className="scroll-line block h-full w-full bg-gold" />
      </motion.div>
    </section>
  );
}
