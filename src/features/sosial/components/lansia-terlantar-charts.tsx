import { Card, CardContent } from '@/components/ui/card'
import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    LabelList,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts'
import CustomTooltip from '@/components/ui/custom-tooltip'
import { lansiaTerlantarData } from '../data/dashboard-data'

const LANSIA_COLORS = ['#7c3aed', '#a855f7', '#c084fc', '#e879f9', '#f0abfc']

// ─── Chart 1: Kondisi Kesehatan ────────────────────────────────────────────────

export function KondisiKesehatanChart() {
    const healthMap: Record<string, number> = {}
    for (const w of lansiaTerlantarData) {
        healthMap[w.kondisiKesehatan] = (healthMap[w.kondisiKesehatan] || 0) + 1
    }
    const total = lansiaTerlantarData.length
    const chartData = Object.entries(healthMap)
        .map(([name, value]) => ({
            name,
            value,
            percentage: total > 0 ? ((value / total) * 100).toFixed(1) : '0',
        }))
        .sort((a, b) => b.value - a.value)

    return (
        <Card className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full">
            <h3 className="text-md font-semibold text-slate-400 mb-6">Kondisi Kesehatan</h3>
            <div className="h-[280px] w-full py-4">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={chartData}
                        margin={{ top: 20, right: 0, left: -20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#d1d1d1" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }}
                            tickFormatter={(val) => val.toString().replace(/,/g, '')}
                            domain={[0, 'dataMax + 1']}
                            allowDecimals={false}
                        />
                        <Tooltip cursor={{ fill: '#f8fafc' }} content={<CustomTooltip />} />
                        <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={50}>
                            {chartData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={LANSIA_COLORS[index % LANSIA_COLORS.length]} />
                            ))}
                            <LabelList
                                dataKey="percentage"
                                position="top"
                                formatter={(val: any) => `${val}%`}
                                style={{ fill: '#334155', fontSize: 13, fontWeight: '700' }}
                                offset={12}
                            />
                            <LabelList
                                dataKey="value"
                                position="inside"
                                style={{ fill: '#fff', fontSize: 13, fontWeight: '700' }}
                            />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Card>
    )
}

// ─── Chart 2: Kondisi Tempat Tinggal ──────────────────────────────────────────

export function KondisiTempatTinggalChart() {
    const kondisiMap: Record<string, number> = {}
    for (const w of lansiaTerlantarData) {
        kondisiMap[w.kondisi] = (kondisiMap[w.kondisi] || 0) + 1
    }
    const total = lansiaTerlantarData.length
    const chartData = Object.entries(kondisiMap)
        .map(([name, value], i) => ({
            name,
            value,
            color: LANSIA_COLORS[i % LANSIA_COLORS.length],
            percentage: total > 0 ? ((value / total) * 100).toFixed(1) : '0',
        }))
        .sort((a, b) => b.value - a.value)

    return (
        <Card>
            <CardContent>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 h-full">
                    <h3 className="text-md font-semibold text-slate-400 mb-6">Kondisi Tempat Tinggal</h3>
                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                        <div className="flex-1 h-[240px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={chartData}
                                    margin={{ top: 20, right: 0, left: -20, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#d1d1d1" />
                                    <XAxis
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }}
                                        dy={10}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }}
                                        tickFormatter={(val) => val.toString().replace(/,/g, '')}
                                        domain={[0, 'dataMax + 1']}
                                        allowDecimals={false}
                                    />
                                    <Tooltip cursor={{ fill: '#f8fafc' }} content={<CustomTooltip />} />
                                    <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={50}>
                                        {chartData.map((_, index) => (
                                            <Cell key={`cell-${index}`} fill={LANSIA_COLORS[index % LANSIA_COLORS.length]} />
                                        ))}
                                        <LabelList
                                            dataKey="percentage"
                                            position="top"
                                            formatter={(val: any) => `${val}%`}
                                            style={{ fill: '#334155', fontSize: 13, fontWeight: '700' }}
                                            offset={12}
                                        />
                                        <LabelList
                                            dataKey="value"
                                            position="inside"
                                            style={{ fill: '#fff', fontSize: 13, fontWeight: '700' }}
                                        />
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        {/* <div className="w-full lg:w-48 space-y-4">
                            {chartData.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div
                                        className="w-3 h-3 rounded-full mt-1 shrink-0"
                                        style={{ backgroundColor: item.color }}
                                    />
                                    <div>
                                        <p className="text-xs text-gray-400 font-medium">{item.name}</p>
                                        <p className="text-sm font-bold text-gray-900 dark:text-gray-100">
                                            {item.value} orang ({item.percentage}%)
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div> */}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

