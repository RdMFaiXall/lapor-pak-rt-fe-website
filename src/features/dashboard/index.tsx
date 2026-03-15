import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ConfigDrawer } from '@/components/config-drawer'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import { DashboardOverview } from './components/dashboard-overview'
import { RecentSales } from './components/recent-sales'
import { QuickAgenda } from './components/quick-agenda'
import { VillagePerformance } from './components/village-performance'
import { VillageBroadcast } from './components/village-broadcast'

export function Dashboard() {
  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-950'>
      {/* ===== Top Heading ===== */}
      <Header>
        <Search />
        <div className='ms-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <ConfigDrawer />
          <ProfileDropdown />
        </div>
      </Header>

      {/* ===== Main ===== */}
      <Main>
        <div className='mb-6'>
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3'>
            <div>
              <h1 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                Pusat Informasi RT
              </h1>
              <p className='text-sm text-gray-500 dark:text-gray-400 mt-0.5'>
                Monitoring real-time & pusat kendali wilayah RT
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

        <div className='space-y-6'>
          {/* Section 1: Ringkasan Utama Desa */}
          <DashboardOverview />

          {/* Section 2: Village Head Tools (Performance & Broadcast) */}
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-5'>
            <div className='lg:col-span-3'>
              <VillagePerformance />
            </div>
            <div className='lg:col-span-2'>
              <VillageBroadcast />
            </div>
          </div>

          {/* Section 3: Detail & Agenda */}
          <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
            <Card className='rounded-2xl border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden'>
              <CardHeader>
                <CardTitle className='text-lg font-bold'>Laporan Terbaru dari Warga</CardTitle>
                <CardDescription>
                  Terdapat 265 laporan bulan ini dari seluruh RT.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RecentSales />
              </CardContent>
            </Card>
            <QuickAgenda />
          </div>
        </div>
      </Main>
    </div>
  )
}
