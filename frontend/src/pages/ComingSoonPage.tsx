import { BackLink } from '../components/ui/BackLink'

interface ComingSoonPageProps {
  title: string
  backTo?: string
  backLabel?: string
}

export function ComingSoonPage({
  title,
  backTo,
  backLabel,
}: ComingSoonPageProps) {
  return (
    <section className="content-page">
      <BackLink to={backTo} label={backLabel} />
      <div className="coming-soon">
        <p className="coming-soon__badge">En trabajo</p>
        <h1 className="content-page__title">{title}</h1>
        <p className="content-page__desc">
          Estamos preparando esta sección. Vuelve pronto para ver el contenido.
        </p>
      </div>
    </section>
  )
}
