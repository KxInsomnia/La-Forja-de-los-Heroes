import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { roleLabels } from '../../lib/wow'
import type { WowClass } from '../../types/wow'
import { RoleIcon } from '../ui/RoleIcon'
import '../../styles/class-card.css'

interface ClassCardProps {
  wowClass: WowClass
}

function ClassEmblem() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" />
      <path d="M12 8v6M9 11h6" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function ClassCard({ wowClass }: ClassCardProps) {
  return (
    <article
      className="class-card"
      style={{ '--class-color': wowClass.color } as CSSProperties}
    >
      <header className="class-card__header">
        <span className="class-card__emblem">
          <ClassEmblem />
        </span>
        <div className="class-card__identity">
          <p className="class-card__kicker">Clase</p>
          <h2 className="class-card__name">{wowClass.name}</h2>
        </div>
        <span className="class-card__count">{wowClass.specs.length} roles</span>
      </header>

      <div className="class-card__roles">
        {wowClass.specs.map((spec) => (
          <Link
            key={spec.slug}
            to={`/clase/${wowClass.slug}/${spec.slug}`}
            className="role-panel"
            data-role={spec.role}
            aria-label={`Ver guía de ${spec.name}, ${roleLabels[spec.role]} de ${wowClass.name}`}
          >
            <span className="role-panel__icon">
              <RoleIcon role={spec.role} />
            </span>
            <p className="role-panel__role">{roleLabels[spec.role]}</p>
            <h3 className="role-panel__name">{spec.name}</h3>
            <span className="role-panel__cta">
              {spec.buildCount > 0
                ? `${spec.buildCount} ${spec.buildCount === 1 ? 'build' : 'builds'}`
                : 'Ver guía'}
              <ArrowIcon />
            </span>
          </Link>
        ))}
      </div>
    </article>
  )
}
