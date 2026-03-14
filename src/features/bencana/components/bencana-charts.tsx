import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    LabelList,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from 'recharts'
import { Card } from '@/components/ui/card'

// ─── 1. Kategori Bencana — vertical bar chart (style: jenis-penyakit.tsx) ────

const kategoriBencanaData = [
    { name: 'Banjir', value: 18 },
    { name: 'Kebakaran', value: 13 },
    { name: 'Tanah Longsor', value: 9 },
    { name: 'Gempa', value: 6 },
    { name: 'Tsunami', value: 3 },
    { name: 'Gunung Meletus', value: 2 },
    { name: 'Pohon Tumbang', value: 7 },
]

export const kategoriBencanaTotal = kategoriBencanaData.reduce((s, d) => s + d.value, 0)

const BENCANA_COLORS = ['#2563eb', '#db2777', '#d97706', '#7c3aed', '#0891b2', '#dc2626', '#059669']

export function BencanaTypeChart() {
    const total = kategoriBencanaData.reduce((s, d) => s + d.value, 0)
    const chartData = kategoriBencanaData
        .map(d => ({
            ...d,
            percentage: total > 0 ? ((d.value / total) * 100).toFixed(1) : '0',
        }))
        .sort((a, b) => b.value - a.value)
    const maxValue = Math.max(...chartData.map(d => d.value), 0)

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col'>
            <h3 className=" ">Kategori Bencana</h3>

            <div className="flex-1 w-full min-h-[320px] relative">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={chartData}
                        layout="vertical"
                        margin={{ left: 8, right: 95, top: 0, bottom: 30 }}
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
                            width={120}
                            tick={{ fontSize: 12, fontWeight: 600, fill: '#64748b' }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={32}>
                            {chartData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={BENCANA_COLORS[index % BENCANA_COLORS.length]} />
                            ))}
                            <LabelList
                                dataKey="value"
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                content={(props: any) => {
                                    const { x, y, width, height, value, index } = props
                                    if (value === undefined || value === null) return null
                                    const isSmall = value < maxValue * 0.25
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

// ─── 2. Data Korban — same design as old BencanaResolution ────────────────────

const korbanMeta = [
    { label: 'Ada Korban', color: '#ef4444', pct: 56 },
    { label: 'Tidak Ada Korban', color: '#22c55e', pct: 44 },
]

export function BencanaResolution() {
    const total = 58 // static mock total

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full gap-5'>
            <p className="text-md font-bold text-black dark:text-white mb-1">Data Korban</p>

            {/* Legend rows */}
            <div className="flex flex-col gap-2.5">
                {korbanMeta.map((item) => (
                    <div key={item.label} className="flex items-start gap-2.5">
                        <span className="mt-0.5 w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                        <div>
                            <p className="text-xs text-slate-500 leading-tight">{item.label}</p>
                            <p className="text-sm font-extrabold text-gray-900 dark:text-white leading-tight">
                                {item.pct}%
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Total + proportional bar */}
            <div className="flex-1 flex flex-col justify-center gap-3 mt-2">
                <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-black text-gray-900 dark:text-white leading-none">{total}</span>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">total kasus</span>
                </div>

                <div className="flex h-12 rounded-xl overflow-hidden gap-0.5">
                    {korbanMeta.map((item) => (
                        <div
                            key={item.label}
                            className="flex items-center justify-center transition-all duration-700 first:rounded-l-xl last:rounded-r-xl"
                            style={{ width: `${Math.max(item.pct, 5)}%`, backgroundColor: item.color }}
                        >
                            {item.pct > 18 && (
                                <span className="text-white font-extrabold text-xs drop-shadow-sm">
                                    {Math.round(total * item.pct / 100)} kasus
                                </span>
                            )}
                        </div>
                    ))}
                </div>

                <div className="flex justify-between text-xs text-slate-400 font-medium">
                    <span>Ada Korban</span>
                    <span>Tidak Ada Korban</span>
                </div>
            </div>
        </div>
    )
}

// ─── 3. Kategori Bencana per Fasilitas Yang Rusak ────────────────────────────
// Style: warga-sakit-jenis-penyakit-by-age-chart.tsx

const FASILITAS_GROUPS = [
    { key: 'rumahWarga', label: 'Rumah Warga', color: '#ef4444' },
    { key: 'tiangListrik', label: 'Tiang Listrik (PLN)', color: '#f97316' },
    { key: 'jembatanJalan', label: 'Jembatan / Jalan', color: '#eab308' },
    { key: 'sekolahMasjid', label: 'Sekolah / Masjid', color: '#3b82f6' },
    { key: 'tidakAda', label: 'Tidak Ada', color: '#22c55e' },
    { key: 'lainnya', label: 'Lainnya', color: '#6b7280' },
]

const bencanaPerFasilitas = [
    { name: 'Banjir', rumahWarga: 8, tiangListrik: 3, jembatanJalan: 4, sekolahMasjid: 2, tidakAda: 1, lainnya: 0 },
    { name: 'Kebakaran', rumahWarga: 2, tiangListrik: 1, jembatanJalan: 1, sekolahMasjid: 1, tidakAda: 0, lainnya: 0 },
    { name: 'Tanah Longsor', rumahWarga: 4, tiangListrik: 1, jembatanJalan: 3, sekolahMasjid: 0, tidakAda: 1, lainnya: 0 },
    { name: 'Gempa', rumahWarga: 3, tiangListrik: 2, jembatanJalan: 1, sekolahMasjid: 2, tidakAda: 0, lainnya: 1 },
    { name: 'Tsunami', rumahWarga: 5, tiangListrik: 1, jembatanJalan: 2, sekolahMasjid: 1, tidakAda: 0, lainnya: 1 },
    { name: 'Gunung Meletus', rumahWarga: 2, tiangListrik: 0, jembatanJalan: 1, sekolahMasjid: 0, tidakAda: 1, lainnya: 0 },
    { name: 'Pohon Tumbang', rumahWarga: 1, tiangListrik: 2, jembatanJalan: 1, sekolahMasjid: 0, tidakAda: 3, lainnya: 0 },
].map(d => ({
    ...d,
    total: d.rumahWarga + d.tiangListrik + d.jembatanJalan + d.sekolahMasjid + d.tidakAda + d.lainnya,
}))

export function BencanaImpactSummary() {
    return (
        <Card className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 mt-6'>
            <h3 className="text-md font-bold text-black dark:text-white mb-6">Kategori Bencana per Fasilitas Yang Rusak</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {bencanaPerFasilitas.map((bencana) => (
                    <div
                        key={bencana.name}
                        className="flex flex-col bg-gray-50/50 dark:bg-gray-900/20 p-4 rounded-xl border border-gray-50 dark:border-gray-800/50"
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4 gap-2">
                            <span className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">
                                {bencana.name}
                            </span>
                            <div className="flex items-center gap-1 px-2 py-0.5 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 shrink-0">
                                <span className="text-xs font-bold text-gray-900 dark:text-white">{bencana.total}</span>
                                <span className="text-[10px] text-gray-500 font-medium">kasus</span>
                            </div>
                        </div>

                        {/* Per-fasilitas rows */}
                        <div className="space-y-3">
                            {FASILITAS_GROUPS.map((group) => {
                                const count = (bencana as any)[group.key] as number
                                const pct = bencana.total > 0 ? ((count / bencana.total) * 100).toFixed(1) : '0'
                                return (
                                    <div key={group.key}>
                                        <div className="flex items-center justify-between mb-1.5 px-0.5">
                                            <div className="flex items-center gap-1.5">
                                                <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: group.color }} />
                                                <span className="text-[11px] font-medium text-gray-600 dark:text-gray-400 leading-tight">
                                                    {group.label}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1.5 shrink-0">
                                                <span className="text-xs font-bold text-gray-800 dark:text-gray-200">{count}</span>
                                                <span className="text-[10px] text-gray-400 min-w-[34px] text-right">({pct}%)</span>
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
