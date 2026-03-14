import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts'

// ─── Objek Pencurian ──────────────────────────────────────────────────────────
// Replaced PencurianResolution: compare Barang Pribadi vs Aset/Fasilitas Umum

const objekData = [
    { name: 'Barang Pribadi', value: 38, color: '#ef4444' },
    { name: 'Aset/Fasilitas Umum', value: 22, color: '#3b82f6' },
]

export const pencurianTotal = objekData.reduce((s, d) => s + d.value, 0)

export function ObjekPencurian() {
    const total = objekData.reduce((s, d) => s + d.value, 0)

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full gap-5'>
            <p className="text-md font-bold text-black dark:text-white mb-6">Objek Pencurian</p>

            {/* Legend */}
            <div className="flex flex-col gap-2.5">
                {objekData.map((d) => {
                    const pct = total > 0 ? ((d.value / total) * 100).toFixed(1) : '0'
                    return (
                        <div key={d.name} className="flex items-start gap-2.5">
                            <span className="mt-0.5 w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: d.color }} />
                            <div>
                                <p className="text-xs text-slate-500 leading-tight">{d.name}</p>
                                <p className="text-sm font-extrabold text-gray-900 dark:text-white leading-tight">
                                    {pct}%
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Stats */}
            <div className="flex-1 flex flex-col justify-center gap-3 mt-2">
                <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-black text-gray-900 dark:text-white leading-none">{total}</span>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">total kasus</span>
                </div>

                {/* Proportional bar */}
                <div className="flex h-12 rounded-xl overflow-hidden gap-1">
                    {objekData.map((d) => {
                        const pct = total > 0 ? (d.value / total) * 100 : 50
                        return (
                            <div
                                key={d.name}
                                className="flex items-center justify-center transition-all duration-700 first:rounded-l-xl last:rounded-r-xl"
                                style={{ width: `${Math.max(pct, 5)}%`, backgroundColor: d.color }}
                            >
                                {pct > 15 && (
                                    <span className="text-white font-extrabold text-sm drop-shadow-sm">
                                        {d.value} kasus
                                    </span>
                                )}
                            </div>
                        )
                    })}
                </div>

                <div className="flex justify-between text-xs text-slate-400 font-medium">
                    <span>Barang Pribadi</span>
                    <span>Aset Umum</span>
                </div>
            </div>
        </div>
    )
}

// ─── Status Laporan Pencurian (Line Chart – tanggal pencurian) ────────────────

const trendData = [
    { tanggal: '1 Maret', kasus: 2 },
    { tanggal: '2 Maret', kasus: 1 },
    { tanggal: '3 Maret', kasus: 3 },
    { tanggal: '4 Maret', kasus: 2 },
    { tanggal: '5 Maret', kasus: 4 },
    { tanggal: '6 Maret', kasus: 3 },
    { tanggal: '7 Maret', kasus: 5 },
    { tanggal: '8 Maret', kasus: 4 },
    { tanggal: '9 Maret', kasus: 6 },
    { tanggal: '10 Maret', kasus: 4 },
    { tanggal: '11 Maret', kasus: 7 },
    { tanggal: '12 Maret', kasus: 5 },
]

const TrendTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="rounded-lg border bg-white dark:bg-gray-800 p-2.5 shadow-sm text-xs">
                <p className="font-semibold text-gray-600 dark:text-gray-300 mb-1">{label}</p>
                <p className="font-bold text-rose-500">{payload[0].value} kasus</p>
            </div>
        )
    }
    return null
}

export function PencurianStatusChart() {
    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full min-h-[300px]'>
            <h3 className="text-md font-bold text-black dark:text-white mb-6">Tanggal Pencurian</h3>
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
                        stroke="#ef4444"
                        strokeWidth={2.5}
                        dot={{ fill: '#ef4444', r: 3, strokeWidth: 0 }}
                        activeDot={{ r: 5, fill: '#ef4444' }}
                    />
                </LineChart>
            </ResponsiveContainer>

            {/* Summary row */}
            <div className="flex items-center justify-between mt-4 px-1">
                <span className="text-xs text-slate-400">1 Maret – 12 Maret 2026</span>
                <span className="text-xs font-bold text-rose-500">
                    {trendData.reduce((s, d) => s + d.kasus, 0)} kasus total
                </span>
            </div>
        </div>
    )
}

