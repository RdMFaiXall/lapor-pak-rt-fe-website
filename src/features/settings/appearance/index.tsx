import { ContentSection } from '../components/content-section'
import { AppearanceForm } from './appearance-form'

export function SettingsAppearance() {
  return (
    <ContentSection
      title='Tema & Tampilan'
      desc='Sesuaikan tampilan aplikasi. Beralih secara otomatis antara tema siang dan malam.'
    >
      <AppearanceForm />
    </ContentSection>
  )
}
