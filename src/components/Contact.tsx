import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent, type ReactNode } from "react";
import { EMAIL, PHONE, PHONE_HREF, reasons } from "../data";
import { cn } from "../utils/cn";
import { Button, Eyebrow, Reveal, SplitWords, ease, toast } from "./ui";

type Status = "idle" | "sending" | "success" | "error";

type Form = {
  nombre: string;
  correo: string;
  telefono: string;
  motivo: string;
  caso: string;
  consent: boolean;
};

const empty: Form = { nombre: "", correo: "", telefono: "", motivo: "", caso: "", consent: false };

/**
 * Punto único de integración (producción = GoDaddy + PHP, NO Vercel).
 * Reemplazar por: POST JSON a /api/contacto.php con
 * { nombre, email, telefono, motivo, mensaje, consent, website? }.
 * Respuestas: 200 {ok:true} | 400 {ok:false,errores:{campo:"..."}} | 429/500.
 * OJO: el validador PHP acepta "Consultoria corporativa" SIN tilde y exige
 * consent=true; alinear antes de conectar (ver public_html/api/lib/contacto.php).
 * Debe lanzar un error si falla.
 */
async function sendInquiry(_data: Form): Promise<void> {
  void _data;
  await new Promise((r) => setTimeout(r, 1500));
  if (typeof navigator !== "undefined" && navigator.onLine === false) {
    throw new Error("offline");
  }
}

const fieldBase =
  "peer w-full border-0 border-b border-ivory/20 bg-transparent px-0 pt-6 pb-2 text-base text-ivory outline-none transition-colors placeholder-transparent focus:border-transparent";
const labelBase =
  "pointer-events-none absolute top-6 left-0 origin-left text-ivory/50 transition-all duration-300 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gold peer-not-placeholder-shown:-translate-y-6 peer-not-placeholder-shown:scale-75";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="relative">
        {children}
        <label className={labelBase}>{label}</label>
        <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-500 peer-focus:scale-x-100" />
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="pt-2 text-xs text-rose-300"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function InfoRow({ label, children, i }: { label: string; children: ReactNode; i: number }) {
  return (
    <Reveal delay={0.1 + i * 0.12}>
      <div className="group border-t border-ivory/12 py-6">
        <div className="text-[11px] tracking-[0.28em] text-gold uppercase">{label}</div>
        <div className="mt-3 font-serif text-2xl text-ivory transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">
          {children}
        </div>
      </div>
    </Reveal>
  );
}

