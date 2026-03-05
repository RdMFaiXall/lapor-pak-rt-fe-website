import { Card } from '@/components/ui/card'
import {
    CartesianGrid,
    Cell,
    LabelList,
    Bar,
    BarChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    Pie,
    PieChart,
} from 'recharts'
import { wargaMeninggalData } from '../data/data'

// ─── Age group config ──────────────────────────────────────────────────────────

const AGE_GROUPS = [
    { key: 'Anak', label: 'Anak (0-14)', shortLabel: 'Anak', range: '(0-14 tahun)', color: '#06b6d4' },
    { key: 'Produktif Muda', label: 'Produktif Muda (15-35)', shortLabel: 'Produktif Muda', range: '(15-35 tahun)', color: '#10b981' },
    { key: 'Produktif Dewasa', label: 'Produktif Dewasa (36-59)', shortLabel: 'Produktif Dewasa', range: '(36-59 tahun)', color: '#f59e0b' },
    { key: 'Lansia', label: 'Lansia (60+)', shortLabel: 'Lansia', range: '(60+ tahun)', color: '#6b7280' },
]

function getAgeGroup(umur: number): string {
    if (umur < 15) return 'Anak'
    if (umur <= 35) return 'Produktif Muda'
    if (umur <= 59) return 'Produktif Dewasa'
    return 'Lansia'
}

// ─── Chart 1: Penyebab Meninggal per Kelompok Usia (card + progress bar style) ─

function buildPenyebabByAgeData() {
    const map: Record<string, Record<string, number>> = {}
    for (const w of wargaMeninggalData) {
        const penyebab = w.penyebab
        const ageGroup = getAgeGroup(w.umur)
        if (!map[penyebab]) {
            map[penyebab] = { Anak: 0, 'Produktif Muda': 0, 'Produktif Dewasa': 0, Lansia: 0 }
        }
        map[penyebab][ageGroup] = (map[penyebab][ageGroup] || 0) + 1
    }
    return Object.entries(map)
        .map(([name, groups]) => ({
            name,
            ...groups,
            total: Object.values(groups).reduce((a, b) => a + b, 0),
        }))
        .sort((a, b) => b.total - a.total)
}

const AGE_LABELS = [
    { key: 'Anak', label: 'Anak', color: '#06b6d4' },
    { key: 'Produktif Muda', label: 'P. Muda', color: '#10b981' },
    { key: 'Produktif Dewasa', label: 'P. Dewasa', color: '#f59e0b' },
    { key: 'Lansia', label: 'Lansia', color: '#6b7280' },
]

export function PenyebabMeninggalByAgeChart() {
    const chartData = buildPenyebabByAgeData()

    return (
        <Card className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                Penyebab Meninggal per Kelompok Usia
            </h3>

            <div className="flex-1 overflow-y-auto pr-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
                {chartData.map((penyebab, index) => (
                    <div key={index} className="flex flex-col bg-gray-50/50 dark:bg-gray-900/20 p-4 rounded-xl border border-gray-50 dark:border-gray-800/50">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                {penyebab.name}
                            </span>
                            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                                <span className="text-xs font-bold text-gray-900 dark:text-white">
                                    {penyebab.total}
                                </span>
                                <span className="text-[10px] text-gray-500 font-medium">
                                    kasus
                                </span>
                            </div>
                        </div>

                        <div className="space-y-3.5">
                            {AGE_LABELS.map((group) => {
                                const count = (penyebab as any)[group.key] || 0
                                const percentage = penyebab.total > 0 ? ((count / penyebab.total) * 100).toFixed(1) : '0'
                                return (
                                    <div key={group.key}>
                                        <div className="flex items-center justify-between mb-1.5 px-1">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full shadow-sm" style={{ backgroundColor: group.color }} />
                                                <span className="text-[11px] font-medium text-gray-600 dark:text-gray-400">
                                                    {group.label}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-bold text-gray-800 dark:text-gray-200">
                                                    {count}
                                                </span>
                                                <span className="text-[10px] text-gray-400 font-medium min-w-[32px] text-right">
                                                    ({percentage}%)
                                                </span>
                                            </div>
                                        </div>
                                        <div className="w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-2 overflow-hidden">
                                            <div
                                                className="h-full rounded-full transition-all duration-700 ease-out"
                                                style={{ width: `${percentage}%`, backgroundColor: group.color }}
                                            />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    )
}


// ─── Chart 2: Warga Meninggal per Kelompok Usia (Pie chart) ───────────────────

export function WargaMeninggalPerUsiaChart() {
    const total = wargaMeninggalData.length

    const chartData = AGE_GROUPS.map(({ key, label, shortLabel, range, color }) => {
        const value = wargaMeninggalData.filter(w => getAgeGroup(w.umur) === key).length
        return {
            name: label,
            shortLabel,
            range,
            value,
            color,
            percentage: total > 0 ? ((value / total) * 100).toFixed(1) : '0'
        }
    })

    return (
        <Card className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full">
            <h3 className="text-md font-semibold text-slate-400 mt-2 mb-4">Warga Meninggal per Kelompok Usia</h3>
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
                                    {item.shortLabel} <span className="font-bold">({item.percentage}%)</span>
                                </p>
                                <p className="text-[10px] text-gray-500 font-medium leading-tight">{item.range}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    )
}

// ─── Chart 3: Penyebab Meninggal (horizontal bar - JenisPenyakit style) ────────

const PENYEBAB_COLORS = ['#e76f51', '#f4a261', '#e9c46a', '#2a9d8f', '#264653', '#6366f1', '#8b5cf6']

export function PenyebabMeninggalChart() {
    const causeMap: Record<string, number> = {}
    for (const w of wargaMeninggalData) {
        causeMap[w.penyebab] = (causeMap[w.penyebab] || 0) + 1
    }
    const total = wargaMeninggalData.length
    const chartData = Object.entries(causeMap)
        .map(([name, value]) => ({
            name,
            value,
            percentage: total > 0 ? ((value / total) * 100).toFixed(1) : '0',
        }))
        .sort((a, b) => b.value - a.value)

    const maxValue = Math.max(...chartData.map(d => d.value), 0)

    return (
        <Card className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full">
            <h3 className="text-md font-semibold text-slate-400 mb-6">Penyebab Meninggal</h3>

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
                            width={110}
                            tick={{ fontSize: 12, fontWeight: 600, fill: '#64748b' }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={32}>
                            {chartData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={PENYEBAB_COLORS[index % PENYEBAB_COLORS.length]} />
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
