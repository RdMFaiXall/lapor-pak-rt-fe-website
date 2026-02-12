
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { KasusCategoryChart, PriorityChart } from './monitoring-charts'
import { KeamananMap } from './keamanan-map'
import { Flame, Gavel, ShieldAlert, Zap } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { ConfigDrawer } from '@/components/config-drawer'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Main } from '@/components/layout/main'

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
                <div className='mb-3'>
                    <KeamananMap />
                </div>

                <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-3'>
                    <Card>
                        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                            <CardTitle className='text-sm font-medium'>
                                Total Isu Aktif
                            </CardTitle>
                            <ShieldAlert className='h-4 w-4 text-muted-foreground' />
                        </CardHeader>
                        <CardContent>
                            <div className='text-2xl font-bold'>42</div>
                            <p className='text-xs text-muted-foreground'>
                                +12 kasus baru minggu ini
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                            <CardTitle className='text-sm font-medium'>
                                Pencurian
                            </CardTitle>
                            <Zap className='h-4 w-4 text-muted-foreground' />
                        </CardHeader>
                        <CardContent>
                            <div className='text-2xl font-bold'>15</div>
                            <p className='text-xs text-muted-foreground'>
                                Kategori Tertinggi
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                            <CardTitle className='text-sm font-medium'>Kebakaran/Darur...</CardTitle>
                            <Flame className='h-4 w-4 text-muted-foreground' />
                        </CardHeader>
                        <CardContent>
                            <div className='text-2xl font-bold'>3</div>
                            <p className='text-xs text-muted-foreground'>
                                Perlu Penanganan Segera
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                            <CardTitle className='text-sm font-medium'>
                                Gangguan Ketertib...
                            </CardTitle>
                            <Gavel className='h-4 w-4 text-muted-foreground' />
                        </CardHeader>
                        <CardContent>
                            <div className='text-2xl font-bold'>12</div>
                            <p className='text-xs text-muted-foreground'>
                                Laporan warga meningkat
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className='grid grid-cols-1 gap-4 lg:grid-cols-7'>
                    <KasusCategoryChart />
                    <PriorityChart />
                </div>
            </Main >
        </div>
    )
}
