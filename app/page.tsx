"use client";

import { useEffect, useState } from "react";

const IMAGE_ROOT = "/images/optimized";
const WHATSAPP = "https://wa.me/17868308741";
type Language = "en" | "es";

const copy = {
  en: {
    nav: ["Training", "Coach", "Results", "Pricing"], navHref: ["#training", "#coach", "#results", "#pricing"], inquire: "Start training",
    location: "Hialeah, Florida", kicker: "Personal training · Small groups · Online coaching", hero1: "Build a body", hero2: "that performs.",
    heroText: "Personalized coaching, real accountability, and a plan built around your goals — in Hialeah or wherever you train.", free: "Book your free session", explore: "Explore training",
    credibility: ["ISSA Certified", "In-person + online", "Built around you"], approachEyebrow: "The B2B standard", approachTitle: "Coaching without the guesswork.",
    approachText: "Your training should match your body, schedule, experience, and goals. Every B2B program starts there — then evolves as you do.",
    modes: [
      { number: "01", title: "One-on-one training", subtitle: "Your goal. Your pace. Your coach.", text: "Work directly with a certified ISSA trainer. Get hands-on coaching, real-time form correction, and a personalized plan that progresses with you.", link: "Ask about 1-on-1", message: "Hi, I'm interested in One-on-One Training." },
      { number: "02", title: "Small group training", subtitle: "Expert coaching. Stronger energy.", text: "Train with a small crew chasing meaningful results. You still get form correction and structured coaching, with the added push of a committed group.", link: "Ask about group training", message: "Hi, I'm interested in Small Group Classes." },
      { number: "03", title: "Online coaching", subtitle: "Your plan, wherever you are.", text: "Get personalized workouts, weekly check-ins, and nutrition guidance built around your lifestyle. Train on your time without losing accountability.", link: "Start online", message: "Hi, I'm interested in the Online Program." },
    ],
    coachEyebrow: "Meet your coach", coachTitle: "Built for real life. Coached for real results.",
    coachP1: "I'm a certified ISSA personal trainer with years of hands-on experience helping people build strength, lose weight, and rebuild confidence in the gym.",
    coachP2: "No generic templates. Whether you're walking into a gym for the first time or chasing a specific number, your program is built around your starting point and where you want to go.", coachCta: "Tell me your goal",
    resultsEyebrow: "Client progress", resultsTitle: "The work shows.", resultsText: "Real progress from people who committed to the plan.",
    pricingEyebrow: "Choose your path", pricingTitle: "Clear options. One standard.",
    plans: [
      { title: "One-on-one", label: "Premium coaching", price: "$55", unit: "/ session", alt: "$660/mo · 3x weekly · paid in full", points: ["Personalized training", "Direct coach supervision", "Accountability at every session"], note: "Gym membership not included", message: "Hi, I'm interested in One-on-One Training." },
      { title: "Small group", label: "Most accessible", price: "$35", unit: "/ session", alt: "$480/mo · 4x weekly · paid in full", points: ["Structured group workouts", "Coaching and form correction", "Motivation and consistency"], note: "Gym membership not included", message: "Hi, I'm interested in Small Group Classes." },
      { title: "Online coaching", label: "Train anywhere", price: "$149", unit: "/ 4 weeks", alt: "$249 for 8 weeks", points: ["Personalized workouts", "Weekly check-ins", "Nutrition guidance"], note: "No gym membership required", message: "Hi, I'm interested in the Online Program." },
    ],
    select: "Choose this option", details: "In-person training takes place at a partner gym in Hialeah. A deposit may be required to reserve your time and is applied toward your package. Please give at least 24 hours' notice to cancel or reschedule.",
    finalEyebrow: "Ready when you are", finalTitle: "Your next level starts with one conversation.", finalText: "Tell me what you're working toward. I'll help you choose the right way to train.",
    finalCta: "Message B2B on WhatsApp", demo: "Demo website created to showcase web design services — not an active training business.",
  },
  es: {
    nav: ["Entrenamiento", "Coach", "Resultados", "Precios"], navHref: ["#training", "#coach", "#results", "#pricing"], inquire: "Comienza a entrenar",
    location: "Hialeah, Florida", kicker: "Entrenamiento personal · Grupos pequeños · Coaching online", hero1: "Construye un cuerpo", hero2: "que rinda más.",
    heroText: "Coaching personalizado, responsabilidad real y un plan creado para tus metas — en Hialeah o donde sea que entrenes.", free: "Reserva tu sesión gratis", explore: "Ver entrenamientos",
    credibility: ["Certificado por ISSA", "Presencial + online", "Creado para ti"], approachEyebrow: "El estándar B2B", approachTitle: "Coaching sin improvisar.",
    approachText: "Tu entrenamiento debe adaptarse a tu cuerpo, horario, experiencia y metas. Cada programa B2B comienza ahí — y evoluciona contigo.",
    modes: [
      { number: "01", title: "Entrenamiento uno a uno", subtitle: "Tu meta. Tu ritmo. Tu coach.", text: "Trabaja directamente con un entrenador certificado por ISSA. Recibe coaching práctico, corrección de técnica y un plan personalizado que progresa contigo.", link: "Pregunta por 1 a 1", message: "Hola, me interesa el Entrenamiento Uno a Uno." },
      { number: "02", title: "Entrenamiento grupal", subtitle: "Coaching experto. Más energía.", text: "Entrena con un grupo pequeño enfocado en resultados. Recibes corrección de técnica y coaching estructurado, con el impulso extra de un equipo comprometido.", link: "Pregunta por grupos", message: "Hola, me interesan las Clases Grupales." },
      { number: "03", title: "Coaching online", subtitle: "Tu plan, donde estés.", text: "Recibe entrenamientos personalizados, seguimiento semanal y guía nutricional adaptada a tu estilo de vida. Entrena a tu horario sin perder responsabilidad.", link: "Comienza online", message: "Hola, me interesa el Programa Online." },
    ],
    coachEyebrow: "Conoce a tu coach", coachTitle: "Creado para la vida real. Entrenado para resultados reales.",
    coachP1: "Soy entrenador personal certificado por ISSA con años de experiencia ayudando a personas a ganar fuerza, perder peso y recuperar la confianza en el gimnasio.",
    coachP2: "Nada de plantillas genéricas. Ya sea tu primera vez en un gimnasio o que estés persiguiendo una meta específica, tu programa parte de dónde estás y hacia dónde quieres llegar.", coachCta: "Cuéntame tu meta",
    resultsEyebrow: "Progreso de clientes", resultsTitle: "El trabajo se nota.", resultsText: "Progreso real de personas que se comprometieron con el plan.",
    pricingEyebrow: "Elige tu camino", pricingTitle: "Opciones claras. Un solo estándar.",
    plans: [
      { title: "Uno a uno", label: "Coaching premium", price: "$55", unit: "/ sesión", alt: "$660/mes · 3x por semana · pago completo", points: ["Entrenamiento personalizado", "Supervisión directa", "Responsabilidad en cada sesión"], note: "Membresía no incluida", message: "Hola, me interesa el Entrenamiento Uno a Uno." },
      { title: "Grupo pequeño", label: "Más accesible", price: "$35", unit: "/ sesión", alt: "$480/mes · 4x por semana · pago completo", points: ["Entrenamientos estructurados", "Coaching y corrección de técnica", "Motivación y consistencia"], note: "Membresía no incluida", message: "Hola, me interesan las Clases Grupales." },
      { title: "Coaching online", label: "Entrena donde quieras", price: "$149", unit: "/ 4 semanas", alt: "$249 por 8 semanas", points: ["Entrenamientos personalizados", "Seguimiento semanal", "Guía nutricional"], note: "No requiere membresía", message: "Hola, me interesa el Programa Online." },
    ],
    select: "Elegir esta opción", details: "El entrenamiento presencial se realiza en un gimnasio asociado en Hialeah. Puede requerirse un depósito para reservar tu horario y se aplica a tu paquete. Notifica con al menos 24 horas para cancelar o reprogramar.",
    finalEyebrow: "Cuando estés listo", finalTitle: "Tu próximo nivel comienza con una conversación.", finalText: "Cuéntame qué quieres lograr. Te ayudaré a elegir la mejor forma de entrenar.",
    finalCta: "Escríbele a B2B por WhatsApp", demo: "Sitio demo creado para mostrar servicios de diseño web — no es un negocio de entrenamiento activo.",
  },
};

