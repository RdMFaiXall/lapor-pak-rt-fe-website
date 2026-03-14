import { Card } from '@/components/ui/card'
import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    LabelList,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts'

// ─── 1. Jenis Gangguan — vertical bar chart (style: jenis-penyakit.tsx) ────────

const jenisGangguanData = [
    { name: 'Keributan Malam', value: 18 },
    { name: 'Musik Bervolume Tinggi', value: 13 },
    { name: 'Kendaraan Bising', value: 9 },
    { name: 'Petasan Berlebihan', value: 6 },
    { name: 'Lainnya', value: 4 },
]

export const gangguanTotal = jenisGangguanData.reduce((s, d) => s + d.value, 0)

const GANGGUAN_COLORS = ['#dc2626', '#f97316', '#eab308', '#3b82f6', '#6b7280']

export function KeributanLocationChart() {
    const total = jenisGangguanData.reduce((s, d) => s + d.value, 0)
    const chartData = jenisGangguanData.map(d => ({
        ...d,
        percentage: total > 0 ? ((d.value / total) * 100).toFixed(1) : '0',
    }))
    const maxValue = Math.max(...chartData.map(d => d.value), 0)

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col'>
            <h3 className="text-md font-bold text-black dark:text-white mb-6">Jenis Gangguan</h3>

            <div className="flex-1 w-full min-h-[280px] relative">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={chartData}
                        layout="vertical"
                        margin={{ left: 8, right: 80, top: 0, bottom: 30 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                        <XAxis
                            type="number"
                            domain={[0, maxValue]}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: '#94a3b8' }}
                            tickFormatter={val => val.toString()}
                            label={{ value: 'Jumlah Kasus', position: 'insideBottom', offset: -15, fill: '#64748b', fontSize: 12, fontWeight: 'bold' }}
                        />
                        <YAxis
                            dataKey="name"
                            type="category"
                            width={145}
                            tick={{ fontSize: 12, fontWeight: 600, fill: '#64748b' }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={44}>
                            {chartData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={GANGGUAN_COLORS[index % GANGGUAN_COLORS.length]} />
                            ))}
                            <LabelList
                                dataKey="value"
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                content={(props: any) => {
                                    const { x, y, width, height, value, index } = props
                                    if (value === undefined || value === null) return null
                                    const isSmall = value < maxValue * 0.15
                                    const pct = chartData[index]?.percentage
                                    const label = `${value} kasus (${pct}%)`
                                    return (
                                        <text
                                            x={isSmall ? x + width + 8 : x + 10}
                                            y={y + height / 2}
                                            fill={isSmall ? '#64748b' : '#fff'}
                                            fontSize={11}
                                            fontWeight="bold"
                                            dominantBaseline="middle"
                                            textAnchor="start"
                                        >
                                            {label}
                                        </text>
                                    )
                                }}
                            />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

// ─── 2. Pihak yang Terlibat — donut / pie chart ───────────────────────────────

const pihakData = [
    { name: 'Warga Sendiri', value: 22, color: '#dc2626' },
    { name: 'Warga Luar', value: 14, color: '#f97316' },
    { name: 'Tidak Dikenal', value: 8, color: '#6b7280' },
]


