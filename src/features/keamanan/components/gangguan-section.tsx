import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts'
import { Card } from '@/components/ui/card'

// ─── Jenis Keributan (badge grid style) ──────────────────────────────────────

const jenisKeributanData = [
    { abbr: 'CA', label: 'Cekcok Antar Warga', value: 18, color: '#ef4444', bg: '#fee2e2' },
    { abbr: 'KW', label: 'Keributan Warga', value: 13, color: '#f97316', bg: '#ffedd5' },
    { abbr: 'KM', label: 'Keributan Karena Mabuk', value: 9, color: '#eab308', bg: '#fef9c3' },
    { abbr: 'LN', label: 'Lainnya', value: 5, color: '#22c55e', bg: '#dcfce7' },
]

export const keributanTotal = jenisKeributanData.reduce((s, d) => s + d.value, 0)

export function GangguanStatusChart() {
    const total = jenisKeributanData.reduce((s, d) => s + d.value, 0)

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 w-full'>
            <h3 className="text-md font-bold text-black dark:text-white mb-6">Jenis Keributan</h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6">
                {jenisKeributanData.map((item) => {
                    const pct = total > 0 ? (item.value / total) * 100 : 0
                    const pctDisplay = pct > 0 ? pct.toFixed(1) : '0'
                    return (
                        <div key={item.label} className="flex flex-col gap-2">
                            {/* Top row: badge + count + label */}
                            <div className="flex items-start gap-3">
                                <div
                                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold leading-none"
                                    style={{ backgroundColor: item.bg, color: item.color }}
                                >
                                    {item.abbr}
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <span className="text-xl font-extrabold text-gray-900 dark:text-white leading-none">
                                        {item.value}{' '}
                                        <span className="text-sm font-semibold text-slate-500">Kasus</span>
                                    </span>
                                    <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                                        {item.label}
                                    </span>
                                </div>
                            </div>

                            {/* Progress bar + percentage */}
                            <div>
                                <div className="h-1.5 w-full rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
                                    <div
                                        className="h-full rounded-full transition-all duration-700"
                                        style={{
                                            width: `${Math.max(pct > 0 ? 4 : 0, pct)}%`,
                                            backgroundColor: item.color,
                                        }}
                                    />
                                </div>
                                <span className="text-xs font-semibold mt-1 block" style={{ color: item.color }}>
                                    {pctDisplay}%
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

// ─── GangguanResolution dihapus sesuai permintaan ─────────────────────────────
// (Tingkat Penyelesaian tidak ditampilkan lagi)

// ─── Tanggal Kejadian (Line Chart) ───────────────────────────────────────────

const trendDataGangguan = [
    { tanggal: '1 Maret', kasus: 3 },
    { tanggal: '2 Maret', kasus: 2 },
    { tanggal: '3 Maret', kasus: 4 },
    { tanggal: '4 Maret', kasus: 3 },
    { tanggal: '5 Maret', kasus: 5 },
    { tanggal: '6 Maret', kasus: 4 },
    { tanggal: '7 Maret', kasus: 6 },
    { tanggal: '8 Maret', kasus: 3 },
    { tanggal: '9 Maret', kasus: 7 },
    { tanggal: '10 Maret', kasus: 5 },
    { tanggal: '11 Maret', kasus: 8 },
    { tanggal: '12 Maret', kasus: 6 },
]

const TrendTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="rounded-lg border bg-white dark:bg-gray-800 p-2.5 shadow-sm text-xs">
                <p className="font-semibold text-gray-600 dark:text-gray-300 mb-1">{label}</p>
                <p className="font-bold text-yellow-500">{payload[0].value} kasus</p>
            </div>
        )
    }
    return null
}

export function GangguanPriorityList() {
    return (
        <Card className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 mt-6'>
            <h3 className="text-md font-bold text-black dark:text-white mb-6">Tanggal Kejadian</h3>
            <ResponsiveContainer width="100%" height={240}>
                <LineChart
                    data={trendDataGangguan}
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
                        stroke="#eab308"
                        strokeWidth={2.5}
                        dot={{ fill: '#eab308', r: 3, strokeWidth: 0 }}
                        activeDot={{ r: 5, fill: '#eab308' }}
                    />
                </LineChart>
            </ResponsiveContainer>

            {/* Summary row */}
            <div className="flex items-center justify-between mt-4 px-1">
                <span className="text-xs text-slate-400">1 Maret – 12 Maret 2026</span>
                <span className="text-xs font-bold text-yellow-500">
                    {trendDataGangguan.reduce((s, d) => s + d.kasus, 0)} kasus total
                </span>
            </div>
        </Card>
    )
}

// ─── Alias exports (backward compat) ─────────────────────────────────────────
/** @deprecated GangguanResolution telah dihapus */
export function GangguanResolution() { return null }
