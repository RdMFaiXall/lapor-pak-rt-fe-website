import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { ConfigDrawer } from '@/components/config-drawer'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import { SosialMap } from './sosial-map'
import { SocialOverviewCards } from './KPICards'
import { SosialDataTable } from './sosial-data-table'
import {
    SocialAidChart,
    EconomicConditionChart,
    WargaSakitByDiseaseChart,
    WargaMeninggalByCauseChart,
    LansiaTerlantarByConditionChart,
    AnakPutusSekolahByLevelChart,
    AnakPutusSekolahByCauseChart
} from './dashboard-charts'

export default function MonitoringDashboard() {
    return (
        <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
            <Header>
                <Search />
                <div className='ms-auto flex items-center gap-4'>
                    <ThemeSwitch />
                    <ConfigDrawer />
                    <ProfileDropdown />
                </div>
            </Header>

            <Main>
                {/* Dashboard Header */}
                <div className='mb-8'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                        <div>
                            <h1 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-white'>
                                Dashboard
                            </h1>
                            <p className='text-gray-500 dark:text-gray-400 mt-1'>
                                Sistem Informasi Sosial RT
                            </p>
                        </div>
                        <div className='flex items-center gap-3 bg-white dark:bg-gray-800 rounded-lg px-4 py-2 shadow-sm border border-gray-200 dark:border-gray-700'>
                            <div className='text-right'>
                                <p className='text-xs text-gray-500 dark:text-gray-400'>Terakhir update</p>
                                <p className='text-sm font-semibold text-gray-900 dark:text-white'>
                                    {format(new Date(), 'dd MMM yyyy, HH:mm', { locale: id })}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Overview Cards - Total Laporan & Total Warga Miskin Ekstrem */}
                <SocialOverviewCards />

                {/* Row 1: Economic Condition & Social Aid */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
                    <EconomicConditionChart />
                    <SocialAidChart />
                </div>

                {/* Row 2: Warga Sakit & Warga Meninggal */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
                    <WargaSakitByDiseaseChart />
                    <WargaMeninggalByCauseChart />
                </div>

                {/* Row 3: Lansia Terlantar & Anak Putus Sekolah by Level */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
                    <LansiaTerlantarByConditionChart />
                    <AnakPutusSekolahByLevelChart />
                </div>

                {/* Row 4: Anak Putus Sekolah by Cause (Full Width) */}
                <div className='mb-6'>
                    <AnakPutusSekolahByCauseChart />
                </div>

                {/* Map */}
                <div className='mb-6'>
                    <SosialMap />
                </div>

                {/* Data Table */}
                <div className='mb-6'>
                    <SosialDataTable />
                </div>
            </Main>
        </div>
    )
}