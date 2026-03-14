import { Activity, UserPlus, HeartPulse, Stethoscope } from 'lucide-react'
import { mockData } from '../constants'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

import {
    LokasiPerawatanChart,
    PerkembanganKasusChart,
    PerkembanganPerLokasiChart,
    IndikasiPertumbuhanChart,
    UsiaKandunganChart,
    FaktorRisikoChart,
    AlasanBPJSChart
} from './kesehatan-charts'

// ─── Helpers ──────────────────────────────────────────────────────────────────

const dbdData = mockData.filter(d => d.isu_kesehatan === 'Wabah DBD')
const stuntingData = mockData.filter(d => d.isu_kesehatan === 'Stunting / Gizi Buruk')
const ibuHamilData = mockData.filter(d => d.isu_kesehatan === 'Ibu Hamil Berisiko')
const bpjsData = mockData.filter(d => d.isu_kesehatan === 'Warga Belum BPJS')

// ─── Shared Components ────────────────────────────────────────────────────────

interface SectionContainerProps {
    title: string
    description?: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        rose: 'border-rose-100 dark:border-rose-900/30 bg-rose-50/10',
        emerald: 'border-emerald-100 dark:border-emerald-900/30 bg-emerald-50/10',
        violet: 'border-violet-100 dark:border-violet-900/30 bg-violet-50/10',
        blue: 'border-blue-100 dark:border-blue-900/30 bg-blue-50/10',
    }

    const iconColorClasses: Record<string, string> = {
        rose: 'text-rose-500 bg-rose-100 dark:bg-rose-950/40',
        emerald: 'text-emerald-500 bg-emerald-100 dark:bg-emerald-950/40',
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

// ─── Sections ─────────────────────────────────────────────────────────────────

function WabahDBDSection() {
    return (
        <SectionContainer
            title='Wabah DBD'
            description='Monitoring perkembangan kasus dan lokasi perawatan pasien DBD.'
            icon={Activity}
            color='rose'
            count={dbdData.length}
            id="section-dbd"
        >
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div>
                    <LokasiPerawatanChart />
                </div>
                <div className='lg:col-span-2'>
                    <PerkembanganKasusChart />
                </div>
            </div>
            <PerkembanganPerLokasiChart />
        </SectionContainer>
    )
}

function StuntingSection() {
    return (
        <SectionContainer
            title='Stunting / Gizi Buruk'
            description='Analisis indikasi pertumbuhan tubuh balita usia 0-5 tahun.'
            icon={HeartPulse}
            color='emerald'
            count={stuntingData.length}
            id="section-stunting"
        >
            <IndikasiPertumbuhanChart />
        </SectionContainer>
    )
}

function IbuHamilSection() {
    return (
        <SectionContainer
            title='Ibu Hamil Berisiko'
            description='Monitoring usia kandungan berisiko tinggi dan faktor penyebabnya.'
            icon={Stethoscope}
            color='violet'
            count={ibuHamilData.length}
            id="section-ibuhamil"
        >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div>
                    <UsiaKandunganChart />
                </div>
                <div className="lg:col-span-2">
                    <FaktorRisikoChart />
                </div>
            </div>
        </SectionContainer>
    )
}

function BPJSSection() {
    return (
        <SectionContainer
            title='Bantuan Memiliki BPJS'
            description='Analisis alasan warga tidak memiliki BPJS.'
            icon={UserPlus}
            color='blue'
            count={bpjsData.length}
            id="section-bpjs"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="lg:col-span-2">
                    <AlasanBPJSChart />
                </div>
            </div>
        </SectionContainer>
    )
}

// ─── Summary ──────────────────────────────────────────────────────────────────

const issues = (grandTotal: number) => [
    {
        label: 'Wabah DBD',
        count: dbdData.length,
        color: '#f43f5e',
        bg: 'bg-rose-50 dark:bg-rose-950/20',
        border: 'border-rose-200 dark:border-rose-800/40',
        text: 'text-rose-600 dark:text-rose-400',
        icon: Activity,
        pct: Math.round((dbdData.length / grandTotal) * 100) || 0,
        id: 'section-dbd',
    },
    {
        label: 'Stunting / Gizi Buruk',
        count: stuntingData.length,
        color: '#10b981',
        bg: 'bg-emerald-50 dark:bg-emerald-950/20',
        border: 'border-emerald-200 dark:border-emerald-800/40',
        text: 'text-emerald-500 dark:text-emerald-400',
        icon: HeartPulse,
        pct: Math.round((stuntingData.length / grandTotal) * 100) || 0,
        id: 'section-stunting',
    },
    {
        label: 'Ibu Hamil Berisiko',
        count: ibuHamilData.length,
        color: '#8b5cf6',
        bg: 'bg-violet-50 dark:bg-violet-950/30',
        border: 'border-violet-200 dark:border-violet-700/40',
        text: 'text-violet-500 dark:text-violet-400',
        icon: Stethoscope,
        pct: Math.round((ibuHamilData.length / grandTotal) * 100) || 0,
        id: 'section-ibuhamil',
    },
    {
        label: 'Memiliki BPJS',
        count: bpjsData.length,
        color: '#3b82f6',
        bg: 'bg-blue-50 dark:bg-blue-950/20',
        border: 'border-blue-200 dark:border-blue-800/40',
        text: 'text-blue-600 dark:text-blue-400',
        icon: UserPlus,
        pct: Math.round((bpjsData.length / grandTotal) * 100) || 0,
        id: 'section-bpjs',
    },
]

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
                <div className="flex flex-col items-end">
                    <span className={`text-3xl font-black leading-none ${text}`}>
                        {count}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider opacity-70 mt-1 ${text}`}>
                        Kasus
                    </span>
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
                    <span className="text-xs text-gray-400 dark:text-gray-500">dari total kasus</span>
                    <span className="text-sm font-bold" style={{ color }}>{pct}%</span>
                </div>
            </div>
        </div>
    )
}

export function KesehatanSummary() {
    const grandTotal = mockData.length
    const allIssues = issues(grandTotal)

    return (
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm overflow-hidden">

            {/* ── Header ── */}
            <div className="px-6 pt-6 pb-5 border-b border-gray-100 dark:border-gray-800">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    {/* Title + grand total */}
                    <div className="flex items-baseline gap-3">
                        <h2 className="text-lg font-semibold text-gray-500 dark:text-gray-400">
                            Total Semua Kasus
                        </h2>
                        <span className="text-4xl font-black text-gray-900 dark:text-white leading-none">
                            {grandTotal}
                        </span>
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

export function KesehatanIsuBreakdown() {
    return (
        <div className="space-y-12 pb-20">
            <KesehatanSummary />

            <div className="space-y-16">
                <WabahDBDSection />
                <StuntingSection />
                <IbuHamilSection />
                <BPJSSection />
            </div>
        </div>
    )
}
