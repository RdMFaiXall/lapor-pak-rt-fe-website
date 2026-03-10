import {
    Briefcase,
    Wallet,
    Gift,
} from 'lucide-react'
import { mockData } from '../constants'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import {
    LamaMenganggurChart,
    MinatPelatihanChart,
    SkillTerakhirChart,
    ButuhMediasiChart,
    EstimasiHutangChart,
    SumberHutangChart,
    PenghasilanKKChart,
    RiwayatBantuanChart,
    StatusHunianChart
} from './ekonomi-charts'

// ─── Helpers ──────────────────────────────────────────────────────────────────

const pengangguranData = mockData.filter(d => d.kategori_isu_ekonomi === 'Warga tidak punya pekerjaan')
const hutangData = mockData.filter(d => d.kategori_isu_ekonomi === 'Warga berhutang')
const bansosData = mockData.filter(d => d.kategori_isu_ekonomi === 'Calon penerima bansos')

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
        emerald: 'border-emerald-100 dark:border-emerald-900/30 bg-emerald-50/10',
    }

    const iconColorClasses: Record<string, string> = {
        amber: 'text-amber-500 bg-amber-100 dark:bg-amber-950/40',
        rose: 'text-rose-500 bg-rose-100 dark:bg-rose-950/40',
        slate: 'text-slate-500 bg-slate-100 dark:bg-slate-800',
        violet: 'text-violet-500 bg-violet-100 dark:bg-violet-950/40',
        blue: 'text-blue-500 bg-blue-100 dark:bg-blue-950/40',
        emerald: 'text-emerald-500 bg-emerald-100 dark:bg-emerald-950/40',
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
                                <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">Warga</span>
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

// ─── Section: Tidak Punya Pekerjaan ──────────────────────────────────────────

function TidakPunyaPekerjaanSection() {
    return (
        <SectionContainer
            title='Tidak Memiliki Pekerjaan'
            description='Data pengangguran warga, durasi, skill, serta minat pelatihan yang dibutuhkan.'
            icon={Briefcase}
            color='blue'
            count={pengangguranData.length}
            id="section-pekerjaan"
        >
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div className='lg:col-span-1'>
                    <LamaMenganggurChart />
                </div>
                <div className='lg:col-span-1'>
                    <MinatPelatihanChart />
                </div>
                <div className='lg:col-span-1'>
                    <SkillTerakhirChart />
                </div>
            </div>
        </SectionContainer>
    )
}

// ─── Section: Warga Berhutang ──────────────────────────────────────────────────

function WargaBerhutangSection() {
    return (
        <SectionContainer
            title='Warga Berhutang'
            description='Analisis data hutang warga beserta angka estimasi total dan kebutuhan mediasi.'
            icon={Wallet}
            color='rose'
            count={hutangData.length}
            id="section-hutang"
        >
            <div className="space-y-6">
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    <div className='lg:col-span-2'>
                        <SumberHutangChart />
                    </div>
                    <div>
                        <ButuhMediasiChart />
                    </div>
                </div>
                <div>
                    <EstimasiHutangChart />
                </div>
            </div>
        </SectionContainer>
    )
}

// ─── Section: Calon Penerima Bansos ─────────────────────────────────────────────

function CalonPenerimaBansosSection() {
    return (
        <SectionContainer
            title='Calon Penerima Bansos'
            description='Data keadaan hunian, penghasilan kepala keluarga, dan riwayat bantuan.'
            icon={Gift}
            color='amber'
            count={bansosData.length}
            id="section-bansos"
        >
            <div className="space-y-6">
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    <div className='lg:col-span-2'>
                        <PenghasilanKKChart />
                    </div>
                    <div>
                        <StatusHunianChart />
                    </div>
                </div>
                <div>
                    <RiwayatBantuanChart />
                </div>
            </div>
        </SectionContainer>
    )
}

const issues = (grandTotal: number) => [
    {
        label: 'Tidak Memiliki Pekerjaan',
        count: pengangguranData.length,
        color: '#3b82f6',
        bg: 'bg-blue-50 dark:bg-blue-950/20',
        border: 'border-blue-200 dark:border-blue-800/40',
        text: 'text-blue-600 dark:text-blue-400',
        icon: Briefcase,
        pct: grandTotal > 0 ? Math.round((pengangguranData.length / grandTotal) * 100) : 0,
        id: 'section-pekerjaan',
    },
    {
        label: 'Warga Berhutang',
        count: hutangData.length,
        color: '#f43f5e',
        bg: 'bg-rose-50 dark:bg-rose-950/20',
        border: 'border-rose-200 dark:border-rose-800/40',
        text: 'text-rose-600 dark:text-rose-400',
        icon: Wallet,
        pct: grandTotal > 0 ? Math.round((hutangData.length / grandTotal) * 100) : 0,
        id: 'section-hutang',
    },
    {
        label: 'Calon Penerima Bansos',
        count: bansosData.length,
        color: '#f59e0b',
        bg: 'bg-amber-50 dark:bg-amber-950/20',
        border: 'border-amber-200 dark:border-amber-800/40',
        text: 'text-amber-600 dark:text-amber-400',
        icon: Gift,
        pct: grandTotal > 0 ? Math.round((bansosData.length / grandTotal) * 100) : 0,
        id: 'section-bansos',
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
    onClick?: () => void
}

function StatCard({ label, count, pct, color, bg, border, text, icon: Icon, onClick }: StatCardProps) {
    const barWidth = Math.max(4, Math.min(100, pct))
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

export function EkonomiSummary() {
    const grandTotal =
        pengangguranData.length +
        hutangData.length +
        bansosData.length

    const allIssues = issues(grandTotal)

    return (
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm overflow-hidden mb-12">

            {/* ── Header ── */}
            <div className="px-6 pt-6 pb-5 border-b border-gray-100 dark:border-gray-800">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    {/* Title + grand total */}
                    <div className="flex items-baseline gap-3">
                        <h2 className="text-lg font-semibold text-gray-500 dark:text-gray-400">
                            Total Laporan (3 Kategori Utama)
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
                            title={`${isu.label}: ${isu.count} laporan (${isu.pct}%)`}
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

export function EkonomiIsuBreakdown() {
    return (
        <div className="space-y-12 pb-20">
            <EkonomiSummary />

            <div className="space-y-16">
                <TidakPunyaPekerjaanSection />
                <WargaBerhutangSection />
                <CalonPenerimaBansosSection />
            </div>
        </div>
    )
}
