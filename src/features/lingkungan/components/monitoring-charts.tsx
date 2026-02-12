
import {
    Bar,
    BarChart,
    Cell,
    LabelList,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts'
import { categories, mockLingkunganData } from '../data/data'

const totalReports = mockLingkunganData.length
const chartData = categories.map((cat: { label: string; value: string; color: string }) => {
    const count = mockLingkunganData.filter(item => item.category === cat.value).length
    const percentage = ((count / totalReports) * 100).toFixed(1)
    return {
        name: cat.label,
        value: count,
        color: cat.color,
        percentage,
        label: `${count} (${percentage}%)`
    }
}).filter(item => item.value > 0).sort((a, b) => b.value - a.value)

const barChartHeight = Math.max(chartData.length * 60, 300)

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="rounded-lg border bg-background p-2 shadow-sm">
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                            Kategori
                        </span>
                        <span className="font-bold text-muted-foreground mr-2">
                            {payload[0].payload.name}
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                            Jumlah
                        </span>
                        <span className="font-bold">
                            {payload[0].value} Laporan
                        </span>
                    </div>
                </div>
            </div>
        )
    }
    return null
}

export function LingkunganCategoryChart() {
    return (
        <div className='col-span-1 lg:col-span-4'>
            <div className='mb-4'>
                <h3 className='text-lg font-semibold text-foreground'>Statistik Isu Lingkungan</h3>
                <p className='text-sm text-muted-foreground'>
                    Laporan terbanyak berkaitan dengan {chartData[0]?.name}.
                </p>
            </div>
            <div className='pl-2' style={{ height: `${barChartHeight}px`, width: '100%' }}>
                <ResponsiveContainer width='100%' height='100%'>
                    <BarChart
                        data={chartData}
                        layout="vertical"
                        margin={{ left: 0, right: 60, top: 10, bottom: 10 }}
                    >
                        <XAxis type="number" hide />
                        <YAxis
                            dataKey="name"
                            type="category"
                            width={140}
                            tick={{ fontSize: 13, fill: '#6b7280' }}
                            axisLine={false}
                            tickLine={false}
                            interval={0}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
                        <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={50}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                            <LabelList
                                dataKey="label"
                                position="insideRight"
                                style={{ fill: '#fff', fontSize: 13, fontWeight: 'bold' }}
                                offset={10}
                            />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export function LingkunganPriorityChart() {
    return (
        <div className='col-span-1 lg:col-span-3'>
            <div className='mb-4'>
                <h3 className='text-lg font-semibold text-foreground'>Proporsi Isu</h3>
                <p className='text-sm text-muted-foreground'>
                    Distribusi jenis laporan lingkungan yang masuk.
                </p>
            </div>
            <div className='h-[400px] w-full flex items-center justify-center relative'>
                <ResponsiveContainer width='100%' height='100%'>
                    <PieChart>
                        <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            innerRadius={80}
                            outerRadius={110}
                            paddingAngle={2}
                            dataKey="value"
                            nameKey="name"
                            isAnimationActive={true}
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                        <Legend
                            verticalAlign="bottom"
                            height={36}
                            iconType="circle"
                            formatter={(value) => <span className="text-xs text-muted-foreground ml-1">{value}</span>}
                        />
                        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
                            <tspan x="50%" dy="-12" fontSize="12" fill="#6b7280">Total Laporan</tspan>
                            <tspan x="50%" dy="24" fontSize="24" fontWeight="bold" fill="#111827">{totalReports}</tspan>
                        </text>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
