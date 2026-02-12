
import {
    Bar,
    BarChart,
    Cell,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    Legend
} from 'recharts'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { categories, priorities } from '../data/data'

// Mock Data targeting categories for comparison
const categoryComparisonData = categories.map((cat) => ({
    name: cat.label,
    count: Math.floor(Math.random() * 50) + 10,
}))

// Mock Data for Severity/Priority breakdown
const priorityData = priorities.map((p) => ({
    name: p.label,
    value: Math.floor(Math.random() * 30) + 5,
}))

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8']
const PRIORITY_COLORS = ['#22c55e', '#3b82f6', '#f59e0b', '#ef4444'] // Green, Blue, Yellow/Orange, Red for Low->Critical

export function KasusCategoryChart() {
    return (
        <Card className='col-span-1 lg:col-span-4'>
            <CardHeader>
                <CardTitle>Tren Kategori Laporan</CardTitle>
                <CardDescription>
                    Perbandingan jumlah laporan berdasarkan kategori isu.
                </CardDescription>
            </CardHeader>
            <CardContent className='pl-2'>
                <ResponsiveContainer width='100%' height={350}>
                    <BarChart data={categoryComparisonData}>
                        <XAxis
                            dataKey='name'
                            stroke='#888888'
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            stroke='#888888'
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `${value}`}
                        />
                        <Tooltip
                            cursor={{ fill: 'transparent' }}
                            contentStyle={{
                                borderRadius: '8px',
                                border: 'none',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            }}
                        />
                        <Bar dataKey='count' fill='#3b82f6' radius={[4, 4, 0, 0]}>
                            {categoryComparisonData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}

export function PriorityChart() {
    return (
        <Card className='col-span-1 lg:col-span-3'>
            <CardHeader>
                <CardTitle>Tingkat Urgensi</CardTitle>
                <CardDescription>
                    Proporsi laporan berdasarkan tingkat prioritas penanganan.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width='100%' height={350}>
                    <PieChart>
                        <Pie
                            data={priorityData}
                            cx='50%'
                            cy='50%'
                            labelLine={false}
                            outerRadius={100}
                            fill='#8884d8'
                            dataKey='value'
                        >
                            {priorityData.map((_entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={PRIORITY_COLORS[index % PRIORITY_COLORS.length]}
                                />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}
