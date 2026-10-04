import { motion } from "framer-motion";
import { ease } from "./ui";

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <div className="relative flex h-28 w-28 items-center justify-center">
          <motion.svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
            <motion.circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="#c8a96b"
              strokeWidth="0.6"
              initial={{ pathLength: 0, rotate: -90 }}
              animate={{ pathLength: 1 }}
              style={{ transformOrigin: "50% 50%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </motion.svg>
          <div className="flex overflow-hidden font-serif text-5xl text-ivory">
            {["S", "C"].map((l, i) => (
              <motion.span
                key={l}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 + i * 0.15, ease }}
                className="inline-block"
              >
                {l}
              </motion.span>
            ))}
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.45em" }}
          transition={{ duration: 1.4, delay: 0.5, ease }}
          className="mt-8 text-[10px] uppercase text-gold"
        >
          Estudio jurídico
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
