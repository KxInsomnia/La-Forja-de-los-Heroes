import type { WowRole } from '../../types/wow'

interface RoleIconProps {
  role: WowRole
  className?: string
}

const roleIcons: Record<WowRole, string> = {
  Tanque: 'tank',
  Healer: 'healer',
  DPS: 'dps',
}

export function RoleIcon({ role, className }: RoleIconProps) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}icons/roles/${roleIcons[role]}.png`}
      alt=""
      className={className}
      width={20}
      height={20}
      aria-hidden="true"
    />
  )
}
