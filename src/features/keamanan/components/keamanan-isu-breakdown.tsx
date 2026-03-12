import {
    Activity,
    AlertTriangle,
    ShieldAlert,
    Users
} from 'lucide-react'

import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

import { categories, mockKeamananData } from '../data/data'


import { PencurianStatusChart, ObjekPencurian, JenisFasilitasDicuri } from './pencurian-charts'
import { KeamananMap } from './keamanan-map'
import { GangguanStatusChart, GangguanPriorityList } from './gangguan-section'
import { KeributanLocationChart, KeributanResolution, KeributanPriorityList } from './keributan-section'

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
    id,
}: SectionContainerProps) {
    const colorClasses: Record<string, string> = {
        amber: 'border-amber-100 dark:border-amber-900/30 bg-amber-50/10',
        rose: 'border-rose-100 dark:border-rose-900/30 bg-rose-50/10',
        slate: 'border-slate-300 dark:border-slate-800 bg-slate-50/10',
        violet: 'border-violet-100 dark:border-violet-900/30 bg-violet-50/10',
        blue: 'border-blue-100 dark:border-blue-900/30 bg-blue-50/10',
        emerald: 'border-emerald-100 dark:border-emerald-900/30 bg-emerald-50/10',
        yellow: 'border-yellow-100 dark:border-yellow-900/30 bg-yellow-50/10',
        orange: 'border-orange-100 dark:border-orange-900/30 bg-orange-50/10',
    }

    const iconColorClasses: Record<string, string> = {
        amber: 'text-amber-500 bg-amber-100 dark:bg-amber-950/40',
        rose: 'text-rose-500 bg-rose-100 dark:bg-rose-950/40',
        slate: 'text-slate-500 bg-slate-100 dark:bg-slate-800',
        violet: 'text-violet-500 bg-violet-100 dark:bg-violet-950/40',
        blue: 'text-blue-500 bg-blue-100 dark:bg-blue-950/40',
        emerald: 'text-emerald-500 bg-emerald-100 dark:bg-emerald-950/40',
        yellow: 'text-yellow-500 bg-yellow-100 dark:bg-yellow-950/40',
        orange: 'text-orange-500 bg-orange-100 dark:bg-orange-950/40',
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
                </div>
                <div className="space-y-6">
                    {children}
                </div>
            </div>
        </Card>
    )
}

// ─── Sections ────────────────────────────────────────────────────────



function PetaSebaranSection() {
    return (
        <SectionContainer
            title='Peta Sebaran Insiden'
            description='Konsentrasi kejadian terpusat di area pemukiman padat.'
            icon={ShieldAlert}
            color='blue'
            id="section-map"
        >
            <div className='rounded-lg overflow-hidden'>
                <KeamananMap />
            </div>
        </SectionContainer>
    )
}



function PencurianSection() {
    const pencurianCount = mockKeamananData.filter(d => d.category === 'pencurian').length

    return (
        <SectionContainer
            title='Pencurian'
            description='Data pengaduan pencurian, penyelesaian, and prioritas penanganan.'
            icon={ShieldAlert}
            color='rose'
            count={pencurianCount}
            id="section-pencurian"
        >
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div className='flex flex-col gap-8'>
                    <ObjekPencurian />
                </div>
                <div className='lg:col-span-2'>
                    <PencurianStatusChart />
                </div>
            </div>
            <div>
                <JenisFasilitasDicuri />
            </div>
        </SectionContainer>
    )
}

function KeributanWargaSection() {
    const gangguanCount = mockKeamananData.filter(d => d.category === 'keributan').length

    return (
        <SectionContainer
            title='Keributan Warga'
            description='Data insiden keributan berdasarkan lokasi, status penyelesaian, dan tingkat prioritas.'
            icon={Activity}
            color='yellow'
            count={gangguanCount}
            id="section-keributan"
        >
            <div className='w-full'>
                <GangguanStatusChart />
            </div>
            <div>
                <GangguanPriorityList />
            </div>
        </SectionContainer>
    )
}

function GangguanKetertibanMalamSection() {
    const keributanCount = mockKeamananData.filter(d => d.category === 'gangguan').length

    return (
        <SectionContainer
            title='Gangguan Ketertiban Malam'
            description='Data pengaduan gangguan ketertiban malam dan tanggal kejadian.'
            icon={Users}
            color='orange'
            count={keributanCount}
            id="section-gangguan"
        >
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div className='lg:col-span-2'>
                    <KeributanLocationChart />
                </div>
                <div className='flex flex-col gap-8'>
                    <KeributanResolution />
                </div>
            </div>
            <div>
                <KeributanPriorityList />
            </div>
        </SectionContainer>
    )
}

// ─── Summary Calculation ────────────────────────────────────────────────────────

const issues = (grandTotal: number) => {
    return categories.map(cat => {
        const count = mockKeamananData.filter(item => item.category === cat.value).length;
        const pct = grandTotal > 0 ? Math.round((count / grandTotal) * 100) : 0;

        let icon = AlertTriangle;
        let bgClass = 'bg-slate-50 dark:bg-slate-900/30';
        let borderClass = 'border-slate-200 dark:border-slate-700/40';
        let textClass = 'text-slate-500 dark:text-slate-400';

        if (cat.value === 'pencurian') {
            icon = ShieldAlert;
            bgClass = 'bg-rose-50 dark:bg-rose-950/20';
            borderClass = 'border-rose-200 dark:border-rose-800/40';
            textClass = 'text-rose-600 dark:text-rose-400';
        } else if (cat.value === 'keributan') {
            icon = Users;
            bgClass = 'bg-orange-50 dark:bg-orange-950/20';
            borderClass = 'border-orange-200 dark:border-orange-800/40';
            textClass = 'text-orange-600 dark:text-orange-400';
        } else if (cat.value === 'gangguan') {
            icon = Activity;
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
                <span className={`text-3xl font-black leading-none shrink-0 ${text}`}>
                    {count}
                </span>
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

// ─── Main Component ───────────────────────────────────────────────────────────

export function KeamananSummary() {
    const grandTotal = mockKeamananData.length
    const allIssues = issues(grandTotal)

    return (
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm overflow-hidden">

            {/* ── Header ── */}
            <div className="px-6 pt-6 pb-5 border-b border-gray-100 dark:border-gray-800">
                <div className="flex items-baseline gap-3">
                    <h2 className="text-lg font-semibold text-gray-500 dark:text-gray-400">
                        Total Laporan
                    </h2>
                    <span className="text-4xl font-black text-gray-900 dark:text-white leading-none">
                        {grandTotal}
                    </span>
                </div>
            </div>

            {/* ── Proportional bar ── */}
            <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-1 mb-3">
                    <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                        Proporsi per Kategori
                    </span>
                </div>
                {/* Segmented bar */}
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
                {/* Legend */}
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

export function KeamananIsuBreakdown() {
    return (
        <div className="space-y-12 pb-20">
            <KeamananSummary />

            <div className="space-y-16">
                <PencurianSection />
                <GangguanKetertibanMalamSection />
                <KeributanWargaSection />
                <PetaSebaranSection />
            </div>
        </div>
    )
}
