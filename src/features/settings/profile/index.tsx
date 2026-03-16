import { ContentSection } from '../components/content-section'
import { ProfileForm } from './profile-form'

export function SettingsProfile() {
  return (
    <ContentSection
      title='Profil RT'
      desc='Informasi yang akan ditampilkan kepada warga.'
    >
      <ProfileForm />
    </ContentSection>
  )
}
