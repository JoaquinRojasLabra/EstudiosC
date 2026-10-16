import logoH from "../assets/logo-h-512.png";
import { navLinks } from "../data";
import { Eyebrow } from "./ui";

export type PaginaLegal = "privacidad" | "terminos" | "mapa";

type Seccion = { t: string; ps: string[] };

const PRIVACIDAD: Seccion[] = [
  {
    t: "1. Responsable del tratamiento",
    ps: [
      'Estudio SC es responsable del tratamiento de los datos personales recopilados a través de su sitio web, en el marco de sus actividades de asesoría y representación jurídica.',
      "Para cualquier consulta relacionada con el tratamiento de datos personales o el ejercicio de los derechos de sus titulares, podrá comunicarse al correo electrónico contacto@estudiosc.cl.",
    ],
  },
  {
    t: "2. Datos personales que recopilamos",
    ps: [
      "A través del formulario de contacto de nuestro sitio web, podemos recopilar los siguientes datos:",
      "— Nombre y apellidos. — Correo electrónico. — Número de teléfono, cuando sea proporcionado voluntariamente. — Motivo de la consulta. — Información incluida en el mensaje enviado por el usuario.",
      "Adicionalmente, podrán registrarse datos técnicos básicos asociados al funcionamiento y seguridad del sitio, tales como la dirección IP, fecha y hora de conexión y otros registros técnicos necesarios para prevenir accesos no autorizados o usos indebidos.",
      "Solicitamos a los usuarios proporcionar únicamente la información necesaria para formular su consulta y evitar el envío de documentos o antecedentes especialmente sensibles que no hayan sido solicitados previamente.",
    ],
  },
  {
    t: "3. Finalidades del tratamiento",
    ps: [
      "Los datos personales recopilados serán utilizados para las siguientes finalidades:",
      "— Recibir, gestionar y responder consultas jurídicas. — Comunicarnos con las personas que soliciten información sobre nuestros servicios. — Evaluar la posibilidad de prestar asesoría o representación jurídica. — Gestionar una eventual relación profesional, cuando esta se formalice. — Proteger la seguridad y el correcto funcionamiento del sitio web. — Cumplir las obligaciones legales que correspondan.",
      "Los datos proporcionados mediante el formulario de contacto no serán utilizados para enviar publicidad, promociones ni comunicaciones comerciales masivas, ni serán incorporados a listas de difusión sin una autorización específica.",
    ],
  },
  {
    t: "4. Consentimiento y legitimidad del tratamiento",
    ps: [
      "El tratamiento de los datos personales proporcionados voluntariamente mediante el formulario de contacto se realizará sobre la base de la autorización del titular, conforme a la legislación chilena sobre protección de datos personales.",
      "Al marcar la casilla de aceptación correspondiente y enviar el formulario, el usuario declara haber leído esta Política de Privacidad y autoriza el tratamiento de sus datos para gestionar y responder su consulta.",
      "El consentimiento podrá ser revocado mediante una solicitud enviada a contacto@estudiosc.cl, sin perjuicio de la licitud de los tratamientos efectuados con anterioridad y de aquellos que deban continuar en virtud de una obligación legal u otra causa legítima.",
      "Cuando se formalice una relación profesional, determinados tratamientos podrán resultar necesarios para ejecutar los servicios contratados o cumplir obligaciones legales aplicables.",
    ],
  },
  {
    t: "5. Plazo de conservación de los datos",
    ps: [
      "Los datos personales serán conservados únicamente durante el tiempo necesario para cumplir las finalidades que justificaron su recopilación, de conformidad con la legislación vigente y los principios aplicables en materia de protección de datos personales.",
      "Se aplicarán los siguientes criterios:",
      "a) Consultas que no deriven en una contratación. Los antecedentes proporcionados a través del formulario de contacto se conservarán por un plazo máximo de seis meses desde la última interacción, salvo que exista una obligación legal u otra causa legítima que justifique su conservación durante un período mayor.",
      "b) Relaciones profesionales. Cuando se formalice una relación profesional con Estudio SC, los antecedentes serán conservados durante su vigencia y, como regla general, por un plazo ordinario de cinco años desde su término. Lo anterior se entiende sin perjuicio de los plazos especiales establecidos por la legislación aplicable, la existencia de procedimientos judiciales o administrativos pendientes, o la necesidad de formular, ejercer o defender derechos.",
      "c) Documentación contable y tributaria. La documentación contable y tributaria será conservada durante los períodos exigidos por la normativa aplicable, considerando, cuando corresponda, el plazo de seis años previsto para determinados antecedentes tributarios, sin perjuicio de los plazos legales especiales.",
      "Una vez cumplidos los períodos correspondientes, los datos serán eliminados de forma segura o anonimizados, salvo que exista una obligación legal u otra causa legítima que justifique su conservación.",
    ],
  },
  {
    t: "6. Derechos de los titulares",
    ps: [
      "De conformidad con la Ley N.º 19.628 sobre Protección de la Vida Privada y las demás disposiciones aplicables, los titulares podrán ejercer los derechos que la legislación les reconozca respecto de sus datos personales, incluyendo el acceso, rectificación, cancelación o eliminación y oposición, según corresponda.",
      "Para ejercer estos derechos, el titular podrá enviar una solicitud a contacto@estudiosc.cl, indicando su nombre, el derecho que desea ejercer y los antecedentes necesarios para identificar la información correspondiente.",
      "Estudio SC podrá solicitar antecedentes adicionales razonables cuando sean necesarios para verificar la identidad del solicitante y evitar la entrega o modificación de información a personas no autorizadas.",
      "Las solicitudes serán atendidas dentro de los plazos y condiciones establecidos por la legislación vigente.",
    ],
  },
  {
    t: "7. Comunicación de datos a terceros",
    ps: [
      "Estudio SC no vende, comercializa ni utiliza los datos personales de los usuarios para su cesión con fines publicitarios.",
      "Para el funcionamiento del sitio web, la gestión de comunicaciones y la prestación de servicios profesionales, podrán intervenir proveedores tecnológicos o de servicios que traten información por cuenta de Estudio SC, sujetos a las obligaciones de seguridad y confidencialidad que correspondan.",
      "Asimismo, podrán comunicarse datos personales cuando exista una obligación legal, un requerimiento válido de autoridad competente o una base jurídica que autorice dicha comunicación.",
      "Cuando corresponda, se adoptarán las medidas exigidas por la legislación aplicable para el tratamiento de información mediante proveedores ubicados fuera de Chile.",
    ],
  },
  {
    t: "8. Confidencialidad de las consultas",
    ps: [
      "La información proporcionada a Estudio SC mediante sus canales de contacto será tratada con reserva y utilizada exclusivamente para las finalidades informadas, de conformidad con las obligaciones legales y profesionales aplicables.",
      "El envío de una consulta no implica, por sí solo, la aceptación de un encargo profesional ni el establecimiento de una relación abogado-cliente.",
      "La aceptación de un asunto y las condiciones de la prestación de servicios profesionales deberán ser acordadas expresamente entre las partes.",
      "Se recomienda no remitir información especialmente sensible, documentos confidenciales o antecedentes extensos a través del formulario inicial de contacto, salvo que hayan sido solicitados por Estudio SC.",
    ],
  },
  {
    t: "9. Seguridad de la información",
    ps: [
      "Estudio SC adopta medidas técnicas y organizativas razonables y proporcionales a la naturaleza de los datos tratados, destinadas a proteger la información frente a accesos no autorizados, pérdida, alteración, divulgación o destrucción indebida.",
      "Estas medidas podrán comprender mecanismos de conexión cifrada, controles de acceso, restricciones de permisos y procedimientos de resguardo de la información, según los sistemas efectivamente utilizados.",
      "Sin perjuicio de lo anterior, ningún sistema de transmisión o almacenamiento electrónico permite garantizar una seguridad absoluta.",
    ],
  },
  {
    t: "10. Enlaces y servicios de terceros",
    ps: [
      "El sitio web podrá contener enlaces a plataformas o sitios externos administrados por terceros.",
      "Estudio SC no controla las políticas de privacidad ni las prácticas de tratamiento de datos de dichos sitios, por lo que recomienda revisar sus respectivas condiciones antes de proporcionar información personal.",
    ],
  },
  {
    t: "11. Modificaciones de esta política",
    ps: [
      "Estudio SC podrá modificar esta Política de Privacidad para adaptarla a cambios normativos, tecnológicos u operativos.",
      "Toda modificación será publicada en esta misma página, indicando la fecha de su última actualización.",
      "Cuando una modificación requiera una nueva autorización del titular conforme a la legislación aplicable, esta será solicitada oportunamente.",
    ],
  },
  {
    t: "12. Contacto",
    ps: [
      "Para consultas relacionadas con esta Política de Privacidad o el tratamiento de datos personales, podrá comunicarse a: Estudio SC, Santiago de Chile. Correo electrónico: contacto@estudiosc.cl.",
    ],
  },
];

