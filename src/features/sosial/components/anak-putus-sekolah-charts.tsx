import { Card } from '@/components/ui/card'
import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    LabelList,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    Label,
} from 'recharts'
import { anakPutusSekolahData } from '../data/data'

// ─── Color palettes ────────────────────────────────────────────────────────────

const JENJANG_COLORS: Record<string, string> = {
    SD: '#10b981',
    SMP: '#2563eb',
    SMA: '#f59e0b',
    SMK: '#ef4444',
    MTS: '#8b5cf6',
}
const DEFAULT_COLOR = '#a5b4fc'

const PENYEBAB_COLORS = [
    '#1d4ed8', // Dark Blue
    '#2563eb', // Blue
    '#4338ca', // Indigo
    '#6d28d9', // Violet
    '#7c3aed', // Purple
    '#0e7490', // Cyan/Teal Dark
]

// ─── Chart 1: Penyebab per Jenjang Pendidikan Terakhir (stacked) ──────────────

function buildPenyebabByJenjangData() {
    // Unique penyebab
    const allPenyebab = [...new Set(anakPutusSekolahData.map(w => w.penyebab))]

    // Group rows by penyebab, then count per jenjang
    const map: Record<string, Record<string, number>> = {}
    for (const w of anakPutusSekolahData) {
        if (!map[w.penyebab]) {
            map[w.penyebab] = {}
        }
        map[w.penyebab][w.jenjang] = (map[w.penyebab][w.jenjang] || 0) + 1
    }

    // Unique jenjang
    const rawJenjang = [...new Set(anakPutusSekolahData.map(w => w.jenjang))]
    const jenjangOrder = ['SD', 'SMP', 'SMA', 'SMK', 'MTS']
    const allJenjang = jenjangOrder.filter(j => rawJenjang.includes(j)).concat(rawJenjang.filter(j => !jenjangOrder.includes(j)))

    return {
        chartData: Object.entries(map)
            .map(([penyebab, jenjangCounts]) => ({
                name: penyebab,
                ...jenjangCounts,
                total: Object.values(jenjangCounts).reduce((a, b) => a + b, 0),
            }))
            .sort((a, b) => b.total - a.total),
        allJenjang,
        allPenyebab,
    }
}

export function PenyebabPerJenjangChart() {
    const { chartData, allJenjang } = buildPenyebabByJenjangData()

    return (
        <Card className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full mt-4 mt-0">
            <h3 className="text-md font-bold text-black dark:text-white mb-6">
                Penyebab per Jenjang Pendidikan Terakhir
            </h3>

            <div className="flex-1 overflow-y-auto pr-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
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
                            {allJenjang.map((jenjang) => {
                                const count = (penyebab as any)[jenjang] || 0
                                const percentage = penyebab.total > 0 ? ((count / penyebab.total) * 100).toFixed(1) : '0'
                                const color = JENJANG_COLORS[jenjang] || DEFAULT_COLOR

                                return (
                                    <div key={jenjang}>
                                        <div className="flex items-center justify-between mb-1.5 px-1">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full shadow-sm" style={{ backgroundColor: color }} />
                                                <span className="text-[11px] font-medium text-gray-600 dark:text-gray-400">
                                                    {jenjang}
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
                                                style={{ width: `${percentage}%`, backgroundColor: color }}
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

// ─── Chart 2: Jenjang Pendidikan Terakhir (vertical bar) ──────────────────────

export function JenjangPendidikanChart() {
    const jenjangMap: Record<string, number> = {}
    for (const w of anakPutusSekolahData) {
        jenjangMap[w.jenjang] = (jenjangMap[w.jenjang] || 0) + 1
    }
    const total = anakPutusSekolahData.length
    const chartData = Object.entries(jenjangMap)
        .map(([name, value]) => ({
            name,
            value,
            color: JENJANG_COLORS[name] ?? DEFAULT_COLOR,
            percentage: total > 0 ? ((value / total) * 100).toFixed(1) : '0',
        }))
        .sort((a, b) => b.value - a.value)

    return (
        <Card className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full">
            <h3 className="text-md font-bold text-black dark:text-white mt-2 mb-4">Jenjang Pendidikan Terakhir</h3>
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
                                formatter={(value: any, name: any, props: any) => [`${value} kasus (${props.payload.percentage}%)`, name]}
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

// ─── Chart 3: Penyebab Anak Putus Sekolah (vertical bar) ──────────────────────

export function PenyebabPutusSekolahChart() {
    const penyebabMap: Record<string, number> = {}
    for (const w of anakPutusSekolahData) {
        penyebabMap[w.penyebab] = (penyebabMap[w.penyebab] || 0) + 1
    }
    const total = anakPutusSekolahData.length
    const chartData = Object.entries(penyebabMap)
        .map(([name, value]) => ({
            name,
            value,
            percentage: total > 0 ? ((value / total) * 100).toFixed(1) : '0',
        }))
        .sort((a, b) => b.value - a.value)

    const maxValue = Math.max(...chartData.map(d => d.value), 0)

    return (
        <Card className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full">
            <h3 className="text-md font-bold text-black dark:text-white mb-6">Penyebab Anak Putus Sekolah</h3>
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
                        >
                            <Label value="Jumlah Kasus" offset={-15} position="insideBottom" style={{ fill: '#64748b', fontWeight: 'bold', fontSize: 13 }} />
                        </XAxis>
                        <YAxis
                            dataKey="name"
                            type="category"
                            width={140}
                            tick={{ fontSize: 11, fontWeight: 600, fill: '#64748b' }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={38}>
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
                                            x={isSmallValue ? x + width + 8 : x + 10}
                                            y={y + height / 2}
                                            fill={isSmallValue ? '#64748b' : '#fff'}
                                            fontSize={11}
                                            fontWeight="bold"
                                            dominantBaseline="middle"
                                            textAnchor="start"
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
