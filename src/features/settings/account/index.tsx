import { ContentSection } from '../components/content-section'
import { AccountForm } from './account-form'

export function SettingsAccount() {
  return (
    <ContentSection
      title='Akun'
      desc='Perbarui pengaturan akun Anda. Atur bahasa dan zona waktu.'
    >
      <AccountForm />
    </ContentSection>
  )
}
