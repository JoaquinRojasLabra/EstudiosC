import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";

export const ease = [0.22, 1, 0.36, 1] as const;

export function toast(message: string) {
  window.dispatchEvent(new CustomEvent("sc-toast", { detail: message }));
}

/* ---------- Reveal ---------- */
export function Reveal({
  children,
  delay = 0,
  y = 40,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Masked word reveal ---------- */
export function SplitWords({
  text,
  className,
  delay = 0,
  accentFrom,
  immediate = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  accentFrom?: number;
  immediate?: boolean;
}) {
  const words = text.split(" ");
  return (
    <span className={cn("block", className)} aria-label={text}>
      {words.map((w, i) => (
        <span
          key={i}
          aria-hidden
          className="mr-[0.24em] -mb-[0.14em] inline-block overflow-hidden pr-[0.04em] pb-[0.14em] align-bottom"
        >
          <motion.span
            className={cn(
              "inline-block",
              accentFrom !== undefined && i >= accentFrom && "text-gold-grad italic",
            )}
            initial={{ y: "115%", rotate: 4 }}
            animate={immediate ? { y: 0, rotate: 0 } : undefined}
            whileInView={immediate ? undefined : { y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.1, delay: delay + i * 0.08, ease }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ---------- Eyebrow ---------- */
export function Eyebrow({
  children,
  dark = false,
  className,
  immediate = false,
  delay = 0,
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
  immediate?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      className={cn("flex items-center gap-4", className)}
      initial="hidden"
      animate={immediate ? "show" : undefined}
      whileInView={immediate ? undefined : "show"}
      viewport={{ once: true, margin: "-60px" }}
    >
      <motion.span
        variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1 } }}
        transition={{ duration: 1, delay, ease }}
        className={cn("block h-px w-12 origin-left", dark ? "bg-[#8a6d35]" : "bg-gold")}
      />
      <motion.span
        variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.9, delay: delay + 0.2, ease }}
        className={cn(
          "text-[11px] font-medium tracking-[0.28em] uppercase",
          dark ? "text-[#8a6d35]" : "text-gold",
        )}
      >
        {children}
      </motion.span>
    </motion.div>
  );
}

/* ---------- Counter ---------- */
export function Counter({
  to,
  suffix = "",
  delay = 0,
}: {
  to: number;
  suffix?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, {
      duration: 2.2,
      delay,
      ease: "easeOut",
      onUpdate: (l) => setV(Math.round(l)),
    });
    return () => c.stop();
  }, [inView, to, delay]);
  return (
    <span ref={ref}>
      {v}
      {suffix}
    </span>
  );
}

/* ---------- Magnetic wrapper ---------- */
export function Magnetic({
  children,
  strength = 0.25,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 });
  const move = (e: MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - r.left - r.width / 2) * strength);
    y.set((e.clientY - r.top - r.height / 2) * strength);
  };
  const leave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      style={{ x: sx, y: sy }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Arrow ---------- */
export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={cn("h-4 w-4", className)}
      aria-hidden
    >
      <path d="M4 12h16M14 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---------- Button ---------- */
type BtnProps = {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "outline";
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  arrow?: boolean;
};

export function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className,
  type = "button",
  disabled,
  arrow = true,
}: BtnProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-8 py-4 text-[12px] font-medium tracking-[0.2em] uppercase transition-colors duration-500 disabled:cursor-not-allowed disabled:opacity-60";
  const styles = {
    primary: "bg-gold text-ink hover:text-ink",
    ghost: "border border-ivory/25 text-ivory hover:border-gold hover:text-ink",
    outline: "border border-gold/60 text-gold hover:text-ink",
  }[variant];
  const sweep = variant === "primary" ? "bg-ivory" : "bg-gold";

  const inner = (
    <>
      <span
        className={cn(
          "absolute inset-0 translate-y-full rounded-[inherit] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0",
          sweep,
        )}
      />
      <span className="relative z-10">{children}</span>
      {arrow && (
        <Arrow className="relative z-10 transition-transform duration-500 group-hover:translate-x-1.5" />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={cn(base, styles, className)}>
        {inner}
      </a>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(base, styles, className)}
    >
      {inner}
    </button>
  );
}

/* ---------- Spotlight card ---------- */
export function SpotlightCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r || !ref.current) return;
    ref.current.style.setProperty("--x", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <div
      ref={ref}
      onMouseMove={move}
      className={cn("group relative overflow-hidden", className)}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--x,50%) var(--y,50%), rgba(200,169,107,0.16), transparent 60%)",
        }}
      />
      {children}
    </div>
  );
}
