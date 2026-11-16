import type { CSSProperties } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getClassBySlug } from '../data/classes'
import { roleLabels } from '../lib/wow'

const guideSections = [
  'Talentos',
  'Glifos',
  'Estadísticas',
  'Rotación',
  'Consejos',
]

export function SpecPage() {
  const { classSlug, specSlug } = useParams()
  const wowClass = classSlug ? getClassBySlug(classSlug) : undefined
  const spec = wowClass?.specs.find((item) => item.slug === specSlug)

  if (!wowClass || !spec) {
    return (
      <div className="spec-page">
        <p className="spec-page__kicker">Guía no encontrada</p>
        <h1 className="spec-page__title">Esta guía no existe</h1>
        <p className="spec-page__desc">
          Revisa la URL o vuelve al inicio para elegir una clase.
        </p>
        <Link className="spec-page__back" to="/">
          ← Volver al inicio
        </Link>
      </div>
    )
  }

  return (
    <article
      className="spec-page"
      style={{ '--class-color': wowClass.color } as CSSProperties}
    >
      <Link className="spec-page__back" to="/">
        ← Volver al inicio
      </Link>
      <p className="spec-page__kicker">
        {wowClass.name} · {roleLabels[spec.role]}
      </p>
      <h1 className="spec-page__title">{spec.name}</h1>
      {spec.description && (
        <p className="spec-page__desc">{spec.description}</p>
      )}

      <ul className="spec-page__sections">
        {guideSections.map((section) => (
          <li key={section} className="spec-page__section">
            {section}
          </li>
        ))}
      </ul>
    </article>
  )
}
