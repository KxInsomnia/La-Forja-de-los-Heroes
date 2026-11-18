import { Link } from 'react-router-dom'
import type { WowBuildTip } from '../../types/wow'
import '../../styles/spec-sections.css'

interface TipsSectionProps {
  tips: (string | WowBuildTip)[]
}

function getIconSrc(icon: string): string {
  if (icon.includes('/')) return `${import.meta.env.BASE_URL}${icon}`
  return `${import.meta.env.BASE_URL}talents/${icon}.jpg`
}

export function TipsSection({ tips }: TipsSectionProps) {
  return (
    <section className="spec-section">
      <h2 className="spec-section__title">Consejos</h2>

      <ul className="tips-list">
        {tips.map((tip) => {
          const content = typeof tip === 'string' ? { text: tip } : tip

          return (
            <li className="tips-item" key={content.text}>
              <span className="tips-item__dot" aria-hidden="true" />
              {content.icons && content.icons.length > 0 && (
                <span className="tips-item__icons" aria-hidden="true">
                  {content.icons.map((icon) => (
                    <img
                      key={icon}
                      src={getIconSrc(icon)}
                      alt=""
                      width={20}
                      height={20}
                      loading="lazy"
                      decoding="async"
                    />
                  ))}
                </span>
              )}
              <span className="tips-item__text">
                {content.text}
                {content.link && (
                  <Link className="tips-item__link" to={content.link.to}>
                    {content.link.label}
                  </Link>
                )}
              </span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