// ─── Jenis Fasilitas yang Dicuri ──────────────────────────────────────────────
// 2 side-by-side panels, list style like the reference image

const COLORS_PRIBADI = ['#06b6d4', '#22c55e', '#f97316', '#ef4444']
const COLORS_UMUM = ['#06b6d4', '#22c55e', '#f97316', '#ef4444']

const barangPribadi = [
    { label: 'Kendaraan', value: 15, color: COLORS_PRIBADI[0] },
    { label: 'Barang Berharga', value: 12, color: COLORS_PRIBADI[1] },
    { label: 'Barang Elektronik', value: 8, color: COLORS_PRIBADI[2] },
    { label: 'Barang Rumah Tangga', value: 5, color: COLORS_PRIBADI[3] },
]

const asetUmum = [
    { label: 'Infrastruktur', value: 9, color: COLORS_UMUM[0] },
    { label: 'Barang Milik Negara', value: 7, color: COLORS_UMUM[1] },
    { label: 'Uang Kas Umum', value: 4, color: COLORS_UMUM[2] },
    { label: 'Lainnya', value: 2, color: COLORS_UMUM[3] },
]

function FasilitasPanel({
    title,
    items,
}: {
    title: string
    items: { label: string; value: number; color: string }[]
}) {
    const total = items.reduce((s, i) => s + i.value, 0)

    return (
        <div className="flex flex-col bg-gray-50/50 dark:bg-gray-900/20 p-4 rounded-xl border border-gray-50 dark:border-gray-800/50">
            {/* Header */}
            <div className="flex items-start justify-between mb-6 gap-2">
                <span className="text-base font-bold text-gray-900 dark:text-white leading-tight">
                    {title}
                </span>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-100 dark:border-gray-700 shrink-0">
                    <span className="text-sm font-bold text-gray-900 dark:text-white">{total}</span>
                    <span className="text-xs text-gray-500 font-medium">kasus</span>
                </div>
            </div>

            {/* Rows */}
            <div className="space-y-4">
                {items.map((item) => {
                    const pct = total > 0 ? (item.value / total) * 100 : 0
                    const barWidth = Math.max(pct > 0 ? 4 : 0, pct)
                    return (
                        <div key={item.label}>
                            <div className="flex items-center justify-between mb-2 px-0.5">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                        {item.label}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-bold text-gray-800 dark:text-gray-200">{item.value}</span>
                                    <span className="text-xs text-gray-400 min-w-[40px] text-right">({pct.toFixed(1)}%)</span>
                                </div>
                            </div>
                            <div className="w-full bg-gray-100 dark:bg-gray-700/50 rounded-full h-1.5 overflow-hidden">
                                <div
                                    className="h-full rounded-full transition-all duration-700 ease-out"
                                    style={{ width: `${barWidth}%`, backgroundColor: item.color }}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export function JenisFasilitasDicuri() {
    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col mt-6'>
            <h3 className="text-md font-bold text-black dark:text-white mb-6">Jenis Fasilitas yang Dicuri</h3>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <FasilitasPanel title="Barang Milik Pribadi" items={barangPribadi} />
                <FasilitasPanel title="Aset / Fasilitas Umum" items={asetUmum} />
            </div>
        </div>
    )
}

// ─── Keep old export names as aliases so that nothing breaks if imported elsewhere ──
/** @deprecated Use ObjekPencurian */
export { ObjekPencurian as PencurianResolution }
/** @deprecated Use JenisFasilitasDicuri */
export { JenisFasilitasDicuri as PencurianPriorityList }
