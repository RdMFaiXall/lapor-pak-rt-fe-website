import { KeamananTable } from './keamanan-table'
import { keamananColumns } from './keamanan-columns'
import { mockKeamananData } from '../data/data'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { ConfigDrawer } from '@/components/config-drawer'

export default function KeamananList() {
    const data = mockKeamananData

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
                    <h1 className='text-3xl font-bold tracking-tight text-foreground'>Daftar Laporan Keamanan</h1>
                    <p className='text-lg text-muted-foreground mt-2'>
                        Berikut adalah detail lengkap dari semua insiden keamanan yang dilaporkan.
                        Gunakan fitur filter untuk menelusuri berdasarkan status penanganan atau kategori insiden.
                    </p>
                </div>
                <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
                    <KeamananTable data={data} columns={keamananColumns} />
                </div>
            </Main>
        </>
    )
}
