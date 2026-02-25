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
import { anakPutusSekolahData } from '../data/data'

// ─── Shared stacked tooltip ────────────────────────────────────────────────────

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
                            <span
                                className="w-2.5 h-2.5 rounded-full inline-block shrink-0"
                                style={{ backgroundColor: p.fill }}
                            />
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

// ─── Color palettes ────────────────────────────────────────────────────────────

const JENJANG_COLORS: Record<string, string> = {
    SD: '#2563eb',
    SMP: '#3b82f6',
    SMA: '#60a5fa',
    SMK: '#93c5fd',
    MTS: '#bfdbfe',
}
const DEFAULT_COLOR = '#a5b4fc'

const PENYEBAB_COLORS = ['#ef4444', '#f59e0b', '#8b5cf6', '#3b82f6', '#10b981', '#06b6d4']

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
    const allJenjang = [...new Set(anakPutusSekolahData.map(w => w.jenjang))]

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

const JENJANG_STACK_COLORS: string[] = ['#2563eb', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']

export function PenyebabPerJenjangChart() {
    const { chartData, allJenjang } = buildPenyebabByJenjangData()
    const total = anakPutusSekolahData.length

    const jenjangTotals = allJenjang.map((jenjang, i) => {
        const count = anakPutusSekolahData.filter(w => w.jenjang === jenjang).length
        return {
            label: jenjang,
            color: JENJANG_STACK_COLORS[i % JENJANG_STACK_COLORS.length],
            count,
            percentage: total > 0 ? ((count / total) * 100).toFixed(1) : '0',
        }
    })

    return (
        <Card>
            <CardContent>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 h-full">
                    <h3 className="text-md font-semibold text-slate-400 mb-6">
                        Penyebab per Jenjang Pendidikan Terakhir
                    </h3>
                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                        <div className="flex-1 h-[400px] w-full">
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
                                        width={140}
                                        tick={{ fontSize: 11, fontWeight: 600, fill: '#64748b' }}
                                        axisLine={false}
                                        tickLine={false}
                                        interval={0}
                                    />
                                    <Tooltip cursor={{ fill: 'transparent' }} content={<StackedTooltip />} />
                                    {allJenjang.map((jenjang, index) => (
                                        <Bar
                                            key={jenjang}
                                            dataKey={jenjang}
                                            name={jenjang}
                                            stackId="a"
                                            fill={JENJANG_STACK_COLORS[index % JENJANG_STACK_COLORS.length]}
                                            radius={
                                                index === allJenjang.length - 1
                                                    ? [0, 10, 10, 0]
                                                    : [0, 0, 0, 0]
                                            }
                                        >
                                            {index === allJenjang.length - 1 && (
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
                            {jenjangTotals.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div
                                        className="w-3 h-3 rounded-full mt-1 shrink-0"
                                        style={{ backgroundColor: item.color }}
                                    />
                                    <div>
                                        <p className="text-xs text-gray-400 font-medium">{item.label}</p>
                                        <p className="text-sm font-bold text-gray-900 dark:text-gray-100">
                                            {item.count} anak ({item.percentage}%)
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
            percentage: total > 0 ? ((value / total) * 100).toFixed(1) : '0',
        }))
        .sort((a, b) => b.value - a.value)

    return (
        <Card className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full">
            <h3 className="text-md font-semibold text-slate-400 mb-6">Jenjang Pendidikan Terakhir</h3>
            <div className="h-[280px] w-full py-4">
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
                            tick={{ fill: '#64748b', fontSize: 13, fontWeight: 500 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#64748b', fontSize: 13, fontWeight: 500 }}
                            tickFormatter={(val) => val.toString().replace(/,/g, '')}
                            domain={[0, 'dataMax + 1']}
                            allowDecimals={false}
                        />
                        <Tooltip cursor={{ fill: '#f8fafc' }} content={<CustomTooltip />} />
                        <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={50}>
                            {chartData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={JENJANG_COLORS[entry.name] ?? DEFAULT_COLOR}
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

    return (
        <Card className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full">
            <h3 className="text-md font-semibold text-slate-400 mb-6">Penyebab Anak Putus Sekolah</h3>
            <div className="h-[400px] w-full py-4">
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
                            dy={15}
                            interval={0}
                            angle={-30}
                            textAnchor="end"
                            height={70}
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
                                    fill={PENYEBAB_COLORS[index % PENYEBAB_COLORS.length]}
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