export function KeributanResolution() {
    const total = pihakData.reduce((s, d) => s + d.value, 0)

    const chartData = pihakData.map(d => ({
        ...d,
        percentage: total > 0 ? ((d.value / total) * 100).toFixed(1) : '0',
    }))

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full'>
            <p className="text-md font-bold text-black dark:text-white mb-6">Pihak yang Terlibat</p>

            <div className='flex flex-col items-center justify-center flex-1 w-full'>
                {/* Pie chart */}
                <div className='h-[220px] w-full'>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                outerRadius={95}
                                dataKey="value"
                                stroke="#fff"
                                strokeWidth={2}
                                paddingAngle={2}
                                labelLine={false}
                                label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                                    if (cx == null || cy == null || midAngle == null || innerRadius == null || outerRadius == null || percent == null || percent < 0.05) return null
                                    const radius = innerRadius + (outerRadius - innerRadius) * 0.55
                                    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180)
                                    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180)
                                    return (
                                        <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={13} fontWeight="bold">
                                            {`${(percent * 100).toFixed(0)}%`}
                                        </text>
                                    )
                                }}
                            >
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', backgroundColor: 'rgba(255,255,255,0.95)' }}
                                itemStyle={{ color: '#1f2937', fontWeight: 'bold' }}
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                formatter={(value: any, name: any, props: any) => [`${value} kasus (${props.payload.percentage}%)`, name]}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Legend grid 2 kolom */}
                <div className='w-full max-w-[240px] mx-auto grid grid-cols-2 gap-y-3 gap-x-2 mt-6 shrink-0'>
                    {chartData.map((d, index) => (
                        <div key={index} className='flex items-start gap-2'>
                            <div className='w-3 h-3 rounded-full mt-1 shrink-0' style={{ backgroundColor: d.color }} />
                            <div className='flex flex-col'>
                                <p className='text-xs text-gray-700 dark:text-gray-300 font-medium leading-tight'>
                                    {d.name} <span className="font-bold">({d.percentage}%)</span>
                                </p>
                                <p className='text-[10px] text-gray-500 font-medium leading-tight'>{d.value} kasus</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// ─── 3. Jenis Gangguan per Pihak Terlibat — grouped card (style: warga-sakit-jenis-penyakit-by-age-chart) ──

const PIHAK_GROUPS = [
    { key: 'wargaSendiri', label: 'Warga Sendiri', color: '#dc2626' },
    { key: 'wargaLuar', label: 'Warga Luar', color: '#f97316' },
    { key: 'tidakDikenal', label: 'Tidak Dikenal', color: '#6b7280' },
]

const gangguanPerPihak = [
    { name: 'Keributan Malam', wargaSendiri: 8, wargaLuar: 7, tidakDikenal: 3 },
    { name: 'Musik Bervolume Tinggi', wargaSendiri: 7, wargaLuar: 4, tidakDikenal: 2 },
    { name: 'Kendaraan Bising', wargaSendiri: 4, wargaLuar: 3, tidakDikenal: 2 },
    { name: 'Petasan Berlebihan', wargaSendiri: 2, wargaLuar: 3, tidakDikenal: 1 },
    { name: 'Lainnya', wargaSendiri: 1, wargaLuar: 2, tidakDikenal: 1 },
].map(d => ({
    ...d,
    total: d.wargaSendiri + d.wargaLuar + d.tidakDikenal,
}))

export function KeributanPriorityList() {
    return (
        <Card className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 mt-6'>
            <h3 className="text-md font-bold text-black dark:text-white mb-6">Jenis Gangguan per Pihak Terlibat</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {gangguanPerPihak.map((gangguan) => (
                    <div
                        key={gangguan.name}
                        className="flex flex-col bg-gray-50/50 dark:bg-gray-900/20 p-4 rounded-xl border border-gray-50 dark:border-gray-800/50"
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4 gap-2">
                            <span className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">
                                {gangguan.name}
                            </span>
                            <div className="flex items-center gap-1 px-2 py-0.5 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 shrink-0">
                                <span className="text-xs font-bold text-gray-900 dark:text-white">{gangguan.total}</span>
                                <span className="text-[10px] text-gray-500 font-medium">kasus</span>
                            </div>
                        </div>

                        {/* Per-pihak rows */}
                        <div className="space-y-3">
                            {PIHAK_GROUPS.map((group) => {
                                const count = (gangguan as any)[group.key] as number
                                const pct = gangguan.total > 0 ? ((count / gangguan.total) * 100).toFixed(1) : '0'
                                return (
                                    <div key={group.key}>
                                        <div className="flex items-center justify-between mb-1.5 px-0.5">
                                            <div className="flex items-center gap-1.5">
                                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: group.color }} />
                                                <span className="text-[11px] font-medium text-gray-600 dark:text-gray-400">
                                                    {group.label}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <span className="text-xs font-bold text-gray-800 dark:text-gray-200">{count}</span>
                                                <span className="text-[10px] text-gray-400 min-w-[36px] text-right">({pct}%)</span>
                                            </div>
                                        </div>
                                        <div className="w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-1.5 overflow-hidden">
                                            <div
                                                className="h-full rounded-full transition-all duration-700 ease-out"
                                                style={{ width: `${pct}%`, backgroundColor: group.color }}
                                            />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    )
}
