import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="not-found">
      <p className="not-found__code">404</p>
      <h1 className="not-found__title">Página no encontrada</h1>
      <p className="not-found__desc">
        La ruta que buscas no existe o fue movida.
      </p>
      <Link className="not-found__link" to="/">
        Volver al inicio
      </Link>
    </div>
  )
}
