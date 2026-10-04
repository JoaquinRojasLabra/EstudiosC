import { motion } from "framer-motion";
import { areas } from "../data";
import { Arrow, Eyebrow, Reveal, SplitWords, ease } from "./ui";

export default function Practice() {
  return (
    <section id="areas" className="relative overflow-hidden bg-navy py-28 lg:py-40">
      <div className="pointer-events-none absolute top-1/3 -left-40 h-[500px] w-[500px] rounded-full bg-gold/5 blur-3xl" />
      <div className="container-x relative grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Eyebrow>Áreas de práctica</Eyebrow>
            <h2 className="mt-8 font-serif text-5xl leading-[1.02] text-ivory md:text-6xl lg:text-7xl">
              <SplitWords text="Dónde intervenimos" accentFrom={1} />
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-sm leading-relaxed text-ivory/65">
                Si su caso no aparece aquí, escríbanos igual. La primera consulta sirve para
                determinar si podemos ayudar.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-8">
          {areas.map((a) => (
            <motion.a
              href="#contacto"
              key={a.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: 0.05, ease }}
              className="group relative block border-t border-ivory/12 py-8 transition-colors duration-500 last:border-b hover:bg-gradient-to-r hover:from-gold/[0.07] hover:to-transparent md:py-10"
            >
              <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
              <div className="flex items-start gap-5 md:gap-10 md:px-4">
                <span className="w-10 pt-2 font-serif text-xl text-gold/55 transition-colors duration-500 group-hover:text-gold md:text-2xl">
                  {a.n}
                </span>
                <div className="flex-1 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-3">
                  <h3 className="font-serif text-2xl leading-tight text-ivory md:text-4xl">
                    {a.title}
                  </h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-ivory/55 transition-colors duration-500 group-hover:text-ivory/80">
                    {a.text}
                  </p>
                </div>
                <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ivory/20 text-ivory/60 transition-all duration-500 group-hover:-rotate-45 group-hover:border-gold group-hover:bg-gold group-hover:text-ink sm:flex">
                  <Arrow />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
