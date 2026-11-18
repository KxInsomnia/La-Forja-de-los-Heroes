import { BackLink } from '../components/ui/BackLink'
import { GuideCard } from '../components/home/GuideCard'
import '../styles/general.css'

export function GeneralPage() {
  return (
    <section className="content-page">
      <BackLink />
      <header className="content-page__header">
        <p className="content-page__kicker">Guías</p>
        <h1 className="content-page__title">General</h1>
        <p className="content-page__desc">
          Referencias comunes para todas las clases.
        </p>
      </header>
      <div className="general-links">
        <GuideCard
          to="/general/buffs"
          variant="buffs"
          kicker="General"
          title="Buffs"
          status="En trabajo"
          color="#8cc8ff"
        />
        <GuideCard
          to="/general/debuffs"
          variant="debuffs"
          kicker="General"
          title="Debuffs"
          status="En trabajo"
          color="#f4c56b"
        />
      </div>
    </section>
  )
}
