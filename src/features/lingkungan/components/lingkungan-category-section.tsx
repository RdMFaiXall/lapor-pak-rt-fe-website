import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    LabelList,
    Line,
    LineChart,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { mockLingkunganData } from '../data/data'
import { Lingkungan } from '../data/schema'

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

// ─── Category Charts ──────────────────────────────────────────────────────────

// Status Laporan: Ringan / Sedang / Parah
const SEVERITY_META = [
    { value: 'ringan', shortLabel: 'Ringan', label: 'Ringan (Mulai Terlihat)', color: '#22c55e' },
    { value: 'sedang', shortLabel: 'Sedang', label: 'Sedang (Sudah Mengganggu)', color: '#f97316' },
    { value: 'parah', shortLabel: 'Parah', label: 'Parah (Menutup Akses / Bau Menyengat)', color: '#ef4444' },
]

export function LingkunganStatusChart({ data }: { data: Lingkungan[] }) {
    // Map existing statuses to severity buckets for demo purposes
    // open → ringan, in-progress → sedang, resolved/closed → parah
    const severityCount = data.reduce((acc, curr) => {
        let bucket: string
        if (curr.status === 'open') bucket = 'ringan'
        else if (curr.status === 'in-progress') bucket = 'sedang'
        else bucket = 'parah'
        acc[bucket] = (acc[bucket] || 0) + 1
        return acc
    }, {} as Record<string, number>)

    const total = data.length

    const chartData = SEVERITY_META.map((s) => ({
        name: s.shortLabel,
        fullLabel: s.label,
        value: severityCount[s.value] || 0,
        percentage: total > 0 ? (((severityCount[s.value] || 0) / total) * 100).toFixed(2) : '0',
        color: s.color,
    })).filter(d => d.value > 0).sort((a, b) => b.value - a.value)

    const maxValue = Math.max(...chartData.map(d => d.value), 0)

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full min-h-[300px]'>
            <h3 className="text-md font-semibold text-slate-400 mb-6">Perkiraan Tingkat Penumpukan</h3>
            <div className='flex flex-col lg:flex-row gap-4 items-start h-[calc(100%-48px)]'>
                <div className='flex-1 h-full min-h-[200px] w-full'>
                    <ResponsiveContainer width="100%" height={240}>
                        <BarChart
                            data={chartData}
                            layout="vertical"
                            margin={{ left: 8, right: 60, top: 0, bottom: 30 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                            <XAxis
                                type="number"
                                domain={[0, maxValue]}
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: '#94a3b8' }}
                                tickFormatter={(val) => Number.isInteger(val) ? val.toString() : ''}
                                label={{
                                    value: 'Jumlah Kasus',
                                    position: 'insideBottom',
                                    offset: -16,
                                    fontSize: 11,
                                    fill: '#94a3b8',
                                    fontWeight: 700,
                                }}
                            />
                            <YAxis
                                dataKey="name"
                                type="category"
                                width={65}
                                tick={{ fontSize: 11, fontWeight: 600, fill: '#64748b' }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={40}>
                                {chartData.map((item, index) => (
                                    <Cell key={`cell-${index}`} fill={item.color} />
                                ))}
                                <LabelList
                                    dataKey="value"
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    content={(props: any) => {
                                        const { x, y, width, height, value } = props;
                                        if (value === undefined || value === null) return null;
                                        const isSmallValue = value < 2;
                                        return (
                                            <text
                                                x={isSmallValue ? x + width + 8 : x + 10}
                                                y={y + height / 2}
                                                fill={isSmallValue ? "#64748b" : "#fff"}
                                                fontSize={11}
                                                fontWeight="bold"
                                                dominantBaseline="middle"
                                            >
                                                {value} kasus
                                            </text>
                                        );
                                    }}
                                />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className='w-full lg:w-auto shrink-0 space-y-4'>
                    {chartData.map((item, index) => {
                        // fullLabel e.g. "Parah (Menutup Akses / Bau Menyengat)"
                        // split into shortLabel and sub part
                        const parenMatch = item.fullLabel?.match(/^([^(]+?)(\s*\(.+\))?$/)
                        const short = parenMatch?.[1]?.trim() ?? item.name
                        const sub = parenMatch?.[2]?.trim() ?? ''
                        return (
                            <div key={index} className='flex items-start gap-3'>
                                <div className='w-3 h-3 rounded-full mt-1 shrink-0' style={{ backgroundColor: item.color }} />
                                <div>
                                    <p className='text-xs font-semibold text-gray-700 dark:text-gray-300 leading-tight'>{short}</p>
                                    {sub && (
                                        <div className='text-[11px] text-gray-400 font-medium leading-[1.2] mt-0.5'>
                                            {sub.split(' / ').map((part, i, arr) => (
                                                <div key={i}>{part}{i < arr.length - 1 ? ' /' : ''}</div>
                                            ))}
                                        </div>
                                    )}
                                    <p className='text-sm font-bold text-gray-900 dark:text-gray-100 mt-0.5'>{item.percentage}%</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

// ─── Tanggal Laporan (Line Chart) ─────────────────────────────────────────────

const trendData = [
    { tanggal: '1 Maret', kasus: 1 },
    { tanggal: '2 Maret', kasus: 2 },
    { tanggal: '3 Maret', kasus: 1 },
    { tanggal: '4 Maret', kasus: 3 },
    { tanggal: '5 Maret', kasus: 2 },
    { tanggal: '6 Maret', kasus: 4 },
    { tanggal: '7 Maret', kasus: 3 },
    { tanggal: '8 Maret', kasus: 5 },
    { tanggal: '9 Maret', kasus: 2 },
    { tanggal: '10 Maret', kasus: 4 },
    { tanggal: '11 Maret', kasus: 3 },
    { tanggal: '12 Maret', kasus: 5 },
]

const TrendTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="rounded-lg border bg-white dark:bg-gray-800 p-2.5 shadow-sm text-xs">
                <p className="font-semibold text-gray-600 dark:text-gray-300 mb-1">{label}</p>
                <p className="font-bold text-emerald-500">{payload[0].value} kasus</p>
            </div>
        )
    }
    return null
}

export function LingkunganTanggalLaporan() {
    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full min-h-[300px]'>
            <h3 className="text-md font-semibold text-slate-400 mb-6">Tanggal Laporan</h3>
            <ResponsiveContainer width="100%" height={240}>
                <LineChart
                    data={trendData}
                    margin={{ left: 8, right: 16, top: 8, bottom: 24 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                    <XAxis
                        dataKey="tanggal"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 11, fill: '#94a3b8' }}
                        interval={1}
                        label={{
                            value: 'Tanggal',
                            position: 'insideBottom',
                            offset: -16,
                            fontSize: 11,
                            fill: '#94a3b8',
                            fontWeight: 700,
                        }}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 11, fill: '#94a3b8' }}
                        allowDecimals={false}
                        width={40}
                        label={{
                            value: 'Kasus',
                            angle: -90,
                            position: 'insideLeft',
                            offset: 8,
                            fontSize: 11,
                            fill: '#94a3b8',
                            fontWeight: 700,
                        }}
                    />
                    <Tooltip content={<TrendTooltip />} />
                    <Line
                        type="monotone"
                        dataKey="kasus"
                        stroke="#22c55e"
                        strokeWidth={2.5}
                        dot={{ fill: '#22c55e', r: 3, strokeWidth: 0 }}
                        activeDot={{ r: 5, fill: '#22c55e' }}
                    />
                </LineChart>
            </ResponsiveContainer>

            {/* Summary row */}
            <div className="flex items-center justify-between mt-4 px-1">
                <span className="text-xs text-slate-400">1 Maret – 12 Maret 2026</span>
                <span className="text-xs font-bold text-emerald-500">
                    {trendData.reduce((s, d) => s + d.kasus, 0)} kasus total
                </span>
            </div>
        </div>
    )
}

// ─── Saluran Air Tersumbat – Dedicated Charts ────────────────────────────────

// Status Laporan: Pie chart (like Kelompok Usia)
const GENANGAN_META = [
    { value: 'ringan', label: 'Ringan', sub: '(Air Mengalir Lambat)', color: '#22c55e' },
    { value: 'sedang', label: 'Sedang', sub: '(Air Tergenang)', color: '#f97316' },
    { value: 'parah', label: 'Parah', sub: '(Meluber / Potensi Banjir)', color: '#ef4444' },
]

// Static mock data for pie (mapped from status buckets)
const SALURAN_GENANGAN_DATA = [
    { name: 'Ringan (Air Mengalir Lambat)', value: 6, color: '#22c55e' },
    { name: 'Sedang (Air Tergenang)', value: 9, color: '#f97316' },
    { name: 'Parah (Meluber / Potensi Banjir)', value: 5, color: '#ef4444' },
]

export function SaluranStatusPieChart() {
    const total = SALURAN_GENANGAN_DATA.reduce((s, d) => s + d.value, 0)

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col'>
            <h3 className="text-md font-semibold text-slate-400 mt-2 mb-4">Kondisi Genangan</h3>
            <div className='flex flex-col items-center justify-center flex-1 w-full'>
                <div className='h-[250px] w-full'>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={SALURAN_GENANGAN_DATA}
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                dataKey="value"
                                stroke="#fff"
                                strokeWidth={2}
                                paddingAngle={2}
                                labelLine={false}
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
                                    if (cx == null || cy == null || midAngle == null || innerRadius == null || outerRadius == null || percent == null || percent < 0.05) return null;
                                    const radius = innerRadius + (outerRadius - innerRadius) * 0.55;
                                    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
                                    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
                                    return (
                                        <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={13} fontWeight="bold">
                                            {`${(percent * 100).toFixed(0)}%`}
                                        </text>
                                    );
                                }}
                            >
                                {SALURAN_GENANGAN_DATA.map((d, index) => (
                                    <Cell key={`cell-${index}`} fill={d.color} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', backgroundColor: 'rgba(255,255,255,0.95)' }}
                                itemStyle={{ color: '#1f2937', fontWeight: 'bold' }}
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                formatter={(value: any, _name: any, props: any) => [`${value} kasus (${total > 0 ? ((value / total) * 100).toFixed(1) : 0}%)`, props.payload.name]}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className='w-full max-w-[260px] mx-auto grid grid-cols-1 gap-y-2.5 mt-4 shrink-0'>
                    {GENANGAN_META.map((item, index) => (
                        <div key={index} className='flex items-center gap-2'>
                            <div className='w-3 h-3 rounded-full shrink-0' style={{ backgroundColor: item.color }} />
                            <div className='flex flex-col'>
                                <p className='text-xs text-gray-700 dark:text-gray-300 font-semibold leading-tight'>
                                    {item.label} <span className="font-normal text-gray-500">{item.sub}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// Kondisi Sumbatan: Horizontal Bar Chart (like Kondisi Ekonomi)
const SUMBATAN_META = [
    { label: 'Banyak Sampah', color: '#f97316' },
    { label: 'Endapan Lumpur', color: '#a16207' },
    { label: 'Tutup Drainase Rusak', color: '#6366f1' },
    { label: 'Bau Tidak Sedap', color: '#14b8a6' },
    { label: 'Tidak Diketahui', color: '#94a3b8' },
]

const SUMBATAN_DATA = [
    { name: 'Banyak Sampah', value: 8 },
    { name: 'Endapan Lumpur', value: 6 },
    { name: 'Tutup Drainase Rusak', value: 4 },
    { name: 'Bau Tidak Sedap', value: 3 },
    { name: 'Tidak Diketahui', value: 2 },
]

const SUMBATAN_COLORS = SUMBATAN_META.map(m => m.color)

export function SaluranKondisiSumbatan() {
    const total = SUMBATAN_DATA.reduce((s, d) => s + d.value, 0)
    const chartData = SUMBATAN_DATA.map(d => ({
        ...d,
        percentage: total > 0 ? ((d.value / total) * 100).toFixed(2) : '0'
    }))
    const maxValue = Math.max(...chartData.map(d => d.value), 0)

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col'>
            <h3 className="text-md font-semibold text-slate-400 mb-6">Kondisi Sumbatan</h3>
            <div className='flex flex-col lg:flex-row gap-8 items-start flex-1'>
                <div className='flex-1 h-[320px] w-full'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={chartData}
                            layout="vertical"
                            margin={{ left: 8, right: 60, top: 0, bottom: 40 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                            <XAxis
                                type="number"
                                domain={[0, maxValue + 1]}
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: '#94a3b8' }}
                                tickFormatter={(val) => Number.isInteger(val) ? val.toString() : ''}
                                label={{
                                    value: 'Jumlah Kasus',
                                    position: 'insideBottom',
                                    offset: -24,
                                    fontSize: 11,
                                    fill: '#94a3b8',
                                    fontWeight: 700,
                                }}
                            />
                            <YAxis
                                dataKey="name"
                                type="category"
                                width={155}
                                tick={{ fontSize: 11, fontWeight: 600, fill: '#64748b' }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={38}>
                                {chartData.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={SUMBATAN_COLORS[index % SUMBATAN_COLORS.length]} />
                                ))}
                                <LabelList
                                    dataKey="value"
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    content={(props: any) => {
                                        const { x, y, width, height, value } = props;
                                        if (value === undefined || value === null) return null;
                                        const isSmallValue = value < 2;
                                        return (
                                            <text
                                                x={isSmallValue ? x + width + 8 : x + 10}
                                                y={y + height / 2}
                                                fill={isSmallValue ? "#64748b" : "#fff"}
                                                fontSize={11}
                                                fontWeight="bold"
                                                dominantBaseline="middle"
                                            >
                                                {value} kasus
                                            </text>
                                        );
                                    }}
                                />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className='w-full lg:w-auto shrink-0 space-y-4'>
                    {chartData.map((item, index) => (
                        <div key={index} className='flex items-start gap-3'>
                            <div className='w-3 h-3 rounded-full mt-1 shrink-0' style={{ backgroundColor: SUMBATAN_COLORS[index % SUMBATAN_COLORS.length] }} />
                            <div>
                                <p className='text-xs text-gray-400 font-medium'>{item.name}</p>
                                <p className='text-sm font-bold text-gray-900 dark:text-gray-100'>{item.percentage}%</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// Kondisi Sumbatan per Kondisi Genangan (like Jenis Penyakit per Kelompok Usia)
const SUMBATAN_PER_GENANGAN: Record<string, Record<string, number>> = {
    'Ringan': {
        'Banyak Sampah': 3,
        'Endapan Lumpur': 2,
        'Tutup Drainase Rusak': 0,
        'Bau Tidak Sedap': 1,
        'Tidak Diketahui': 0,
    },
    'Sedang': {
        'Banyak Sampah': 3,
        'Endapan Lumpur': 3,
        'Tutup Drainase Rusak': 2,
        'Bau Tidak Sedap': 1,
        'Tidak Diketahui': 0,
    },
    'Parah': {
        'Banyak Sampah': 2,
        'Endapan Lumpur': 1,
        'Tutup Drainase Rusak': 2,
        'Bau Tidak Sedap': 1,
        'Tidak Diketahui': 2,
    },
}

const GENANGAN_COLORS: Record<string, string> = {
    'Ringan': '#22c55e',
    'Sedang': '#f97316',
    'Parah': '#ef4444',
}

export function SaluranKondisiSumbatanPerGenangan() {
    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col'>
            <h3 className='text-md font-semibold text-slate-400 mb-6'>
                Kondisi Sumbatan per Kondisi Genangan
            </h3>

            <div className='flex-1 overflow-y-auto pr-1 grid grid-cols-1 sm:grid-cols-3 gap-4'>
                {Object.entries(SUMBATAN_PER_GENANGAN).map(([genangan, sumbatanMap]) => {
                    const total = Object.values(sumbatanMap).reduce((a, b) => a + b, 0)
                    const color = GENANGAN_COLORS[genangan] || '#94a3b8'

                    return (
                        <div key={genangan} className="flex flex-col bg-gray-50/50 dark:bg-gray-900/20 p-4 rounded-xl border border-gray-100 dark:border-gray-800/50">
                            <div className='flex items-center justify-between mb-4'>
                                <span className='text-sm font-semibold' style={{ color }}>
                                    {genangan}
                                </span>
                                <div className='flex items-center gap-1.5 px-2.5 py-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700'>
                                    <span className='text-xs font-bold text-gray-900 dark:text-white'>{total}</span>
                                    <span className='text-[10px] text-gray-500 font-medium'>kasus</span>
                                </div>
                            </div>

                            <div className='space-y-3.5'>
                                {SUMBATAN_META.map((meta) => {
                                    const count = sumbatanMap[meta.label] || 0
                                    const percentage = total > 0 ? ((count / total) * 100).toFixed(1) : '0'

                                    return (
                                        <div key={meta.label}>
                                            <div className='flex items-center justify-between mb-1.5 px-1'>
                                                <div className='flex items-center gap-2'>
                                                    <div className="w-2 h-2 rounded-full shadow-sm" style={{ backgroundColor: meta.color }} />
                                                    <span className='text-[11px] font-medium text-gray-600 dark:text-gray-400'>
                                                        {meta.label}
                                                    </span>
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <span className='text-xs font-bold text-gray-800 dark:text-gray-200'>{count}</span>
                                                    <span className='text-[10px] text-gray-400 font-medium min-w-[38px] text-right'>({percentage}%)</span>
                                                </div>
                                            </div>
                                            <div className='w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-2 overflow-hidden'>
                                                <div
                                                    className='h-full rounded-full transition-all duration-700 ease-out'
                                                    style={{ width: `${percentage}%`, backgroundColor: meta.color }}
                                                />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

// ─── Saluran Category Section ─────────────────────────────────────────────────

interface SaluranCategorySectionProps {
    title: string
    description: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any
    color: string
}

export function SaluranCategorySection({ title, description, icon, color }: SaluranCategorySectionProps) {
    return (
        <SectionContainer
            title={title}
            description={description}
            icon={icon}
            color={color}
            id="section-saluran"
        >
            {/* Row 1: Pie Status + Kondisi Sumbatan bar */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div className='flex flex-col gap-8'>
                    <SaluranStatusPieChart />
                </div>
                <div className='lg:col-span-2'>
                    <SaluranKondisiSumbatan />
                </div>
            </div>

            {/* Row 2: Kondisi Sumbatan per Kondisi Genangan */}
            <div>
                <SaluranKondisiSumbatanPerGenangan />
            </div>
        </SectionContainer>
    )
}

// ─── Jalan Rusak – Dedicated Charts ──────────────────────────────────────────

// Jenis Jalan: Horizontal Bar Chart (like Kondisi Ekonomi)
const JENIS_JALAN_META = [
    { label: 'Aspal', color: '#64748b' },
    { label: 'Paving', color: '#6366f1' },
    { label: 'Tanah / Belum dicor', color: '#a16207' },
]

const JENIS_JALAN_DATA = [
    { name: 'Aspal', value: 9 },
    { name: 'Paving', value: 5 },
    { name: 'Tanah / Belum dicor', value: 3 },
]

const JENIS_JALAN_COLORS = JENIS_JALAN_META.map(m => m.color)

export function JalanJenisChart() {
    const total = JENIS_JALAN_DATA.reduce((s, d) => s + d.value, 0)
    const chartData = JENIS_JALAN_DATA.map(d => ({
        ...d,
        percentage: total > 0 ? ((d.value / total) * 100).toFixed(2) : '0',
    }))
    const maxValue = Math.max(...chartData.map(d => d.value), 0)

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full'>
            <h3 className="text-md font-semibold text-slate-400 mb-6">Jenis Jalan</h3>
            <div className='flex flex-col gap-6 items-start'>
                <div className='w-full h-[220px]'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={chartData}
                            layout="vertical"
                            margin={{ left: 8, right: 30, top: 0, bottom: 30 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                            <XAxis
                                type="number"
                                domain={[0, maxValue]}
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: '#94a3b8' }}
                                tickFormatter={(val) => Number.isInteger(val) ? val.toString() : ''}
                                label={{
                                    value: 'Jumlah Kasus',
                                    position: 'insideBottom',
                                    offset: -16,
                                    fontSize: 11,
                                    fill: '#94a3b8',
                                    fontWeight: 700,
                                }}
                            />
                            <YAxis
                                dataKey="name"
                                type="category"
                                width={130}
                                tick={{ fontSize: 11, fontWeight: 600, fill: '#64748b' }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={38}>
                                {chartData.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={JENIS_JALAN_COLORS[index % JENIS_JALAN_COLORS.length]} />
                                ))}
                                <LabelList
                                    dataKey="value"
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    content={(props: any) => {
                                        const { x, y, width, height, value } = props;
                                        if (value === undefined || value === null) return null;
                                        const isSmallValue = value < 2;
                                        return (
                                            <text
                                                x={isSmallValue ? x + width + 8 : x + 10}
                                                y={y + height / 2}
                                                fill={isSmallValue ? "#64748b" : "#fff"}
                                                fontSize={11}
                                                fontWeight="bold"
                                                dominantBaseline="middle"
                                            >
                                                {value} kasus
                                            </text>
                                        );
                                    }}
                                />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className='w-full flex flex-wrap justify-center gap-x-8 gap-y-4 pt-2 border-t border-gray-100 dark:border-gray-800/60'>
                    {chartData.map((item, index) => (
                        <div key={index} className='flex items-center gap-2.5'>
                            <div className='w-3 h-3 rounded-full shrink-0' style={{ backgroundColor: JENIS_JALAN_COLORS[index % JENIS_JALAN_COLORS.length] }} />
                            <div className='flex items-center gap-2'>
                                <p className='text-xs text-gray-500 font-medium'>{item.name}</p>
                                <p className='text-xs font-bold text-gray-900 dark:text-gray-100'>{item.percentage}%</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// Kondisi Kerusakan: Pie Chart (like Kelompok Usia Warga Sakit)
const KONDISI_KERUSAKAN_META = [
    { value: 'ringan', shortLabel: 'Ringan', label: 'Ringan (Permukaan mulai rusak)', color: '#22c55e' },
    { value: 'sedang', shortLabel: 'Sedang', label: 'Sedang (Mulai sulit dilalui kendaraan)', color: '#f97316' },
    { value: 'parah', shortLabel: 'Parah', label: 'Parah (Jalan sulit dilalui dan membahayakan)', color: '#ef4444' },
]

const KONDISI_KERUSAKAN_DATA = [
    { name: 'Ringan', value: 4, color: '#22c55e' },
    { name: 'Sedang', value: 8, color: '#f97316' },
    { name: 'Parah', value: 5, color: '#ef4444' },
]

export function JalanKondisiKerusakanChart() {
    const total = KONDISI_KERUSAKAN_DATA.reduce((s, d) => s + d.value, 0)

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col'>
            <h3 className="text-md font-semibold text-slate-400 mt-2 mb-4">Kondisi Kerusakan</h3>
            <div className='flex flex-col items-center justify-center flex-1 w-full'>
                <div className='h-[250px] w-full'>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={KONDISI_KERUSAKAN_DATA}
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                dataKey="value"
                                stroke="#fff"
                                strokeWidth={2}
                                paddingAngle={2}
                                labelLine={false}
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
                                    if (cx == null || cy == null || midAngle == null || innerRadius == null || outerRadius == null || percent == null || percent < 0.05) return null;
                                    const radius = innerRadius + (outerRadius - innerRadius) * 0.55;
                                    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
                                    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
                                    return (
                                        <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={13} fontWeight="bold">
                                            {`${(percent * 100).toFixed(0)}%`}
                                        </text>
                                    );
                                }}
                            >
                                {KONDISI_KERUSAKAN_DATA.map((d, index) => (
                                    <Cell key={`cell-${index}`} fill={d.color} />
                                ))}
                            </Pie>
                                <Tooltip
                                contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', backgroundColor: 'rgba(255,255,255,0.95)' }}
                                itemStyle={{ color: '#1f2937', fontWeight: 'bold' }}
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                formatter={(value: any, _name: any, props: any) => [`${value} kasus (${total > 0 ? ((value / total) * 100).toFixed(1) : 0}%)`, props.payload.name]}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className='w-full max-w-[280px] mx-auto grid grid-cols-1 gap-y-2.5 mt-4 shrink-0'>
                    {KONDISI_KERUSAKAN_META.map((item, index) => (
                        <div key={index} className='flex items-center gap-2'>
                            <div className='w-3 h-3 rounded-full shrink-0' style={{ backgroundColor: item.color }} />
                            <div className='flex flex-col'>
                                <p className='text-xs text-gray-700 dark:text-gray-300 font-semibold leading-tight'>
                                    {item.shortLabel} <span className="font-normal text-gray-500">{item.label.replace(item.shortLabel, '').trim()}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// Kondisi Kerusakan per Jenis Jalan (like Jenis Penyakit per Kelompok Usia)
const KONDISI_PER_JENIS: Record<string, Record<string, number>> = {
    'Aspal': {
        'Ringan': 2,
        'Sedang': 5,
        'Parah': 2,
    },
    'Paving': {
        'Ringan': 1,
        'Sedang': 3,
        'Parah': 2,
    },
    'Tanah / Belum dicor': {
        'Ringan': 1,
        'Sedang': 1,
        'Parah': 1,
    },
}

const KONDISI_KERUSAKAN_COLORS: Record<string, string> = {
    'Ringan': '#22c55e',
    'Sedang': '#f97316',
    'Parah': '#ef4444',
}

const KONDISI_LABEL_SHORT: Record<string, string> = {
    'Ringan': 'Ringan (Permukaan mulai rusak)',
    'Sedang': 'Sedang (Mulai sulit dilalui kendaraan)',
    'Parah': 'Parah (Jalan sulit dilalui dan membahayakan)',
}

export function JalanKondisiPerJenis() {
    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col'>
            <h3 className='text-md font-semibold text-slate-400 mb-6'>
                Kondisi Kerusakan per Jenis Jalan
            </h3>

            <div className='flex-1 overflow-y-auto pr-1 grid grid-cols-1 sm:grid-cols-3 gap-4'>
                {Object.entries(KONDISI_PER_JENIS).map(([jenis, kondisiMap]) => {
                    const total = Object.values(kondisiMap).reduce((a, b) => a + b, 0)

                    return (
                        <div key={jenis} className="flex flex-col bg-gray-50/50 dark:bg-gray-900/20 p-4 rounded-xl border border-gray-100 dark:border-gray-800/50">
                            <div className='flex items-center justify-between mb-4'>
                                <span className='text-sm font-bold text-gray-900 dark:text-white'>
                                    {jenis}
                                </span>
                                <div className='flex items-center gap-1.5 px-2.5 py-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700'>
                                    <span className='text-xs font-bold text-gray-900 dark:text-white'>{total}</span>
                                    <span className='text-[10px] text-gray-500 font-medium'>kasus</span>
                                </div>
                            </div>

                            <div className='space-y-3.5'>
                                {Object.entries(kondisiMap).map(([kondisi, count]) => {
                                    const percentage = total > 0 ? ((count / total) * 100).toFixed(1) : '0'
                                    const color = KONDISI_KERUSAKAN_COLORS[kondisi] || '#94a3b8'

                                    return (
                                        <div key={kondisi}>
                                            <div className='flex items-center justify-between mb-1.5 px-1'>
                                                <div className='flex items-center gap-2'>
                                                    <div className="w-2 h-2 rounded-full shadow-sm" style={{ backgroundColor: color }} />
                                                    <span className='text-[11px] font-medium text-gray-600 dark:text-gray-400'>
                                                        {kondisi}
                                                    </span>
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <span className='text-xs font-bold text-gray-800 dark:text-gray-200'>{count}</span>
                                                    <span className='text-[10px] text-gray-400 font-medium min-w-[38px] text-right'>({percentage}%)</span>
                                                </div>
                                            </div>
                                            <div className='w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-2 overflow-hidden'>
                                                <div
                                                    className='h-full rounded-full transition-all duration-700 ease-out'
                                                    style={{ width: `${percentage}%`, backgroundColor: color }}
                                                />
                                            </div>
                                            <p className='text-[10px] text-gray-400 mt-1 px-1'>{KONDISI_LABEL_SHORT[kondisi]}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

// ─── Jalan Category Section ────────────────────────────────────────────────────

interface JalanCategorySectionProps {
    title: string
    description: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any
    color: string
}

export function JalanCategorySection({ title, description, icon, color }: JalanCategorySectionProps) {
    return (
        <SectionContainer
            title={title}
            description={description}
            icon={icon}
            color={color}
            id="section-jalan"
        >
            {/* Row 1: Jenis Jalan bar + Kondisi Kerusakan pie */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div className='lg:col-span-2'>
                    <JalanJenisChart />
                </div>
                <div className='flex flex-col gap-8'>
                    <JalanKondisiKerusakanChart />
                </div>
            </div>

            {/* Row 2: Kondisi Kerusakan per Jenis Jalan */}
            <div>
                <JalanKondisiPerJenis />
            </div>
        </SectionContainer>
    )
}

// ─── Penerangan Jalan Category Section ─────────────────────────────────────────

// 1. Status Penerangan (Progress Bars, like Penerima Bantuan)
const STATUS_PENERANGAN_DATA = [
    { name: 'Sudah ada lampu', value: 12, color: '#10b981' }, // Emerald
    { name: 'Belum ada lampu', value: 5, color: '#f43f5e' }, // Rose
]

export function PeneranganStatusChart() {
    const total = STATUS_PENERANGAN_DATA.reduce((sum, item) => sum + item.value, 0)
    const chartData = STATUS_PENERANGAN_DATA.map(d => ({
        ...d,
        percentage: total > 0 ? ((d.value / total) * 100).toFixed(1) : '0'
    }))
    const maxValue = Math.max(...chartData.map(d => d.value), 0)

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col'>
            <h3 className="text-md font-semibold text-slate-400 mb-6">Status Penerangan</h3>
            <div className='flex flex-col gap-6 items-start flex-1'>
                <div className='w-full h-[160px]'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={chartData}
                            layout="vertical"
                            margin={{ left: 8, right: 30, top: 0, bottom: 30 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                            <XAxis
                                type="number"
                                domain={[0, maxValue]}
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: '#94a3b8' }}
                                tickFormatter={(val) => Number.isInteger(val) ? val.toString() : ''}
                                label={{
                                    value: 'Jumlah Kasus',
                                    position: 'insideBottom',
                                    offset: -16,
                                    fontSize: 11,
                                    fill: '#94a3b8',
                                    fontWeight: 700,
                                }}
                            />
                            <YAxis
                                dataKey="name"
                                type="category"
                                width={120}
                                tick={{ fontSize: 11, fontWeight: 600, fill: '#64748b' }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={28}>
                                {chartData.map((d, index) => (
                                    <Cell key={`cell-${index}`} fill={d.color} />
                                ))}
                                <LabelList
                                    dataKey="value"
                                    content={(props: any) => {
                                        const { x, y, width, height, value } = props;
                                        if (value == null) return null;
                                        const isSmallValue = value < 2;
                                        return (
                                            <text
                                                x={isSmallValue ? x + width + 8 : x + 10}
                                                y={y + height / 2}
                                                fill={isSmallValue ? "#64748b" : "#fff"}
                                                fontSize={11}
                                                fontWeight="bold"
                                                dominantBaseline="middle"
                                            >
                                                {value} kasus
                                            </text>
                                        );
                                    }}
                                />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className='w-full flex flex-wrap justify-center gap-x-8 gap-y-4 pt-2 border-t border-gray-100 dark:border-gray-800/60'>
                    {chartData.map((item, index) => (
                        <div key={index} className='flex items-center gap-2.5'>
                            <div className='w-3 h-3 rounded-full shrink-0' style={{ backgroundColor: item.color }} />
                            <div className='flex items-center gap-2'>
                                <p className='text-xs text-gray-500 font-medium'>{item.name}</p>
                                <p className='text-xs font-bold text-gray-900 dark:text-gray-100'>{item.percentage}%</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// 2. Jumlah Titik Terdampak (Vertical Bar Chart like Jenis Jalan)
const TITIK_TERDAMPAK_DATA = [
    { name: '1 Titik', value: 8 },
    { name: '2-3 Titik', value: 5 },
    { name: 'Lebih dari 3 titik', value: 4 },
]
const TITIK_TERDAMPAK_COLORS = ['#3b82f6', '#8b5cf6', '#ec4899']

export function PeneranganTitikTerdampakChart() {
    const total = TITIK_TERDAMPAK_DATA.reduce((s, d) => s + d.value, 0)
    const chartData = TITIK_TERDAMPAK_DATA.map(d => ({
        ...d,
        percentage: total > 0 ? ((d.value / total) * 100).toFixed(1) : '0'
    }))
    const maxValue = Math.max(...chartData.map(d => d.value), 0)

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col'>
            <h3 className="text-md font-semibold text-slate-400 mb-6">Jumlah Titik Terdampak</h3>
            <div className='flex flex-col lg:flex-row gap-8 items-start flex-1'>
                <div className='flex-1 h-[200px] w-full'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={chartData}
                            layout="vertical"
                            margin={{ left: 8, right: 40, top: 0, bottom: 20 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                            <XAxis
                                type="number"
                                domain={[0, maxValue + 1]}
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: '#94a3b8' }}
                                tickFormatter={(val) => Number.isInteger(val) ? val.toString() : ''}
                                label={{
                                    value: 'Jumlah Kasus',
                                    position: 'insideBottom',
                                    offset: -12,
                                    fontSize: 11,
                                    fill: '#94a3b8',
                                    fontWeight: 700,
                                }}
                            />
                            <YAxis
                                dataKey="name"
                                type="category"
                                width={110}
                                tick={{ fontSize: 11, fontWeight: 600, fill: '#64748b' }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={32}>
                                {chartData.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={TITIK_TERDAMPAK_COLORS[index % TITIK_TERDAMPAK_COLORS.length]} />
                                ))}
                                <LabelList
                                    dataKey="value"
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    content={(props: any) => {
                                        const { x, y, width, height, value } = props;
                                        if (value == null) return null;
                                        const isSmallValue = value < 2;
                                        return (
                                            <text
                                                x={isSmallValue ? x + width + 8 : x + 10}
                                                y={y + height / 2}
                                                fill={isSmallValue ? "#64748b" : "#fff"}
                                                fontSize={11}
                                                fontWeight="bold"
                                                dominantBaseline="middle"
                                            >
                                                {value} kasus
                                            </text>
                                        );
                                    }}
                                />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className='w-full lg:w-auto shrink-0 space-y-4'>
                    {chartData.map((item, index) => (
                        <div key={index} className='flex items-start gap-3'>
                            <div className='w-3 h-3 rounded-full mt-1 shrink-0' style={{ backgroundColor: TITIK_TERDAMPAK_COLORS[index % TITIK_TERDAMPAK_COLORS.length] }} />
                            <div>
                                <p className='text-xs text-gray-400 font-medium'>{item.name}</p>
                                <p className='text-sm font-bold text-gray-900 dark:text-gray-100'>{item.percentage}%</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// 3. Kondisi Lampu & Kebutuhan Penerangan (Card breakdown)
const KONDISI_LAMPU_DATA = [
    { name: 'Mati Total', value: 5, color: '#ef4444' },
    { name: 'Berkedip / Tidak Stabil', value: 3, color: '#f97316' },
    { name: 'Redup', value: 2, color: '#eab308' },
    { name: 'Penutup / Kaca Rusak', value: 2, color: '#64748b' },
]

export function PeneranganKondisiLampuPerJenis() {
    const total = KONDISI_LAMPU_DATA.reduce((a, b) => a + b.value, 0)
    const chartData = KONDISI_LAMPU_DATA.map(d => ({
        ...d,
        percentage: total > 0 ? ((d.value / total) * 100).toFixed(1) : '0'
    }))
    const maxValue = Math.max(...chartData.map(d => d.value), 0)

    return (
        <div className="flex flex-col bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full">
            <h3 className="text-md font-semibold text-slate-400 mb-6">
                Kondisi Lampu (Sudah ada Lampu)
            </h3>

            <div className='flex flex-col gap-6 items-start flex-1'>
                <div className='w-full h-[220px]'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={chartData}
                            layout="vertical"
                            margin={{ left: 8, right: 30, top: 0, bottom: 30 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                            <XAxis
                                type="number"
                                domain={[0, maxValue]}
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: '#94a3b8' }}
                                tickFormatter={(val) => Number.isInteger(val) ? val.toString() : ''}
                                label={{
                                    value: 'Jumlah Kasus',
                                    position: 'insideBottom',
                                    offset: -16,
                                    fontSize: 11,
                                    fill: '#94a3b8',
                                    fontWeight: 700,
                                }}
                            />
                            <YAxis
                                dataKey="name"
                                type="category"
                                width={140}
                                tick={{ fontSize: 11, fontWeight: 600, fill: '#64748b' }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={24}>
                                {chartData.map((d, index) => (
                                    <Cell key={`cell-${index}`} fill={d.color} />
                                ))}
                                <LabelList
                                    dataKey="value"
                                    content={(props: any) => {
                                        const { x, y, width, height, value } = props;
                                        if (value == null) return null;
                                        const isSmallValue = value < 2;
                                        return (
                                            <text
                                                x={isSmallValue ? x + width + 8 : x + 10}
                                                y={y + height / 2}
                                                fill={isSmallValue ? "#64748b" : "#fff"}
                                                fontSize={11}
                                                fontWeight="bold"
                                                dominantBaseline="middle"
                                            >
                                                {value} kasus
                                            </text>
                                        );
                                    }}
                                />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className='w-full flex flex-wrap justify-center gap-x-6 gap-y-3 pt-2 border-t border-gray-100 dark:border-gray-800/60'>
                    {chartData.map((item, index) => (
                        <div key={index} className='flex items-center gap-2'>
                            <div className='w-3 h-3 rounded-full shrink-0' style={{ backgroundColor: item.color }} />
                            <div className='flex items-center gap-1.5'>
                                <p className='text-xs text-gray-500 font-medium'>{item.name}</p>
                                <p className='text-xs font-bold text-gray-900 dark:text-gray-100'>{item.percentage}%</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const KEBUTUHAN_PENERANGAN_DATA = [
    { name: 'Perlu Penambahan 1 Titik', value: 2, color: '#3b82f6' },
    { name: 'Perlu Beberapa Titik', value: 2, color: '#8b5cf6' },
    { name: 'Area Sangat Gelap', value: 1, color: '#10b981' },
]

export function PeneranganKebutuhanPerJenis() {
    const total = KEBUTUHAN_PENERANGAN_DATA.reduce((a, b) => a + b.value, 0)
    const chartData = KEBUTUHAN_PENERANGAN_DATA.map(d => ({
        ...d,
        percentage: total > 0 ? ((d.value / total) * 100).toFixed(1) : '0'
    }))
    const maxValue = Math.max(...chartData.map(d => d.value), 0)

    return (
        <div className="flex flex-col bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full">
            <h3 className="text-md font-semibold text-slate-400 mb-6">
                Kebutuhan Penerangan (Belum ada Lampu)
            </h3>

            <div className='flex flex-col gap-6 items-start flex-1'>
                <div className='w-full h-[180px]'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={chartData}
                            layout="vertical"
                            margin={{ left: 8, right: 30, top: 0, bottom: 30 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                            <XAxis
                                type="number"
                                domain={[0, maxValue]}
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: '#94a3b8' }}
                                tickFormatter={(val) => Number.isInteger(val) ? val.toString() : ''}
                                label={{
                                    value: 'Jumlah Kasus',
                                    position: 'insideBottom',
                                    offset: -16,
                                    fontSize: 11,
                                    fill: '#94a3b8',
                                    fontWeight: 700,
                                }}
                            />
                            <YAxis
                                dataKey="name"
                                type="category"
                                width={160}
                                tick={{ fontSize: 11, fontWeight: 600, fill: '#64748b' }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={26}>
                                {chartData.map((d, index) => (
                                    <Cell key={`cell-${index}`} fill={d.color} />
                                ))}
                                <LabelList
                                    dataKey="value"
                                    content={(props: any) => {
                                        const { x, y, width, height, value } = props;
                                        if (value == null) return null;
                                        const isSmallValue = value < 2;
                                        return (
                                            <text
                                                x={isSmallValue ? x + width + 8 : x + 10}
                                                y={y + height / 2}
                                                fill={isSmallValue ? "#64748b" : "#fff"}
                                                fontSize={11}
                                                fontWeight="bold"
                                                dominantBaseline="middle"
                                            >
                                                {value} kasus
                                            </text>
                                        );
                                    }}
                                />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className='w-full flex flex-wrap justify-center gap-x-6 gap-y-3 pt-2 border-t border-gray-100 dark:border-gray-800/60'>
                    {chartData.map((item, index) => (
                        <div key={index} className='flex items-center gap-2'>
                            <div className='w-3 h-3 rounded-full shrink-0' style={{ backgroundColor: item.color }} />
                            <div className='flex items-center gap-1.5'>
                                <p className='text-xs text-gray-500 font-medium'>{item.name}</p>
                                <p className='text-xs font-bold text-gray-900 dark:text-gray-100'>{item.percentage}%</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// 4. Kondisi Lampu per Jumlah Titik Terdampak (Full width, Penyebab Meninggal style)
const KONDISI_PER_TITIK_DATA = [
    {
        name: 'Mati Total',
        total: 5,
        '1 Titik': 2,
        '2-3 Titik': 2,
        'Lebih dari 3 titik': 1,
    },
    {
        name: 'Berkedip / Tidak Stabil',
        total: 3,
        '1 Titik': 1,
        '2-3 Titik': 1,
        'Lebih dari 3 titik': 1,
    },
    {
        name: 'Redup',
        total: 2,
        '1 Titik': 1,
        '2-3 Titik': 1,
        'Lebih dari 3 titik': 0,
    },
    {
        name: 'Penutup / Kaca Rusak',
        total: 2,
        '1 Titik': 2,
        '2-3 Titik': 0,
        'Lebih dari 3 titik': 0,
    },
]

const TITIK_LABELS = [
    { key: '1 Titik', label: '1 Titik', color: '#3b82f6' },
    { key: '2-3 Titik', label: '2-3 Titik', color: '#8b5cf6' },
    { key: 'Lebih dari 3 titik', label: '> 3 Titik', color: '#ec4899' },
]

export function PeneranganKondisiLampuPerTitikChart() {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full mt-6">
            <h3 className="text-md font-semibold text-slate-400 mb-6">
                Kondisi Lampu per Jumlah Titik Terdampak
            </h3>

            <div className="flex-1 overflow-y-auto pr-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
                {KONDISI_PER_TITIK_DATA.map((kondisi, index) => (
                    <div key={index} className="flex flex-col bg-gray-50/50 dark:bg-gray-900/20 p-4 rounded-xl border border-gray-50 dark:border-gray-800/50">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                {kondisi.name}
                            </span>
                            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                                <span className="text-xs font-bold text-gray-900 dark:text-white">
                                    {kondisi.total}
                                </span>
                                <span className="text-[10px] text-gray-500 font-medium">
                                    kasus
                                </span>
                            </div>
                        </div>

                        <div className="space-y-3.5">
                            {TITIK_LABELS.map((group) => {
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                const count = (kondisi as any)[group.key] || 0
                                const percentage = kondisi.total > 0 ? ((count / kondisi.total) * 100).toFixed(1) : '0'
                                return (
                                    <div key={group.key}>
                                        <div className="flex items-center justify-between mb-1.5 px-1">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full shadow-sm" style={{ backgroundColor: group.color }} />
                                                <span className="text-[11px] font-medium text-gray-600 dark:text-gray-400">
                                                    {group.label}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-bold text-gray-800 dark:text-gray-200">
                                                    {count}
                                                </span>
                                                <span className="text-[10px] text-gray-400 font-medium min-w-[32px] text-right">
                                                    ({percentage}%)
                                                </span>
                                            </div>
                                        </div>
                                        <div className="w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-2 overflow-hidden">
                                            <div
                                                className="h-full rounded-full transition-all duration-700 ease-out"
                                                style={{ width: `${percentage}%`, backgroundColor: group.color }}
                                            />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

// ─── Main Category Section Component ──────────────────────────────────────────

interface PeneranganCategorySectionProps {
    title: string
    description: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any
    color: string
}

export function PeneranganCategorySection({ title, description, icon, color }: PeneranganCategorySectionProps) {
    return (
        <SectionContainer
            title={title}
            description={description}
            icon={icon}
            color={color}
            id="section-penerangan"
        >
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
                <div>
                    <PeneranganStatusChart />
                </div>
                <div>
                    <PeneranganTitikTerdampakChart />
                </div>
            </div>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <div>
                    <PeneranganKondisiLampuPerJenis />
                </div>
                <div>
                    <PeneranganKebutuhanPerJenis />
                </div>
            </div>

            <PeneranganKondisiLampuPerTitikChart />
        </SectionContainer>
    )
}

// ─── Main Generic Category Section Component ──────────────────────────────────

interface LingkunganCategorySectionProps {
    categoryId: string
    title: string
    description: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any
    color: string
}

export function LingkunganCategorySection({ categoryId, title, description, icon, color }: LingkunganCategorySectionProps) {
    const data = mockLingkunganData.filter(d => d.category === categoryId)

    return (
        <SectionContainer
            title={title}
            description={description}
            icon={icon}
            color={color}
            count={data.length}
            id={`section-${categoryId}`}
        >
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <div>
                    <LingkunganStatusChart data={data} />
                </div>
                <div className='flex flex-col gap-8'>
                    <LingkunganTanggalLaporan />
                </div>
            </div>
        </SectionContainer>
    )
}
