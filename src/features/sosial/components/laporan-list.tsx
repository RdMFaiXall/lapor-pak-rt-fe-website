
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { sosialColumns } from './laporan-columns'
import { LaporanTable } from './laporan-table'
import { mockSosialData } from '../data/data'
import { ConfigDrawer } from '@/components/config-drawer'

export default function LaporanList() {
    return (
        <>
            <Header>
                <Search />
                <div className='ml-auto flex items-center space-x-4'>
                    <ThemeSwitch />
                    <ConfigDrawer />
                    <ProfileDropdown />
                </div>
            </Header>
            <Main>
                <div className='mb-6'>
                    <h1 className='text-3xl font-bold tracking-tight text-foreground'>Laporan Sosial</h1>
                    <p className='text-lg text-muted-foreground mt-2'>
                        Data lengkap permohonan bantuan dan laporan kondisi sosial warga.
                        Gunakan tabel ini untuk memantau status penyaluran dan verifikasi data.
                    </p>
                </div>
                <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
                    <LaporanTable data={mockSosialData} columns={sosialColumns} />
                </div>
            </Main>
        </>
    )
}