const whatsappUrl = (message: string) => `${WHATSAPP}?text=${encodeURIComponent(message)}`;
function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[language];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.14 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [language]);
  useEffect(() => { document.documentElement.lang = language; }, [language]);

  const freeMessage = language === "en" ? "Hi, I'd like to book my free session." : "Hola, me gustaría reservar mi sesión gratuita.";
  return <main>
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="B2B Training Miami home"><img className="wordmark-mark" src="/images/originals/logo-mark-white.png" alt="" /><span className="wordmark-name">B2B Training Miami</span></a>
      <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">{t.nav.map((item, index) => <a key={item} href={t.navHref[index]} onClick={() => setMenuOpen(false)}>{item}</a>)}</nav>
      <div className="header-actions"><div className="language" aria-label="Language selector"><button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")}>EN</button><span>/</span><button className={language === "es" ? "active" : ""} onClick={() => setLanguage("es")}>ES</button></div><a className="header-cta" href={whatsappUrl(freeMessage)} target="_blank" rel="noreferrer">{t.inquire}</a><button className="menu-button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button></div>
    </header>

    <section className="hero" id="top"><img className="hero-image" src={`${IMAGE_ROOT}/hero.webp`} alt="B2B Training Miami athlete training" /><div className="hero-shade" /><div className="hero-content reveal is-visible"><div className="eyebrow light"><span />{t.location}</div><p className="hero-kicker">{t.kicker}</p><h1>{t.hero1}<br /><em>{t.hero2}</em></h1><p className="hero-copy">{t.heroText}</p><div className="hero-actions"><a className="button primary" href={whatsappUrl(freeMessage)} target="_blank" rel="noreferrer">{t.free}<Arrow /></a><a className="text-link light-link" href="#training">{t.explore}<span aria-hidden="true">↓</span></a></div></div><div className="hero-index" aria-hidden="true">02</div></section>

    <section className="proof-strip" aria-label="Credentials">{t.credibility.map((item, index) => <div key={item}><span>0{index + 1}</span>{item}</div>)}</section>
    <section className="intro section-pad reveal"><div className="section-label"><span>01</span>{t.approachEyebrow}</div><div className="intro-copy"><h2>{t.approachTitle}</h2><p>{t.approachText}</p></div></section>

    <section id="training" className="training-list">{t.modes.map((mode, index) => {
      const images = ["service-1on1.webp", "service-group.webp", "service-online.webp"];
      return <article className={`training-row reveal ${index % 2 ? "reverse" : ""}`} key={mode.title}><div className="training-photo-wrap"><img className="training-photo" src={`${IMAGE_ROOT}/${images[index]}`} alt={mode.title} loading="lazy" /><span className="photo-number">{mode.number}</span></div><div className="training-copy"><span className="mode-number">{mode.number}</span><h3>{mode.title}</h3><p className="mode-subtitle">{mode.subtitle}</p><p className="mode-text">{mode.text}</p><a className="text-link" href={whatsappUrl(mode.message)} target="_blank" rel="noreferrer">{mode.link}<Arrow /></a></div></article>;
    })}</section>

    <section id="coach" className="coach section-pad"><div className="coach-image-wrap reveal"><img src={`${IMAGE_ROOT}/about.webp`} alt="B2B Training Miami certified personal trainer" loading="lazy" /><div className="coach-stamp"><strong>ISSA</strong><span>Certified trainer</span></div></div><div className="coach-copy reveal"><div className="section-label light-label"><span>02</span>{t.coachEyebrow}</div><h2>{t.coachTitle}</h2><p>{t.coachP1}</p><p>{t.coachP2}</p><a className="button ghost" href={whatsappUrl(language === "en" ? "Hi, I'd like to tell you about my training goal." : "Hola, quiero contarte sobre mi meta de entrenamiento.")} target="_blank" rel="noreferrer">{t.coachCta}<Arrow /></a></div></section>

    <section id="results" className="results section-pad"><div className="results-heading reveal"><div className="section-label"><span>03</span>{t.resultsEyebrow}</div><div><h2>{t.resultsTitle}</h2><p>{t.resultsText}</p></div></div><div className="result-grid">{[1, 2, 3, 4].map((number) => <figure className="result-image reveal" key={number}><img src={`${IMAGE_ROOT}/transformation${number}.webp`} alt={`B2B client transformation ${number}`} loading="lazy" /></figure>)}</div></section>

    <section id="pricing" className="pricing section-pad"><div className="pricing-heading reveal"><div className="section-label light-label"><span>04</span>{t.pricingEyebrow}</div><h2>{t.pricingTitle}</h2></div><div className="plan-list">{t.plans.map((plan, index) => <article className="plan-row reveal" key={plan.title}><div className="plan-name"><span>0{index + 1}</span><div><p>{plan.label}</p><h3>{plan.title}</h3></div></div><div className="plan-price"><strong>{plan.price}</strong><span>{plan.unit}</span><small>{plan.alt}</small></div><ul>{plan.points.map((point) => <li key={point}>{point}</li>)}</ul><div className="plan-action"><small>{plan.note}</small><a href={whatsappUrl(plan.message)} target="_blank" rel="noreferrer" aria-label={`${t.select}: ${plan.title}`}><Arrow /></a></div></article>)}</div><p className="pricing-details reveal">{t.details}</p></section>

    <section className="final-cta"><img src={`${IMAGE_ROOT}/hero.webp`} alt="" loading="lazy" /><div className="final-overlay" /><div className="final-content reveal"><div className="eyebrow light"><span />{t.finalEyebrow}</div><h2>{t.finalTitle}</h2><p>{t.finalText}</p><a className="button primary" href={whatsappUrl(language === "en" ? "Hi, I'd like to learn more about training with B2B." : "Hola, me gustaría saber más sobre entrenar con B2B.")} target="_blank" rel="noreferrer">{t.finalCta}<Arrow /></a></div></section>

    <footer><div className="footer-top"><a className="wordmark footer-wordmark" href="#top"><img className="wordmark-mark" src="/images/originals/logo-mark-white.png" alt="B2B Training Miami" /><span className="wordmark-name">B2B Training Miami</span></a><a className="instagram" href="https://instagram.com/b2b_training.miami" target="_blank" rel="noreferrer">@b2b_training.miami <Arrow /></a></div><div className="footer-bottom"><span>© 2026 B2B Training Miami</span><a href="mailto:b2btraining.miami@gmail.com">b2btraining.miami@gmail.com</a><span>{t.demo}</span></div></footer>
  </main>;
}
