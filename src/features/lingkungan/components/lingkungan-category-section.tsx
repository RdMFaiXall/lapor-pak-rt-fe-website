import { Bar, BarChart, CartesianGrid, Cell, LabelList, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { mockLingkunganData, statuses } from '../data/data'
import { Lingkungan } from '../data/schema'

// ─── Shared Components ────────────────────────────────────────────────────────

interface SectionContainerProps {
    title: string
    description?: string
    icon: any
    color: string
    children: React.ReactNode
    className?: string
    count?: number
    id?: string
}

function SectionContainer({
    title,
    description,
    icon: Icon,
    color,
    children,
    className,
    id,
}: SectionContainerProps) {
    const colorClasses: Record<string, string> = {
        amber: 'border-amber-100 dark:border-amber-900/30 bg-amber-50/10',
        rose: 'border-rose-100 dark:border-rose-900/30 bg-rose-50/10',
        slate: 'border-slate-300 dark:border-slate-800 bg-slate-50/10',
        violet: 'border-violet-100 dark:border-violet-900/30 bg-violet-50/10',
        blue: 'border-blue-100 dark:border-blue-900/30 bg-blue-50/10',
        emerald: 'border-emerald-100 dark:border-emerald-900/30 bg-emerald-50/10',
        yellow: 'border-yellow-100 dark:border-yellow-900/30 bg-yellow-50/10',
        orange: 'border-orange-100 dark:border-orange-900/30 bg-orange-50/10',
    }

    const iconColorClasses: Record<string, string> = {
        amber: 'text-amber-500 bg-amber-100 dark:bg-amber-950/40',
        rose: 'text-rose-500 bg-rose-100 dark:bg-rose-950/40',
        slate: 'text-slate-500 bg-slate-100 dark:bg-slate-800',
        violet: 'text-violet-500 bg-violet-100 dark:bg-violet-950/40',
        blue: 'text-blue-500 bg-blue-100 dark:bg-blue-950/40',
        emerald: 'text-emerald-500 bg-emerald-100 dark:bg-emerald-950/40',
        yellow: 'text-yellow-500 bg-yellow-100 dark:bg-yellow-950/40',
        orange: 'text-orange-500 bg-orange-100 dark:bg-orange-950/40',
    }

    return (
        <Card id={id} className={cn('border-none shadow-none bg-transparent overflow-hidden scroll-mt-24', className)}>
            <div className={cn('border rounded-2xl p-6 transition-all duration-300 hover:shadow-md h-full', colorClasses[color] || 'border-gray-100 bg-white dark:bg-gray-900')}>
                <div className='flex items-start justify-between mb-8'>
                    <div className="flex items-center gap-4">
                        <div className={cn('p-3 rounded-xl', iconColorClasses[color])}>
                            <Icon className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                {title}
                            </h3>
                            {description && (
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {description}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="space-y-6">
                    {children}
                </div>
            </div>
        </Card>
    )
}

// ─── Category Charts ──────────────────────────────────────────────────────────

export function LingkunganStatusChart({ data }: { data: Lingkungan[] }) {
    const statusCount = data.reduce((acc, curr) => {
        acc[curr.status] = (acc[curr.status] || 0) + 1
        return acc
    }, {} as Record<string, number>)

    const total = data.length
    const COLORS = ['#ef4444', '#f97316', '#eab308', '#22c55e'] // Red, Orange, Yellow, Green

    const chartData = statuses.map((status) => ({
        name: status.label,
        value: statusCount[status.value] || 0,
        percentage: total > 0 ? (((statusCount[status.value] || 0) / total) * 100).toFixed(2) : '0'
    })).filter(d => d.value > 0).sort((a, b) => b.value - a.value)

    const maxValue = Math.max(...chartData.map(d => d.value), 0)

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full min-h-[300px]'>
            <h3 className="text-md font-semibold text-slate-400 mb-6">Status Laporan</h3>
            <div className='flex flex-col lg:flex-row gap-8 items-start h-[calc(100%-48px)]'>
                <div className='flex-1 h-full min-h-[200px] w-full'>
                    <ResponsiveContainer width="100%" height={240}>
                        <BarChart
                            data={chartData}
                            layout="vertical"
                            margin={{ left: 8, right: 60, top: 0, bottom: 20 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                            <XAxis
                                type="number"
                                domain={[0, maxValue * 1.2]}
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: '#94a3b8' }}
                                tickFormatter={(val) => val.toString().replace(/,/g, '')}
                            />
                            <YAxis
                                dataKey="name"
                                type="category"
                                width={125}
                                tick={{ fontSize: 12, fontWeight: 600, fill: '#64748b' }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={40}>
                                {chartData.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                                <LabelList
                                    dataKey="value"
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    content={(props: any) => {
                                        const { x, y, width, height, value } = props;
                                        if (value === undefined || value === null) return null;
                                        const isSmallValue = value < 2;
                                        return (
                                            <text
                                                x={isSmallValue ? x + width + 8 : x + 10}
                                                y={y + height / 2}
                                                fill={isSmallValue ? "#64748b" : "#fff"}
                                                fontSize={11}
                                                fontWeight="bold"
                                                dominantBaseline="middle"
                                            >
                                                {value} kasus
                                            </text>
                                        );
                                    }}
                                />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className='w-full lg:w-auto shrink-0 space-y-4'>
                    {chartData.map((item, index) => (
                        <div key={index} className='flex items-start gap-3'>
                            <div className='w-3 h-3 rounded-full mt-1 shrink-0' style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                            <div>
                                <p className='text-xs text-gray-400 font-medium'>{item.name}</p>
                                <p className='text-sm font-bold text-gray-900 dark:text-gray-100'>{item.percentage}%</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export function LingkunganResolution({ data }: { data: Lingkungan[] }) {
    const total = data.length
    const selesaiCount = data.filter(d => d.status === 'resolved' || d.status === 'closed').length
    const belumSelesaiCount = total - selesaiCount

    const resolvedColor = '#10b981' // emerald-500
    const unresolvedColor = '#ef4444' // rose-500

    const selesaiPct = total > 0 ? (selesaiCount / total) * 100 : 0
    const belumSelesaiPct = total > 0 ? (belumSelesaiCount / total) * 100 : 0

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full gap-5'>
            <p className="text-md font-semibold text-slate-400 mb-1">Tingkat Penyelesaian</p>

            <div className="flex flex-col gap-2.5">
                <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: resolvedColor }} />
                    <div>
                        <p className="text-xs text-slate-500 leading-tight">Kasus Selesai/Ditutup</p>
                        <p className="text-sm font-extrabold text-gray-900 dark:text-white leading-tight">
                            {selesaiPct.toFixed(1)}%
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: unresolvedColor }} />
                    <div>
                        <p className="text-xs text-slate-500 leading-tight">Masih Ditangani/Baru</p>
                        <p className="text-sm font-extrabold text-gray-900 dark:text-white leading-tight">
                            {belumSelesaiPct.toFixed(1)}%
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex-1 flex flex-col justify-center gap-3 mt-4">
                <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-black text-gray-900 dark:text-white leading-none">{total}</span>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">total laporan</span>
                </div>

                <div className="flex h-12 rounded-xl overflow-hidden gap-1">
                    <div
                        className="flex items-center justify-center transition-all duration-700 rounded-l-xl"
                        style={{ width: `${Math.max(selesaiPct, 5)}%`, backgroundColor: resolvedColor }}
                    >
                        {selesaiPct > 15 && <span className="text-white font-extrabold text-sm drop-shadow-sm">{selesaiCount} kasus</span>}
                    </div>
                    <div
                        className="flex items-center justify-center transition-all duration-700 rounded-r-xl"
                        style={{ width: `${Math.max(belumSelesaiPct, 5)}%`, backgroundColor: unresolvedColor }}
                    >
                        {belumSelesaiPct > 15 && <span className="text-white font-extrabold text-sm drop-shadow-sm">{belumSelesaiCount} kasus</span>}
                    </div>
                </div>

                <div className="flex justify-between text-xs text-slate-400 font-medium">
                    <span>Terpecahkan</span>
                    <span>Proses</span>
                </div>
            </div>
        </div>
    )
}

export function LingkunganPriorityList({ data }: { data: Lingkungan[] }) {
    const priorityCount = data.reduce((acc, curr) => {
        acc[curr.priority] = (acc[curr.priority] || 0) + 1
        return acc
    }, {} as Record<string, number>)

    const total = data.length

    // priority colors matching the mobile form/ui
    const priorityMeta = [
        { id: 'critical', label: 'Kritis', abbr: 'KR', color: '#ef4444', bg: '#fee2e2' },
        { id: 'high', label: 'Tinggi', abbr: 'TG', color: '#f97316', bg: '#ffedd5' },
        { id: 'medium', label: 'Sedang', abbr: 'SD', color: '#eab308', bg: '#fef9c3' },
        { id: 'low', label: 'Rendah', abbr: 'RD', color: '#22c55e', bg: '#dcfce7' },
    ]

    const items = priorityMeta.map(p => {
        return { ...p, value: priorityCount[p.id] || 0 }
    })

    return (
        <Card className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 mt-6'>
            <h3 className="text-md font-semibold text-slate-400 mb-6">Tingkat Prioritas</h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6">
                {items.map((item) => {
                    const pct = total > 0 ? (item.value / total) * 100 : 0
                    const pctDisplay = pct > 0 ? pct.toFixed(1) : '0'

                    return (
                        <div key={item.label} className="flex flex-col gap-2">
                            <div className="flex items-start gap-3">
                                <div
                                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold leading-none"
                                    style={{ backgroundColor: item.bg, color: item.color }}
                                >
                                    {item.abbr}
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <span className="text-xl font-extrabold text-gray-900 dark:text-white leading-none">
                                        {item.value}{' '}
                                        <span className="text-sm font-semibold text-slate-500">Kasus</span>
                                    </span>
                                    <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                                        Prioritas {item.label}
                                    </span>
                                </div>
                            </div>

                            <div>
                                <div className="h-1.5 w-full rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
                                    <div
                                        className="h-full rounded-full transition-all duration-700"
                                        style={{
                                            width: `${Math.max(pct > 0 ? 4 : 0, pct)}%`,
                                            backgroundColor: item.color,
                                        }}
                                    />
                                </div>
                                <span className="text-xs font-semibold mt-1 block" style={{ color: item.color }}>
                                    {pctDisplay}%
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Card>
    )
}

// ─── Main Category Section Component ──────────────────────────────────────────

interface LingkunganCategorySectionProps {
    categoryId: string
    title: string
    description: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any
    color: string
}

export function LingkunganCategorySection({ categoryId, title, description, icon, color }: LingkunganCategorySectionProps) {
    const data = mockLingkunganData.filter(d => d.category === categoryId)

    // Hide if no data? No, let's keep it visible with zeros.

    return (
        <SectionContainer
            title={title}
            description={description}
            icon={icon}
            color={color}
            count={data.length}
            id={`section-${categoryId}`}
        >
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div className='lg:col-span-2'>
                    <LingkunganStatusChart data={data} />
                </div>
                <div className='flex flex-col gap-8'>
                    <LingkunganResolution data={data} />
                </div>
            </div>
            <div>
                <LingkunganPriorityList data={data} />
            </div>
        </SectionContainer>
    )
}
