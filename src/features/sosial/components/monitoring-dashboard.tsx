import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { ConfigDrawer } from '@/components/config-drawer'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import { DemografiIsuBreakdown } from './demografi-isu-breakdown'
import ScrollToTopButton from './scroll-to-top-button'

export default function MonitoringDashboard() {
    return (
        <div className='min-h-screen bg-gray-50 dark:bg-gray-950'>
            <Header>
                <Search />
                <div className='ms-auto flex items-center gap-4'>
                    <ThemeSwitch />
                    <ConfigDrawer />
                    <ProfileDropdown />
                </div>
            </Header>

            <Main>
                <div className='mb-6'>
                    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3'>
                        <div>
                            <h1 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                                Dashboard Sosial RT
                            </h1>
                            <p className='text-sm text-gray-500 dark:text-gray-400 mt-0.5'>
                                Demografi isu &amp; breakdown per kategori kasus warga
                            </p>
                        </div>
                        <div className='flex items-center gap-2 bg-white dark:bg-gray-900 rounded-lg px-4 py-2 shadow-sm border border-gray-200 dark:border-gray-800 self-start'>
                            <div className='w-2 h-2 rounded-full bg-emerald-400 animate-pulse' />
                            <div>
                                <p className='text-xs text-gray-400'>Update terakhir</p>
                                <p className='text-xs font-semibold text-gray-700 dark:text-gray-300'>
                                    {format(new Date(), 'dd MMMM yyyy, HH:mm', { locale: id })} WIB
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <DemografiIsuBreakdown />
            </Main>

            <ScrollToTopButton />
        </div>
    )
}