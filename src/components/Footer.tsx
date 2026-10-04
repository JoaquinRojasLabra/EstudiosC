import { motion } from "framer-motion";
import { navLinks, PHONE, PHONE_HREF, EMAIL } from "../data";
import logoStack from "../assets/logo-512.png";
import { Reveal, ease, toast } from "./ui";

const legal = ["Política de privacidad", "Términos", "Mapa del sitio"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pt-24">
      <div className="container-x relative">
        <div className="grid gap-14 border-b border-ivory/10 pb-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <a href="#top" className="inline-block" aria-label="Estudio SC, inicio">
              {/* Lockup apilado original del estudio. Se invierte igual que en la
                  versión anterior: la tinta oscura desaparecería sobre el fondo. */}
              <img
                src={logoStack}
                alt="Estudio SC"
                width={512}
                height={331}
                loading="lazy"
                className="h-16 w-auto max-w-[200px] object-contain object-left [filter:invert(1)_sepia(.06)_brightness(1.06)]"
              />
            </a>
            <p className="mt-6 max-w-sm leading-relaxed text-ivory/55">
              Estudio jurídico en Santiago de Chile. Asesoría a empresas, litigación civil
              y comercial, seguros y responsabilidad civil.
            </p>
            <div className="mt-6 space-y-1 text-sm text-ivory/70">
              <a href={`mailto:${EMAIL}`} className="block transition-colors hover:text-gold">
                {EMAIL}
              </a>
              <a href={PHONE_HREF} className="block transition-colors hover:text-gold">
                {PHONE}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3 lg:col-start-7">
            <h4 className="text-[11px] tracking-[0.28em] text-gold uppercase">Estudio</h4>
            <ul className="mt-6 space-y-3">
              {navLinks.slice(0, 4).map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-ivory/65 transition-colors hover:text-ivory"
                  >
                    <span className="h-px w-0 bg-gold transition-all duration-500 group-hover:w-5" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-3">
            <h4 className="text-[11px] tracking-[0.28em] text-gold uppercase">Legal</h4>
            <ul className="mt-6 space-y-3">
              {legal.map((l) => (
                <li key={l}>
                  <button
                    onClick={() => toast(`${l}: este documento estará disponible próximamente.`)}
                    className="group inline-flex items-center gap-2 text-left text-ivory/65 transition-colors hover:text-ivory"
                  >
                    <span className="h-px w-0 bg-gold transition-all duration-500 group-hover:w-5" />
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="flex flex-col gap-3 py-8 text-xs leading-relaxed text-ivory/40 md:flex-row md:justify-between">
          <div>
            <p>© 2026 Sepúlveda Castillo Abogados.</p>
            <p className="mt-1">* Datos marcados con asterisco son provisorios, pendientes de confirmación del estudio.</p>
          </div>
          <p className="max-w-xl md:text-right">
            La información de este sitio es de carácter general y no constituye asesoría legal.
          </p>
        </div>
      </div>

      {/* Wordmark */}
      <div className="relative select-none" aria-hidden>
        <div className="flex justify-center overflow-hidden pb-4 font-serif text-[17vw] leading-[0.85] text-gold-grad lg:text-[15vw]">
          {"estudiosc.cl".split("").map((c, i) => (
            <motion.span
              key={i}
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, delay: i * 0.05, ease }}
              className="inline-block opacity-90"
            >
              {c}
            </motion.span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent" />
      </div>
    </footer>
  );
}
