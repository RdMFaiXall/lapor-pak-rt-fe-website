
import { KasusCategoryChart, PriorityChart } from './monitoring-charts'
import { KeamananMap } from './keamanan-map'
import { Header } from '@/components/layout/header'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { ConfigDrawer } from '@/components/config-drawer'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Main } from '@/components/layout/main'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'

export default function MonitoringDashboard() {
    return (
        <div className='space-y-4'>
            <Header>
                <Search />
                <div className='ms-auto flex items-center gap-4'>
                    <ThemeSwitch />
                    <ConfigDrawer />
                    <ProfileDropdown />
                </div>
            </Header>

            <Main>
                <div className='mb-8'>
                    <h1 className='text-3xl font-bold tracking-tight text-foreground'>Laporan Situasi Keamanan</h1>
                    <p className='text-lg text-muted-foreground mt-2'>
                        Per {format(new Date(), 'dd MMMM yyyy', { locale: id })}, wilayah ini berada dalam status <span className='font-semibold text-yellow-600'>Waspada</span>.
                        Terdapat peningkatan aktivitas pencurian di malam hari, namun personel keamanan telah ditingkatkan di titik-titik rawan.
                    </p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8'>
                    <div className='lg:col-span-2'>
                        <div className='mb-4'>
                            <h3 className='text-lg font-semibold text-foreground'>Peta Sebaran Insiden</h3>
                            <p className='text-sm text-muted-foreground'>
                                Konsentrasi kejadian terpusat di area pemukiman padat.
                            </p>
                        </div>
                        <div className='rounded-lg overflow-hidden'>
                            <KeamananMap />
                        </div>
                    </div>
                    <div className='lg:col-span-1 space-y-8'>
                        <div>
                            <h3 className='text-lg font-semibold text-foreground mb-2'>Ringkasan Eksekutif</h3>
                            <ul className='space-y-4'>
                                <li className='flex justify-between items-center border-b pb-2'>
                                    <span className='text-muted-foreground'>Total Insiden Minggu Ini</span>
                                    <span className='text-xl font-bold'>12</span>
                                </li>
                                <li className='flex justify-between items-center border-b pb-2'>
                                    <span className='text-muted-foreground'>Penyelesaian Kasus</span>
                                    <span className='text-xl font-bold text-green-600'>85%</span>
                                </li>
                                <li className='flex justify-between items-center border-b pb-2'>
                                    <span className='text-muted-foreground'>Waktu Respon Rata-rata</span>
                                    <span className='text-xl font-bold'>15 Menit</span>
                                </li>
                            </ul>
                        </div>

                        <PriorityChart />
                    </div>
                </div>

                <div className='grid grid-cols-1 gap-8'>
                    <KasusCategoryChart />
                </div>
            </Main >
        </div>
    )
}
