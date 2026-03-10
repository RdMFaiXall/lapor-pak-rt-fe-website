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
import { mockData } from '../constants'

// Helpers
const pengangguranData = mockData.filter(d => d.kategori_isu_ekonomi === 'Warga tidak punya pekerjaan')
const hutangData = mockData.filter(d => d.kategori_isu_ekonomi === 'Warga berhutang')
const bansosData = mockData.filter(d => d.kategori_isu_ekonomi === 'Calon penerima bansos')

// --- TIDAK PUNYA PEKERJAAN CHARTS ---

export function LamaMenganggurChart() {
    const dataCount = pengangguranData.reduce((acc, curr) => {
        if (curr.lama_menganggur) {
            acc[curr.lama_menganggur] = (acc[curr.lama_menganggur] || 0) + 1
        }
        return acc
    }, {} as Record<string, number>)

    const total = pengangguranData.length
    const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899']

    const chartData = Object.entries(dataCount).map(([name, value]) => ({
        name,
        value,
        percentage: total > 0 ? ((value / total) * 100).toFixed(1) : '0'
    })).sort((a, b) => b.value - a.value)

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col'>
            <h3 className="text-md font-semibold text-slate-400 mt-2 mb-4">Lama Menganggur</h3>
            <div className='flex flex-col items-center justify-center flex-1 w-full'>
                <div className='h-[250px] w-full'>
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
                                {chartData.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))!}
                            </Pie>
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
                                itemStyle={{ color: '#1f2937', fontWeight: 'bold' }}
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                formatter={(value: any, name: any, props: any) => [`${value} warga (${props.payload.percentage}%)`, name]}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className='w-full mx-auto grid grid-cols-1 gap-y-3 gap-x-2 mt-6 shrink-0'>
                    {chartData.map((item, index) => (
                        <div key={index} className='flex items-center gap-3 w-full justify-between'>
                            <div className='flex items-center gap-2'>
                                <div className='w-3 h-3 rounded-full shrink-0' style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                                <p className='text-xs text-gray-700 dark:text-gray-300 font-medium'>{item.name}</p>
                            </div>
                            <span className="text-xs font-bold">{item.percentage}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export function SkillTerakhirChart() {
    const dataCount = pengangguranData.reduce((acc, curr) => {
        if (curr.skill_terakhir) {
            curr.skill_terakhir.forEach(r => {
                acc[r] = (acc[r] || 0) + 1
            })
        }
        return acc
    }, {} as Record<string, number>)

    const chartData = Object.entries(dataCount)
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value)

    const COLORS = ['#60a5fa', '#34d399', '#fbbf24', '#fb923c', '#f43f5e']
    const total = pengangguranData.length

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-1'>
                Skill atau Pengalaman Terakhir
            </h3>
            <p className='text-sm text-gray-500 dark:text-gray-400 mb-6'>
                Keterampilan yang dimiliki oleh warga tidak bekerja
            </p>

            <div className='space-y-4'>
                {chartData.map((item, index) => {
                    const percentage = total > 0 ? ((item.value / total) * 100).toFixed(1) : '0'
                    return (
                        <div key={index}>
                            <div className='flex items-center justify-between mb-2'>
                                <div className='flex items-center gap-3'>
                                    <div
                                        className='w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md'
                                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                                    >
                                        {item.value}
                                    </div>
                                    <span className='text-sm font-semibold text-gray-900 dark:text-white'>
                                        {item.name}
                                    </span>
                                </div>
                                <span
                                    className='text-lg font-bold'
                                    style={{ color: COLORS[index % COLORS.length] }}
                                >
                                    {percentage}%
                                </span>
                            </div>
                            <div className='w-full bg-gray-100 dark:bg-gray-700 rounded-full h-3'>
                                <div
                                    className='h-3 rounded-full transition-all duration-500 shadow-sm'
                                    style={{
                                        width: `${percentage}%`,
                                        backgroundColor: COLORS[index % COLORS.length]
                                    }}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export function MinatPelatihanChart() {
    const dataCount = pengangguranData.reduce((acc, curr) => {
        if (curr.minat_pelatihan) {
            curr.minat_pelatihan.forEach(r => {
                acc[r] = (acc[r] || 0) + 1
            })
        }
        return acc
    }, {} as Record<string, number>)

    const chartData = Object.entries(dataCount)
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value)

    const COLORS = ['#8b5cf6', '#d946ef', '#f43f5e', '#f97316']
    const total = pengangguranData.length

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-1'>
                Minat Pelatihan Warga
            </h3>
            <p className='text-sm text-gray-500 dark:text-gray-400 mb-6'>
                Bidang pelatihan yang diminati warga
            </p>

            <div className='space-y-4'>
                {chartData.map((item, index) => {
                    const percentage = total > 0 ? ((item.value / total) * 100).toFixed(1) : '0'
                    return (
                        <div key={index}>
                            <div className='flex items-center justify-between mb-2'>
                                <div className='flex items-center gap-3'>
                                    <div
                                        className='w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md'
                                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                                    >
                                        {item.value}
                                    </div>
                                    <span className='text-sm font-semibold text-gray-900 dark:text-white'>
                                        {item.name}
                                    </span>
                                </div>
                                <span
                                    className='text-lg font-bold'
                                    style={{ color: COLORS[index % COLORS.length] }}
                                >
                                    {percentage}%
                                </span>
                            </div>
                            <div className='w-full bg-gray-100 dark:bg-gray-700 rounded-full h-3'>
                                <div
                                    className='h-3 rounded-full transition-all duration-500 shadow-sm'
                                    style={{
                                        width: `${percentage}%`,
                                        backgroundColor: COLORS[index % COLORS.length]
                                    }}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

// --- WARGA BERHUTANG CHARTS ---

export function SumberHutangChart() {
    const dataCount = hutangData.reduce((acc, curr) => {
        if (curr.sumber_hutang) {
            acc[curr.sumber_hutang] = (acc[curr.sumber_hutang] || 0) + 1
        }
        return acc
    }, {} as Record<string, number>)

    const chartData = [
        { name: 'Pinjol (Online)', value: dataCount['Pinjol (Online)'] || 0 },
        { name: 'Rentenir / Bank Keliling', value: dataCount['Rentenir / Bank Keliling'] || 0 },
        { name: 'Bank Resmi', value: dataCount['Bank Resmi'] || 0 },
        { name: 'Tetangga/Perorangan', value: dataCount['Tetangga/Perorangan'] || 0 }
    ]

    const maxValue = Math.max(...chartData.map(d => d.value), 0)
    const COLORS = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6']
    const total = hutangData.length

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700'>
            <h3 className="text-md font-semibold text-slate-400 mb-6">Distribusi Sumber Hutang</h3>
            <div className='flex flex-col lg:flex-row gap-8 items-start'>
                <div className='flex-1 h-[280px] w-full'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={chartData}
                            layout="vertical"
                            margin={{ left: 8, right: 60, top: 0, bottom: 20 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                            <XAxis
                                type="number"
                                domain={[0, maxValue ? maxValue + 1 : 5]}
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: '#94a3b8' }}
                                tickFormatter={(val) => val.toString().replace(/,/g, '')}
                            />
                            <YAxis
                                dataKey="name"
                                type="category"
                                width={140}
                                tick={{ fontSize: 12, fontWeight: 600, fill: '#64748b' }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <Tooltip cursor={{ fill: 'transparent' }} />

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
                                        const isSmallValue = value < 10;
                                        return (
                                            <text
                                                x={isSmallValue ? x + width + 8 : x + 10}
                                                y={y + height / 2}
                                                fill={isSmallValue ? "#64748b" : "#fff"}
                                                fontSize={11}
                                                fontWeight="bold"
                                                dominantBaseline="middle"
                                            >
                                                {value} warga
                                            </text>
                                        );
                                    }}
                                />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className='w-full lg:w-auto shrink-0 space-y-4'>
                    {chartData.map((item, index) => {
                        const percentage = total > 0 ? ((item.value / total) * 100).toFixed(1) : '0'
                        return (
                            <div key={index} className='flex items-start gap-3'>
                                <div className='w-3 h-3 rounded-full mt-1 shrink-0' style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                                <div>
                                    <p className='text-xs text-gray-400 font-medium'>{item.name}</p>
                                    <p className='text-sm font-bold text-gray-900 dark:text-gray-100'>{percentage}%</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export function EstimasiHutangChart() {
    const dataCount = hutangData.reduce((acc, curr) => {
        if (curr.estimasi_total_hutang) {
            acc[curr.estimasi_total_hutang] = (acc[curr.estimasi_total_hutang] || 0) + 1
        }
        return acc
    }, {} as Record<string, number>)

    const chartData = Object.entries(dataCount)
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value)

    const COLORS = ['#f43f5e', '#fb923c', '#fbbf24', '#34d399', '#60a5fa']
    const total = hutangData.length

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-1'>
                Estimasi Total Hutang
            </h3>
            <p className='text-sm text-gray-500 dark:text-gray-400 mb-6'>
                Estimasi nominal hutang yang dimiliki warga
            </p>

            <div className='space-y-4'>
                {chartData.map((item, index) => {
                    const percentage = total > 0 ? ((item.value / total) * 100).toFixed(1) : '0'
                    return (
                        <div key={index}>
                            <div className='flex items-center justify-between mb-2'>
                                <div className='flex items-center gap-3'>
                                    <div
                                        className='w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md'
                                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                                    >
                                        {item.value}
                                    </div>
                                    <span className='text-sm font-semibold text-gray-900 dark:text-white'>
                                        {item.name}
                                    </span>
                                </div>
                                <span
                                    className='text-lg font-bold'
                                    style={{ color: COLORS[index % COLORS.length] }}
                                >
                                    {percentage}%
                                </span>
                            </div>
                            <div className='w-full bg-gray-100 dark:bg-gray-700 rounded-full h-3'>
                                <div
                                    className='h-3 rounded-full transition-all duration-500 shadow-sm'
                                    style={{
                                        width: `${percentage}%`,
                                        backgroundColor: COLORS[index % COLORS.length]
                                    }}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export function ButuhMediasiChart() {
    const mediasiCount = hutangData.reduce((acc, curr) => {
        const title = curr.butuh_mediasi ? 'Butuh Mediasi' : 'Tidak Butuh Mediasi'
        acc[title] = (acc[title] || 0) + 1
        return acc
    }, {} as Record<string, number>)

    const total = hutangData.length
    const COLORS = ['#ef4444', '#10b981']

    const chartData = Object.entries(mediasiCount).map(([name, value]) => ({
        name,
        value,
        percentage: total > 0 ? ((value / total) * 100).toFixed(1) : '0'
    })).sort((a, b) => b.value - a.value)

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col'>
            <h3 className="text-md font-semibold text-slate-400 mt-2 mb-4">Butuh Mediasi Penagihan?</h3>
            <div className='flex flex-col items-center justify-center flex-1 w-full'>
                <div className='h-[250px] w-full'>
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
                                {chartData.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))!}
                            </Pie>
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
                                itemStyle={{ color: '#1f2937', fontWeight: 'bold' }}
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                formatter={(value: any, name: any, props: any) => [`${value} warga (${props.payload.percentage}%)`, name]}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className='w-full mx-auto grid grid-cols-1 gap-y-3 gap-x-2 mt-6 shrink-0'>
                    {chartData.map((item, index) => (
                        <div key={index} className='flex items-center gap-3 w-full justify-between'>
                            <div className='flex items-center gap-2'>
                                <div className='w-3 h-3 rounded-full shrink-0' style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                                <p className='text-xs text-gray-700 dark:text-gray-300 font-medium'>{item.name}</p>
                            </div>
                            <span className="text-xs font-bold">{item.percentage}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// --- CALON PENERIMA BANSOS CHARTS ---

export function PenghasilanKKChart() {
    const dataCount = bansosData.reduce((acc, curr) => {
        if (curr.penghasilan_kk) {
            acc[curr.penghasilan_kk] = (acc[curr.penghasilan_kk] || 0) + 1
        }
        return acc
    }, {} as Record<string, number>)

    const chartData = [
        { name: 'Tidak Ada', value: dataCount['Tidak Ada'] || 0 },
        { name: '< 1.5 Juta', value: dataCount['< 1.5 Juta'] || 0 },
        { name: '1.5 - 3 Juta', value: dataCount['1.5 - 3 Juta'] || 0 },
        { name: '> 3 Juta', value: dataCount['> 3 Juta'] || 0 },
    ]

    const maxValue = Math.max(...chartData.map(d => d.value), 0)
    const COLORS = ['#ef4444', '#f59e0b', '#3b82f6', '#10b981']
    const total = bansosData.length

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700'>
            <h3 className="text-md font-semibold text-slate-400 mb-6">Penghasilan KK Calon Penerima Bansos</h3>
            <div className='flex flex-col lg:flex-row gap-8 items-start'>
                <div className='flex-1 h-[280px] w-full'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={chartData}
                            layout="vertical"
                            margin={{ left: 8, right: 60, top: 0, bottom: 20 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                            <XAxis
                                type="number"
                                domain={[0, maxValue ? maxValue + 1 : 5]}
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: '#94a3b8' }}
                                tickFormatter={(val) => val.toString().replace(/,/g, '')}
                            />
                            <YAxis
                                dataKey="name"
                                type="category"
                                width={120}
                                tick={{ fontSize: 12, fontWeight: 600, fill: '#64748b' }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <Tooltip cursor={{ fill: 'transparent' }} />

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
                                        const isSmallValue = value < 10;
                                        return (
                                            <text
                                                x={isSmallValue ? x + width + 8 : x + 10}
                                                y={y + height / 2}
                                                fill={isSmallValue ? "#64748b" : "#fff"}
                                                fontSize={11}
                                                fontWeight="bold"
                                                dominantBaseline="middle"
                                            >
                                                {value} KK
                                            </text>
                                        );
                                    }}
                                />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className='w-full lg:w-auto shrink-0 space-y-4'>
                    {chartData.map((item, index) => {
                        const percentage = total > 0 ? ((item.value / total) * 100).toFixed(1) : '0'
                        return (
                            <div key={index} className='flex items-start gap-3'>
                                <div className='w-3 h-3 rounded-full mt-1 shrink-0' style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                                <div>
                                    <p className='text-xs text-gray-400 font-medium'>{item.name}</p>
                                    <p className='text-sm font-bold text-gray-900 dark:text-gray-100'>{percentage}%</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export function StatusHunianChart() {
    const dataCount = bansosData.reduce((acc, curr) => {
        if (curr.status_hunian) {
            acc[curr.status_hunian] = (acc[curr.status_hunian] || 0) + 1
        }
        return acc
    }, {} as Record<string, number>)

    const total = bansosData.length
    const COLORS = ['#14b8a6', '#f59e0b', '#ec4899']

    const chartData = Object.entries(dataCount).map(([name, value]) => ({
        name,
        value,
        percentage: total > 0 ? ((value / total) * 100).toFixed(1) : '0'
    })).sort((a, b) => b.value - a.value)

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col'>
            <h3 className="text-md font-semibold text-slate-400 mt-2 mb-4">Status Hunian</h3>
            <div className='flex flex-col items-center justify-center flex-1 w-full'>
                <div className='h-[250px] w-full'>
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
                                {chartData.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))!}
                            </Pie>
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
                                itemStyle={{ color: '#1f2937', fontWeight: 'bold' }}
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                formatter={(value: any, name: any, props: any) => [`${value} warga (${props.payload.percentage}%)`, name]}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className='w-full mx-auto grid grid-cols-1 gap-y-3 gap-x-2 mt-6 shrink-0'>
                    {chartData.map((item, index) => (
                        <div key={index} className='flex items-center gap-3 w-full justify-between'>
                            <div className='flex items-center gap-2'>
                                <div className='w-3 h-3 rounded-full shrink-0' style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                                <p className='text-xs text-gray-700 dark:text-gray-300 font-medium'>{item.name}</p>
                            </div>
                            <span className="text-xs font-bold">{item.percentage}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export function RiwayatBantuanChart() {
    const dataCount = bansosData.reduce((acc, curr) => {
        if (curr.riwayat_bantuan) {
            curr.riwayat_bantuan.forEach(r => {
                acc[r] = (acc[r] || 0) + 1
            })
        }
        return acc
    }, {} as Record<string, number>)

    const chartData = Object.entries(dataCount)
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value)

    const COLORS = ['#84cc16', '#eab308', '#0ea5e9', '#ec4899']
    const total = bansosData.length

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-1'>
                Riwayat Bansos
            </h3>
            <p className='text-sm text-gray-500 dark:text-gray-400 mb-6'>
                Rekam jejak penerimaan bantuan warga
            </p>

            <div className='space-y-4'>
                {chartData.map((item, index) => {
                    const percentage = total > 0 ? ((item.value / total) * 100).toFixed(1) : '0'
                    return (
                        <div key={index}>
                            <div className='flex items-center justify-between mb-2'>
                                <div className='flex items-center gap-3'>
                                    <div
                                        className='w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md'
                                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                                    >
                                        {item.value}
                                    </div>
                                    <span className='text-sm font-semibold text-gray-900 dark:text-white'>
                                        {item.name}
                                    </span>
                                </div>
                                <span
                                    className='text-lg font-bold'
                                    style={{ color: COLORS[index % COLORS.length] }}
                                >
                                    {percentage}%
                                </span>
                            </div>
                            <div className='w-full bg-gray-100 dark:bg-gray-700 rounded-full h-3'>
                                <div
                                    className='h-3 rounded-full transition-all duration-500 shadow-sm'
                                    style={{
                                        width: `${percentage}%`,
                                        backgroundColor: COLORS[index % COLORS.length]
                                    }}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
