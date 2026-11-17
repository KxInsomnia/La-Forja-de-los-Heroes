import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/guide-card.css'

type GuideVariant = 'pve' | 'pvp' | 'raid'

interface GuideCardProps {
  to: string
  variant: GuideVariant
  kicker: string
  title: string
  description: string
  status: string
  available?: boolean
  color: string
}

function GuideIcon({ variant }: { variant: GuideVariant }) {
  if (variant === 'pve') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 3h11a2 2 0 0 1 2 2v14a2 2 0 0 0 2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
        <path d="M9 7h6M9 11h6M9 15h4" />
      </svg>
    )
  }

  if (variant === 'pvp') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14.5 17.5 3 6V3h3l11.5 11.5" />
        <path d="M13 19l6-6" />
        <path d="M16 16l4 4" />
        <path d="M19 21l2-2" />
        <path d="M9.5 17.5 21 6V3h-3L6.5 14.5" />
        <path d="M11 19l-6-6" />
        <path d="M8 16l-4 4" />
        <path d="M5 21l-2-2" />
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3.5 13.5c0-2.8 2.2-5 5-5h2.2L13.5 5l.8 3.9 3.7-1.2-1.2 3.4 3.2 1.9-3 1.4 1 3.5-3.5-1.2L12 19l-1.2-2.7H8.5c-2.8 0-5-2.2-5-5z" />
      <path d="M8 11.5h.01" />
      <path d="M8.5 15.5c1.2.3 2.4.2 3.5-.3" />
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

export function GuideCard({
  to,
  variant,
  kicker,
  title,
  description,
  status,
  available = false,
  color,
}: GuideCardProps) {
  return (
    <Link
      className="guide-card"
      to={to}
      style={{ '--guide-color': color } as CSSProperties}
    >
      <span className="guide-card__icon">
        <GuideIcon variant={variant} />
      </span>
      <p className="guide-card__kicker">{kicker}</p>
      <h2 className="guide-card__title">{title}</h2>
      <p className="guide-card__desc">{description}</p>
      <div className="guide-card__footer">
        <span
          className={`guide-card__status${available ? ' guide-card__status--available' : ''}`}
        >
          {status}
        </span>
        <span className="guide-card__cta">
          {available ? 'Explorar' : 'Ver estado'}
          <ArrowIcon />
        </span>
      </div>
    </Link>
  )
}
