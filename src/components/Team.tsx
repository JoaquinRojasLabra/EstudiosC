import { motion } from "framer-motion";
import { team } from "../data";
import { Eyebrow, SplitWords, ease } from "./ui";

export default function Team() {
  return (
    <section id="equipo" className="relative overflow-hidden bg-paper py-28 text-ink lg:py-40">
      <div className="container-x relative">
        <Eyebrow dark>Equipo</Eyebrow>
        <h2 className="mt-8 font-serif text-5xl leading-[1.02] md:text-6xl lg:text-7xl">
          <SplitWords text="Nuestro equipo" accentFrom={1} />
        </h2>

        <div className="mt-20 grid gap-14 lg:grid-cols-2 lg:gap-10">
          {team.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, delay: i * 0.2, ease }}
              className="group"
            >
              {/* Panel retrato con foto real */}
              <div className="relative aspect-[5/4] overflow-hidden bg-navy sm:aspect-[16/10]">
                <motion.div
                  initial={{ scaleY: 1 }}
                  whileInView={{ scaleY: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1.2, delay: 0.3 + i * 0.2, ease: [0.76, 0, 0.24, 1] }}
                  className="absolute inset-0 z-20 origin-top bg-paper"
                />
                <img
                  src={m.photo}
                  alt={`Retrato de ${m.name}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/85 to-transparent" />
                <span className="absolute bottom-5 left-6 text-[10px] tracking-[0.3em] text-ivory/50 uppercase">
                  {m.role}
                </span>
                <span className="absolute top-5 right-6 h-8 w-8 border-t border-r border-gold/50 transition-all duration-700 group-hover:h-14 group-hover:w-14" />
                <span className="absolute bottom-5 right-6 h-8 w-8 border-b border-r border-gold/50 transition-all duration-700 group-hover:h-14 group-hover:w-14" />
              </div>

              <div className="pt-9">
                <div className="flex items-baseline justify-between gap-4 border-b border-ink/15 pb-5">
                  <h3 className="font-serif text-3xl leading-tight md:text-4xl">{m.name}</h3>
                  <span className="shrink-0 text-[11px] tracking-[0.28em] text-[#8a6d35] uppercase">
                    {m.role}
                  </span>
                </div>
                <p className="mt-6 leading-relaxed text-ink/70">{m.bio}</p>
                <div className="mt-7 flex flex-col gap-3 text-sm sm:flex-row sm:gap-10">
                  <a
                    href={m.phoneHref}
                    className="group/l relative w-fit tracking-wide text-ink transition-colors hover:text-[#8a6d35]"
                  >
                    {m.phone}
                    <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[#8a6d35] transition-transform duration-500 group-hover/l:scale-x-100" />
                  </a>
                  <a
                    href={`mailto:${m.email}`}
                    className="group/l relative w-fit tracking-wide text-ink transition-colors hover:text-[#8a6d35]"
                  >
                    {m.email}
                    <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[#8a6d35] transition-transform duration-500 group-hover/l:scale-x-100" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
