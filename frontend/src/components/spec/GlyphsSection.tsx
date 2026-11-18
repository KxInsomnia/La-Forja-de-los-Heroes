import { useEffect, useState } from 'react'
import type {
  CSSProperties,
  FocusEvent,
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent,
} from 'react'
import type { WowGlyphOption, WowGlyphSlot } from '../../types/wow'
import '../../styles/spec-sections.css'

interface GlyphsSectionProps {
  glyphs: WowGlyphSlot[]
}

interface GlyphTooltip {
  glyph: WowGlyphSlot
  x: number
  y: number
}

const groups = [
  { type: 'major', title: 'Mayores' },
  { type: 'minor', title: 'Menores' },
] as const

const TOOLTIP_HALF_WIDTH = 160

export function GlyphsSection({ glyphs }: GlyphsSectionProps) {
  const [tooltip, setTooltip] = useState<GlyphTooltip | null>(null)
  const [openMenu, setOpenMenu] = useState<number | null>(null)
  const [selectedOptions, setSelectedOptions] = useState<
    Record<number, WowGlyphOption>
  >({})

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

  useEffect(() => {
    if (openMenu === null) return

    const closeIfOutside = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null
      if (
        target?.closest('.glyph-slot__menu') ||
        target?.closest('.glyph-slot--featured')
      ) {
        return
      }
      setOpenMenu(null)
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenMenu(null)
    }

    window.addEventListener('pointerdown', closeIfOutside)
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      window.removeEventListener('pointerdown', closeIfOutside)
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [openMenu])

  function showGlyph(glyph: WowGlyphSlot, element: HTMLElement) {
    if (!glyph.description) return

    const rect = element.getBoundingClientRect()
    const half = Math.min(TOOLTIP_HALF_WIDTH, (window.innerWidth - 24) / 2)
    const center = rect.left + rect.width / 2

    setTooltip({
      glyph,
      x: Math.min(Math.max(center, half + 12), window.innerWidth - half - 12),
      y: rect.top,
    })
  }

  function displayGlyph(glyph: WowGlyphSlot, index: number): WowGlyphSlot {
    const option = selectedOptions[index]
    if (!option) return glyph

    return {
      ...glyph,
      name: option.name,
      icon: option.icon,
      description: option.description,
    }
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
                .map((glyph, index) => ({ glyph, index }))
                .filter(({ glyph }) => glyph.type === type)
                .map(({ glyph, index }) => {
                  const display = displayGlyph(glyph, index)
                  const hasOptions = Boolean(glyph.options?.length)
                  const activeName = selectedOptions[index]?.name ?? glyph.name

                  return (
                    <li
                      className={`glyph-slot${glyph.name ? '' : ' glyph-slot--empty'}${glyph.description ? ' glyph-slot--info' : ''}${glyph.featured ? ' glyph-slot--featured' : ''}${openMenu === index ? ' glyph-slot--menu-open' : ''}`}
                      key={`${type}-${index}`}
                      tabIndex={glyph.description ? 0 : undefined}
                      aria-describedby={
                        tooltip?.glyph.name === display.name
                          ? 'glyph-tooltip'
                          : undefined
                      }
                      onMouseEnter={(event: MouseEvent<HTMLLIElement>) =>
                        showGlyph(display, event.currentTarget)
                      }
                      onFocus={(event: FocusEvent<HTMLLIElement>) =>
                        showGlyph(display, event.currentTarget)
                      }
                      onMouseLeave={() => setTooltip(null)}
                      onBlur={() => setTooltip(null)}
                      onClick={(event: MouseEvent<HTMLLIElement>) => {
                        if (
                          (event.target as HTMLElement).closest(
                            '.glyph-slot__menu',
                          )
                        ) {
                          return
                        }
                        if (hasOptions) {
                          setTooltip(null)
                          setOpenMenu((current) =>
                            current === index ? null : index,
                          )
                          return
                        }
                        showGlyph(display, event.currentTarget)
                      }}
                      onKeyDown={(event: ReactKeyboardEvent<HTMLLIElement>) => {
                        if (event.key === 'Escape') {
                          setTooltip(null)
                          setOpenMenu(null)
                          return
                        }
                        if (
                          hasOptions &&
                          (event.key === 'Enter' || event.key === ' ')
                        ) {
                          event.preventDefault()
                          setTooltip(null)
                          setOpenMenu((current) =>
                            current === index ? null : index,
                          )
                        }
                      }}
                    >
                      <img
                        src={`${import.meta.env.BASE_URL}glyphs/${display.icon}.jpg`}
                        alt=""
                        width={48}
                        height={48}
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="glyph-slot__name">
                        {display.name ?? 'Por definir'}
                      </span>
                      {glyph.badge && (
                        <span className="glyph-slot__badge">{glyph.badge}</span>
                      )}

                      {hasOptions && openMenu === index && (
                        <div
                          className="glyph-slot__menu"
                          role="menu"
                          aria-label="Opciones de glifo"
                        >
                          <p className="glyph-slot__menu-title">
                            Elige glifo mayor
                          </p>
                          {glyph.options?.map((option) => {
                            const active = activeName === option.name
                            return (
                              <button
                                type="button"
                                role="menuitemradio"
                                aria-checked={active}
                                key={option.name}
                                className={`glyph-slot__option${active ? ' glyph-slot__option--active' : ''}`}
                                onClick={() => {
                                  setSelectedOptions((current) => ({
                                    ...current,
                                    [index]: option,
                                  }))
                                  setOpenMenu(null)
                                  setTooltip(null)
                                }}
                              >
                                <img
                                  src={`${import.meta.env.BASE_URL}glyphs/${option.icon}.jpg`}
                                  alt=""
                                />
                                <span className="glyph-slot__option-copy">
                                  <span>{option.name}</span>
                                  {option.reason && (
                                    <span className="glyph-slot__option-reason">
                                      {option.reason}
                                    </span>
                                  )}
                                </span>
                              </button>
                            )
                          })}
                        </div>
                      )}
                    </li>
                  )
                })}
            </ul>
          </div>
        ))}
      </div>

      {tooltip && (
        <div
          id="glyph-tooltip"
          role="tooltip"
          className="glyph-tooltip"
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
