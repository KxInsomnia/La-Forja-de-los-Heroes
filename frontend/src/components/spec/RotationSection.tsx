import { Link } from 'react-router-dom'
import type { WowRotation, WowRotationNotice } from '../../types/wow'
import '../../styles/spec-sections.css'

interface RotationSectionProps {
  rotation: WowRotation
  rotationNotice?: string | WowRotationNotice
}

function RotationNotice({
  notice,
}: {
  notice: string | WowRotationNotice
}) {
  if (typeof notice === 'string') {
    return (
      <div className="rotation-notice" role="note">
        {notice}
      </div>
    )
  }

  return (
    <div
      className={`rotation-notice rotation-notice--${notice.tone ?? 'blue'}`}
      role="note"
    >
      {notice.text && <p className="rotation-notice__text">{notice.text}</p>}
      {notice.items && notice.items.length > 0 && (
        <ul className="rotation-notice__list">
          {notice.items.map((item) => (
            <li key={item.text}>
              {item.icons && item.icons.length > 0 && (
                <span className="rotation-notice__icons" aria-hidden="true">
                  {item.icons.map((icon) => (
                    <img
                      key={icon}
                      src={`${import.meta.env.BASE_URL}talents/${icon}.jpg`}
                      alt=""
                      width={18}
                      height={18}
                      loading="lazy"
                      decoding="async"
                    />
                  ))}
                </span>
              )}
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      )}
      {notice.link && (
        <Link className="rotation-notice__link" to={notice.link.to}>
          {notice.link.label}
        </Link>
      )}
    </div>
  )
}

export function RotationSection({
  rotation,
  rotationNotice,
}: RotationSectionProps) {
  return (
    <section className="spec-section">
      <h2 className="spec-section__title">Rotación</h2>

      {rotationNotice && <RotationNotice notice={rotationNotice} />}

      <div className="rotation-groups">
        {rotation.groups.map((group) => (
          <div
            className={`rotation-group${group.steps.length === 0 ? ' rotation-group--divider' : ''}`}
            key={group.title}
          >
            <h3 className="rotation-group__title">{group.title}</h3>
            {group.steps.length > 0 && (
              <ol className="rotation-list">
                {group.steps.map((step, index) => (
                  <li className="rotation-step" key={step.label}>
                    <span className="rotation-step__index" aria-hidden="true">
                      {index + 1}
                    </span>
                    <div className="rotation-step__body">
                      <div className="rotation-step__head">
                        {step.icons && step.icons.length > 0 && (
                          <span className="rotation-step__icons" aria-hidden="true">
                            {step.icons.map((icon) => (
                              <img
                                key={icon}
                                src={`${import.meta.env.BASE_URL}talents/${icon}.jpg`}
                                alt=""
                                width={24}
                                height={24}
                                loading="lazy"
                                decoding="async"
                              />
                            ))}
                          </span>
                        )}
                        <span className="rotation-step__label">{step.label}</span>
                      </div>
                      {step.note && (
                        <span className="rotation-step__note">{step.note}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
