import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { EkonomiIsuBreakdown } from './ekonomi-isu-breakdown'
import ScrollToTopButton from './scroll-to-top-button'
import { EkonomiTable } from './ekonomi-table'
import { columns } from './columns'
import { mockData } from '../constants'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function MonitoringView() {
    return (
        <>
            <Header>
                <div className='ms-auto flex items-center space-x-4'>
                    <Search />
                    <ThemeSwitch />
                    <ProfileDropdown />
                </div>
            </Header>
            <Main>
                <div className='mb-6 flex items-center justify-between space-y-2'>
                    <h1 className='text-2xl font-bold tracking-tight'>Monitoring Ekonomi</h1>
                    <p className='text-muted-foreground'>
                        Analisis data pekerjaan dan kondisi ekonomi warga.
                    </p>
                </div>

                <EkonomiIsuBreakdown />

                <div className='mt-8'>
                    <Card>
                        <CardHeader>
                            <CardTitle>Daftar Laporan Ekonomi</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <EkonomiTable columns={columns} data={mockData} />
                        </CardContent>
                    </Card>
                </div>
            </Main>
            <ScrollToTopButton />
        </>
    )
}
