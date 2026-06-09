function Location() {
  return (
    <div className="page-stack container">
      <section className="section-card location-layout">
        <div className="section-heading">
          <span className="eyebrow">Cobertura</span>
          <h1>Cobertura de domicilios</h1>
          <p className="lead-text">
            Mini Donas Milagro atiende pedidos unicamente a domicilio y toma San Antonio de Prado
            como punto de referencia para coordinar entregas.
          </p>
        </div>

        <div className="location-actions">
          <div className="address-card">
            <h2>Punto de referencia</h2>
            <p>Calle 56a sur cra 62b-68 limonar 1 san Antonio de Prado</p>
            <p>No contamos con atencion en punto fisico.</p>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Calle%2056a%20sur%20cra%2062b-68%20limonar%201%20san%20Antonio%20de%20Prado"
            target="_blank"
            rel="noreferrer"
            className="button button--primary"
          >
            Ver referencia en Google Maps
          </a>
        </div>

        <div className="map-frame">
          <iframe
            title="Mapa de Calle 56a sur cra 62b-68 limonar 1 san Antonio de Prado"
            src="https://www.google.com/maps?q=Calle%2056a%20sur%20cra%2062b-68%20limonar%201%20san%20Antonio%20de%20Prado&z=16&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  )
}

export default Location
