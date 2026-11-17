import { useEffect, useState } from 'react'
import type {
  CSSProperties,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
} from 'react'
import type { WowTalent, WowTalentTree } from '../../types/wow'
import '../../styles/talent-tree.css'

interface TalentTreeProps {
  trees: WowTalentTree[]
}

interface TalentTooltip {
  talent: WowTalent
  x: number
  y: number
  below: boolean
}

interface TreeLinks {
  width: number
  height: number
  arrows: {
    id: string
    points: string
    head: string
    muted: boolean
  }[]
}

const TOOLTIP_HALF_WIDTH = 168
const CELL = 100
const CELL_GAP = 29
const EDGE_OFFSET = 53
const HEAD_LENGTH = 16
const HEAD_HALF_WIDTH = 10

function cellCenter(row: number, col: number) {
  return {
    x: col * (CELL + CELL_GAP) + CELL / 2,
    y: row * (CELL + CELL_GAP) + CELL / 2,
  }
}

function arrowHead(tipX: number, tipY: number, dirX: number, dirY: number) {
  const baseX = tipX - dirX * HEAD_LENGTH
  const baseY = tipY - dirY * HEAD_LENGTH

  return {
    baseX,
    baseY,
    head: `${tipX},${tipY} ${baseX - dirY * HEAD_HALF_WIDTH},${baseY + dirX * HEAD_HALF_WIDTH} ${baseX + dirY * HEAD_HALF_WIDTH},${baseY - dirX * HEAD_HALF_WIDTH}`,
  }
}

function buildArrow(from: { x: number; y: number }, to: { x: number; y: number }) {
  if (from.y === to.y) {
    const dirX = to.x > from.x ? 1 : -1
    const startX = from.x + dirX * EDGE_OFFSET
    const tipX = to.x - dirX * EDGE_OFFSET
    const { baseX, head } = arrowHead(tipX, from.y, dirX, 0)

    return {
      points: `${startX},${from.y} ${baseX},${from.y}`,
      head,
    }
  }

  if (from.x === to.x) {
    const dirY = to.y > from.y ? 1 : -1
    const startY = from.y + dirY * EDGE_OFFSET
    const tipY = to.y - dirY * EDGE_OFFSET
    const { baseY, head } = arrowHead(from.x, tipY, 0, dirY)

    return {
      points: `${from.x},${startY} ${from.x},${baseY}`,
      head,
    }
  }

  const dirX = to.x > from.x ? 1 : -1
  const dirY = to.y > from.y ? 1 : -1
  const startX = from.x + dirX * EDGE_OFFSET
  const tipY = to.y - dirY * EDGE_OFFSET
  const { baseY, head } = arrowHead(to.x, tipY, 0, dirY)

  return {
    points: `${startX},${from.y} ${to.x},${from.y} ${to.x},${baseY}`,
    head,
  }
}

function buildLinks(talents: WowTalent[]): TreeLinks {
  const maxRow = talents.reduce((max, talent) => Math.max(max, talent.row), 0)
  const byPosition = new Map(
    talents.map((talent) => [`${talent.row}-${talent.col}`, talent]),
  )

  const arrows: TreeLinks['arrows'] = []
  for (const talent of talents) {
    for (const requirement of talent.requires ?? []) {
      const arrow = buildArrow(
        cellCenter(requirement.row, requirement.col),
        cellCenter(talent.row, talent.col),
      )
      const source = byPosition.get(`${requirement.row}-${requirement.col}`)

      arrows.push({
        id: `${requirement.row}-${requirement.col}-${talent.row}-${talent.col}`,
        ...arrow,
        muted:
          (source?.points ?? 0) === 0 || (talent.points ?? 0) === 0,
      })
    }
  }

  return {
    width: 4 * CELL + 3 * CELL_GAP,
    height: (maxRow + 1) * CELL + maxRow * CELL_GAP,
    arrows,
  }
}

