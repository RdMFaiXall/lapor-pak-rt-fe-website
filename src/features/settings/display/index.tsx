import { ContentSection } from '../components/content-section'
import { DisplayForm } from './display-form'

export function SettingsDisplay() {
  return (
    <ContentSection
      title='Layar'
      desc='Aktifkan atau nonaktifkan elemen untuk mengontrol apa yang ditampilkan di aplikasi.'
    >
      <DisplayForm />
    </ContentSection>
  )
}
