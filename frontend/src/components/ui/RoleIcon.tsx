import type { WowRole } from '../../types/wow'

interface RoleIconProps {
  role: WowRole
  className?: string
}

export function RoleIcon({ role, className }: RoleIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {role === 'Tanque' && (
        <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" />
      )}
      {role === 'Healer' && (
        <path d="M12 20s-7-4.35-7-9a4 4 0 017-2.65A4 4 0 0119 11c0 4.65-7 9-7 9z" />
      )}
      {role === 'DPS' && (
        <>
          <path d="M12 2.5l2.4 2.4v8.1l-2.4 2.5-2.4-2.5V4.9L12 2.5z" />
          <path d="M7.5 13.5h9" />
          <path d="M12 15.5v4.5" />
          <path d="M9.5 20.5h5" />
        </>
      )}
    </svg>
  )
}
