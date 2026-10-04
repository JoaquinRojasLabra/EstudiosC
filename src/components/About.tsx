import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import { pillars } from "../data";
import { Eyebrow, Reveal, SpotlightCard, SplitWords, ease } from "./ui";

const QUOTE =
  "La cercanía con el cliente no es un lema: es conocer cada asunto a fondo y responder por él.";

function Word({
  word,
  range,
  progress,
}: {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {word}
    </motion.span>
  );
}

function ScrubQuote() {
  const ref = useRef<HTMLQuoteElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.55"],
  });
  const words = QUOTE.split(" ");
  return (
    <blockquote ref={ref} className="relative">
      <span
        aria-hidden
        className="absolute -top-10 -left-2 font-serif text-[9rem] leading-none text-gold/25 md:-top-14 md:-left-8 md:text-[13rem]"
      >
        “
      </span>
      <p className="relative font-serif text-3xl leading-[1.2] text-ivory md:text-5xl lg:text-6xl" aria-label={QUOTE}>
        {words.map((w, i) => {
          const start = i / words.length;
          const end = Math.min(start + 1.6 / words.length, 1);
          return <Word key={i} word={w} range={[start, end]} progress={scrollYProgress} />;
        })}
      </p>
    </blockquote>
  );
}

export default function About() {
  return (
    <section id="nosotros" className="relative overflow-hidden bg-ink py-28 lg:py-40">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-gold/5 blur-3xl" />

      <div className="container-x relative">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Eyebrow>Nosotros</Eyebrow>
            <h2 className="mt-8 font-serif text-5xl leading-[1.02] text-ivory md:text-6xl lg:text-7xl">
              <SplitWords text="Rigor jurídico, atención personal" accentFrom={2} />
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-ivory/70 md:text-lg lg:col-span-5 lg:col-start-8 lg:pt-6">
            <Reveal delay={0.1}>
              <p>
                Somos un estudio jurídico orientado a empresas y organizaciones que requieren
                respuestas oportunas, criterio jurídico y seguimiento real de sus asuntos. Cada
                encargo se aborda según el negocio, el riesgo y el objetivo del cliente.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Cada asunto es conducido directamente por sus abogados, sin rotación de
                equipo ni delegación de la conducción procesal.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-28 lg:mt-36 lg:pl-16">
          <ScrubQuote />
        </div>

        <div className="mt-28 grid gap-px overflow-hidden rounded-sm border border-ivory/10 bg-ivory/10 lg:mt-36 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: i * 0.15, ease }}
              className="bg-ink"
            >
              <SpotlightCard className="h-full p-9 lg:p-12">
                <div className="flex items-start justify-between">
                  <span className="font-serif text-6xl text-gold/80 transition-transform duration-700 group-hover:-translate-y-1">
                    {p.n}
                  </span>
                  <span className="mt-4 h-px w-10 bg-gold/50 transition-all duration-700 group-hover:w-20" />
                </div>
                <h3 className="mt-10 font-serif text-3xl leading-tight text-ivory">{p.title}</h3>
                <p className="mt-5 leading-relaxed text-ivory/60">{p.text}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
