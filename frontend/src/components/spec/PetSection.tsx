import type { WowPetBuild } from '../../types/wow'
import { TalentTree } from '../talents/TalentTree'
import '../../styles/spec-sections.css'

interface PetSectionProps {
  pet: WowPetBuild
}

export function PetSection({ pet }: PetSectionProps) {
  return (
    <section className="spec-section">
      <h2 className="spec-section__title">Mascota</h2>

      <div className="pet-panel">
        <div className="pet-panel__head">
          <img
            src={`${import.meta.env.BASE_URL}talents/${pet.icon}.jpg`}
            alt=""
            width={56}
            height={56}
            loading="lazy"
            decoding="async"
          />
          <div>
            <h3 className="pet-panel__name">{pet.name}</h3>
            {pet.description && (
              <p className="pet-panel__desc">{pet.description}</p>
            )}
          </div>
        </div>

        <TalentTree trees={[pet.tree]} classSlug="cazador" />
      </div>
    </section>
  )
}
