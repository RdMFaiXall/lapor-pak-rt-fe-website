import { Card } from '@/components/ui/card'
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
    Pie,
    PieChart,
} from 'recharts'
import { lansiaTerlantarData } from '../data/data'

const LANSIA_COLORS = ['#4c1d95', '#5b21b6', '#6d28d9', '#7c3aed', '#8b5cf6']

// ─── Chart 1: Kondisi Tempat Tinggal (horizontal bar - JenisPenyakit style) ────

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

    const maxValue = Math.max(...chartData.map(d => d.value), 0)

    return (
        <Card className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full">
            <h3 className="text-md font-semibold text-slate-400 mb-6">Kondisi Tempat Tinggal</h3>

            <div className="flex-1 w-full min-h-[280px] relative">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={chartData}
                        layout="vertical"
                        margin={{ left: 8, right: 60, top: 0, bottom: 20 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                        <XAxis
                            type="number"
                            domain={[0, maxValue]}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: '#94a3b8' }}
                            tickFormatter={(val) => val.toString().replace(/,/g, '')}
                            allowDecimals={false}
                        />
                        <YAxis
                            dataKey="name"
                            type="category"
                            width={130}
                            tick={{ fontSize: 12, fontWeight: 600, fill: '#64748b' }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={32}>
                            {chartData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={LANSIA_COLORS[index % LANSIA_COLORS.length]} />
                            ))}
                            <LabelList
                                dataKey="value"
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                content={(props: any) => {
                                    const { x, y, width, height, value, index } = props;
                                    if (value === undefined || value === null) return null;
                                    const isSmallValue = value < maxValue * 0.15;
                                    const displayValue = `${value} kasus (${chartData[index]?.percentage}%)`;
                                    return (
                                        <text
                                            x={isSmallValue ? x + width + 8 : x + width - 8}
                                            y={y + height / 2}
                                            fill={isSmallValue ? '#64748b' : '#fff'}
                                            fontSize={11}
                                            fontWeight="bold"
                                            dominantBaseline="middle"
                                            textAnchor={isSmallValue ? 'start' : 'end'}
                                        >
                                            {displayValue}
                                        </text>
                                    );
                                }}
                            />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Card>
    )
}

// ─── Chart 2: Kondisi Kesehatan (Pie chart - WargaMeninggalPerUsia style) ───────

export function KondisiKesehatanChart() {
    const healthMap: Record<string, number> = {}
    for (const w of lansiaTerlantarData) {
        healthMap[w.kondisiKesehatan] = (healthMap[w.kondisiKesehatan] || 0) + 1
    }
    const total = lansiaTerlantarData.length
    const chartData = Object.entries(healthMap)
        .map(([name, value], i) => ({
            name,
            value,
            color: LANSIA_COLORS[i % LANSIA_COLORS.length],
            percentage: total > 0 ? ((value / total) * 100).toFixed(1) : '0',
        }))
        .sort((a, b) => b.value - a.value)

    return (
        <Card className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full">
            <h3 className="text-md font-semibold text-slate-400 mt-2 mb-4">Kondisi Kesehatan</h3>
            <div className="flex flex-col items-center justify-center flex-1 w-full">
                <div className="h-[250px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                outerRadius={105}
                                dataKey="value"
                                stroke="#fff"
                                strokeWidth={2}
                                paddingAngle={2}
                                labelLine={false}
                                label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
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
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
                                itemStyle={{ color: '#1f2937', fontWeight: 'bold' }}
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                formatter={(value: any, name: any, props: any) => [`${value} orang (${props.payload.percentage}%)`, name]}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className="w-full max-w-[240px] mx-auto grid grid-cols-2 gap-y-3 gap-x-2 mt-6 shrink-0">
                    {chartData.map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                            <div className="w-3 h-3 rounded-full mt-1 shrink-0" style={{ backgroundColor: item.color }} />
                            <div className="flex flex-col">
                                <p className="text-xs text-gray-700 dark:text-gray-300 font-medium leading-tight">
                                    {item.name} <span className="font-bold">({item.percentage}%)</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    )
}
