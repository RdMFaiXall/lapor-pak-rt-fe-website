
import {
    Bar,
    BarChart,
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    LabelList,
    CartesianGrid
} from 'recharts'
import {
    categories,
    mockSosialData,
    wargaSakitData,
    wargaMeninggalData,
    wargaMiskinData,
    lansiaTerlantarData,
    anakPutusSekolahData
} from '../data/data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Activity, HeartPulse, GraduationCap, AlertTriangle } from 'lucide-react'

// --- Existing Charts (Preserved) ---

const totalReports = mockSosialData.length
const chartData = categories.map((cat: { label: string; value: string; color: string }) => {
    const count = mockSosialData.filter(item => item.category === cat.value).length
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

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="rounded-lg border bg-background p-2 shadow-sm">
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                            {label || 'Kategori'}
                        </span>
                        <span className="font-bold text-muted-foreground mr-2">
                            {payload[0].payload.name || payload[0].name}
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

export function SosialCategoryChart() {
    return (
        <div className='col-span-1 lg:col-span-4'>
            <div className='mb-4'>
                <h3 className='text-lg font-semibold text-foreground'>Statistik Kesejahteraan Sosial</h3>
                <p className='text-sm text-muted-foreground'>
                    Fokus bantuan saat ini tertuju pada program {chartData[0]?.name}.
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

export function SosialPriorityChart() {
    return (
        <div className='col-span-1 lg:col-span-3'>
            <div className='mb-4'>
                <h3 className='text-lg font-semibold text-foreground'>Proporsi Bantuan</h3>
                <p className='text-sm text-muted-foreground'>
                    Distribusi jenis bantuan sosial yang disalurkan.
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
                            <tspan x="50%" dy="-12" fontSize="12" fill="#6b7280">Total Bantuan</tspan>
                            <tspan x="50%" dy="24" fontSize="24" fontWeight="bold" fill="#111827">{totalReports}</tspan>
                        </text>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

// --- New Context Data Charts ---

interface AggregatedItem {
    name: string;
    value: number;
    fill: string;
    [key: string]: any;
}

// Helper to aggregate data
const aggregateData = (data: any[], key: string): AggregatedItem[] => {
    const counts = data.reduce((acc, curr) => {
        const val = curr[key] || 'Lainnya';
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    return Object.entries(counts).map(([name, value]) => ({
        name,
        value: value as number,
        fill: stringToColor(name)
    })).sort((a: AggregatedItem, b: AggregatedItem) => b.value - a.value);
};

// Simple hash for colors
const stringToColor = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const c = (hash & 0x00ffffff).toString(16).toUpperCase();
    return '#' + '00000'.substring(0, 6 - c.length) + c;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

// 1. Total Laporan Summary Cards
export function SocialSummaryCards() {
    const stats = [
        { title: 'Warga Sakit', count: wargaSakitData.length, icon: Activity, color: 'text-red-500' },
        { title: 'Warga Meninggal', count: wargaMeninggalData.length, icon: HeartPulse, color: 'text-gray-500' },
        { title: 'Warga Miskin Ekstrem', count: wargaMiskinData.length, icon: Users, color: 'text-yellow-500' },
        { title: 'Lansia Terlantar', count: lansiaTerlantarData.length, icon: AlertTriangle, color: 'text-purple-500' },
        { title: 'Anak Putus Sekolah', count: anakPutusSekolahData.length, icon: GraduationCap, color: 'text-blue-500' },
    ];

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 mb-8">
            {stats.map((stat, index) => (
                <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            {stat.title}
                        </CardTitle>
                        <stat.icon className={`h-4 w-4 ${stat.color}`} />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stat.count}</div>
                        <p className="text-xs text-muted-foreground">
                            Terdata saat ini
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

// 2. Warga Sakit Charts
export function WargaSakitCharts() {
    const diseaseData = aggregateData(wargaSakitData, 'jenisPenyakit');

    return (
        <div className="bg-card rounded-lg border p-4 shadow-sm">
            <h3 className="font-semibold mb-4 text-foreground">Jenis Penyakit Warga</h3>
            <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={diseaseData} layout="vertical" margin={{ left: 20, right: 30 }}>
                        <XAxis type="number" hide />
                        <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12 }} interval={0} />
                        <Tooltip cursor={{ fill: 'transparent' }} content={<CustomTooltip />} />
                        <Bar dataKey="value" fill="#ef4444" radius={[0, 4, 4, 0]}>
                            <LabelList dataKey="value" position="right" />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

// 3. Warga Meninggal Charts
export function WargaMeninggalCharts() {
    const causeData = aggregateData(wargaMeninggalData, 'penyebab');

    return (
        <div className="bg-card rounded-lg border p-4 shadow-sm">
            <h3 className="font-semibold mb-4 text-foreground">Penyebab Kematian</h3>
            <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={causeData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {causeData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

// 4. Warga Miskin Charts (Ekonomi & Bantuan)
export function WargaMiskinCharts() {
    const economyData = aggregateData(wargaMiskinData, 'kondisiEkonomi');
    const aidData = aggregateData(wargaMiskinData, 'jenisBantuan');

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card rounded-lg border p-4 shadow-sm">
                <h3 className="font-semibold mb-4 text-foreground">Kondisi Ekonomi</h3>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={economyData}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                dataKey="value"
                                label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                                    if (percent === undefined || midAngle === undefined) return null;
                                    const RADIAN = Math.PI / 180;
                                    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                                    const y = cy + radius * Math.sin(-midAngle * RADIAN);
                                    return percent > 0.05 ? (
                                        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                                            {`${(percent * 100).toFixed(0)}%`}
                                        </text>
                                    ) : null;
                                }}
                            >
                                {economyData.map((_entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="bg-card rounded-lg border p-4 shadow-sm">
                <h3 className="font-semibold mb-4 text-foreground">Penerima Bantuan</h3>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={aidData} layout="horizontal">
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" hide />
                            <YAxis />
                            <Tooltip cursor={{ fill: 'transparent' }} content={<CustomTooltip />} />
                            <Bar dataKey="value" fill="#f59e0b" radius={[4, 4, 0, 0]}>
                                <LabelList dataKey="name" position="bottom" angle={-45} offset={10} style={{ fontSize: '10px' }} />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}

// 5. Lansia Terlantar Charts
export function LansiaCharts() {
    const conditionData = aggregateData(lansiaTerlantarData, 'kondisi');

    return (
        <div className="bg-card rounded-lg border p-4 shadow-sm">
            <h3 className="font-semibold mb-4 text-foreground">Kondisi Lansia Terlantar</h3>
            <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={conditionData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                        <YAxis allowDecimals={false} />
                        <Tooltip cursor={{ fill: 'transparent' }} />
                        <Bar dataKey="value" fill="#8b5cf6" radius={[4, 4, 0, 0]} barSize={50} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

// 6. Anak Putus Sekolah Charts
export function AnakPutusSekolahCharts() {
    const levelData = aggregateData(anakPutusSekolahData, 'jenjang');
    const causeData = aggregateData(anakPutusSekolahData, 'penyebab');

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card rounded-lg border p-4 shadow-sm">
                <h3 className="font-semibold mb-4 text-foreground">Jenjang Pendidikan</h3>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={levelData}
                                cx="50%"
                                cy="50%"
                                innerRadius={40}
                                outerRadius={80}
                                dataKey="value"
                            >
                                {levelData.map((_entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="bg-card rounded-lg border p-4 shadow-sm">
                <h3 className="font-semibold mb-4 text-foreground">Penyebab Putus Sekolah</h3>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={causeData} layout="vertical">
                            <XAxis type="number" hide />
                            <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12 }} />
                            <Tooltip cursor={{ fill: 'transparent' }} />
                            <Bar dataKey="value" fill="#3b82f6" radius={[0, 4, 4, 0]}>
                                <LabelList dataKey="value" position="right" />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
