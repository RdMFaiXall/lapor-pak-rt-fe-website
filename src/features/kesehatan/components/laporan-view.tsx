import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { mockData } from '../constants'
import { columns } from './columns'
import { KesehatanTable } from './kesehatan-table'

export function LaporanView() {

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
                    <h1 className='text-2xl font-bold tracking-tight'>Data Laporan Kesehatan</h1>
                </div>

                <div className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Rekapitulasi Laporan Kesehatan</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <KesehatanTable columns={columns} data={mockData} />
                        </CardContent>
                    </Card>
                </div>
            </Main>
        </>
    )
}
