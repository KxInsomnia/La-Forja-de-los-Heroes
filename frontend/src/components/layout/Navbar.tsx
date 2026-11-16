import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <header className="navbar">
      <Link className="navbar__brand" to="/">
        La Forja de los Héroes
      </Link>
      <nav className="navbar__nav" aria-label="Navegación principal" />
    </header>
  )
}
