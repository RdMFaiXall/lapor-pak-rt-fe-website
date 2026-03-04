import {
    Bar,
    BarChart,
    CartesianGrid,
    LabelList,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from 'recharts'
import { wargaSakitData } from '../data/data'

const AGE_GROUPS = [
    { key: 'Anak', label: 'Anak (0-14)', color: '#06b6d4' },
    { key: 'Produktif Muda', label: 'Produktif Muda (15-35)', color: '#10b981' },
    { key: 'Produktif Dewasa', label: 'Produktif Dewasa (36-59)', color: '#f59e0b' },
    { key: 'Lansia', label: 'Lansia (60+)', color: '#ef4444' },
]

function getAgeGroup(umur: number): string {
    if (umur < 15) return 'Anak'
    if (umur <= 35) return 'Produktif Muda'
    if (umur <= 59) return 'Produktif Dewasa'
    return 'Lansia'
}

// One row per jenis penyakit; columns = age group counts
function buildChartData() {
    const map: Record<string, Record<string, number>> = {}

    for (const w of wargaSakitData) {
        const penyakit = w.jenisPenyakit
        const ageGroup = getAgeGroup(w.umur)

        if (!map[penyakit]) {
            map[penyakit] = { Anak: 0, 'Produktif Muda': 0, 'Produktif Dewasa': 0, Lansia: 0 }
        }
        map[penyakit][ageGroup] = (map[penyakit][ageGroup] || 0) + 1
    }

    return Object.entries(map)
        .map(([name, groups]) => ({ name, ...groups, total: Object.values(groups).reduce((a, b) => a + b, 0) }))
        .sort((a, b) => b.total - a.total)
}

export default function WargaSakitJenisPenyakitByAgeChart() {
    const chartData = buildChartData()
    const total = wargaSakitData.length
    const maxValue = Math.max(...chartData.map(d => d.total), 0)

    const ageTotals = AGE_GROUPS.map(({ key, label, color }) => {
        const count = wargaSakitData.filter(w => getAgeGroup(w.umur) === key).length
        return { label, color, count, percentage: total > 0 ? ((count / total) * 100).toFixed(1) : '0' }
    })

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full'>
            <h3 className="text-md font-semibold text-slate-400 mb-6">Jenis Penyakit per Kelompok Usia</h3>
            <div className='flex flex-col lg:flex-row gap-8 items-start'>
                <div className='flex-1 h-[500px] w-full'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={chartData}
                            layout="vertical"
                            margin={{ left: 8, right: 80, top: 0, bottom: 20 }}
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
                                width={80}
                                tick={{ fontSize: 11, fontWeight: 600, fill: '#64748b' }}
                                axisLine={false}
                                tickLine={false}
                                interval={0}
                            />
                            {AGE_GROUPS.map((group, index) => (
                                <Bar
                                    key={group.key}
                                    dataKey={group.key}
                                    name={group.label}
                                    stackId="a"
                                    fill={group.color}
                                    barSize={32}
                                    radius={[0, 16, 16, 0]}
                                >
                                    <LabelList
                                        dataKey={group.key}
                                        position="center"
                                        formatter={(val: any) => val > 0 ? `${val}\u00A0kasus` : ''}
                                        style={{ fill: '#fff', fontSize: 11, fontWeight: 'bold' }}
                                    />
                                    {index === AGE_GROUPS.length - 1 && (
                                        <LabelList
                                            dataKey="total"
                                            position="right"
                                            style={{ fill: '#64748b', fontSize: 12, fontWeight: 'bold' }}
                                            offset={15}
                                            formatter={(value: unknown) => `${value ?? ''} kasus`}
                                        />
                                    )}
                                </Bar>
                            ))}
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className='w-full lg:w-48 space-y-4'>
                    {ageTotals.map((item, index) => (
                        <div key={index} className='flex items-start gap-3'>
                            <div className='w-3 h-3 rounded-full mt-1 shrink-0' style={{ backgroundColor: item.color }} />
                            <div>
                                <p className='text-xs text-gray-400 font-medium'>{item.label}</p>
                                <p className='text-sm font-bold text-gray-900 dark:text-gray-100'>{item.percentage}%</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}