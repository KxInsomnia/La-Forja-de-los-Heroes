import type { WowStatRow } from '../../types/wow'
import '../../styles/spec-sections.css'

interface StatsSectionProps {
  stats: WowStatRow[]
  priority?: string[]
}

export function StatsSection({ stats, priority }: StatsSectionProps) {
  return (
    <section className="spec-section">
      <h2 className="spec-section__title">Estadísticas</h2>

      <div className="stats-panel">
        <table className="stats-table">
          <thead>
            <tr>
              <th scope="col">Estadística</th>
              <th scope="col">Valor</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((row) => (
              <tr key={row.label}>
                <th scope="row">
                  <span className="stats-table__label">{row.label}</span>
                  {row.note && (
                    <span className="stats-table__note">{row.note}</span>
                  )}
                </th>
                <td>{row.value ?? '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {priority && priority.length > 0 && (
        <div className="stats-priority">
          <h3 className="stats-priority__title">
            Orden de prioridad de estadísticas
          </h3>
          <ol className="stats-priority__chain">
            {priority.map((stat, index) => (
              <li className="stats-priority__item" key={stat}>
                {stat}
                {index < priority.length - 1 && (
                  <span className="stats-priority__sep" aria-hidden="true">
                    {'>'}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      )}
    </section>
  )
}
