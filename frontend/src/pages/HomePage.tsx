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
          available
          color="#8cc8ff"
        />
      </div>
    </section>
  )
}
