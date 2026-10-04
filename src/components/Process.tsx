import { motion } from "framer-motion";
import { steps } from "../data";
import { Eyebrow, SplitWords, ease } from "./ui";

export default function Process() {
  return (
    <section id="trabajamos" className="relative overflow-hidden bg-ink py-28 lg:py-40">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-70" />
      <div className="container-x relative">
        <Eyebrow>Cómo trabajamos</Eyebrow>
        <h2 className="mt-8 max-w-4xl font-serif text-5xl leading-[1.02] text-ivory md:text-6xl lg:text-7xl">
          <SplitWords text="Un estándar simple, sostenido en el tiempo" accentFrom={4} />
        </h2>

        <div className="relative mt-24 grid gap-14 lg:grid-cols-4 lg:gap-8">
          {/* línea vertical móvil */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease }}
            className="absolute top-2 bottom-2 left-[5px] w-px origin-top bg-gradient-to-b from-gold via-gold/40 to-transparent lg:hidden"
          />
          {/* línea horizontal desktop */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease }}
            className="absolute top-[5px] right-0 left-0 hidden h-px origin-left bg-gradient-to-r from-gold via-gold/40 to-transparent lg:block"
          />

          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, delay: 0.2 + i * 0.18, ease }}
              className="group relative pl-10 lg:pt-12 lg:pl-0"
            >
              <span className="absolute top-1 left-0 lg:top-0">
                <span className="pulse-ring absolute inset-0 rounded-full bg-gold/60" style={{ animationDelay: `${i * 0.5}s` }} />
                <span className="relative block h-[11px] w-[11px] rounded-full bg-gold" />
              </span>
              <div className="outline-num font-serif text-7xl leading-none transition-all duration-700 group-hover:-translate-y-2 group-hover:[-webkit-text-stroke:1px_#c8a96b] lg:text-8xl">
                {s.n}
              </div>
              <h3 className="mt-6 font-serif text-3xl text-ivory">{s.title}</h3>
              <p className="mt-4 leading-relaxed text-ivory/60">{s.text}</p>
              <span className="mt-6 block h-px w-10 bg-gold/50 transition-all duration-700 group-hover:w-24 group-hover:bg-gold" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
