import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { roleLabels } from '../../lib/wow'
import type { WowClass, WowSpecBadge } from '../../types/wow'
import { RoleIcon } from '../ui/RoleIcon'
import '../../styles/class-card.css'

interface ClassCardProps {
  wowClass: WowClass
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
      id={`clase-${wowClass.slug}`}
      className="class-card"
      style={{ '--class-color': wowClass.color } as CSSProperties}
    >
      <header className="class-card__header">
        <span className="class-card__emblem">
          <img
            src={`${import.meta.env.BASE_URL}icons/classes/${wowClass.icon}.jpg`}
            alt=""
            width={52}
            height={52}
          />
        </span>
        <div className="class-card__identity">
          <p className="class-card__kicker">Clase</p>
          <h2 className="class-card__name">{wowClass.name}</h2>
        </div>
        <span className="class-card__count">
          {wowClass.specs.length} especialidades
        </span>
      </header>

      <div className="class-card__roles">
        {wowClass.specs.map((spec) => {
          const badges: WowSpecBadge[] =
            spec.badges ??
            (spec.recommended === undefined
              ? []
              : [
                  {
                    label: spec.recommended ? 'Recomendado' : 'No recomendado pero viable',
                    tone: spec.recommended ? 'yes' : 'situational',
                  },
                ])

          return (
            <Link
              key={spec.slug}
              to={`/clase/${wowClass.slug}/${spec.slug}`}
              className="role-panel"
              data-role={spec.role}
              aria-label={`Ver guía de ${spec.name}, ${roleLabels[spec.role]} de ${wowClass.name}`}
            >
              {badges.length > 0 && (
                <span className="role-panel__badges">
                  {badges.map((badge) => (
                    <span
                      key={badge.label}
                      className={`role-panel__badge role-panel__badge--${badge.tone}`}
                    >
                      {badge.label}
                    </span>
                  ))}
                </span>
              )}
              <span className="role-panel__icon">
                <img
                  src={`${import.meta.env.BASE_URL}icons/specs/${spec.icon}.jpg`}
                  alt=""
                  width={40}
                  height={40}
                  loading="lazy"
                />
              </span>
              <p className="role-panel__role">
                <RoleIcon role={spec.role} />
                {roleLabels[spec.role]}
              </p>
              <h3 className="role-panel__name">{spec.name}</h3>
              <span className="role-panel__cta">
                Ver guía
                <ArrowIcon />
              </span>
            </Link>
          )
        })}
      </div>
    </article>
  )
}
