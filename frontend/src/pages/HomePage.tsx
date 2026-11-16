import { ClassCard } from '../components/classes/ClassCard'
import { classes } from '../data/classes'

export function HomePage() {
  return (
    <div className="home">
      {classes.map((wowClass) => (
        <ClassCard key={wowClass.slug} wowClass={wowClass} />
      ))}
    </div>
  )
}