const TERMINOS: Seccion[] = [
  {
    t: "1. Titularidad del sitio web",
    ps: [
      "El presente sitio web es operado por Estudio SC, estudio jurídico con sede en Santiago de Chile, dedicado a la prestación de servicios de asesoría, representación y defensa jurídica.",
      "El acceso y utilización de este sitio se encuentran sujetos a los presentes Términos de Uso y a la legislación chilena aplicable.",
      "Para consultas relacionadas con el sitio web, podrá comunicarse al correo electrónico contacto@estudiosc.cl.",
    ],
  },
  {
    t: "2. Carácter informativo de los contenidos",
    ps: [
      "Los contenidos publicados en este sitio web tienen fines exclusivamente informativos y de difusión de los servicios profesionales de Estudio SC.",
      "La información disponible no constituye asesoría jurídica personalizada, recomendación profesional para un caso concreto ni una opinión legal emitida respecto de circunstancias particulares.",
      "Cada situación jurídica requiere un análisis específico de sus antecedentes, circunstancias y normativa aplicable.",
      "En consecuencia, el acceso al sitio web, la lectura de sus contenidos o el envío de una consulta no establecen, por sí solos, una relación abogado-cliente.",
      "La prestación de servicios profesionales requerirá la aceptación expresa del encargo por parte de Estudio SC y el acuerdo de las condiciones correspondientes.",
    ],
  },
  {
    t: "3. Uso del formulario de contacto",
    ps: [
      "El formulario de contacto tiene por finalidad facilitar la comunicación inicial entre los usuarios y Estudio SC.",
      "Al utilizarlo, el usuario declara que la información proporcionada es veraz y que cuenta con las autorizaciones necesarias para comunicar los antecedentes que remita.",
      "El usuario deberá abstenerse de utilizar el formulario para enviar información falsa, ilícita, ofensiva o ajena a las finalidades del sitio web.",
      "El envío de una consulta no obliga a Estudio SC a aceptar un encargo profesional ni garantiza una respuesta dentro de un plazo determinado.",
      "Estudio SC podrá abstenerse de asumir asuntos que se encuentren fuera de sus áreas de práctica, respecto de los cuales existan conflictos de interés o cuya atención no resulte profesionalmente procedente.",
      "El formulario de contacto no constituye un canal de atención de urgencias judiciales ni sustituye la comunicación directa con un abogado.",
    ],
  },
  {
    t: "4. Confidencialidad y antecedentes proporcionados",
    ps: [
      "Estudio SC tratará la información recibida mediante sus canales de contacto con la reserva y confidencialidad que correspondan conforme a la legislación y las obligaciones profesionales aplicables.",
      "Sin perjuicio de lo anterior, se recomienda a los usuarios no remitir documentos especialmente sensibles, antecedentes confidenciales extensos o información innecesaria para formular una consulta inicial, salvo que esta haya sido solicitada expresamente.",
      "La recepción de antecedentes no supone la aceptación automática de la representación o defensa del usuario.",
      "Cuando corresponda, Estudio SC podrá requerir información adicional para evaluar la naturaleza de la consulta, la viabilidad de su atención y la eventual existencia de conflictos de interés.",
      "El tratamiento de los datos personales proporcionados se regirá por la Política de Privacidad publicada en este sitio web.",
    ],
  },
  {
    t: "5. Propiedad intelectual",
    ps: [
      "Los textos, elementos gráficos, diseños, signos distintivos, logotipos y demás contenidos originales de este sitio web pertenecen a Estudio SC o a sus respectivos titulares, y se encuentran protegidos por la legislación aplicable en materia de propiedad intelectual e industrial.",
      "El acceso al sitio no concede al usuario derechos de propiedad ni licencias de explotación sobre sus contenidos.",
      "Queda prohibida su reproducción, distribución, modificación o utilización comercial sin la autorización correspondiente, salvo en aquellos casos permitidos por la legislación vigente.",
      "Se permite la consulta y utilización personal de la información publicada, siempre que se respeten los derechos de sus respectivos titulares.",
    ],
  },
  {
    t: "6. Enlaces a sitios externos",
    ps: [
      "El sitio web podrá contener enlaces a páginas, plataformas o recursos administrados por terceros.",
      "Dichos enlaces se proporcionan únicamente para facilitar el acceso a información o servicios que puedan resultar de interés para los usuarios.",
      "Estudio SC no controla el contenido, funcionamiento, disponibilidad ni las políticas de privacidad de los sitios externos, y no asume responsabilidad por sus actuaciones, sin perjuicio de las responsabilidades que legalmente pudieran corresponder.",
      "La inclusión de un enlace no implica necesariamente aprobación, patrocinio o vinculación profesional con su titular.",
    ],
  },
  {
    t: "7. Disponibilidad y funcionamiento del sitio",
    ps: [
      "Estudio SC procurará mantener el sitio web disponible y en condiciones adecuadas de funcionamiento.",
      "No obstante, su acceso podrá verse temporalmente interrumpido por razones de mantenimiento, actualización, fallas técnicas, problemas de conectividad u otras circunstancias.",
      "Estudio SC no garantiza la disponibilidad permanente e ininterrumpida del sitio ni la ausencia absoluta de errores técnicos.",
      "Lo anterior se entiende sin perjuicio de las responsabilidades que correspondan conforme a la legislación aplicable.",
    ],
  },
  {
    t: "8. Limitación de responsabilidad",
    ps: [
      "Estudio SC procurará que los contenidos publicados sean claros, pertinentes y se encuentren razonablemente actualizados.",
      "Sin embargo, la información jurídica puede verse modificada por reformas legales, cambios reglamentarios, criterios administrativos o decisiones jurisprudenciales.",
      "Por esta razón, los contenidos del sitio no deben utilizarse como sustituto de una asesoría jurídica específica.",
      "Estudio SC no será responsable por decisiones adoptadas exclusivamente sobre la base de información general publicada en el sitio, sin una evaluación profesional de las circunstancias particulares, salvo en aquellos casos en que legalmente corresponda atribuirle responsabilidad.",
      "Ninguna disposición de estos Términos de Uso podrá interpretarse como una exclusión o limitación de responsabilidades que no puedan ser válidamente excluidas conforme a la legislación vigente.",
    ],
  },
  {
    t: "9. Protección de datos personales",
    ps: [
      "Los datos personales proporcionados mediante el sitio web serán tratados conforme a la Política de Privacidad de Estudio SC y a la legislación chilena aplicable.",
      "Los usuarios podrán consultar dicha política para conocer las finalidades del tratamiento, los períodos de conservación, las medidas de seguridad y los mecanismos para ejercer sus derechos.",
    ],
  },
  {
    t: "10. Modificaciones de los términos",
    ps: [
      "Estudio SC podrá modificar o actualizar estos Términos de Uso cuando resulte necesario por razones legales, operativas o relacionadas con el funcionamiento del sitio web.",
      "Las modificaciones serán publicadas en esta misma página, indicando la fecha de su última actualización.",
      "La versión vigente será aquella que se encuentre publicada al momento de la utilización del sitio, sin perjuicio de los derechos y obligaciones previamente adquiridos conforme a la legislación aplicable.",
    ],
  },
  {
    t: "11. Legislación aplicable y resolución de controversias",
    ps: [
      "Estos Términos de Uso se interpretarán y regirán conforme a las leyes de la República de Chile.",
      "Las controversias derivadas de su interpretación o aplicación serán conocidas por los tribunales competentes de Santiago de Chile, en cuanto ello resulte legalmente procedente y sin perjuicio de las normas imperativas de competencia que correspondan.",
    ],
  },
  {
    t: "12. Contacto",
    ps: [
      "Para consultas relacionadas con estos Términos de Uso o el funcionamiento del sitio web, podrá comunicarse a: Estudio SC, Santiago de Chile. Correo electrónico: contacto@estudiosc.cl.",
    ],
  },
];

