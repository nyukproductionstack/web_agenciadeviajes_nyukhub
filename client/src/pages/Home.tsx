// Dirección visual: Expedición peruana editorial — cuadrícula de destinos grandes, PNGs flotantes y fichas full day claras.
import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Clock3, Compass, Instagram, Menu, MapPin, Users, X } from "lucide-react";
import { toast } from "sonner";

const heroImage = "/imagenes/fondohero.png";
const topoOverlay = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M11 18c3 0 6 3 9 3s6-3 9-3 6 3 9 3 6-3 9-3' fill='none' stroke='%23ffffff' stroke-opacity='0.05' stroke-width='1'/%3E%3C/svg%3E";
const rumboMark = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23d4a06a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpolygon points='16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76'/%3E%3C/svg%3E";

type Place = {
  number: string;
  name: string;
  region: string;
  coords: string;
  description: string;
  image: string;
  color: string;
  duration: string;
  difficulty: string;
  bestTime: string;
  includes: string;
  timeline: { time: string; title: string; detail: string }[];
};

const places: Place[] = [
  {
    number: "01", name: "Machu Picchu", region: "Cusco · Andes", coords: "13° 09' S / 72° 32' W",
    description: "Piedra, niebla y una ciudad que aparece cuando el mundo baja el volumen.", image: "/imagenes/machupichu.png", color: "#a9b987", duration: "14–16 h", difficulty: "Suave / largo", bestTime: "Abril — octubre", includes: "Traslado · tren · bus · guía · entradas según disponibilidad",
    timeline: [
      { time: "04:00", title: "Salida desde Cusco", detail: "Recogida en hotel y traslado hacia Ollantaytambo." },
      { time: "06:30", title: "Tren a Aguas Calientes", detail: "Trayecto escénico por el Valle Sagrado y el río Vilcanota." },
      { time: "09:30", title: "La ciudadela", detail: "Bus de subida y visita guiada de aproximadamente 3 horas." },
      { time: "14:00", title: "Regreso", detail: "Descenso al pueblo, tren de vuelta y traslado a tu hotel." },
    ],
  },
  {
    number: "02", name: "Vinicunca", region: "Cusco · Altura", coords: "13° 52' S / 71° 18' W",
    description: "Capas de color dibujadas por la tierra y un horizonte que no se repite.", image: "/imagenes/vinicunca.png", color: "#d4a06a", duration: "12 h", difficulty: "Exigente / 5.200 m", bestTime: "Mayo — septiembre", includes: "Transporte · desayuno · almuerzo · guía · bastones",
    timeline: [
      { time: "03:00", title: "Salida desde Cusco", detail: "Recogida temprana para llegar antes de los grupos grandes." },
      { time: "05:00", title: "Desayuno en Cusipata", detail: "Pausa local antes del último tramo por carretera." },
      { time: "06:00", title: "Caminata a la cima", detail: "Ascenso de alrededor de una hora a tu propio ritmo." },
      { time: "09:30", title: "Vinicunca + Valle Rojo", detail: "Tiempo para contemplar, fotografiar y conocer la historia del lugar." },
      { time: "12:30", title: "Almuerzo y retorno", detail: "Buffet local y regreso a Cusco por la tarde." },
    ],
  },
  {
    number: "03", name: "Huacachina", region: "Ica · Desierto", coords: "14° 05' S / 75° 46' W",
    description: "Una laguna verde en mitad del desierto y la arena cayendo despacio.", image: "/imagenes/huacachina.png", color: "#e3aa65", duration: "14–16 h", difficulty: "Activo / carretera", bestTime: "Todo el año", includes: "Bus · Islas Ballestas · buggy · sandboard · guía",
    timeline: [
      { time: "05:00", title: "Salida desde Lima", detail: "Ruta temprana hacia la costa sur del Perú." },
      { time: "08:00", title: "Islas Ballestas", detail: "Navegación según condiciones del mar y operación del día." },
      { time: "12:30", title: "Ica y Huacachina", detail: "Almuerzo, oasis y pausa bajo las palmeras." },
      { time: "16:00", title: "Buggy + sandboard", detail: "Sube, baja y cruza las dunas con instructores locales." },
      { time: "19:00", title: "Regreso a Lima", detail: "Salida de Ica con llegada estimada por la noche." },
    ],
  },
  {
    number: "04", name: "Lago Titicaca", region: "Puno · Altiplano", coords: "15° 50' S / 69° 20' W",
    description: "Agua azul, totora y una forma distinta de medir el tiempo.", image: "/imagenes/titicaca.png", color: "#87a9b2", duration: "10–11 h", difficulty: "Suave / altura", bestTime: "Mayo — octubre", includes: "Lancha · islas Uros · Taquile · almuerzo · guía",
    timeline: [
      { time: "07:00", title: "Muelle de Puno", detail: "Embarque temprano en el lago navegable más alto del mundo." },
      { time: "08:00", title: "Islas Uros", detail: "Encuentro con comunidades y explicación de la totora." },
      { time: "11:30", title: "Isla Taquile", detail: "Caminata tranquila, paisaje y textiles tradicionales." },
      { time: "13:00", title: "Almuerzo con vista", detail: "Cocina local y tiempo para mirar el altiplano." },
      { time: "17:00", title: "Regreso a Puno", detail: "Navegación de vuelta y cierre de la jornada." },
    ],
  },
  {
    number: "05", name: "Cañón del Colca", region: "Arequipa · Cañón", coords: "15° 37' S / 71° 59' W",
    description: "Un valle profundo, cóndores sobre la cabeza y pueblos que siguen el pulso de la montaña.", image: "/imagenes/canon-del-colca.png", color: "#b87858", duration: "14 h", difficulty: "Moderado / altura", bestTime: "Abril — noviembre", includes: "Transporte · desayuno · almuerzo · guía · miradores",
    timeline: [
      { time: "03:00", title: "Salida desde Arequipa", detail: "Ruta temprana hacia el valle con paradas de altura." },
      { time: "06:30", title: "Desayuno en Chivay", detail: "Pausa local y preparación para la ruta de miradores." },
      { time: "08:30", title: "Cruz del Cóndor", detail: "Tiempo para observar el vuelo del cóndor y el cañón." },
      { time: "11:30", title: "Pueblos del valle", detail: "Paradas en miradores, terrazas y poblados tradicionales." },
      { time: "14:00", title: "Almuerzo y retorno", detail: "Almuerzo en Chivay y regreso a Arequipa por la tarde." },
    ],
  },
  {
    number: "06", name: "Laguna Humantay", region: "Cusco · Cordillera", coords: "13° 25' S / 72° 38' W",
    description: "Agua turquesa, piedra alta y una caminata que se gana paso a paso.", image: "/imagenes/laguna-humantay.png", color: "#78a5a0", duration: "12–14 h", difficulty: "Exigente / 4.200 m", bestTime: "Mayo — octubre", includes: "Transporte · desayuno · almuerzo · guía · bastones",
    timeline: [
      { time: "04:30", title: "Salida desde Cusco", detail: "Recogida y viaje hacia Mollepata entre montañas." },
      { time: "07:00", title: "Desayuno en Soraypampa", detail: "Pausa antes de iniciar el sendero a la laguna." },
      { time: "08:00", title: "Ascenso a Humantay", detail: "Caminata de 1 a 2 horas, con opción de apoyo local." },
      { time: "10:30", title: "La laguna", detail: "Tiempo para contemplar y fotografiar el paisaje glaciar." },
      { time: "13:00", title: "Almuerzo y retorno", detail: "Descenso, almuerzo y regreso a Cusco al final del día." },
    ],
  },
  {
    number: "07", name: "Paracas", region: "Ica · Costa", coords: "13° 50' S / 76° 15' W",
    description: "Mar abierto, acantilados rojos y una costa que parece dibujada por el viento.", image: "/imagenes/paracas.png", color: "#b26b57", duration: "11–13 h", difficulty: "Suave / carretera", bestTime: "Diciembre — marzo", includes: "Transporte · navegación · reserva · guía local",
    timeline: [
      { time: "05:00", title: "Salida desde Lima", detail: "Traslado hacia la bahía de Paracas por la Panamericana Sur." },
      { time: "08:00", title: "Islas Ballestas", detail: "Navegación por la reserva marina según condiciones del mar." },
      { time: "11:00", title: "Reserva de Paracas", detail: "Miradores de costa, formaciones rojas y tiempo para fotos." },
      { time: "13:30", title: "Almuerzo frente al mar", detail: "Pausa para probar cocina marina y recorrer el malecón." },
      { time: "16:00", title: "Regreso a Lima", detail: "Salida de Paracas con llegada estimada por la noche." },
    ],
  },
  {
    number: "08", name: "Valle Sagrado", region: "Cusco · Valle", coords: "13° 20' S / 72° 05' W",
    description: "Terrazas, maíz, piedra antigua y el río Vilcanota acompañando el camino.", image: "/imagenes/valle-sagrado.png", color: "#9c8d67", duration: "10 h", difficulty: "Suave / cultural", bestTime: "Abril — octubre", includes: "Transporte · guía · entradas · almuerzo buffet",
    timeline: [
      { time: "07:30", title: "Salida desde Cusco", detail: "Ruta hacia Pisac entre pueblos y montañas del valle." },
      { time: "09:00", title: "Mercado y terrazas de Pisac", detail: "Historia, artesanía y paisaje agrícola andino." },
      { time: "11:30", title: "Moray y Maras", detail: "Parada en andenes circulares y salineras de montaña." },
      { time: "14:00", title: "Almuerzo en Urubamba", detail: "Buffet local y pausa para recorrer el valle." },
      { time: "16:00", title: "Ollantaytambo", detail: "Última visita arqueológica antes de volver a Cusco." },
    ],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => { setScrollY(window.scrollY); ticking = false; });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedPlace ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedPlace]);

  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };
  const openPlace = (place: Place) => setSelectedPlace(place);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Recibimos tu idea de viaje", { description: "Te responderemos con una primera ruta por Perú.", icon: <Check size={16} strokeWidth={2.5} /> });
    event.currentTarget.reset();
  };

  return (
    <div className="site-shell">
      <header className={`site-nav ${menuOpen ? "is-open" : ""}`}>
        <a href="#inicio" className="brand" onClick={() => setMenuOpen(false)} aria-label="Rumbo, inicio"><span className="brand-mark"><img src={rumboMark} alt="" /></span><span className="brand-wordmark">RUMBO<span>/</span></span></a>
        <nav className="desktop-nav" aria-label="Navegación principal"><button onClick={() => scrollTo("lugares")}>Lugares</button><button onClick={() => scrollTo("contacto")}>Contacto</button></nav>
        <button className="nav-cta" onClick={() => scrollTo("contacto")}>Diseñar mi viaje <ArrowUpRight size={15} /></button>
        <button className="menu-toggle" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        <div className="mobile-nav" aria-hidden={!menuOpen}><button onClick={() => scrollTo("lugares")}>Lugares <span>01</span></button><button onClick={() => scrollTo("contacto")}>Contacto <span>02</span></button><button className="mobile-nav-cta" onClick={() => scrollTo("contacto")}>Trazar una ruta <ArrowUpRight size={16} /></button></div>
      </header>

      <main>
        <section id="inicio" className="hero-section"><div className="hero-media" aria-hidden="true"><img src={heroImage} alt="" /></div><div className="hero-content"><div className="hero-copy-panel"><p className="eyebrow"><span className="eyebrow-line" />Viajes de autor · Perú</p><h1>Perú, <em>sin prisa.</em></h1><p className="hero-intro">Lugares que se sienten. Rutas claras para conocer el Perú a tu ritmo, con alguien que ya sabe dónde mirar.</p><div className="hero-actions"><button className="button button-primary" onClick={() => scrollTo("lugares")}>Elegir dirección <ArrowRight size={17} /></button><button className="hero-text-link" onClick={() => scrollTo("contacto")}>Trazar una ruta <span>→</span></button></div></div></div></section>

        <section id="lugares" className="places-section"><img className="topo-overlay" src={topoOverlay} alt="" aria-hidden="true" /><div className="places-header page-width"><div><p className="eyebrow dark-eyebrow"><span className="eyebrow-line" />Lugares para empezar</p><h2>Elige tu<br /><span>próximo día.</span></h2></div><div className="places-header-side"><span className="chapter">01 <i>/</i> 02</span><p>Ocho rutas.<br />Toca un lugar para ver su día.</p></div></div><div className="places-rail page-width" aria-label="Lugares turísticos del Perú">{places.map((place, index) => <article className="place-card" key={place.name}><div className="place-card-top"><span>{place.number}</span><span>{place.coords}</span></div><button className="place-card-visual" onClick={() => openPlace(place)} aria-label={`Abrir full day de ${place.name}`}><img src={place.image} alt={place.name} style={{ transform: `translate3d(0, ${Math.max(-16, Math.min(16, (scrollY - 420 - index * 125) * -0.028))}px, 0)` }} /><span className="place-card-ring" /></button><div className="place-card-info"><div><p className="place-region">{place.region}</p><h3>{place.name}</h3><p>{place.description}</p></div><button className="place-card-open" onClick={() => openPlace(place)}>Ver full day <ArrowUpRight size={16} /></button></div><div className="place-card-data"><span><Clock3 size={13} />{place.duration}</span><span><MapPin size={13} />{place.difficulty}</span><span><Users size={13} />Grupos pequeños</span></div></article>)}</div><div className="places-footer page-width"><span className="places-scroll-note">08 rutas para explorar</span><span><Compass size={17} /> RUMBO / PERÚ 2025</span><p>Horarios orientativos · confirmar antes de reservar</p></div></section>

        <section id="contacto" className="contact-section"><div className="contact-inner page-width"><span className="contact-coordinates">12° 02' S / 77° 02' W<br />PERÚ · DISPONIBLE</span><div className="contact-copy"><p className="eyebrow"><span className="eyebrow-line" />Tu siguiente coordenada</p><h2>Cuéntame<br /><em>qué buscas.</em></h2><p>Te proponemos una ruta sencilla, bonita y posible. Sin elegir entre veinte paquetes.</p></div><form className="contact-form" onSubmit={handleSubmit}><label>Tu nombre<input type="text" name="name" placeholder="Cómo te llamamos" required /></label><label>Tu email<input type="email" name="email" placeholder="Dónde te escribimos" required /></label><label>Qué te interesa<select name="interest" defaultValue="" required><option value="" disabled>Elige un lugar</option>{places.map((place) => <option key={place.name}>{place.name}</option>)}</select></label><button type="submit" className="button button-dark">Trazar mi viaje <ArrowUpRight size={17} /></button><p className="form-note">Te respondemos en 48 h. Sin ruido, sin correos infinitos.</p></form></div></section>
      </main>

      <footer className="site-footer"><a href="#inicio" className="brand footer-brand"><span className="brand-mark"><img src={rumboMark} alt="" /></span><span className="brand-wordmark">RUMBO<span>/</span></span></a><p>Viajes de autor para salir del ruido.</p><div className="footer-links"><a href="#lugares">Lugares</a><a href="#contacto">Contacto</a><a href="#inicio">Instagram <Instagram size={13} /></a></div><span className="footer-year">© 2025</span></footer>

      {selectedPlace && <div className="full-day-backdrop" role="presentation" onClick={() => setSelectedPlace(null)}><section className="full-day-panel" role="dialog" aria-modal="true" aria-labelledby="full-day-title" onClick={(event) => event.stopPropagation()}><div className="full-day-panel-head"><span>RUMBO / FULL DAY</span><button onClick={() => setSelectedPlace(null)} aria-label="Cerrar ficha"><X size={20} /></button></div><div className="full-day-panel-title"><div><p className="place-region">{selectedPlace.region}</p><h2 id="full-day-title">{selectedPlace.name}</h2><p>{selectedPlace.description}</p></div><span className="full-day-code">{selectedPlace.coords}</span></div><div className="full-day-facts"><span><Clock3 size={15} /><b>Duración</b>{selectedPlace.duration}</span><span><MapPin size={15} /><b>Nivel</b>{selectedPlace.difficulty}</span><span><Compass size={15} /><b>Mejor época</b>{selectedPlace.bestTime}</span></div><div className="full-day-body"><div className="full-day-timeline"><div className="full-day-section-label"><span>Rutina orientativa</span><span>01 / 05</span></div>{selectedPlace.timeline.map((item) => <div className="timeline-item" key={`${selectedPlace.name}-${item.time}`}><span className="timeline-time">{item.time}</span><div><strong>{item.title}</strong><p>{item.detail}</p></div></div>)}</div><aside className="full-day-aside"><p className="full-day-section-label">Qué incluye</p><p>{selectedPlace.includes}</p><div className="aside-tip"><span>Nota de ruta</span><p>Los horarios cambian por clima, tráfico, operación local y disponibilidad de entradas. Te confirmamos todo antes de cerrar.</p></div><button className="button button-primary" onClick={() => { setSelectedPlace(null); scrollTo("contacto"); }}>Elegir esta ruta <ArrowUpRight size={16} /></button></aside></div></section></div>}
    </div>
  );
}
