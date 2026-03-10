import { Bar, BarChart, CartesianGrid, Cell, LabelList, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { Card } from '@/components/ui/card'
import { mockData } from '../constants'
import { Users, Activity, Heart, Home } from 'lucide-react'

export function BencanaTypeChart() {
    const disasterCount = mockData.reduce((acc, curr) => {
        acc[curr.jenis_bencana] = (acc[curr.jenis_bencana] || 0) + 1
        return acc
    }, {} as Record<string, number>)

    const total = mockData.length
    const COLORS = ['#2563eb', '#db2777', '#7c3aed', '#059669', '#d97706', '#0891b2']

    const chartData = Object.entries(disasterCount).map(([name, value]) => ({
        name,
        value,
        percentage: total > 0 ? ((value / total) * 100).toFixed(2) : '0'
    })).sort((a, b) => b.value - a.value)

    const maxValue = Math.max(...chartData.map(d => d.value), 0)

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full min-h-[300px]'>
            <h3 className="text-md font-semibold text-slate-400 mb-6">Statistik Jenis Bencana</h3>
            <div className='flex flex-col lg:flex-row gap-8 items-start h-[calc(100%-48px)]'>
                <div className='flex-1 h-full min-h-[200px] w-full'>
                    <ResponsiveContainer width="100%" height={240}>
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
                                width={125}
                                tick={{ fontSize: 12, fontWeight: 600, fill: '#64748b' }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={40}>
                                {chartData.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
                                                {value} laporan
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

export function BencanaResolution() {
    const total = mockData.length
    const selesaiCount = mockData.filter(d => d.status_penanganan === 'Selesai').length
    const dalamPenangananCount = mockData.filter(d => d.status_penanganan === 'Dalam Penanganan').length
    const butuhBantuanCount = mockData.filter(d => d.status_penanganan === 'Butuh Bantuan' || d.status_penanganan === 'Darurat').length

    const resolvedColor = '#10b981' // emerald-500
    const inProgressColor = '#eab308' // yellow-500
    const pendingColor = '#ef4444' // rose-500

    const selesaiPct = total > 0 ? (selesaiCount / total) * 100 : 0
    const dalamPenangananPct = total > 0 ? (dalamPenangananCount / total) * 100 : 0
    const pendingPct = total > 0 ? (butuhBantuanCount / total) * 100 : 0

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full gap-5'>
            <p className="text-md font-semibold text-slate-400 mb-1">Tingkat Penyelesaian</p>

            <div className="flex flex-col gap-2.5">
                <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: resolvedColor }} />
                    <div>
                        <p className="text-xs text-slate-500 leading-tight">Selesai</p>
                        <p className="text-sm font-extrabold text-gray-900 dark:text-white leading-tight">
                            {selesaiPct.toFixed(1)}%
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: inProgressColor }} />
                    <div>
                        <p className="text-xs text-slate-500 leading-tight">Dalam Penanganan</p>
                        <p className="text-sm font-extrabold text-gray-900 dark:text-white leading-tight">
                            {dalamPenangananPct.toFixed(1)}%
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: pendingColor }} />
                    <div>
                        <p className="text-xs text-slate-500 leading-tight">Butuh Bantuan / Darurat</p>
                        <p className="text-sm font-extrabold text-gray-900 dark:text-white leading-tight">
                            {pendingPct.toFixed(1)}%
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
                        className="flex items-center justify-center transition-all duration-700"
                        style={{ width: `${Math.max(selesaiPct, 5)}%`, backgroundColor: resolvedColor }}
                    >
                        {selesaiPct > 15 && <span className="text-white font-extrabold text-sm drop-shadow-sm">{selesaiCount}</span>}
                    </div>
                    <div
                        className="flex items-center justify-center transition-all duration-700"
                        style={{ width: `${Math.max(dalamPenangananPct, 5)}%`, backgroundColor: inProgressColor }}
                    >
                        {dalamPenangananPct > 15 && <span className="text-white font-extrabold text-sm drop-shadow-sm">{dalamPenangananCount}</span>}
                    </div>
                    <div
                        className="flex items-center justify-center transition-all duration-700"
                        style={{ width: `${Math.max(pendingPct, 5)}%`, backgroundColor: pendingColor }}
                    >
                        {pendingPct > 15 && <span className="text-white font-extrabold text-sm drop-shadow-sm">{butuhBantuanCount}</span>}
                    </div>
                </div>

                <div className="flex justify-between text-xs text-slate-400 font-medium">
                    <span>Selesai</span>
                    <span>Proses</span>
                    <span>Darurat</span>
                </div>
            </div>
        </div>
    )
}

export function BencanaImpactSummary() {
    const impacts = mockData.reduce((acc, curr) => {
        acc.meninggal += curr.dampak_korban.meninggal
        acc.luka_berat += curr.dampak_korban.luka_berat
        acc.luka_ringan += curr.dampak_korban.luka_ringan
        acc.mengungsi += curr.dampak_korban.mengungsi
        return acc
    }, { meninggal: 0, luka_berat: 0, luka_ringan: 0, mengungsi: 0 })

    const impactMeta = [
        { label: 'Meninggal', value: impacts.meninggal, icon: Heart, color: '#ef4444', bg: '#fee2e2' },
        { label: 'Luka Berat', value: impacts.luka_berat, icon: Activity, color: '#f97316', bg: '#ffedd5' },
        { label: 'Luka Ringan', value: impacts.luka_ringan, icon: Activity, color: '#eab308', bg: '#fef9c3' },
        { label: 'Mengungsi', value: impacts.mengungsi, icon: Home, color: '#22c55e', bg: '#dcfce7' },
    ]

    return (
        <Card className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 mt-6'>
            <h3 className="text-md font-semibold text-slate-400 mb-6">Total Dampak Korban</h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {impactMeta.map((item) => (
                    <div key={item.label} className="flex flex-col gap-2">
                        <div className="flex items-start gap-3">
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                                style={{ backgroundColor: item.bg }}
                            >
                                <item.icon className="w-5 h-5" style={{ color: item.color }} />
                            </div>
                            <div className="flex flex-col min-w-0">
                                <span className="text-2xl font-black text-gray-900 dark:text-white leading-none">
                                    {item.value}
                                </span>
                                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">
                                    {item.label}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    )
}
