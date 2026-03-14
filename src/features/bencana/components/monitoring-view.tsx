import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { ConfigDrawer } from '@/components/config-drawer'
import { AlertTriangle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'
import { BencanaTypeChart, BencanaResolution, BencanaImpactSummary, kategoriBencanaTotal } from './bencana-charts'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'

// ─── Shared Components ────────────────────────────────────────────────────────

interface SectionContainerProps {
    title: string
    description?: string
    icon: any
    color: string
    children: React.ReactNode
    className?: string
    count?: number
    id?: string
}

function SectionContainer({
    title,
    description,
    icon: Icon,
    color,
    children,
    className,
    count,
    id,
}: SectionContainerProps) {
    const colorClasses: Record<string, string> = {
        amber: 'border-amber-100 dark:border-amber-900/30 bg-amber-50/10',
        rose: 'border-rose-100 dark:border-rose-900/30 bg-rose-50/10',
        slate: 'border-slate-300 dark:border-slate-800 bg-slate-50/10',
        violet: 'border-violet-100 dark:border-violet-900/30 bg-violet-50/10',
        blue: 'border-blue-100 dark:border-blue-900/30 bg-blue-50/10',
    }

    const iconColorClasses: Record<string, string> = {
        amber: 'text-amber-500 bg-amber-100 dark:bg-amber-950/40',
        rose: 'text-rose-500 bg-rose-100 dark:bg-rose-950/40',
        slate: 'text-slate-500 bg-slate-100 dark:bg-slate-800',
        violet: 'text-violet-500 bg-violet-100 dark:bg-violet-950/40',
        blue: 'text-blue-500 bg-blue-100 dark:bg-blue-950/40',
    }

    return (
        <Card id={id} className={cn('border-none shadow-none bg-transparent overflow-hidden scroll-mt-24', className)}>
            <div className={cn('border rounded-2xl p-6 transition-all duration-300 hover:shadow-md h-full', colorClasses[color] || 'border-gray-100 bg-white dark:bg-gray-900')}>
                <div className='flex items-start justify-between mb-8'>
                    <div className="flex items-center gap-4">
                        <div className={cn('p-3 rounded-xl', iconColorClasses[color])}>
                            <Icon className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                {title}
                            </h3>
                            {description && (
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {description}
                                </p>
                            )}
                        </div>
                    </div>
                    {count !== undefined && (
                        <div className="flex flex-col items-end">
                            <span className={cn('px-3 py-1.5 rounded-xl text-2xl font-black leading-none flex items-baseline gap-1', iconColorClasses[color])}>
                                {count}
                                <span className="text-[15px] font-bold uppercase tracking-wider opacity-70">Kasus</span>
                            </span>
                        </div>
                    )}
                </div>
                <div className="space-y-6">
                    {children}
                </div>
            </div>
        </Card>
    )
}

export default function MonitoringView() {
    const totalReports = kategoriBencanaTotal

    return (
        <div className='min-h-screen bg-gray-50 dark:bg-gray-950'>
            <Header>
                <Search />
                <div className='ms-auto flex items-center gap-4'>
                    <ThemeSwitch />
                    <ConfigDrawer />
                    <ProfileDropdown />
                </div>
            </Header>

            <Main>
                <div className='mb-6'>
                    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3'>
                        <div>
                            <h1 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                                Laporan Bencana
                            </h1>
                            <p className='text-sm text-gray-500 dark:text-gray-400 mt-0.5'>
                                Rekapitulasi laporan kejadian bencana, mencakup kategori, dampak korban, dan fasilitas yang terdampak.
                            </p>
                        </div>
                        <div className='flex items-center gap-2 bg-white dark:bg-gray-900 rounded-lg px-4 py-2 shadow-sm border border-gray-200 dark:border-gray-800 self-start'>
                            <div className='w-2 h-2 rounded-full bg-emerald-400 animate-pulse' />
                            <div>
                                <p className='text-xs text-gray-400'>Update terakhir</p>
                                <p className='text-xs font-semibold text-gray-700 dark:text-gray-300'>
                                    {format(new Date(), 'dd MMMM yyyy, HH:mm', { locale: id })} WIB
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-12 pb-20">
                    <SectionContainer
                        title='Bencana'
                        description='Data laporan kejadian bencana dari warga.'
                        icon={AlertTriangle}
                        color='rose'
                        count={totalReports}
                        id="section-bencana"
                    >
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                            <div className='lg:col-span-2'>
                                <BencanaTypeChart />
                            </div>
                            <div className='flex flex-col gap-8'>
                                <BencanaResolution />
                            </div>
                        </div>
                        <div>
                            <BencanaImpactSummary />
                        </div>
                    </SectionContainer>
                </div>
            </Main>
        </div>
    )
}
