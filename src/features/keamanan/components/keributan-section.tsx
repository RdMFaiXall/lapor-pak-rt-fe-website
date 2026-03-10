import { Card } from '@/components/ui/card'
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
import { mockKeamananData } from '../data/data'

// Filter keributan data
const keributanData = mockKeamananData.filter(d => d.category === 'keributan')

export function KeributanLocationChart() {
    const locationCount = keributanData.reduce((acc, curr) => {
        const loc = curr.location || 'Tidak Diketahui'
        acc[loc] = (acc[loc] || 0) + 1
        return acc
    }, {} as Record<string, number>)

    const total = keributanData.length
    const COLORS = ['#ef4444', '#f87171', '#fca5a5', '#fecaca', '#fee2e2']

    const chartData = Object.entries(locationCount)
        .map(([name, value]) => ({
            name,
            value,
            percentage: total > 0 ? ((value / total) * 100).toFixed(2) : '0'
        }))
        .sort((a, b) => b.value - a.value)
        .slice(0, 5) // Show top 5 locations

    const maxValue = Math.max(...chartData.map(d => d.value), 0)

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full'>
            <h3 className="text-md font-semibold text-slate-400 mb-6">Lokasi Kejadian Terbanyak</h3>
            <div className='flex flex-col lg:flex-row gap-8 items-start h-[calc(100%-48px)]'>
                <div className='flex-1 h-full min-h-[250px] w-full'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={chartData}
                            layout="vertical"
                            margin={{ left: 8, right: 60, top: 0, bottom: 20 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                            <XAxis
                                type="number"
                                domain={[0, maxValue * 1.2]}
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: '#94a3b8' }}
                                tickFormatter={(val) => val.toString().replace(/,/g, '')}
                            />
                            <YAxis
                                dataKey="name"
                                type="category"
                                width={80}
                                tick={{ fontSize: 12, fontWeight: 600, fill: '#64748b' }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={32}>
                                {chartData.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                                <LabelList
                                    dataKey="value"
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
                            <div className='w-3 h-3 rounded-full mt-1 shrink-0' style={{ backgroundColor: COLORS[index % COLORS.length] }} />
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

export function KeributanResolution() {
    const total = keributanData.length
    const selesaiCount = keributanData.filter(d => d.status === 'resolved' || d.status === 'closed').length
    const belumSelesaiCount = total - selesaiCount

    const resolvedColor = '#10b981' // emerald
    const unresolvedColor = '#dc2626' // red-600

    const selesaiPct = total > 0 ? (selesaiCount / total) * 100 : 0
    const belumSelesaiPct = total > 0 ? (belumSelesaiCount / total) * 100 : 0

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full gap-5'>
            <p className="text-md font-semibold text-slate-400 mb-1">Status Penanganan</p>

            <div className="flex flex-col gap-2.5">
                <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: resolvedColor }} />
                    <div>
                        <p className="text-xs text-slate-500 leading-tight">Berhasil Dilerai / Selesai</p>
                        <p className="text-sm font-extrabold text-gray-900 dark:text-white leading-tight">
                            {selesaiPct.toFixed(1)}%
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: unresolvedColor }} />
                    <div>
                        <p className="text-xs text-slate-500 leading-tight">Belum Ditangani / Proses</p>
                        <p className="text-sm font-extrabold text-gray-900 dark:text-white leading-tight">
                            {belumSelesaiPct.toFixed(1)}%
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex-1 flex flex-col justify-center gap-3 mt-4">
                <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-black text-gray-900 dark:text-white leading-none">{total}</span>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">total laporan</span>
                </div>

                <div className="flex h-12 rounded-xl overflow-hidden gap-1">
                    <div
                        className="flex items-center justify-center transition-all duration-700 rounded-l-xl"
                        style={{ width: `${Math.max(selesaiPct, 5)}%`, backgroundColor: resolvedColor }}
                    >
                        {selesaiPct > 15 && <span className="text-white font-extrabold text-sm drop-shadow-sm">{selesaiCount} kasus</span>}
                    </div>
                    <div
                        className="flex items-center justify-center transition-all duration-700 rounded-r-xl"
                        style={{ width: `${Math.max(belumSelesaiPct, 5)}%`, backgroundColor: unresolvedColor }}
                    >
                        {belumSelesaiPct > 15 && <span className="text-white font-extrabold text-sm drop-shadow-sm">{belumSelesaiCount} kasus</span>}
                    </div>
                </div>

                <div className="flex justify-between text-xs text-slate-400 font-medium">
                    <span>Selesai</span>
                    <span>Proses</span>
                </div>
            </div>
        </div>
    )
}

export function KeributanPriorityList() {
    const priorityCount = keributanData.reduce((acc, curr) => {
        acc[curr.priority] = (acc[curr.priority] || 0) + 1
        return acc
    }, {} as Record<string, number>)

    const total = keributanData.length

    const priorityMeta = [
        { id: 'critical', label: 'Kritis', abbr: 'KR', color: '#dc2626', bg: '#fee2e2' },
        { id: 'high', label: 'Tinggi', abbr: 'TG', color: '#ea580c', bg: '#ffedd5' },
        { id: 'medium', label: 'Sedang', abbr: 'SD', color: '#ca8a04', bg: '#fef9c3' },
        { id: 'low', label: 'Rendah', abbr: 'RD', color: '#16a34a', bg: '#dcfce7' },
    ]

    const items = priorityMeta.map(p => {
        return { ...p, value: priorityCount[p.id] || 0 }
    })

    return (
        <Card className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 mt-6'>
            <h3 className="text-md font-semibold text-slate-400 mb-6">Tingkat Prioritas Laporan Keributan</h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6">
                {items.map((item) => {
                    const pct = total > 0 ? (item.value / total) * 100 : 0
                    const pctDisplay = pct > 0 ? pct.toFixed(1) : '0'

                    return (
                        <div key={item.label} className="flex flex-col gap-2">
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
                                        Prioritas {item.label}
                                    </span>
                                </div>
                            </div>

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
        </Card>
    )
}
