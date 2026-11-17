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
          description="Especializaciones, talentos, glifos, estadísticas y rotaciones para cada clase."
          status="Guerrero disponible"
          available
          color="#8cc8ff"
        />
        <GuideCard
          to="/pvp"
          variant="pvp"
          kicker="Guías"
          title="PvP"
          description="Arena y campos de batalla: builds, combinaciones y estrategias."
          status="En trabajo"
          color="#fb7185"
        />
        <GuideCard
          to="/bandas"
          variant="raid"
          kicker="Guías"
          title="Bandas"
          description="Encuentros, composiciones y consejos para cada raid de Wrath."
          status="En trabajo"
          color="#d9b877"
        />
      </div>
    </section>
  )
}
