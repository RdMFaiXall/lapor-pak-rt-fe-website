import {
    AlertTriangle,
    Activity,
    Users,
    HeartPulse,
    Wallet,
    GraduationCap,
} from 'lucide-react'
import {
    wargaSakitData,
    wargaMeninggalData,
    wargaMiskinData,
    lansiaTerlantarData,
    anakPutusSekolahData,
} from '../data/data'
import { EconomicConditionChart, WargaSakitByDiseaseChart } from './dashboard-charts'
import PenerimaBantuan from './penerima-bantuan'
import JenisBantuan from './jenis-bantuan'
import JenisPenyakit from './jenis-penyakit'
import WargaSakitJenisPenyakitByAgeChart from './warga-sakit-jenis-penyakit-by-age-chart'
import {
    PenyebabMeninggalByAgeChart,
    WargaMeninggalPerUsiaChart,
    PenyebabMeninggalChart,
} from './warga-meninggal-charts'
import {
    KondisiKesehatanChart,
    KondisiTempatTinggalChart,
} from './lansia-terlantar-charts'
import {
    PenyebabPerJenjangChart,
    JenjangPendidikanChart,
    PenyebabPutusSekolahChart,
} from './anak-putus-sekolah-charts'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

// ─── Helpers ──────────────────────────────────────────────────────────────────

const countBy = <T,>(arr: T[], key: keyof T): { name: string; value: number }[] => {
    const map: Record<string, number> = {}
    arr.forEach((item) => {
        const k = String(item[key])
        map[k] = (map[k] || 0) + 1
    })
    return Object.entries(map)
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value)
}

// ─── Shared Components ────────────────────────────────────────────────────────

interface SectionContainerProps {
    title: string
    description?: string
    icon: any
    color: string
    children: React.ReactNode
    className?: string
    count?: number
}

