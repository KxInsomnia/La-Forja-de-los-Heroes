import { ClassCard } from '../components/classes/ClassCard'
import { BackLink } from '../components/ui/BackLink'
import { warrior } from '../data/classes/warrior'

export function PvePage() {
  return (
    <section className="content-page">
      <BackLink />
      <header className="content-page__header">
        <p className="content-page__kicker">Guías</p>
        <h1 className="content-page__title">PvE</h1>
      </header>
      <ClassCard wowClass={warrior} />
    </section>
  )
}
