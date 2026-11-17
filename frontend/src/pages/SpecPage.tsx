import type { CSSProperties } from 'react'
import { useParams } from 'react-router-dom'
import { BackLink } from '../components/ui/BackLink'
import { GlyphsSection } from '../components/spec/GlyphsSection'
import { StatsSection } from '../components/spec/StatsSection'
import { TalentTree } from '../components/talents/TalentTree'
import { getSpecBuild } from '../data/builds'
import { getClassBySlug } from '../data/classes'
import { getTalentTrees } from '../data/talents'
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
  const talentTrees =
    wowClass && spec ? getTalentTrees(wowClass.slug, spec.slug) : undefined
  const build = wowClass && spec ? getSpecBuild(wowClass.slug, spec.slug) : undefined
  const renderedSections = new Set<string>()
  if (talentTrees) renderedSections.add('Talentos')
  if (build) {
    renderedSections.add('Glifos')
    renderedSections.add('Estadísticas')
  }
  const sections = guideSections.filter(
    (section) => !renderedSections.has(section),
  )

  if (!wowClass || !spec) {
    return (
      <div className="spec-page">
        <BackLink to="/pve" label="Volver a las clases" />
        <p className="spec-page__kicker">Guía no encontrada</p>
        <h1 className="spec-page__title">Esta guía no existe</h1>
        <p className="spec-page__desc">
          Revisa la URL o vuelve al inicio para elegir una clase.
        </p>
      </div>
    )
  }

  return (
    <article
      className="spec-page"
      style={{ '--class-color': wowClass.color } as CSSProperties}
    >
      <BackLink to="/pve" label="Volver a las clases" />
      <p className="spec-page__kicker">
        {wowClass.name} · {roleLabels[spec.role]}
      </p>
      <h1 className="spec-page__title">{spec.name}</h1>
      {spec.description && (
        <p className="spec-page__desc">{spec.description}</p>
      )}

      <ul className="spec-page__sections">
        {sections.map((section) => (
          <li key={section} className="spec-page__section">
            {section}
          </li>
        ))}
      </ul>

      {talentTrees && (
        <section className="spec-page__talents">
          <div className="spec-page__talents-head">
            <h2 className="spec-page__talents-title">Talentos</h2>
          </div>
          <TalentTree trees={talentTrees} />
        </section>
      )}

      {build && (
        <>
          <GlyphsSection glyphs={build.glyphs} />
          <StatsSection stats={build.stats} priority={build.priority} />
        </>
      )}
    </article>
  )
}
