import { Link } from 'react-router-dom'

const benefits = [
  {
    title: 'Donas frescas',
    description:
      'Preparamos cada pedido con cuidado para conservar una textura suave y un sabor que se sienta casero.',
  },
  {
    title: 'Entrega rapida',
    description:
      'Organizamos los domicilios con agilidad para que tus donas lleguen frescas y listas para disfrutar.',
  },
  {
    title: 'Pago facil',
    description:
      'Puedes pagar por Nequi o contra entrega para que el proceso sea simple y comodo.',
  },
  {
    title: 'Atencion por WhatsApp',
    description:
      'Respondemos de forma cercana para confirmar sabores, cantidades y detalles de tu domicilio.',
  },
]

const steps = [
  {
    title: 'Eliges tus donas',
    description: 'Escoge tus sabores favoritos entre donas clasicas, premium y rellenos disponibles.',
  },
  {
    title: 'Personalizas tu pedido',
    description: 'Define cantidades y agrega un topping como relleno a cada dona sin cambiar su precio.',
  },
  {
    title: 'Confirmamos y entregamos',
    description: 'Te contactamos por WhatsApp para confirmar el pedido y coordinar tu domicilio.',
  },
]

function About() {
  return (
    <div className="page-stack container">
      <section className="section-card about-hero">
        <div className="about-hero__copy">
          <div className="section-heading">
            <span className="eyebrow">Sobre Mini Donas Milagro</span>
            <h1>Donas frescas hechas con amor para compartir momentos dulces</h1>
            <p className="lead-text">
              Mini Donas Milagro es un emprendimiento local que prepara mini donas frescas,
              bonitas y llenas de sabor para quienes disfrutan los detalles hechos con
              dedicacion.
            </p>
          </div>

          <div className="about-hero__metrics">
            <article className="about-metric-card">
              <strong>Local</strong>
              <span>Emprendimiento cercano en Medellin</span>
            </article>
            <article className="about-metric-card">
              <strong>Artesanal</strong>
              <span>Sabores preparados con detalle y carino</span>
            </article>
            <article className="about-metric-card">
              <strong>Facil</strong>
              <span>Pedidos simples por WhatsApp para entrega a domicilio</span>
            </article>
          </div>
        </div>

        <div className="about-visual" aria-hidden="true">
          <div className="about-visual__panel about-visual__panel--main">
            <span className="donut donut--pink"></span>
            <h3>Hechas para alegrar el dia</h3>
            <p>Donas suaves, dulces y listas para compartir en cualquier momento.</p>
          </div>

          <div className="about-visual__badge about-visual__badge--top">Frescas</div>
          <div className="about-visual__badge about-visual__badge--bottom">Con amor</div>
          <div className="hero-ring hero-ring--one"></div>
        </div>
      </section>

      <section className="about-story-grid">
        <article className="section-card mission-box about-story-card">
          <span className="eyebrow">Nuestra historia</span>
          <h2>Una marca local con sabor y cercania</h2>
          <p>
            Mini Donas Milagro nace con la idea de llevar dulzura, calidad y cercania a cada
            pedido. Queremos que cada dona se sienta especial, desde su preparacion hasta
            el momento en que llega a manos de nuestros clientes, siempre por medio de
            domicilios coordinados con atencion cercana.
          </p>
        </article>

        <article className="section-card mission-box about-story-card">
          <span className="eyebrow">Mision</span>
          <h2>Lo que nos mueve</h2>
          <p>
            Ofrecer donas ricas, frescas y hechas con amor, con una experiencia sencilla,
            cercana y confiable para cada cliente, enfocada completamente en pedidos a
            domicilio.
          </p>
        </article>

        <article className="section-card mission-box about-story-card">
          <span className="eyebrow">Vision</span>
          <h2>Hacia donde vamos</h2>
          <p>
            Seguir creciendo como una marca local reconocida por su sabor, calidez y
            buena atencion en cada domicilio entregado.
          </p>
        </article>
      </section>

      <section className="section-card section-card--soft about-section">
        <div className="section-heading">
          <span className="eyebrow">Beneficios</span>
          <h2>Por que elegir Mini Donas Milagro</h2>
        </div>

        <div className="benefit-grid">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="benefit-card">
              <span className="benefit-card__icon"></span>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card about-section">
        <div className="section-heading section-heading--centered">
          <span className="eyebrow">Como trabajamos</span>
          <h2>Un proceso simple para pedir tus donas</h2>
        </div>

        <div className="about-steps-grid">
          {steps.map((step, index) => (
            <article key={step.title} className="about-step-card">
              <span className="about-step-card__number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card section-card--soft about-cta">
        <div className="section-heading">
          <span className="eyebrow">Listo para pedir</span>
          <h2>Conoce nuestros sabores y arma tu pedido</h2>
          <p className="lead-text">
            Descubre las donas disponibles, elige tus favoritas y coordina tu pedido por
            WhatsApp de forma rapida para recibirlo a domicilio.
          </p>
        </div>

        <div className="hero-actions">
          <Link to="/productos" className="button button--primary">
            Ver productos
          </Link>
          <Link to="/pedido" className="button button--secondary">
            Hacer pedido
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
