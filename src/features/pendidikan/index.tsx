import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'

export default function Pendidikan() {
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
                    <h1 className='text-2xl font-bold tracking-tight'>Pendidikan</h1>
                </div>
                <div className='flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm'>
                    <div className='flex flex-col items-center gap-1 text-center'>
                        <h3 className='text-2xl font-bold tracking-tight'>
                            Menu Pendidikan
                        </h3>
                        <p className='text-sm text-muted-foreground'>
                            Fitur informasi pendidikan akan ditampilkan di sini.
                        </p>
                    </div>
                </div>
            </Main>
        </>
    )
}
