
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { Overview } from './components/overview'
import { RecentReports } from './components/recent-reports'
import { StatsCards } from './components/stats-cards'
import { KeamananMap } from './components/keamanan-map'

export default function KeamananDashboard() {
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
                        Dashboard Keamanan
                    </h1>
                    <div className='flex items-center space-x-2'>
                        <Button>Unduh Laporan</Button>
                    </div>
                </div>
                <Tabs
                    orientation='vertical'
                    defaultValue='overview'
                    className='space-y-4'
                >
                    <div className='w-full overflow-x-auto pb-2'>
                        <TabsList>
                            <TabsTrigger value='overview'>Overview</TabsTrigger>
                            <TabsTrigger value='map'>Peta</TabsTrigger>
                            <TabsTrigger value='analytics' disabled>
                                Analytics
                            </TabsTrigger>
                            <TabsTrigger value='reports' disabled>
                                Reports
                            </TabsTrigger>
                            <TabsTrigger value='notifications' disabled>
                                Notifications
                            </TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value='overview' className='space-y-4'>
                        <StatsCards />
                        <div className='grid grid-cols-1 gap-4 lg:grid-cols-7'>
                            <Card className='col-span-1 lg:col-span-4'>
                                <CardHeader>
                                    <CardTitle>Overview Laporan</CardTitle>
                                </CardHeader>
                                <CardContent className='pl-2'>
                                    <Overview />
                                </CardContent>
                            </Card>
                            <Card className='col-span-1 lg:col-span-3'>
                                <CardHeader>
                                    <CardTitle>Laporan Terbaru</CardTitle>
                                    <CardDescription>
                                        5 laporan masuk hari ini.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <RecentReports />
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                    <TabsContent value='map' className='space-y-4'>
                        <Card>
                            <CardHeader>
                                <CardTitle>Peta Keamanan</CardTitle>
                                <CardDescription>
                                    Visualisasi sebaran insiden dan posisi aset keamanan.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <KeamananMap />
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </Main>
        </>
    )
}
