import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Inicio', to: '/' },
  { label: 'Sobre nosotros', to: '/sobre-mi' },
  { label: 'Productos', to: '/productos' },
  { label: 'Pedido', to: '/pedido' },
  { label: 'Cobertura', to: '/ubicacion' },
]

function Navbar() {
  return (
    <header className="site-header">
      <div className="container navbar">
        <NavLink to="/" className="brand-mark">
          <span className="brand-mark__badge">DD</span>
          <div>
            <strong>Mini Donas Milagro</strong>
            <p>Frescas, dulces y listas para ti</p>
          </div>
        </NavLink>

        <nav className="nav-links" aria-label="Principal">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link--active' : 'nav-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
