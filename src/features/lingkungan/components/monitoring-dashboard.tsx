import { Header } from '@/components/layout/header'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { ConfigDrawer } from '@/components/config-drawer'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Main } from '@/components/layout/main'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'

import { Trash2, Droplets, Map as MapIcon, Lightbulb, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

import { mockLingkunganData, categories } from '../data/data'
import { LingkunganMap } from './lingkungan-map'
import { LingkunganCategorySection, SaluranCategorySection, JalanCategorySection, PeneranganCategorySection } from './lingkungan-category-section'
import ScrollToTopButton from './scroll-to-top-button'

// ─── Summary Calculation ────────────────────────────────────────────────────────

const issues = (grandTotal: number) => {
    return categories.map(cat => {
        const count = mockLingkunganData.filter(item => item.category === cat.value).length;
        const pct = grandTotal > 0 ? Math.round((count / grandTotal) * 100) : 0;

        let icon = AlertCircle;
        let bgClass = 'bg-slate-50 dark:bg-slate-900/30';
        let borderClass = 'border-slate-200 dark:border-slate-700/40';
        let textClass = 'text-slate-500 dark:text-slate-400';

        if (cat.value === 'sampah') {
            icon = Trash2;
            bgClass = 'bg-amber-50 dark:bg-amber-950/20';
            borderClass = 'border-amber-200 dark:border-amber-800/40';
            textClass = 'text-amber-600 dark:text-amber-400';
        } else if (cat.value === 'saluran') {
            icon = Droplets;
            bgClass = 'bg-blue-50 dark:bg-blue-950/20';
            borderClass = 'border-blue-200 dark:border-blue-800/40';
            textClass = 'text-blue-600 dark:text-blue-400';
        } else if (cat.value === 'jalan') {
            icon = MapIcon;
            bgClass = 'bg-slate-50 dark:bg-slate-950/20';
            borderClass = 'border-slate-200 dark:border-slate-800/40';
            textClass = 'text-slate-600 dark:text-slate-400';
        } else if (cat.value === 'penerangan') {
            icon = Lightbulb;
            bgClass = 'bg-yellow-50 dark:bg-yellow-950/20';
            borderClass = 'border-yellow-200 dark:border-yellow-800/40';
            textClass = 'text-yellow-600 dark:text-yellow-400';
        }

        return {
            label: cat.label,
            count,
            color: cat.color,
            bg: bgClass,
            border: borderClass,
            text: textClass,
            icon,
            pct,
            id: `section-${cat.value}`
        }
    })
}

// ─── Stat Card ────────────────────────────────────────────────────────────────

interface StatCardProps {
    label: string
    count: number
    pct: number
    color: string
    bg: string
    border: string
    text: string
    icon: React.ElementType
    grandTotal: number
    onClick?: () => void
}

function StatCard({ label, count, pct, color, bg, border, text, icon: Icon, onClick }: StatCardProps) {
    const barWidth = Math.max(4, pct)
    return (
        <div
            onClick={onClick}
            className={cn(
                `rounded-2xl border-2 ${bg} ${border} p-5 flex flex-col gap-4 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5`,
                onClick && 'cursor-pointer active:scale-95'
            )}
        >
            <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3 min-w-0">
                    <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: color + '1a' }}
                    >
                        <Icon className="w-5 h-5" style={{ color }} />
                    </div>
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 leading-tight">
                        {label}
                    </span>
                </div>
                <div className="flex flex-col items-end shrink-0">
                    <span className={`text-3xl font-black leading-none ${text}`}>
                        {count}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wide mt-0.5" style={{ color }}> kasus</span>
                </div>
            </div>

            <div>
                <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${barWidth}%`, background: color }}
                    />
                </div>
                <div className="flex justify-between items-center mt-1.5">
                    <span className="text-xs text-gray-400 dark:text-gray-500">dari total laporan</span>
                    <span className="text-sm font-bold" style={{ color }}>{pct}%</span>
                </div>
            </div>
        </div>
    )
}

// ─── Main Summary Component ───────────────────────────────────────────────────

export function LingkunganSummary() {
    const grandTotal = mockLingkunganData.length
    const allIssues = issues(grandTotal)

    return (
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm overflow-hidden mb-8">
            {/* ── Header ── */}
            <div className="px-6 pt-6 pb-5 border-b border-gray-100 dark:border-gray-800">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-baseline gap-3">
                        <h2 className="text-lg font-semibold text-gray-500 dark:text-gray-400">
                            Total Semua Kasus
                        </h2>
                        <span className="text-4xl font-black text-gray-900 dark:text-white leading-none">
                            {grandTotal}
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {/* Removed badge per request */}
                    </div>
                </div>
            </div>

            {/* ── Proportional bar ── */}
            <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-1 mb-3">
                    <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                        Proporsi per Kategori
                    </span>
                </div>
                <div className="flex h-5 rounded-xl overflow-hidden gap-0.5">
                    {allIssues.map((isu, i) => (
                        <div
                            key={i}
                            onClick={() => {
                                const el = document.getElementById(isu.id)
                                el?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="h-full first:rounded-l-xl last:rounded-r-xl transition-all duration-500 relative group cursor-pointer hover:opacity-80 active:scale-[0.98]"
                            style={{ width: `${Math.max(2, isu.pct)}%`, backgroundColor: isu.color }}
                            title={`${isu.label}: ${isu.count} kasus (${isu.pct}%)`}
                        />
                    ))}
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-3">
                    {allIssues.map((isu, i) => (
                        <div
                            key={i}
                            onClick={() => {
                                const el = document.getElementById(isu.id)
                                el?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="flex items-center gap-2 cursor-pointer group"
                        >
                            <div
                                className="w-2.5 h-2.5 rounded-sm shrink-0 transition-transform group-hover:scale-125"
                                style={{ backgroundColor: isu.color }}
                            />
                            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                {isu.label}
                            </span>
                            <span className="text-sm font-bold" style={{ color: isu.color }}>
                                {isu.pct}%
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Stat cards grid ── */}
            <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {allIssues.map((isu, i) => (
                        <StatCard
                            key={i}
                            {...isu}
                            grandTotal={grandTotal}
                            onClick={() => {
                                const el = document.getElementById(isu.id)
                                el?.scrollIntoView({ behavior: 'smooth' })
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default function MonitoringDashboard() {
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
                                Kualitas Lingkungan Hidup
                            </h1>
                            <p className='text-sm text-gray-500 dark:text-gray-400 mt-0.5'>
                                Rekapitulasi laporan kondisi lingkungan, mencakup pengelolaan sampah, drainase, infrastruktur jalan, dan penerangan umum.
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

                <LingkunganSummary />

                <div className="space-y-16 pb-20">
                    <LingkunganCategorySection
                        categoryId="sampah"
                        title="Sampah Menumpuk"
                        description="Data pengaduan penumpukan sampah liar, penyelesaian, dan prioritas penanganan."
                        icon={Trash2}
                        color="amber"
                    />

                    <SaluranCategorySection
                        title="Saluran Air Tersumbat"
                        description="Data pengaduan saluran air, drainase tersumbat, dan genangan air."
                        icon={Droplets}
                        color="blue"
                        count={mockLingkunganData.filter(d => d.category === 'saluran').length}
                    />

                    <JalanCategorySection
                        title="Jalan Rusak"
                        description="Data pengaduan jalan berlubang, aspal rusak, dan infrastruktur akses."
                        icon={MapIcon}
                        color="slate"
                        count={mockLingkunganData.filter(d => d.category === 'jalan').length}
                    />

                    <PeneranganCategorySection
                        title="Penerangan Jalan"
                        description="Data pengaduan lampu jalan mati dan area minim penerangan."
                        icon={Lightbulb}
                        color="yellow"
                        count={mockLingkunganData.filter(d => d.category === 'penerangan').length}
                    />

                    {/* Peta Sebaran as a Section too, matching Keamanan style */}
                    <div id="section-map" className='border rounded-2xl p-6 border-gray-100 bg-white dark:bg-gray-900 transition-all duration-300 hover:shadow-md'>
                        <div className='flex items-start justify-between mb-8'>
                            <div className="flex items-center gap-4">
                                <div className='p-3 rounded-xl text-blue-500 bg-blue-100 dark:bg-blue-950/40'>
                                    <MapIcon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                        Peta Sebaran Laporan Lingkungan
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Distribusi kejadian per area wilayah
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-xl overflow-hidden h-[400px] border'>
                            <LingkunganMap />
                        </div>
                    </div>
                </div>
            </Main>
            <ScrollToTopButton />
        </div>
    )
}