export default function Contact() {
  const [form, setForm] = useState<Form>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = <K extends keyof Form>(k: K, v: Form[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof Form, string>> = {};
    if (form.nombre.trim().length < 2) e.nombre = "Ingrese su nombre.";
    if (!/^\S+@\S+\.\S+$/.test(form.correo)) e.correo = "Ingrese un correo electrónico válido.";
    if (!form.motivo) e.motivo = "Seleccione un motivo.";
    if (form.caso.trim().length < 10) e.caso = "Cuéntenos brevemente su caso.";
    if (!form.consent) e.consent = "Debe autorizar el tratamiento de sus datos.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      await sendInquiry(form);
      setStatus("success");
      setForm(empty);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="relative overflow-hidden bg-navy py-28 lg:py-40">
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-gold/5 blur-3xl" />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" />
      <div className="container-x relative grid gap-20 lg:grid-cols-12">
        {/* Columna info */}
        <div className="lg:col-span-5">
          <Eyebrow>Contacto</Eyebrow>
          <h2 className="mt-8 font-serif text-5xl leading-[1.02] text-ivory md:text-6xl lg:text-7xl">
            <SplitWords text="Conversemos sobre su caso" accentFrom={2} />
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md leading-relaxed text-ivory/65">
              Escríbanos o llame directamente a cualquiera de nuestros abogados.
              Respondemos personalmente cada consulta.
            </p>
          </Reveal>

          <div className="mt-14">
            <InfoRow label="Correo" i={1}>
              <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-gold">
                {EMAIL}
              </a>
              <sup className="ml-1 text-gold">*</sup>
            </InfoRow>
            <InfoRow label="Teléfono" i={2}>
              <a href={PHONE_HREF} className="transition-colors hover:text-gold">
                {PHONE}
              </a>
              <sup className="ml-1 text-gold">*</sup>
            </InfoRow>
            <div className="border-t border-ivory/12" />
            <p className="mt-4 text-xs italic text-ivory/40">
              * Datos provisorios, pendientes de confirmación del estudio.
            </p>
          </div>
        </div>

        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease }}
          className="relative border border-ivory/12 bg-ink/60 p-7 backdrop-blur-sm sm:p-10 lg:col-span-7"
        >
          <span className="absolute -top-px -left-px h-10 w-10 border-t border-l border-gold" />
          <span className="absolute -right-px -bottom-px h-10 w-10 border-r border-b border-gold" />

          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="ok"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease }}
                className="flex min-h-[28rem] flex-col items-center justify-center text-center"
                role="status"
              >
                <svg viewBox="0 0 80 80" className="h-24 w-24">
                  <motion.circle
                    cx="40"
                    cy="40"
                    r="36"
                    fill="none"
                    stroke="#c8a96b"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M24 41l11 11 21-23"
                    fill="none"
                    stroke="#c8a96b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
                  />
                </svg>
                <p className="mt-8 max-w-md font-serif text-2xl leading-snug text-ivory md:text-3xl">
                  Gracias. Recibimos su consulta y le responderemos personalmente dentro de las
                  próximas 24 horas.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-[11px] tracking-[0.25em] text-gold uppercase underline-offset-8 hover:underline"
                >
                  Enviar otra consulta
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={submit}
                noValidate
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-serif text-3xl text-ivory md:text-4xl">
                  Escríbanos su consulta
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-ivory/55">
                  Recibimos su mensaje directamente en el estudio. No usamos formularios que abren
                  el correo del visitante.
                </p>

                <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                  <Field label="Nombre" error={errors.nombre}>
                    <input
                      className={fieldBase}
                      placeholder=" "
                      value={form.nombre}
                      autoComplete="name"
                      onChange={(e) => set("nombre", e.target.value)}
                    />
                  </Field>
                  <Field label="Correo electrónico" error={errors.correo}>
                    <input
                      type="email"
                      className={fieldBase}
                      placeholder=" "
                      value={form.correo}
                      autoComplete="email"
                      onChange={(e) => set("correo", e.target.value)}
                    />
                  </Field>
                  <Field label="Teléfono (opcional)">
                    <input
                      type="tel"
                      className={fieldBase}
                      placeholder=" "
                      value={form.telefono}
                      autoComplete="tel"
                      onChange={(e) => set("telefono", e.target.value)}
                    />
                  </Field>
                  <Field label="Motivo de la consulta" error={errors.motivo}>
                    <select
                      className={cn(fieldBase, "cursor-pointer appearance-none")}
                      value={form.motivo}
                      onChange={(e) => set("motivo", e.target.value)}
                    >
                      <option value="" className="bg-ink" />
                      {reasons.map((r) => (
                        <option key={r} value={r} className="bg-ink text-ivory">
                          {r}
                        </option>
                      ))}
                    </select>
                    <svg
                      viewBox="0 0 24 24"
                      className="pointer-events-none absolute right-0 bottom-3 h-4 w-4 text-gold"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Field>
                  <div className="sm:col-span-2">
                    <Field label="Cuéntenos su caso" error={errors.caso}>
                      <textarea
                        rows={4}
                        className={cn(fieldBase, "resize-none")}
                        placeholder=" "
                        value={form.caso}
                        onChange={(e) => set("caso", e.target.value)}
                      />
                    </Field>
                  </div>
                </div>

                <div className="mt-7">
                  <label className="group flex cursor-pointer items-start gap-4 text-sm leading-relaxed text-ivory/65">
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      checked={form.consent}
                      onChange={(e) => set("consent", e.target.checked)}
                    />
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-ivory/30 transition-all duration-300 group-hover:border-gold peer-checked:border-gold peer-checked:bg-gold peer-focus-visible:ring-2 peer-focus-visible:ring-gold/50 [&>svg]:peer-checked:opacity-100">
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-ink opacity-0 transition-opacity" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 12l5 5 9-10" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>
                      Autorizo el tratamiento de mis datos para responder esta consulta, conforme a
                      la{" "}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          toast("La Política de privacidad estará disponible próximamente.");
                        }}
                        className="text-gold underline underline-offset-4"
                      >
                        Política de privacidad
                      </button>
                      .
                    </span>
                  </label>
                  {errors.consent && <p className="pt-2 text-xs text-rose-300">{errors.consent}</p>}
                </div>

                <AnimatePresence>
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      role="alert"
                      className="mt-6 overflow-hidden border border-rose-400/40 bg-rose-500/10 px-5 py-4 text-sm leading-relaxed text-rose-200"
                    >
                      No pudimos enviar su mensaje. Por favor escríbanos directamente a{" "}
                      {EMAIL} o llámenos al {PHONE}.
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-8">
                  <Button type="submit" disabled={status === "sending"} arrow={status !== "sending"}>
                    {status === "sending" ? (
                      <span className="flex items-center gap-3">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink/30 border-t-ink" />
                        Enviando…
                      </span>
                    ) : (
                      "Enviar consulta"
                    )}
                  </Button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
