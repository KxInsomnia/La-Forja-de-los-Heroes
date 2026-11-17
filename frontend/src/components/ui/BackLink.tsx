import { Link } from 'react-router-dom'
import '../../styles/back-link.css'

interface BackLinkProps {
  to?: string
  label?: string
  className?: string
}

export function BackLink({
  to = '/',
  label = 'Volver al inicio',
  className,
}: BackLinkProps) {
  return (
    <Link
      className={`back-link${className ? ` ${className}` : ''}`}
      to={to}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M19 12H5M11 18l-6-6 6-6" />
      </svg>
      {label}
    </Link>
  )
}
