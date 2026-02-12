import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { mockData } from '../constants'
import { Bar, BarChart, CartesianGrid, Cell, LabelList, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d']

export function MonitoringView() {
    // Data untuk Grafik
    const totalReports = mockData.length
    const chartData = Object.values(
        mockData.reduce((acc, curr) => {
            const isu = curr.isu_kesehatan
            if (!acc[isu]) {
                acc[isu] = { name: isu, jumlah: 0 }
            }
            acc[isu].jumlah += 1
            return acc
        }, {} as Record<string, { name: string; jumlah: number }>)
    ).map(item => {
        const percentage = ((item.jumlah / totalReports) * 100).toFixed(1)
        return {
            ...item,
            percentage,
            label: `${item.jumlah} (${percentage}%)`
        }
    })

    // Dynamic height for Bar Chart: at least 300px, or 60px per item
    const barChartHeight = Math.max(chartData.length * 60, 300)

    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                                Isu
                            </span>
                            <span className="font-bold text-muted-foreground mr-2">
                                {label || payload[0].payload.name}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                                Jumlah
                            </span>
                            <span className="font-bold">
                                {payload[0].value} Kasus
                            </span>
                        </div>
                    </div>
                </div>
            )
        }
        return null
    }

    return (
        <>
            <Header>
                <div className='ms-auto flex items-center space-x-4'>
                    <Search />
                    <ThemeSwitch />
                    <ProfileDropdown />
                </div>
            </Header>
            <Main>
                <div className='mb-6 flex items-center justify-between space-y-2'>
                    <h1 className='text-2xl font-bold tracking-tight'>Monitoring Kesehatan</h1>
                </div>

                <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
                    {/* Area Grafik Bar - Takes 2/3 width on large screens */}
                    <Card className="lg:col-span-2 shadow-md flex flex-col">
                        <CardHeader>
                            <CardTitle className="text-lg font-medium">Statistik Kasus</CardTitle>
                        </CardHeader>
                        <CardContent className='pl-2 flex-1'>
                            {/* Dynamic height container for scrolling or fitting */}
                            <div style={{ height: `${barChartHeight}px`, width: '100%' }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        data={chartData}
                                        layout="vertical"
                                        margin={{ left: 0, right: 60, top: 10, bottom: 10 }}
                                    >
                                        <CartesianGrid horizontal={true} vertical={false} stroke="#e5e7eb" />
                                        <XAxis type="number" hide />
                                        <YAxis
                                            dataKey="name"
                                            type="category"
                                            width={110}
                                            tick={{ fontSize: 13, fill: '#6b7280' }}
                                            axisLine={false}
                                            tickLine={false}
                                            interval={0}
                                        />
                                        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
                                        <Bar dataKey="jumlah" radius={[0, 4, 4, 0]} barSize={24}>
                                            {chartData.map((_entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                            <LabelList
                                                dataKey="label"
                                                position="right"
                                                style={{ fill: '#374151', fontSize: 12, fontWeight: '600' }}
                                            />
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Area Grafik Pie - Takes 1/3 width on large screens */}
                    <Card className="lg:col-span-1 shadow-md flex flex-col">
                        <CardHeader>
                            <CardTitle className="text-lg font-medium">Proporsi Isu</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className='h-[400px] w-full flex items-center justify-center relative'>
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={chartData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={80}
                                            outerRadius={110}
                                            paddingAngle={2}
                                            dataKey="jumlah"
                                            nameKey="name"
                                            isAnimationActive={true}
                                        >
                                            {chartData.map((_entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip content={<CustomTooltip />} />
                                        <Legend
                                            verticalAlign="bottom"
                                            height={36}
                                            iconType="circle"
                                            formatter={(value) => <span className="text-xs text-muted-foreground ml-1">{value}</span>}
                                        />
                                        {/* Center Text for Donut Chart */}
                                        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
                                            <tspan x="50%" dy="-12" fontSize="12" fill="#6b7280">Total Laporan</tspan>
                                            <tspan x="50%" dy="24" fontSize="24" fontWeight="bold" fill="#111827">{totalReports}</tspan>
                                        </text>
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </Main>
        </>
    )
}
