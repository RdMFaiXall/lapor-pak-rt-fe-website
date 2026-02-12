
import { LingkunganCategoryChart, LingkunganPriorityChart } from './monitoring-charts'
import { LingkunganMap } from './lingkungan-map'
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
                    <h1 className='text-3xl font-bold tracking-tight text-foreground'>Kualitas Lingkungan Hidup</h1>
                    <p className='text-lg text-muted-foreground mt-2'>
                        Per {format(new Date(), 'dd MMMM yyyy', { locale: id })}, kondisi lingkungan terpantau <span className='font-semibold text-green-600'>Kondusif</span>.
                        Isu utama minggu ini adalah penumpukan sampah di beberapa titik, yang sedang dalam proses penanganan oleh petugas kebersihan.
                    </p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8'>
                    <div className='lg:col-span-2'>
                        <div className='mb-4'>
                            <h3 className='text-lg font-semibold text-foreground'>Peta Titik Rawan Lingkungan</h3>
                            <p className='text-sm text-muted-foreground'>
                                Lokasi pelaporan banjiir dan penumpukan sampah.
                            </p>
                        </div>
                        <div className='rounded-lg overflow-hidden'>
                            <LingkunganMap />
                        </div>
                    </div>
                    <div className='lg:col-span-1 space-y-8'>
                        <div>
                            <h3 className='text-lg font-semibold text-foreground mb-2'>Indikator Kinerja</h3>
                            <ul className='space-y-4'>
                                <li className='flex justify-between items-center border-b pb-2'>
                                    <span className='text-muted-foreground'>Volume Sampah Terangkut</span>
                                    <span className='text-xl font-bold'>4.5 Ton</span>
                                </li>
                                <li className='flex justify-between items-center border-b pb-2'>
                                    <span className='text-muted-foreground'>Titik Banjir Aktif</span>
                                    <span className='text-xl font-bold text-blue-600'>2</span>
                                </li>
                                <li className='flex justify-between items-center border-b pb-2'>
                                    <span className='text-muted-foreground'>Respon Tim Kebersihan</span>
                                    <span className='text-xl font-bold'>&lt; 24 Jam</span>
                                </li>
                            </ul>
                        </div>
                        <LingkunganPriorityChart />
                    </div>
                </div>

                <div className='grid grid-cols-1 gap-8'>
                    <LingkunganCategoryChart />
                </div>
            </Main >
        </div>
    )
}
