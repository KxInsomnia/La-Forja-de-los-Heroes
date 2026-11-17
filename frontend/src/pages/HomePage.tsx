import { GuideCard } from '../components/home/GuideCard'
import '../styles/home.css'

export function HomePage() {
  return (
    <section className="home">
      <div className="home__grid">
        <GuideCard
          to="/pve"
          variant="pve"
          kicker="Guías"
          title="PvE"
          status="Guerrero disponible"
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