const TITULOS: Record<PaginaLegal, { eyebrow: string; titulo: string }> = {
  privacidad: { eyebrow: "Legal", titulo: "Política de Privacidad" },
  terminos: { eyebrow: "Legal", titulo: "Términos de Uso" },
  mapa: { eyebrow: "Navegación", titulo: "Mapa del sitio" },
};

export default function Legal({ cual }: { cual: PaginaLegal }) {
  const { eyebrow, titulo } = TITULOS[cual];
  const secciones = cual === "privacidad" ? PRIVACIDAD : cual === "terminos" ? TERMINOS : [];

  // Asignación directa al hash (dispara hashchange y App monta el inicio).
  const volver = () => {
    window.location.hash = "#top";
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-ink">
      {/* Mini header */}
      <header className="border-b border-ivory/10 bg-ink/80 backdrop-blur-xl">
        <div className="container-x flex h-20 items-center justify-between">
          {/* Botones, no enlaces: el scroll suave global intercepta los <a href="#top">
              con preventDefault y la página legal nunca se enteraría del cambio. */}
          <button onClick={volver} aria-label="Estudio SC, inicio">
            <img
              src={logoH}
              alt="Estudio SC"
              width={512}
              height={164}
              className="h-10 w-auto max-w-[190px] object-contain object-left [filter:invert(1)_sepia(.06)_brightness(1.06)]"
            />
          </button>
          <button
            onClick={volver}
            className="text-[12px] tracking-[0.16em] text-ivory/70 uppercase transition-colors hover:text-gold"
          >
            ← Volver al inicio
          </button>
        </div>
      </header>

      <main className="container-x max-w-3xl py-20 lg:py-28">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-8 font-serif text-5xl leading-[1.02] text-ivory md:text-6xl">{titulo}</h1>
        <p className="mt-6 text-sm text-ivory/45 italic">Última actualización: octubre de 2026.</p>

        {cual === "mapa" ? (
          <nav className="mt-14 border-t border-ivory/10" aria-label="Mapa del sitio">
            {[...navLinks.map((l) => ({ label: l.label, href: l.href })), { label: "Política de Privacidad", href: "#privacidad" }, { label: "Términos de Uso", href: "#terminos" }].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group flex items-center justify-between border-b border-ivory/10 py-5 transition-colors hover:text-gold"
              >
                <span className="font-serif text-2xl text-ivory transition-transform duration-300 group-hover:translate-x-2">
                  {l.label}
                </span>
                <span className="text-gold">→</span>
              </a>
            ))}
          </nav>
        ) : (
          <div className="mt-14 space-y-12">
            {secciones.map((s) => (
              <section key={s.t}>
                <h2 className="font-serif text-2xl text-gold md:text-3xl">{s.t}</h2>
                <div className="mt-5 space-y-4">
                  {s.ps.map((p, i) => (
                    <p key={i} className="leading-relaxed text-ivory/70">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </main>

      {/* Mini footer */}
      <footer className="border-t border-ivory/10">
        <div className="container-x flex flex-col gap-4 py-10 text-xs leading-relaxed text-ivory/40 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Sepúlveda Castillo Abogados.</p>
          <div className="flex gap-6">
            <a href="#privacidad" className="transition-colors hover:text-gold">
              Política de Privacidad
            </a>
            <a href="#terminos" className="transition-colors hover:text-gold">
              Términos de Uso
            </a>
            <a href="#mapa" className="transition-colors hover:text-gold">
              Mapa del sitio
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