function SectionContainer({
    title,
    description,
    icon: Icon,
    color,
    children,
    className,
    count,
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
        <Card className={cn('border-none shadow-none bg-transparent overflow-hidden', className)}>
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
                                <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">Kasus</span>
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

// ─── Section: Warga Sakit ──────────────────────────────────────────────────────

function WargaSakitSection() {
    const byDisease = countBy(wargaSakitData, 'jenisPenyakit')

    return (
        <SectionContainer
            title='Warga Sakit'
            description='Monitoring kondisi kesehatan warga berdasarkan prevalensi penyakit.'
            icon={Activity}
            color='rose'
            count={wargaSakitData.length}
        >
            <div className='space-y-8'>
                <WargaSakitJenisPenyakitByAgeChart />
                <WargaSakitByDiseaseChart />
                <JenisPenyakit data={byDisease} />
            </div>
        </SectionContainer>
    )
}

// ─── Section: Warga Meninggal ──────────────────────────────────────────────────

function WargaMeninggalSection() {
    return (
        <SectionContainer
            title='Warga Meninggal'
            description='Analisis data kematian berdasarkan penyebab and kelompok usia.'
            icon={HeartPulse}
            color='slate'
            count={wargaMeninggalData.length}
        >
            <div className="space-y-6">
                <div>
                    <PenyebabMeninggalByAgeChart />
                </div>
                <div>
                    <WargaMeninggalPerUsiaChart />
                </div>
                <div>
                    <PenyebabMeninggalChart />
                </div>
            </div>
        </SectionContainer>
    )
}

// ─── Section: Warga Miskin Ekstrem ─────────────────────────────────────────────

function WargaMiskinSection() {
    const penerima = wargaMiskinData.filter((w) => w.statusBantuan === 'Penerima').length
    const byBantuan = countBy(
        wargaMiskinData.filter((w) => w.jenisBantuan !== '-'),
        'jenisBantuan'
    )

    return (
        <SectionContainer
            title='Miskin Ekstrem'
            description='Data kesejahteraan warga dan distribusi bantuan sosial.'
            icon={Wallet}
            color='amber'
            count={wargaMiskinData.length}
        >
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div className='lg:col-span-2'>
                    <EconomicConditionChart />
                </div>
                <div className='flex flex-col gap-8'>
                    <PenerimaBantuan count={penerima} totalPenduduk={wargaMiskinData.length} />
                </div>
            </div>
            <div>
                <JenisBantuan data={byBantuan} />
            </div>
        </SectionContainer>
    )
}

// ─── Section: Lansia Terlantar ─────────────────────────────────────────────────

function LansiaTerlantarSection() {
    return (
        <SectionContainer
            title='Lansia Terlantar'
            description='Monitoring kondisi kesehatan dan hunian para lansia.'
            icon={Users}
            color='violet'
            count={lansiaTerlantarData.length}
        >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <KondisiTempatTinggalChart />
                </div>
                <div>
                    <KondisiKesehatanChart />
                </div>
            </div>
        </SectionContainer>
    )
}

// ─── Section: Anak Putus Sekolah ───────────────────────────────────────────────

function AnakPutusSekolahSection() {
    return (
        <SectionContainer
            title='Anak Putus Sekolah'
            description='Distribusi hambatan pendidikan per jenjang sekolah.'
            icon={GraduationCap}
            color='blue'
            count={anakPutusSekolahData.length}
        >
            <div className="space-y-6">
                <PenyebabPerJenjangChart />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <JenjangPendidikanChart />
                    <PenyebabPutusSekolahChart />
                </div>
            </div>
        </SectionContainer>
    )
}


const issues = (grandTotal: number) => [
    {
        label: 'Miskin Ekstrem',
        count: wargaMiskinData.length,
        color: '#f59e0b',
        bg: 'bg-amber-50 dark:bg-amber-950/20',
        border: 'border-amber-200 dark:border-amber-800/40',
        text: 'text-amber-600 dark:text-amber-400',
        icon: Wallet,
        pct: Math.round((wargaMiskinData.length / grandTotal) * 100),
    },
    {
        label: 'Warga Sakit',
        count: wargaSakitData.length,
        color: '#ef4444',
        bg: 'bg-rose-50 dark:bg-rose-950/20',
        border: 'border-rose-200 dark:border-rose-800/40',
        text: 'text-rose-600 dark:text-rose-400',
        icon: Activity,
        pct: Math.round((wargaSakitData.length / grandTotal) * 100),
    },
    {
        label: 'Warga Meninggal',
        count: wargaMeninggalData.length,
        color: '#6b7280',
        bg: 'bg-slate-50 dark:bg-slate-900/30',
        border: 'border-slate-200 dark:border-slate-700/40',
        text: 'text-slate-500 dark:text-slate-400',
        icon: HeartPulse,
        pct: Math.round((wargaMeninggalData.length / grandTotal) * 100),
    },
    {
        label: 'Lansia Terlantar',
        count: lansiaTerlantarData.length,
        color: '#8b5cf6',
        bg: 'bg-violet-50 dark:bg-violet-950/20',
        border: 'border-violet-200 dark:border-violet-800/40',
        text: 'text-violet-600 dark:text-violet-400',
        icon: Users,
        pct: Math.round((lansiaTerlantarData.length / grandTotal) * 100),
    },
    {
        label: 'Putus Sekolah',
        count: anakPutusSekolahData.length,
        color: '#3b82f6',
        bg: 'bg-blue-50 dark:bg-blue-950/20',
        border: 'border-blue-200 dark:border-blue-800/40',
        text: 'text-blue-600 dark:text-blue-400',
        icon: GraduationCap,
        pct: Math.round((anakPutusSekolahData.length / grandTotal) * 100),
    },
]

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
}

function StatCard({ label, count, pct, color, bg, border, text, icon: Icon }: StatCardProps) {
    const barWidth = Math.max(4, pct)
    return (
        <div className={`rounded-2xl border-2 ${bg} ${border} p-5 flex flex-col gap-4 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5`}>
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
                    <span className="text-xs text-gray-400 dark:text-gray-500">dari total kasus</span>
                    <span className="text-sm font-bold" style={{ color }}>{pct}%</span>
                </div>
            </div>
        </div>
    )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function DemografiSummary() {
    const grandTotal =
        wargaSakitData.length +
        wargaMeninggalData.length +
        wargaMiskinData.length +
        lansiaTerlantarData.length +
        anakPutusSekolahData.length

    const allIssues = issues(grandTotal)
    const belumBantuan = wargaMiskinData.filter((w) => w.statusBantuan !== 'Penerima').length

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

                    {/* Alert chips */}
                    <div className="flex flex-wrap gap-2">
                        {belumBantuan > 0 && (
                            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 text-amber-700 dark:text-amber-400 text-sm font-semibold">
                                <AlertTriangle className="w-4 h-4 shrink-0" />
                                <span>{belumBantuan} warga miskin belum terima bantuan</span>
                            </div>
                        )}
                        {/* {menularCount > 0 && (
                            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/50 text-rose-700 dark:text-rose-400 text-sm font-semibold">
                                <Activity className="w-4 h-4 flex-shrink-0" />
                                <span>{menularCount} kasus penyakit menular aktif</span>
                            </div>
                        )} */}
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
                            className="h-full first:rounded-l-xl last:rounded-r-xl transition-all duration-500 relative group cursor-default"
                            style={{ width: `${Math.max(2, isu.pct)}%`, backgroundColor: isu.color }}
                            title={`${isu.label}: ${isu.count} kasus (${isu.pct}%)`}
                        />
                    ))}
                </div>
                {/* Legend */}
                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-3">
                    {allIssues.map((isu, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <div
                                className="w-2.5 h-2.5 rounded-sm shrink-0"
                                style={{ backgroundColor: isu.color }}
                            />
                            <span className="text-sm text-gray-500 dark:text-gray-400">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {allIssues.map((isu, i) => (
                        <StatCard key={i} {...isu} grandTotal={grandTotal} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export function DemografiIsuBreakdown() {
    return (
        <div className="space-y-12 pb-20">
            <DemografiSummary />

            <div className="space-y-16">
                <WargaMiskinSection />
                <WargaSakitSection />
                <WargaMeninggalSection />
                <LansiaTerlantarSection />
                <AnakPutusSekolahSection />
            </div>
        </div>
    )
}
