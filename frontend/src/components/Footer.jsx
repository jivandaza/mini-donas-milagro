function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-column footer-column--brand">
          <h3>Mini Donas Milagro</h3>
          <p>
            Emprendimiento local de mini donas frescas, suaves y hechas con amor para
            pedidos a domicilio.
          </p>

          <div className="footer-socials" aria-label="Redes sociales">
            <a
              href="https://wa.me/573104302978"
              target="_blank"
              rel="noreferrer"
              className="social-link social-link--whatsapp"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <svg className="social-icon" viewBox="0 0 24 24" role="presentation" aria-hidden="true">
                <path d="M12 2.04A9.96 9.96 0 0 0 3.4 17.06L2 22l5.06-1.33A9.96 9.96 0 1 0 12 2.04Zm0 18.1a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3 .79.8-2.92-.2-.3A8.11 8.11 0 1 1 12 20.14Zm4.45-6.06c-.24-.12-1.4-.69-1.62-.76-.22-.08-.39-.12-.55.12-.16.24-.63.76-.77.92-.14.16-.28.18-.52.06a6.61 6.61 0 0 1-1.95-1.2 7.32 7.32 0 0 1-1.35-1.68c-.14-.24-.01-.37.11-.5.11-.11.24-.28.36-.41.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.54-1.31-.74-1.79-.19-.46-.39-.4-.54-.4h-.46a.89.89 0 0 0-.65.3c-.23.25-.83.82-.83 2s.85 2.33.97 2.48c.12.16 1.67 2.54 4.02 3.56.57.24 1 .39 1.35.51.57.18 1.08.15 1.48.09.45-.06 1.4-.57 1.59-1.12.2-.56.2-1.03.14-1.13-.05-.1-.21-.16-.45-.28Z" fill="currentColor" />
              </svg>
            </a>

            <a
              href="https://instagram.com/donasdeliciosas"
              target="_blank"
              rel="noreferrer"
              className="social-link social-link--instagram"
              aria-label="Instagram"
              title="Instagram"
            >
              <svg className="social-icon" viewBox="0 0 24 24" role="presentation" aria-hidden="true">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7Zm10.25 1.55a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2A2.8 2.8 0 1 0 12 14.8 2.8 2.8 0 0 0 12 9.2Z" fill="currentColor" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/share/19DQ5b2aZU/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="Facebook"
              title="Facebook"
            >
              <svg className="social-icon" viewBox="0 0 24 24" role="presentation" aria-hidden="true">
                <path d="M13.5 21v-7.2H16l.38-2.8H13.5V9.22c0-.81.23-1.36 1.39-1.36h1.48V5.35c-.26-.03-1.14-.11-2.17-.11-2.14 0-3.6 1.31-3.6 3.72V11H8.2v2.8h2.4V21h2.9Z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-column footer-column--contact">
          <h3>Contacto</h3>
          <a href="https://wa.me/573104302978" target="_blank" rel="noreferrer">
            WhatsApp: +57 310 430 2978
          </a>
          <a href="https://instagram.com/donasdeliciosas" target="_blank" rel="noreferrer">
            Instagram: @donasdeliciosas
          </a>
          <a
            href="https://www.facebook.com/share/19DQ5b2aZU/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
          >
            Facebook: Mini Donas Milagro
          </a>
        </div>

        <div className="footer-column footer-column--schedule">
          <h3>Horario</h3>
          <p>Lunes a sabado</p>
          <p>9:00 a. m. - 7:00 p. m.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
