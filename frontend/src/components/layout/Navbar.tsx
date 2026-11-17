import { Link, NavLink } from 'react-router-dom'

function navLinkClass({ isActive }: { isActive: boolean }) {
  return `navbar__link${isActive ? ' navbar__link--active' : ''}`
}

export function Navbar() {
  return (
    <header className="navbar">
      <Link className="navbar__brand" to="/">
        La Forja de los Héroes
      </Link>
      <nav className="navbar__nav" aria-label="Navegación principal">
        <NavLink className={navLinkClass} to="/pve">
          Guías PvE
        </NavLink>
        <NavLink className={navLinkClass} to="/pvp">
          Guías PvP
        </NavLink>
        <NavLink className={navLinkClass} to="/bandas">
          Guía de Bandas
        </NavLink>
      </nav>
    </header>
  )
}
