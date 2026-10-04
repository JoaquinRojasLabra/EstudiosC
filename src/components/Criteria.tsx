import { motion } from "framer-motion";
import { criteria } from "../data";
import { Eyebrow, SplitWords, ease } from "./ui";

export default function Criteria() {
  return (
    <section className="relative overflow-hidden bg-ivory py-28 text-ink lg:py-40">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(200,169,107,0.18), transparent 40%), radial-gradient(circle at 90% 90%, rgba(200,169,107,0.14), transparent 40%)",
        }}
      />
      <div className="container-x relative">
        <Eyebrow dark>Cómo entendemos el trabajo</Eyebrow>
        <h2 className="mt-8 max-w-3xl font-serif text-5xl leading-[1.02] md:text-6xl lg:text-7xl">
          <SplitWords text="Tres criterios que no negociamos" accentFrom={3} />
        </h2>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {criteria.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 70, clipPath: "inset(12% 0 0 0)" }}
              whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, delay: i * 0.15, ease }}
              className="group relative min-h-[26rem] cursor-default overflow-hidden border border-ink/15 bg-ivory/60"
            >
              <div className="absolute inset-0 translate-y-full bg-ink transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
              <div className="relative flex h-full min-h-[26rem] flex-col justify-between p-9 transition-colors duration-700 group-hover:text-ivory">
                <div className="flex items-start justify-between">
                  <span className="text-[11px] tracking-[0.28em] text-[#8a6d35] uppercase transition-colors duration-700 group-hover:text-gold">
                    Criterio
                  </span>
                  <span className="outline-num-dark font-serif text-7xl leading-none transition-all duration-700 group-hover:-translate-y-2 group-hover:[-webkit-text-stroke:1px_rgba(200,169,107,0.7)]">
                    0{i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-3xl leading-tight">{c.title}</h3>
                  <p className="mt-5 leading-relaxed text-ink/65 transition-colors duration-700 group-hover:text-ivory/70">
                    {c.text}
                  </p>
                  <span className="mt-8 block h-px w-12 bg-gold transition-all duration-700 group-hover:w-full" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
