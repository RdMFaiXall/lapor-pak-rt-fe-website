
import { KeamananTable } from './keamanan-table'
import { keamananColumns } from './keamanan-columns'
import { mockKeamananData } from '../data/data'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'

export default function KeamananList() {
    const data = mockKeamananData

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
                <div className='mb-2 flex items-center justify-between space-y-2'>
                    <h1 className='text-2xl font-bold tracking-tight'>
                        Daftar Laporan Keamanan
                    </h1>
                </div>
                <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
                    <KeamananTable data={data} columns={keamananColumns} />
                </div>
            </Main>
        </>
    )
}
