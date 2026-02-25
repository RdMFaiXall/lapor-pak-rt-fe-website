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
import { wargaMeninggalData } from '../data/dashboard-data'

// ─── Shared tooltip for stacked bars ──────────────────────────────────────────

const StackedTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload?.length) return null
    const barTotal = payload.reduce((sum: number, p: any) => sum + (p.value || 0), 0)
    return (
        <div className="rounded-lg border bg-background p-3 shadow-md text-xs min-w-[180px]">
            <p className="font-semibold text-sm text-foreground mb-2">{label}</p>
            {[...payload].reverse().map((p: any) =>
                p.value > 0 && (
                    <div key={p.dataKey} className="flex items-center justify-between gap-4 mb-1">
                        <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full inline-block shrink-0" style={{ backgroundColor: p.fill }} />
                            <span className="text-muted-foreground">{p.name}</span>
                        </div>
                        <span className="font-bold text-foreground">
                            {p.value}{' '}
                            <span className="font-normal text-muted-foreground">
                                ({barTotal > 0 ? ((p.value / barTotal) * 100).toFixed(0) : 0}%)
                            </span>
                        </span>
                    </div>
                )
            )}
            <div className="mt-2 pt-2 border-t flex justify-between text-muted-foreground">
                <span>Total</span>
                <span className="font-bold text-foreground">{barTotal}</span>
            </div>
        </div>
    )
}

// ─── Age group config ──────────────────────────────────────────────────────────

const AGE_GROUPS = [
    { key: 'Anak', label: 'Anak (0-14)', color: '#06b6d4' },
    { key: 'Produktif Muda', label: 'Produktif Muda (15-35)', color: '#10b981' },
    { key: 'Produktif Dewasa', label: 'Produktif Dewasa (36-59)', color: '#f59e0b' },
    { key: 'Lansia', label: 'Lansia (60+)', color: '#6b7280' },
]

function getAgeGroup(umur: number): string {
    if (umur < 15) return 'Anak'
    if (umur <= 35) return 'Produktif Muda'
    if (umur <= 59) return 'Produktif Dewasa'
    return 'Lansia'
}

// ─── Chart 1: Penyebab Meninggal per Kelompok Usia (stacked horizontal) ───────

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

export function PenyebabMeninggalByAgeChart() {
    const chartData = buildPenyebabByAgeData()
    const total = wargaMeninggalData.length

    const ageTotals = AGE_GROUPS.map(({ key, label, color }) => {
        const count = wargaMeninggalData.filter(w => getAgeGroup(w.umur) === key).length
        return {
            label,
            color,
            count,
            percentage: total > 0 ? ((count / total) * 100).toFixed(1) : '0',
        }
    })

    return (
        <Card>
            <CardContent>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 h-full">
                    <h3 className="text-md font-semibold text-slate-400 mb-6">
                        Penyebab Meninggal per Kelompok Usia
                    </h3>
                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                        <div className="flex-1 h-[240px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={chartData}
                                    layout="vertical"
                                    margin={{ left: 0, right: 40, top: 0, bottom: 20 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                                    <XAxis
                                        type="number"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fontSize: 12, fill: '#94a3b8' }}
                                        tickFormatter={(val) => val.toString().replace(/,/g, '')}
                                        allowDecimals={false}
                                    />
                                    <YAxis
                                        dataKey="name"
                                        type="category"
                                        width={120}
                                        tick={{ fontSize: 12, fontWeight: 600, fill: '#64748b' }}
                                        axisLine={false}
                                        tickLine={false}
                                    />
                                    <Tooltip cursor={{ fill: 'transparent' }} content={<StackedTooltip />} />
                                    {AGE_GROUPS.map((group, index) => (
                                        <Bar
                                            key={group.key}
                                            dataKey={group.key}
                                            name={group.label}
                                            stackId="a"
                                            fill={group.color}
                                            radius={
                                                index === AGE_GROUPS.length - 1
                                                    ? [0, 10, 10, 0]
                                                    : [0, 0, 0, 0]
                                            }
                                        >
                                            {index === AGE_GROUPS.length - 1 && (
                                                <LabelList
                                                    dataKey="total"
                                                    position="insideRight"
                                                    style={{ fill: '#fff', fontSize: 12, fontWeight: 'bold' }}
                                                    offset={15}
                                                />
                                            )}
                                        </Bar>
                                    ))}
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="w-full lg:w-48 space-y-4">
                            {ageTotals.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div
                                        className="w-3 h-3 rounded-full mt-1 shrink-0"
                                        style={{ backgroundColor: item.color }}
                                    />
                                    <div>
                                        <p className="text-xs text-gray-400 font-medium">{item.label}</p>
                                        <p className="text-sm font-bold text-gray-900 dark:text-gray-100">
                                            {item.count} orang ({item.percentage}%)
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

// ─── Chart 2: Warga Meninggal per Kelompok Usia ───────────────────────────────

const MENINGGAL_COLORS = ['#6b7280', '#9ca3af', '#374151', '#4b5563', '#1f2937', '#d1d5db', '#e5e7eb']

export function WargaMeninggalPerUsiaChart() {
    const total = wargaMeninggalData.length

    // One bar per age group
    const chartData = AGE_GROUPS.map(({ key, label, color }) => {
        const value = wargaMeninggalData.filter(w => getAgeGroup(w.umur) === key).length
        return { name: label, value, color, percentage: total > 0 ? ((value / total) * 100).toFixed(1) : '0' }
    })

    return (
        <Card className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full">
            <h3 className="text-md font-semibold text-slate-400 mb-6">Warga Meninggal per Kelompok Usia</h3>
            <div className="h-[300px] w-full py-4">
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
                            tick={{ fill: '#64748b', fontSize: 11, fontWeight: 500 }}
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
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
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




// ─── Chart 3: Penyebab Meninggal (vertical bar) ────────────────────────────────

export function PenyebabMeninggalChart() {
    // Count by cause
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

    return (
        <Card className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full">
            <h3 className="text-md font-semibold text-slate-400 mb-6">Penyebab Meninggal</h3>
            <div className="h-[300px] w-full py-4">
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
                                <Cell
                                    key={`cell-${index}`}
                                    fill={MENINGGAL_COLORS[index % MENINGGAL_COLORS.length]}
                                />
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
