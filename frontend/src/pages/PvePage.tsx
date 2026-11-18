import type { CSSProperties } from 'react'
import { ClassCard } from '../components/classes/ClassCard'
import { BackLink } from '../components/ui/BackLink'
import { classes } from '../data/classes'

export function PvePage() {
  return (
    <section className="content-page">
      <BackLink />
      <header className="content-page__header">
        <p className="content-page__kicker">Guías</p>
        <h1 className="content-page__title">PvE</h1>
      </header>
      <nav className="class-nav" aria-label="Ir a una clase">
        {classes.map((wowClass) => (
          <a
            key={wowClass.slug}
            className="class-nav__item"
            href={`#clase-${wowClass.slug}`}
            data-name={wowClass.name}
            aria-label={wowClass.name}
            style={{ '--class-color': wowClass.color } as CSSProperties}
          >
            <img
              src={`${import.meta.env.BASE_URL}icons/classes/${wowClass.icon}.jpg`}
              alt=""
              width={34}
              height={34}
            />
          </a>
        ))}
      </nav>
      {classes.map((wowClass) => (
        <ClassCard key={wowClass.slug} wowClass={wowClass} />
      ))}
    </section>
  )
}
