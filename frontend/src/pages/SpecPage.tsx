import { Fragment, useState } from 'react'
import type { CSSProperties } from 'react'
import { useParams } from 'react-router-dom'
import { BackLink } from '../components/ui/BackLink'
import { GlyphsSection } from '../components/spec/GlyphsSection'
import { PetSection } from '../components/spec/PetSection'
import { RotationSection } from '../components/spec/RotationSection'
import { StatsSection } from '../components/spec/StatsSection'
import { TipsSection } from '../components/spec/TipsSection'
import { TalentTree } from '../components/talents/TalentTree'
import { getSpecBuilds } from '../data/builds'
import { getClassBySlug } from '../data/classes'
import { getTalentAllocations, getTalentTrees } from '../data/talents'
import { roleLabels } from '../lib/wow'

const guideSections = [
  'Talentos',
  'Glifos',
  'Estadísticas',
  'Rotación',
  'Consejos',
  'Mascota',
] as const

const sectionAnchors: Record<(typeof guideSections)[number], string> = {
  Talentos: 'talentos',
  Glifos: 'glifos',
  Estadísticas: 'estadisticas',
  Rotación: 'rotacion',
  Consejos: 'consejos',
  Mascota: 'mascota',
}

function renderNoticeText(text: string, highlight?: string) {
  if (!highlight) return text

  const parts = text.split(highlight)
  return parts.map((part, index) => (
    <Fragment key={index}>
      {part}
      {index < parts.length - 1 && (
        <span className="spec-notice__highlight">{highlight}</span>
      )}
    </Fragment>
  ))
}

export function SpecPage() {
  const { classSlug, specSlug } = useParams()
  const routeKey = `${classSlug ?? ''}/${specSlug ?? ''}`
  const [buildSelection, setBuildSelection] = useState({
    key: routeKey,
    index: 0,
  })
  const activeBuildIndex =
    buildSelection.key === routeKey ? buildSelection.index : 0
  const wowClass = classSlug ? getClassBySlug(classSlug) : undefined
  const spec = wowClass?.specs.find((item) => item.slug === specSlug)
  const builds = wowClass && spec ? getSpecBuilds(wowClass.slug, spec.slug) : []
  const activeBuild = builds[activeBuildIndex] ?? builds[0]
  const canShowPet = classSlug === 'cazador' && Boolean(activeBuild?.pet)
  const allocations =
    activeBuild?.allocations ??
    (wowClass && spec
      ? getTalentAllocations(wowClass.slug, spec.slug)
      : undefined)
  const talentTrees =
    wowClass && spec
      ? getTalentTrees(wowClass.slug, spec.slug, activeBuild?.allocations)
      : undefined
  const hasAllocations =
    allocations !== undefined && Object.keys(allocations).length > 0
  const renderedSections = new Set<string>()
  if (talentTrees) renderedSections.add('Talentos')
  if (activeBuild) {
    renderedSections.add('Glifos')
    renderedSections.add('Estadísticas')
    if (activeBuild.rotation) renderedSections.add('Rotación')
    if (activeBuild.tips) renderedSections.add('Consejos')
    if (canShowPet) renderedSections.add('Mascota')
  }
  const sections = guideSections.filter((section) =>
    renderedSections.has(section),
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

      {sections.length > 0 && (
        <nav aria-label="Secciones de la guía">
          <ul className="spec-page__sections">
            {sections.map((section) => (
              <li key={section} className="spec-page__section">
                <a
                  className="spec-page__section-link"
                  href={`#${sectionAnchors[section]}`}
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {talentTrees && (
        <section
          id="talentos"
          className="spec-page__talents"
          tabIndex={-1}
        >
          <div className="spec-page__talents-head">
            <h2 className="spec-page__talents-title">Talentos</h2>
            {builds.length > 1 && (
              <div
                className="spec-page__variations"
                role="group"
                aria-label="Variaciones de build"
              >
                {builds.map((variation, index) => (
                  <button
                    key={variation.label}
                    type="button"
                    className={`spec-page__variation${
                      index === activeBuildIndex
                        ? ' spec-page__variation--active'
                        : ''
                    }`}
                    aria-pressed={index === activeBuildIndex}
                    onClick={() => setBuildSelection({ key: routeKey, index })}
                  >
                    {variation.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          {activeBuild?.notice && (
            <div
              className={`spec-notice${
                activeBuild.noticeTone === 'danger' ? ' spec-notice--danger' : ''
              }`}
              role="note"
            >
              <p className="spec-notice__title">
                {activeBuild.noticeTitle ??
                  'Antes de elegir esta especialización'}
              </p>
              <div className="spec-notice__body">
                {activeBuild.noticeIcons && activeBuild.noticeIcons.length > 0 && (
                  <span className="spec-notice__icons" aria-hidden="true">
                    {activeBuild.noticeIcons.map((icon) => (
                      <img
                        key={icon}
                        src={`${import.meta.env.BASE_URL}${
                          icon.includes('/') ? icon : `talents/${icon}.jpg`
                        }`}
                        alt=""
                        width={20}
                        height={20}
                        loading="lazy"
                        decoding="async"
                      />
                    ))}
                  </span>
                )}
                <p className="spec-notice__text">
                  {renderNoticeText(
                    activeBuild.notice,
                    activeBuild.noticeHighlight,
                  )}
                </p>
              </div>
            </div>
          )}
          <TalentTree
            trees={talentTrees}
            classSlug={wowClass.slug}
            highlightAll={!hasAllocations}
          />
        </section>
      )}

      {activeBuild && (
        <>
          <div id="glifos" className="spec-page__section-target" tabIndex={-1}>
            <GlyphsSection
              key={`${routeKey}-${activeBuildIndex}`}
              glyphs={activeBuild.glyphs}
            />
          </div>
          <div id="estadisticas" className="spec-page__section-target" tabIndex={-1}>
            <StatsSection
              stats={activeBuild.stats}
              priority={activeBuild.priority}
              priorityGroups={activeBuild.priorityGroups}
              notice={activeBuild.statsNotice}
              noticeTitle={activeBuild.statsNoticeTitle}
            />
          </div>
          {activeBuild.rotation && (
            <div id="rotacion" className="spec-page__section-target" tabIndex={-1}>
              <RotationSection
                rotation={activeBuild.rotation}
                rotationNotice={activeBuild.rotationNotice}
              />
            </div>
          )}
          {activeBuild.tips && (
            <div id="consejos" className="spec-page__section-target" tabIndex={-1}>
              <TipsSection tips={activeBuild.tips} />
            </div>
          )}
          {canShowPet && activeBuild?.pet && (
            <div id="mascota" className="spec-page__section-target" tabIndex={-1}>
              <PetSection pet={activeBuild.pet} />
            </div>
          )}
        </>
      )}
    </article>
  )
}
