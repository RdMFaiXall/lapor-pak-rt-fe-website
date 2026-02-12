
import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Legend,
    Line,
    LineChart,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts'
import {
    wargaMeninggalData,
    wargaMiskinData,
    wargaSakitData
} from '../data/dashboard-data'
import { format, parseISO } from 'date-fns'
import { id } from 'date-fns/locale'

const penyakitData = [
    { name: 'Menular', value: wargaSakitData.filter(d => d.kategori === 'Menular').length, color: '#ef4444' },
    { name: 'Tidak Menular', value: wargaSakitData.filter(d => d.kategori === 'Tidak Menular').length, color: '#3b82f6' },
]

export function WargaSakitChart() {
    return (
        <div className='col-span-1 border rounded-lg p-4 bg-card'>
            <div className='mb-4'>
                <h3 className='text-lg font-semibold text-foreground'>Warga Sakit</h3>
                <p className='text-sm text-muted-foreground'>
                    Perbandingan Penyakit Menular vs Tidak Menular
                </p>
            </div>
            <div className='h-[300px] w-full'>
                <ResponsiveContainer width='100%' height='100%'>
                    <PieChart>
                        <Pie
                            data={penyakitData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {penyakitData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

const bantuanDataMap = wargaMiskinData.reduce((acc, curr) => {
    if (curr.jenisBantuan) {
        acc[curr.jenisBantuan] = (acc[curr.jenisBantuan] || 0) + 1
    }
    return acc
}, {} as Record<string, number>)

const bantuanChartData = Object.entries(bantuanDataMap).map(([name, value]) => ({
    name,
    value,
}))

export function WargaMiskinChart() {
    return (
        <div className='col-span-1 lg:col-span-2 border rounded-lg p-4 bg-card'>
            <div className='mb-4'>
                <h3 className='text-lg font-semibold text-foreground'>Distribusi Bantuan Warga Miskin</h3>
                <p className='text-sm text-muted-foreground'>
                    Jenis bantuan yang diterima oleh warga
                </p>
            </div>
            <div className='h-[300px] w-full'>
                <ResponsiveContainer width='100%' height='100%'>
                    <BarChart data={bantuanChartData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis
                            dataKey="name"
                            tick={{ fontSize: 12 }}
                            interval={0}
                            angle={-20}
                            textAnchor="end"
                            height={60}
                        />
                        <YAxis />
                        <Tooltip cursor={{ fill: 'transparent' }} />
                        <Bar dataKey="value" fill="#10b981" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

const trendDataMap: Record<string, number> = {}
wargaMeninggalData.forEach(item => {
    const month = format(parseISO(item.tanggalMeninggal), 'MMM yyyy', { locale: id })
    trendDataMap[month] = (trendDataMap[month] || 0) + 1
})

const trendChartData = Object.entries(trendDataMap)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => new Date(Date.parse('01 ' + a.name)).getTime() - new Date(Date.parse('01 ' + b.name)).getTime())


export function TrendChart() {
    return (
        <div className='col-span-1 lg:col-span-3 border rounded-lg p-4 bg-card'>
            <div className='mb-4'>
                <h3 className='text-lg font-semibold text-foreground'>Trend Warga Meninggal</h3>
                <p className='text-sm text-muted-foreground'>
                    Jumlah warga meninggal per bulan
                </p>
            </div>
            <div className='h-[300px] w-full'>
                <ResponsiveContainer width='100%' height='100%'>
                    <LineChart data={trendChartData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                        <YAxis allowDecimals={false} />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#8b5cf6" strokeWidth={2} activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
