import { useEffect, useState } from 'react'
import type { CSSProperties, FocusEvent, KeyboardEvent, MouseEvent } from 'react'
import type { WowGlyphSlot } from '../../types/wow'
import '../../styles/spec-sections.css'

interface GlyphsSectionProps {
  glyphs: WowGlyphSlot[]
}

interface GlyphTooltip {
  glyph: WowGlyphSlot
  x: number
  y: number
  below: boolean
}

const groups = [
  { type: 'major', title: 'Mayores' },
  { type: 'minor', title: 'Menores' },
] as const

const TOOLTIP_HALF_WIDTH = 160

export function GlyphsSection({ glyphs }: GlyphsSectionProps) {
  const [tooltip, setTooltip] = useState<GlyphTooltip | null>(null)

  useEffect(() => {
    if (!tooltip) return

    const hide = () => setTooltip(null)
    window.addEventListener('scroll', hide, { passive: true })
    window.addEventListener('resize', hide)

    return () => {
      window.removeEventListener('scroll', hide)
      window.removeEventListener('resize', hide)
    }
  }, [tooltip])

  function showGlyph(glyph: WowGlyphSlot, element: HTMLElement) {
    if (!glyph.description) return

    const rect = element.getBoundingClientRect()
    const half = Math.min(TOOLTIP_HALF_WIDTH, (window.innerWidth - 24) / 2)
    const center = rect.left + rect.width / 2
    const below = rect.top < 240

    setTooltip({
      glyph,
      x: Math.min(Math.max(center, half + 12), window.innerWidth - half - 12),
      y: below ? rect.bottom : rect.top,
      below,
    })
  }

  return (
    <section className="spec-section">
      <h2 className="spec-section__title">Glifos</h2>

      <div className="glyph-groups">
        {groups.map(({ type, title }) => (
          <div className="glyph-group" key={type}>
            <p className="glyph-group__title">{title}</p>
            <ul className="glyph-slots">
              {glyphs
                .filter((glyph) => glyph.type === type)
                .map((glyph, index) => (
                  <li
                    className={`glyph-slot${glyph.name ? '' : ' glyph-slot--empty'}${glyph.description ? ' glyph-slot--info' : ''}`}
                    key={`${type}-${index}`}
                    tabIndex={glyph.description ? 0 : undefined}
                    aria-describedby={
                      tooltip?.glyph === glyph ? 'glyph-tooltip' : undefined
                    }
                    onMouseEnter={(event: MouseEvent<HTMLLIElement>) =>
                      showGlyph(glyph, event.currentTarget)
                    }
                    onFocus={(event: FocusEvent<HTMLLIElement>) =>
                      showGlyph(glyph, event.currentTarget)
                    }
                    onMouseLeave={() => setTooltip(null)}
                    onBlur={() => setTooltip(null)}
                    onKeyDown={(event: KeyboardEvent<HTMLLIElement>) => {
                      if (event.key === 'Escape') setTooltip(null)
                    }}
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}glyphs/${glyph.icon}.jpg`}
                      alt=""
                      width={48}
                      height={48}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="glyph-slot__name">
                      {glyph.name ?? 'Por definir'}
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>

      {tooltip && (
        <div
          id="glyph-tooltip"
          role="tooltip"
          className={`glyph-tooltip${tooltip.below ? ' glyph-tooltip--below' : ''}`}
          style={{ left: tooltip.x, top: tooltip.y } as CSSProperties}
        >
          <p className="glyph-tooltip__name">{tooltip.glyph.name}</p>
          <p className="glyph-tooltip__type">
            {tooltip.glyph.type === 'major' ? 'Glifo mayor' : 'Glifo menor'}
          </p>
          <p className="glyph-tooltip__desc">{tooltip.glyph.description}</p>
        </div>
      )}
    </section>
  )
}
