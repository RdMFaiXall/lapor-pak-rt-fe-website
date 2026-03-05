"use client"

import { Card } from '@/components/ui/card'
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
    Pie,
    PieChart,
} from 'recharts'
import { anakTidakSekolahData } from '../data/data'

// ─── Color palettes ────────────────────────────────────────────────────────────

const USIA_COLORS: Record<string, string> = {
    '6 - 12 Tahun': '#059669', // Darker Green
    '13 - 15 Tahun': '#1d4ed8', // Darker Blue
    '16 - 18 Tahun': '#d97706', // Darker Amber
}
const DEFAULT_COLOR = '#6366f1'

const ALASAN_COLORS = ['#1e40af', '#1d4ed8', '#2563eb', '#3b82f6', '#60a5fa', '#0891b2']
// const DOKUMEN_COLORS = ['#dc2626', '#b91c1c', '#991b1b', '#7f1d1d']

// ─── Chart 1: Alasan Tidak Sekolah (horizontal bar) ───────────────────────────

export function AlasanTidakSekolahChart() {
    const alasanMap: Record<string, number> = {}
    for (const w of anakTidakSekolahData) {
        alasanMap[w.alasanTidakSekolah] = (alasanMap[w.alasanTidakSekolah] || 0) + 1
    }
    const total = anakTidakSekolahData.length
    const chartData = Object.entries(alasanMap)
        .map(([name, value], i) => ({
            name,
            value,
            color: ALASAN_COLORS[i % ALASAN_COLORS.length],
            percentage: total > 0 ? ((value / total) * 100).toFixed(1) : '0',
        }))
        .sort((a, b) => b.value - a.value)

    const maxValue = Math.max(...chartData.map(d => d.value), 0)

    return (
        <Card className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full">
            <h3 className="text-md font-semibold text-slate-400 mb-6">Alasan Tidak Sekolah</h3>

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
                            width={140}
                            tick={{ fontSize: 11, fontWeight: 600, fill: '#64748b' }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={32}>
                            {chartData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={ALASAN_COLORS[index % ALASAN_COLORS.length]} />
                            ))}
                            <LabelList
                                dataKey="value"
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                content={(props: any) => {
                                    const { x, y, width, height, value, index } = props;
                                    if (value === undefined || value === null) return null;
                                    const isSmallValue = value < maxValue * 0.15;
                                    const displayValue = `${value} anak (${chartData[index]?.percentage}%)`;
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

// ─── Chart 2: Kategori Usia (Pie chart) ────────────────────────────────────────

export function KategoriUsiaChart() {
    const usiaMap: Record<string, number> = {}
    for (const w of anakTidakSekolahData) {
        usiaMap[w.kategoriUsia] = (usiaMap[w.kategoriUsia] || 0) + 1
    }
    const total = anakTidakSekolahData.length
    const chartData = Object.entries(usiaMap)
        .map(([name, value]) => ({
            name,
            value,
            color: USIA_COLORS[name] ?? DEFAULT_COLOR,
            percentage: total > 0 ? ((value / total) * 100).toFixed(1) : '0',
        }))
        .sort((a, b) => b.value - a.value)

    return (
        <Card className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full">
            <h3 className="text-md font-semibold text-slate-400 mt-2 mb-4">Kategori Usia</h3>
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
                                label={(props: any) => {
                                    const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;
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
                                formatter={(value: any, name: any, props: any) => [`${value} anak (${props.payload.percentage}%)`, name]}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className="w-full max-w-[240px] mx-auto grid grid-cols-2 gap-y-3 gap-x-4 mt-6 shrink-0">
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

// ─── Chart 3: Kendala Dokumen Pendaftaran (stacked horizontal / grid) ──────────

const KENDALA_COLOR = '#ef4444' // Red-500
const LENGKAP_COLOR = '#10b981' // Emerald-500

export function KendalaDokumenChart() {
    const total = anakTidakSekolahData.length
    const adaKendala = anakTidakSekolahData.filter(w => w.adaKendalaDokumen).length
    const tidakAdaKendala = total - adaKendala

    const adaKendalaPct = total > 0 ? (adaKendala / total) * 100 : 0
    const lengkapPct = total > 0 ? (tidakAdaKendala / total) * 100 : 0

    return (
        <Card className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full gap-5">
            {/* Title */}
            <p className="text-md font-semibold text-slate-400 mb-1">
                Kelengkapan Dokumen Pendaftaran
            </p>

            {/* Horizontal stacked bar */}
            <div className="flex-1 flex flex-col justify-center gap-3">
                {/* Total label */}
                <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-black text-gray-900 dark:text-white leading-none">{total}</span>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">total anak</span>
                </div>

                {/* Stacked bar */}
                <div className="flex h-12 rounded-xl overflow-hidden gap-1">
                    {/* Ada Kendala */}
                    <div
                        className="flex items-center justify-center transition-all duration-700 rounded-l-xl"
                        style={{ width: `${adaKendalaPct}%`, backgroundColor: KENDALA_COLOR }}
                    >
                        {adaKendalaPct > 15 && (
                            <span className="text-white font-extrabold text-sm drop-shadow-sm truncate px-1">
                                {adaKendala} anak ({adaKendalaPct.toFixed(0)}%)
                            </span>
                        )}
                    </div>
                    {/* Lengkap */}
                    <div
                        className="flex items-center justify-center transition-all duration-700 rounded-r-xl"
                        style={{ width: `${lengkapPct}%`, backgroundColor: LENGKAP_COLOR }}
                    >
                        {lengkapPct > 15 && (
                            <span className="text-white font-extrabold text-sm drop-shadow-sm truncate px-1">
                                {tidakAdaKendala} anak ({lengkapPct.toFixed(0)}%)
                            </span>
                        )}
                    </div>
                </div>

                {/* Bottom labels */}
                <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                    <span>Ada Kendala Dokumen</span>
                    <span>Dokumen Lengkap</span>
                </div>
            </div>
        </Card>
    )
}

// ─── Chart 4: Alasan per Kategori Usia (Grid Toggled) ─────────────────────────

export function AlasanPerUsiaChart() {
    // Build Data based on reasons (Alasan)
    const allUsia = [...new Set(anakTidakSekolahData.map((w: any) => w.kategoriUsia))]

    const mapAlasan: Record<string, Record<string, number>> = {}

    for (const w of anakTidakSekolahData) {
        if (!mapAlasan[w.alasanTidakSekolah]) mapAlasan[w.alasanTidakSekolah] = {}
        mapAlasan[w.alasanTidakSekolah][w.kategoriUsia] = (mapAlasan[w.alasanTidakSekolah][w.kategoriUsia] || 0) + 1
    }

    const dataByAlasan = Object.entries(mapAlasan)
        .map(([name, counts]) => ({
            name,
            ...counts,
            total: Object.values(counts).reduce((a, b: any) => a + b, 0),
        }))
        .sort((a, b) => b.total - a.total)

    const gridCols = 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'

    return (
        <Card className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full lg:col-span-full mt-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Alasan Tidak Sekolah per Kategori Usia
                    </h3>
                </div>
            </div>

            <div className={`flex-1 pr-2 grid gap-4 lg:gap-5 ${gridCols}`}>
                {dataByAlasan.map((group: any, index: number) => (
                    <div key={index} className="flex flex-col bg-gray-50/50 dark:bg-gray-900/20 p-4 rounded-xl border border-gray-50 dark:border-gray-800/50">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                                {group.name}
                            </span>
                            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 shrink-0">
                                <span className="text-xs font-bold text-gray-900 dark:text-white">
                                    {group.total}
                                </span>
                                <span className="text-[10px] text-gray-500 font-medium">
                                    kasus
                                </span>
                            </div>
                        </div>

                        <div className="space-y-3.5">
                            {allUsia.map((item: any) => {
                                const count = (group as any)[item] || 0
                                const percentage = group.total > 0 ? ((count / group.total) * 100).toFixed(1) : '0'
                                const color = USIA_COLORS[item] || DEFAULT_COLOR

                                return (
                                    <div key={item}>
                                        <div className="flex items-center justify-between mb-1.5 px-1">
                                            <div className="flex items-center gap-2 overflow-hidden w-full">
                                                <div className="w-2 h-2 rounded-full shadow-sm shrink-0" style={{ backgroundColor: color }} />
                                                <span className="text-[11px] font-medium text-gray-600 dark:text-gray-400 truncate max-w-full block">
                                                    {item}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1 shrink-0 ml-1">
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
