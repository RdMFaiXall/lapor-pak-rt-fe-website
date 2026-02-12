
import { SosialCategoryChart, SosialPriorityChart } from './monitoring-charts'
import { SosialMap } from './sosial-map'
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

            <Main fixed>
                <div className='mb-8'>
                    <h1 className='text-3xl font-bold tracking-tight text-foreground'>Kesejahteraan Sosial Warga</h1>
                    <p className='text-lg text-muted-foreground mt-2'>
                        Per {format(new Date(), 'dd MMMM yyyy', { locale: id })}, distribusi bantuan sosial telah mencapai <span className='font-semibold text-blue-600'>80% target</span>.
                        Fokus utama saat ini adalah validasi data penerima bantuan pendidikan dan kesehatan lansia.
                    </p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8'>
                    <div className='lg:col-span-2'>
                        <div className='mb-4'>
                            <h3 className='text-lg font-semibold text-foreground'>Peta Sebaran Penerima Bantuan</h3>
                            <p className='text-sm text-muted-foreground'>
                                Lokasi warga yang membutuhkan atau menerima bantuan sosial.
                            </p>
                        </div>
                        <div className='rounded-lg overflow-hidden border'>
                            <SosialMap />
                        </div>
                    </div>
                    <div className='lg:col-span-1 space-y-8'>
                        <div>
                            <h3 className='text-lg font-semibold text-foreground mb-2'>Statistik Penyaluran</h3>
                            <ul className='space-y-4'>
                                <li className='flex justify-between items-center border-b pb-2'>
                                    <span className='text-muted-foreground'>Paket Sembako</span>
                                    <span className='text-xl font-bold'>150 Paket</span>
                                </li>
                                <li className='flex justify-between items-center border-b pb-2'>
                                    <span className='text-muted-foreground'>Bantuan Kesehatan</span>
                                    <span className='text-xl font-bold text-green-600'>45 Kasus</span>
                                </li>
                                <li className='flex justify-between items-center border-b pb-2'>
                                    <span className='text-muted-foreground'>Dana Pendidikan</span>
                                    <span className='text-xl font-bold'>Rp 25jt</span>
                                </li>
                            </ul>
                        </div>
                        <SosialPriorityChart />
                    </div>
                </div>

                <div className='grid grid-cols-1 gap-8'>
                    <SosialCategoryChart />
                </div>
            </Main >
        </div>
    )
}
