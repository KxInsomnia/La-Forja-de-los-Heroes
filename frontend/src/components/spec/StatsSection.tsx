import type { WowStatPriorityGroup, WowStatRow } from '../../types/wow'
import '../../styles/spec-sections.css'

interface StatsSectionProps {
  stats: WowStatRow[]
  priority?: string[]
  priorityGroups?: WowStatPriorityGroup[]
  notice?: string
  noticeTitle?: string
}

function StatPriorityChain({ stats }: { stats: string[] }) {
  return (
    <ol className="stats-priority__chain">
      {stats.map((stat, index) => (
        <li className="stats-priority__item" key={`${stat}-${index}`}>
          {stat}
          {index < stats.length - 1 && (
            <span className="stats-priority__sep" aria-hidden="true">
              {'>'}
            </span>
          )}
        </li>
      ))}
    </ol>
  )
}

export function StatsSection({
  stats,
  priority,
  priorityGroups,
  notice,
  noticeTitle,
}: StatsSectionProps) {
  const hasStats = stats.length > 0

  return (
    <section className="spec-section">
      <h2 className="spec-section__title">
        {hasStats ? 'Estadísticas' : 'Prioridad de estadísticas'}
      </h2>

      {hasStats && (
        <div className="stats-panel">
          <table className="stats-table">
            <thead>
              <tr>
                <th scope="col">Estadística</th>
                <th scope="col">Cap</th>
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
      )}

      {priority && priority.length > 0 && (
        <div className="stats-priority">
          {hasStats && (
            <h3 className="stats-priority__title">
              Orden de prioridad de estadísticas
            </h3>
          )}
          <StatPriorityChain stats={priority} />
          {notice && (
            <div className="spec-notice" role="note">
              <p className="spec-notice__title">{noticeTitle ?? 'Nota de la build'}</p>
              <div className="spec-notice__body">
                <p className="spec-notice__text">{notice}</p>
              </div>
            </div>
          )}
        </div>
      )}

      {priorityGroups && priorityGroups.length > 0 && (
        <div className="stats-priority-groups">
          {priorityGroups.map((group) => (
            <div className="stats-priority" key={group.title}>
              <h3 className="stats-priority__title">{group.title}</h3>
              {group.stats.length > 0 && <StatPriorityChain stats={group.stats} />}
              {group.notes && group.notes.length > 0 && (
                <ul className="stats-priority__notes">
                  {group.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
