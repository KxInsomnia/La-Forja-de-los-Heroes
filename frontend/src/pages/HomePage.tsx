import { GuideCard } from '../components/home/GuideCard'
import '../styles/home.css'

export function HomePage() {
  return (
    <section className="home">
      <div className="home__grid">
        <GuideCard
          to="/general"
          variant="general"
          kicker="Guías"
          title="General"
          status="Buffs y Debuffs"
          available
          color="#c4b5fd"
        />
        <GuideCard
          to="/pve"
          variant="pve"
          kicker="Guías"
          title="PvE"
          status="10 clases disponibles"
          available
          color="#8cc8ff"
        />
        <GuideCard
          to="/pvp"
          variant="pvp"
          kicker="Guías"
          title="PvP"
          status="En trabajo"
          color="#fb7185"
        />
        <GuideCard
          to="/bandas"
          variant="raid"
          kicker="Guías"
          title="Bandas"
          status="En trabajo"
          color="#d9b877"
        />
      </div>
    </section>
  )
}
