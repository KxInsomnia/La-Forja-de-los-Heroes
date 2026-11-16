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
          <path d="M12 2l2.5 2.5L12 16l-2.5-11.5L12 2z" />
          <path d="M8 16h8" />
          <path d="M12 16v6" />
        </>
      )}
    </svg>
  )
}
