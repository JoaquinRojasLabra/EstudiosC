import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Criteria from "./components/Criteria";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Legal, { type PaginaLegal } from "./components/Legal";
import Nav from "./components/Nav";
import Practice from "./components/Practice";
import Preloader from "./components/Preloader";
import Process from "./components/Process";
import Team from "./components/Team";
import { Arrow } from "./components/ui";
import { marqueeItems } from "./data";
import { initSmoothScroll } from "./utils/smoothScroll";

function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div className="relative overflow-hidden border-y border-ivory/10 bg-ink py-6" aria-hidden>
      <div className="marquee-track flex w-max">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {row.map((t, i) => (
              <span key={i} className="flex items-center">
                <span className="px-8 font-serif text-3xl text-ivory/70 italic md:text-4xl">{t}</span>
                <span className="text-gold">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
    </div>
  );
}

function Toast() {
  const [msg, setMsg] = useState<string | null>(null);
  useEffect(() => {
    let t: number;
    const h = (e: Event) => {
      setMsg((e as CustomEvent<string>).detail);
      window.clearTimeout(t);
      t = window.setTimeout(() => setMsg(null), 3500);
    };
    window.addEventListener("sc-toast", h);
    return () => {
      window.removeEventListener("sc-toast", h);
      window.clearTimeout(t);
    };
  }, []);
  return (
    <AnimatePresence>
      {msg && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20 }}
          role="status"
          className="fixed bottom-6 left-1/2 z-[90] -translate-x-1/2 border border-gold/40 bg-navy px-6 py-4 text-sm text-ivory shadow-2xl"
        >
          {msg}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const h = () => setShow(window.scrollY > 900);
    h();
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#top"
          aria-label="Volver arriba"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          whileHover={{ y: -4 }}
          className="fixed right-5 bottom-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 bg-ink/80 text-gold backdrop-blur transition-colors hover:bg-gold hover:text-ink"
        >
          <Arrow className="-rotate-90" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

const PAGINAS_LEGALES: PaginaLegal[] = ["privacidad", "terminos", "mapa"];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [ruta, setRuta] = useState(() => window.location.hash.replace("#", ""));
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 2000);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => initSmoothScroll(), []);

  // Routing por hash: #privacidad, #terminos y #mapa muestran páginas
  // legales; cualquier otro hash con sección existente hace scroll a ella
  // (cubre los enlaces del mapa y el "volver" cuando el main se monta).
  useEffect(() => {
    const leer = () => setRuta(window.location.hash.replace("#", ""));
    leer();
    window.addEventListener("hashchange", leer);
    return () => window.removeEventListener("hashchange", leer);
  }, []);

  useEffect(() => {
    if ((PAGINAS_LEGALES as string[]).includes(ruta)) {
      document.title = "Estudio SC | Abogados en Santiago, Chile";
      window.scrollTo(0, 0);
      return;
    }
    if (ruta === "" || ruta === "top") {
      window.scrollTo(0, 0);
      return;
    }
    const el = document.getElementById(ruta);
    if (el) {
      const header = document.querySelector("header");
      const off = (header instanceof HTMLElement ? header.offsetHeight : 80) + 12;
      window.scrollTo(0, el.getBoundingClientRect().top + window.pageYOffset - off);
    }
  }, [ruta, loading]);

  if (!loading && (PAGINAS_LEGALES as string[]).includes(ruta)) {
    return (
      <>
        <Legal cual={ruta as PaginaLegal} />
        <Toast />
      </>
    );
  }

  return (
    <>
      <AnimatePresence>{loading && <Preloader key="pre" />}</AnimatePresence>

      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-gold to-gold-light"
      />

      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Criteria />
        <Practice />
        <Process />
        <Team />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Toast />
    </>
  );
}