export function TalentTree({ trees }: TalentTreeProps) {
  const [tooltip, setTooltip] = useState<TalentTooltip | null>(null)

  useEffect(() => {
    if (!tooltip) return

    const hide = () => setTooltip(null)
    window.addEventListener('scroll', hide, { passive: true })
    window.addEventListener('resize', hide)

    return () => {
      window.removeEventListener('scroll', hide)
      window.removeEventListener('resize', hide)
    }
  }, [tooltip])

  function showTalent(talent: WowTalent, element: HTMLElement) {
    const rect = element.getBoundingClientRect()
    const half = Math.min(TOOLTIP_HALF_WIDTH, (window.innerWidth - 24) / 2)
    const center = rect.left + rect.width / 2

    setTooltip({
      talent,
      x: Math.min(Math.max(center, half + 12), window.innerWidth - half - 12),
      y: rect.top < 240 ? rect.bottom : rect.top,
      below: rect.top < 240,
    })
  }

  return (
    <div className="talent-trees">
      {trees.map((tree) => {
        const links = buildLinks(tree.talents)

        return (
          <div
            className="talent-tree"
            key={tree.slug}
            style={
              {
                '--tree-bg': `url(${import.meta.env.BASE_URL}talents/tree_warrior_${tree.slug}.jpg)`,
              } as CSSProperties
            }
          >
            <div className="talent-tree__header">
              <p className="talent-tree__title">{tree.name}</p>
              <p className="talent-tree__count">
                {tree.talents.length} talentos
              </p>
            </div>

            <div className="talent-tree__plot">
              <svg
                className="talent-tree__links"
                viewBox={`0 0 ${links.width} ${links.height}`}
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {links.arrows.map((arrow) => (
                  <g
                    key={arrow.id}
                    className={`talent-tree__link${arrow.muted ? ' talent-tree__link--muted' : ''}`}
                  >
                    <polyline
                      points={arrow.points}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={7}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polygon points={arrow.head} fill="currentColor" />
                  </g>
                ))}
              </svg>

              <div className="talent-tree__grid">
                {tree.talents.map((talent) => {
                  const points = talent.points ?? 0
                  const state =
                    points === 0
                      ? 'talent-node--empty'
                      : points >= talent.maxRank
                        ? 'talent-node--max'
                        : 'talent-node--partial'

                  return (
                    <button
                      key={`${talent.row}-${talent.col}`}
                      type="button"
                      className={`talent-node ${state}`}
                      style={
                        {
                          gridRow: talent.row + 1,
                          gridColumn: talent.col + 1,
                        } as CSSProperties
                      }
                      aria-label={`${talent.name}, ${points} de ${talent.maxRank} puntos`}
                      aria-describedby={
                        tooltip?.talent === talent
                          ? 'talent-tooltip'
                          : undefined
                      }
                      onMouseEnter={(event: MouseEvent<HTMLButtonElement>) =>
                        showTalent(talent, event.currentTarget)
                      }
                      onFocus={(event: FocusEvent<HTMLButtonElement>) =>
                        showTalent(talent, event.currentTarget)
                      }
                      onMouseLeave={() => setTooltip(null)}
                      onBlur={() => setTooltip(null)}
                      onClick={(event) =>
                        showTalent(talent, event.currentTarget)
                      }
                      onKeyDown={(event: KeyboardEvent<HTMLButtonElement>) => {
                        if (event.key === 'Escape') setTooltip(null)
                      }}
                    >
                      <img
                        src={`${import.meta.env.BASE_URL}talents/${talent.icon}.jpg`}
                        alt=""
                        width={48}
                        height={48}
                        loading="lazy"
                        decoding="async"
                      />
                      {points > 0 && (
                        <span className="talent-node__rank">{points}</span>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        )
      })}

      {tooltip && (
        <div
          id="talent-tooltip"
          role="tooltip"
          className={`talent-tooltip${tooltip.below ? ' talent-tooltip--below' : ''}`}
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          <p className="talent-tooltip__name">{tooltip.talent.name}</p>
          <p className="talent-tooltip__rank">
            Puntos: {tooltip.talent.points ?? 0} / {tooltip.talent.maxRank}
          </p>
          <p className="talent-tooltip__desc">{tooltip.talent.description}</p>
        </div>
      )}
    </div>
  )
}
