import { useNavigate } from 'react-router-dom'

function ProductCard({ product, categoryName, canOrder, onOrder }) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} className="product-card__image" />
      <div className="product-card__body">
        <div>
          <span className="product-card__tag">{categoryName}</span>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>

        <div className="product-card__footer">
          <strong>{product.price}</strong>
          {canOrder ? (
            <button type="button" className="button button--primary" onClick={onOrder}>
              Agregar al pedido
            </button>
          ) : (
            <p className="product-card__note">Disponible como relleno en tu dona.</p>
          )}
        </div>
      </div>
    </article>
  )
}

function Products({ categories, onAddToOrder }) {
  const navigate = useNavigate()

  const handleOrder = (productName) => {
    onAddToOrder(productName)
    navigate('/pedido')
  }

  return (
    <div className="page-stack container">
      <section className="products-hero section-card section-card--soft">
        <div className="section-heading section-heading--centered">
          <span className="eyebrow">Sabores y categorias</span>
          <h1>Elige tus mini donas favoritas</h1>
          <p className="lead-text products-hero__text">
            Tenemos mini donas clasicas, premium y toppings para personalizar cada pedido
            con mas sabor, color y variedad.
          </p>
          <p className="products-hero__hint">
            Cada mini dona puede llevar un topping como relleno sin cambiar su precio.
          </p>
        </div>

        <div className="pricing-banner">
          <article className="pricing-banner__card">
            <span className="pricing-banner__label">Precio base</span>
            <strong>1 unidad x 2.000 COP</strong>
            <p>Perfecta para antojos individuales.</p>
          </article>

          <article className="pricing-banner__card pricing-banner__card--accent">
            <span className="pricing-banner__label">Combo favorito</span>
            <strong>3 unidades x 5.000 COP</strong>
            <p>Ideal para compartir o probar varios sabores.</p>
          </article>
        </div>
      </section>

      {categories.map((category) => (
        <section key={category.name} className="category-section">
          <div className="category-header">
            <div>
              <span className="eyebrow">{category.name}</span>
              <h2>{category.name}</h2>
              <p className="lead-text">{category.description}</p>
            </div>
            <div className="category-price-card">
              <span>Precios</span>
              <strong>{category.priceLabel}</strong>
            </div>
          </div>

          <div className="product-grid">
            {category.products.map((product) => (
              <ProductCard
                key={product.name}
                product={product}
                categoryName={category.name}
                canOrder={category.orderable}
                onOrder={() => handleOrder(product.name)}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default Products
