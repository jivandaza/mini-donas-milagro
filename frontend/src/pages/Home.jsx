import { useState } from 'react'
import { Link } from 'react-router-dom'

const featuredPool = [
  {
    name: 'Mini dona de chocolate',
    note: 'Un clasico suave y cremoso',
    variant: 'mini-donut--choco',
    badge: 'Top ventas',
  },
  {
    name: 'Mini dona de lecherita',
    note: 'Dulce, delicada y muy pedida',
    variant: 'mini-donut--cream',
    badge: 'Favorita',
  },
  {
    name: 'Mini dona Nutella',
    note: 'Ideal para amantes del cacao',
    variant: 'mini-donut--berry',
    badge: 'Premium',
  },
  {
    name: 'Mini dona de dulce de leche',
    note: 'Sabor casero que siempre encanta',
    variant: 'mini-donut--pink',
    badge: 'Recomendada',
  },
  {
    name: 'Mini dona rellena de crema chantilly',
    note: 'Ligera, cremosa y muy especial',
    variant: 'mini-donut--violet',
    badge: 'Suave',
  },
  {
    name: 'Mini dona con cobertura de chocolate',
    note: 'Textura brillante y sabor intenso',
    variant: 'mini-donut--choco',
    badge: 'Antojo',
  },
]

function getRandomFeatured(count = 4) {
  const items = [...featuredPool]

  for (let index = items.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    const currentItem = items[index]
    items[index] = items[randomIndex]
    items[randomIndex] = currentItem
  }

  return items.slice(0, count)
}

function Home() {
  const [featuredItems] = useState(() => getRandomFeatured())

  return (
    <div className="page-stack">
      <section className="hero-section container">
        <div className="hero-copy">
          <span className="eyebrow">Donas artesanales a domicilio en Medellin</span>
          <h1>Donas frescas y deliciosas</h1>
          <p className="hero-text">
            Pide tus donas favoritas a domicilio y paga facil con Nequi o contra entrega.
          </p>

          <div className="hero-actions">
            <Link to="/productos" className="button button--primary">
              Ver productos
            </Link>
            <Link to="/pedido" className="button button--secondary">
              Hacer pedido
            </Link>
          </div>

          <div className="hero-highlights">
            <span>Hechas cada dia</span>
            <span>Solo domicilios</span>
            <span>Pedidos por WhatsApp</span>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-card hero-card--front">
            <span className="donut donut--pink"></span>
            <strong>Favoritas del dia</strong>
            <p>Texturas suaves, toppings cremosos y sabor casero.</p>
          </div>

          <div className="hero-ring hero-ring--one"></div>
          <div className="hero-ring hero-ring--two"></div>

          <div className="hero-float hero-float--top">
            <span className="mini-donut mini-donut--cream"></span>
            <small>Glaseada</small>
          </div>

          <div className="hero-float hero-float--bottom">
            <span className="mini-donut mini-donut--choco"></span>
            <small>Oreo</small>
          </div>
        </div>
      </section>

      <section className="container section-card section-card--soft featured-section">
        <div className="section-heading section-heading--centered">
          <span className="eyebrow">Sabores que enamoran</span>
          <h2>Mini donas favoritas del momento</h2>
          <p className="lead-text featured-section__text">
            En cada recarga aparece una mezcla distinta de mini donas que suelen ser las
            mas elegidas por nuestros clientes.
          </p>
        </div>

        <div className="featured-grid">
          {featuredItems.map((item) => (
            <article key={item.name} className="featured-card">
              <div className="featured-card__visual">
                <span className={`mini-donut ${item.variant}`}></span>
                <span className="featured-card__badge">{item.badge}</span>
              </div>
              <div className="featured-card__content">
                <h3>{item.name}</h3>
                <p>{item.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
