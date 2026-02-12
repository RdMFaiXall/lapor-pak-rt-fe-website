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
    PieChart,
    Pie,
} from 'recharts'
import {
    wargaMiskinData,
    wargaSakitData,
    wargaMeninggalData,
    lansiaTerlantarData,
    anakPutusSekolahData,
} from '../data/dashboard-data'

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="rounded-lg border bg-background p-2 shadow-sm">
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                            Kategori
                        </span>
                        <span className="font-bold text-muted-foreground mr-2">
                            {label || payload[0].payload.name}
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

// Total Kondisi Ekonomi Warga Miskin Ekstrem - Horizontal Bar
export function EconomicConditionChart() {
    const economicCount = wargaMiskinData.reduce((acc, curr) => {
        acc[curr.kondisiEkonomi] = (acc[curr.kondisiEkonomi] || 0) + 1
        return acc
    }, {} as Record<string, number>)

    const chartData = Object.entries(economicCount)
        .map(([name, value]) => ({
            name,
            jumlah: value,
            label: value
        }))
        .sort((a, b) => b.jumlah - a.jumlah)

    const COLORS = ['#ef4444', '#f97316', '#f59e0b', '#84cc16', '#10b981', '#06b6d4']

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-1'>
                Total Kondisi Ekonomi Warga Miskin Ekstrem
            </h3>
            <p className='text-sm text-gray-500 dark:text-gray-400 mb-6'>
                Berdasarkan kondisi pekerjaan dan ekonomi
            </p>

            <div className='h-[300px]'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={chartData}
                        layout="vertical"
                        margin={{ left: 0, right: 20, top: 10, bottom: 10 }}
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
                        <Bar dataKey="jumlah" radius={[0, 4, 4, 0]} barSize={50}>
                            {chartData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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

// Total Penerima Bantuan - Progress Bars
export function SocialAidChart() {
    const bantuanCount = wargaMiskinData.reduce((acc, curr) => {
        if (curr.jenisBantuan && curr.jenisBantuan !== '-') {
            acc[curr.jenisBantuan] = (acc[curr.jenisBantuan] || 0) + 1
        }
        return acc
    }, {} as Record<string, number>)

    const chartData = Object.entries(bantuanCount)
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value)

    const COLORS = ['#10b981', '#14b8a6', '#06b6d4', '#0ea5e9', '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7']

    const total = chartData.reduce((sum, item) => sum + item.value, 0)

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-1'>
                Total Penerima Bantuan
            </h3>
            <p className='text-sm text-gray-500 dark:text-gray-400 mb-6'>
                {total} penerima bantuan aktif
            </p>

            <div className='space-y-3'>
                {chartData.map((item, index) => {
                    const percentage = total > 0 ? ((item.value / total) * 100).toFixed(1) : '0'
                    return (
                        <div key={index}>
                            <div className='flex items-center justify-between mb-2'>
                                <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                                    {item.name}
                                </span>
                                <div className='flex items-center gap-2'>
                                    <span className='text-sm font-bold text-gray-900 dark:text-white'>
                                        {item.value}
                                    </span>
                                    <span className='text-xs text-gray-500 dark:text-gray-400'>
                                        ({percentage}%)
                                    </span>
                                </div>
                            </div>
                            <div className='w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2'>
                                <div
                                    className='h-2 rounded-full transition-all duration-500'
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

// Total Warga Sakit - Donut Chart
export function WargaSakitByDiseaseChart() {
    const diseaseCount = wargaSakitData.reduce((acc, curr) => {
        acc[curr.jenisPenyakit] = (acc[curr.jenisPenyakit] || 0) + 1
        return acc
    }, {} as Record<string, number>)

    const chartData = Object.entries(diseaseCount)
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value)

    const COLORS = ['#ef4444', '#f97316', '#f59e0b', '#84cc16', '#10b981', '#06b6d4', '#3b82f6', '#8b5cf6', '#a855f7', '#ec4899', '#f43f5e', '#d946ef']

    const total = chartData.reduce((sum, item) => sum + item.value, 0)

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-1'>
                Total Warga Sakit
            </h3>
            <p className='text-sm text-gray-500 dark:text-gray-400 mb-6'>
                {total} kasus berdasarkan jenis penyakit
            </p>

            <div className='flex flex-col lg:flex-row items-center gap-6'>
                <div className='relative h-[280px] w-full lg:w-1/2'>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={100}
                                paddingAngle={2}
                                dataKey="value"
                            >
                                {chartData.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip
                                content={({ active, payload }) => {
                                    if (active && payload && payload.length) {
                                        const percentage = ((payload[0].value as number / total) * 100).toFixed(1)
                                        return (
                                            <div className="rounded-lg border bg-background p-3 shadow-md">
                                                <p className="font-semibold text-sm">{payload[0].name}</p>
                                                <p className="text-xs mt-1">
                                                    <span className="font-bold">{payload[0].value}</span> kasus ({percentage}%)
                                                </p>
                                            </div>
                                        )
                                    }
                                    return null
                                }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className='flex-1 space-y-2 w-full'>
                    {chartData.map((item, index) => {
                        const percentage = total > 0 ? ((item.value / total) * 100).toFixed(1) : '0'
                        return (
                            <div key={index} className='flex items-center justify-between py-1.5'>
                                <div className='flex items-center gap-2'>
                                    <div
                                        className='w-3 h-3 rounded-full'
                                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                                    />
                                    <span className='text-xs font-medium text-gray-700 dark:text-gray-300'>
                                        {item.name}
                                    </span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <span className='text-xs font-bold text-gray-900 dark:text-white'>
                                        {item.value}
                                    </span>
                                    <span className='text-xs text-gray-500 dark:text-gray-400 min-w-[45px] text-right'>
                                        {percentage}%
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

// Total Warga Meninggal - Card Stats with Better Layout
export function WargaMeninggalByCauseChart() {
    const causeCount = wargaMeninggalData.reduce((acc, curr) => {
        acc[curr.penyebab] = (acc[curr.penyebab] || 0) + 1
        return acc
    }, {} as Record<string, number>)

    const chartData = Object.entries(causeCount)
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value)

    const COLORS = ['#6b7280', '#ef4444', '#f59e0b', '#10b981', '#3b82f6']

    const total = chartData.reduce((sum, item) => sum + item.value, 0)

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-1'>
                Total Warga Meninggal
            </h3>
            <p className='text-sm text-gray-500 dark:text-gray-400 mb-6'>
                {total} kasus berdasarkan penyebab
            </p>

            <div className='grid grid-cols-1 gap-3 flex-1'>
                {chartData.map((item, index) => {
                    const percentage = total > 0 ? ((item.value / total) * 100).toFixed(1) : '0'
                    return (
                        <div
                            key={index}
                            className='relative overflow-hidden rounded-lg p-4 border-2 transition-all hover:shadow-md'
                            style={{ borderColor: COLORS[index % COLORS.length] }}
                        >
                            <div
                                className='absolute top-0 right-0 w-20 h-20 opacity-10 rounded-bl-full'
                                style={{ backgroundColor: COLORS[index % COLORS.length] }}
                            />
                            <div className='relative z-10 flex items-center justify-between'>
                                <div className='flex-1'>
                                    <p className='text-sm font-semibold text-gray-900 dark:text-white mb-1'>
                                        {item.name}
                                    </p>
                                    <div className='flex items-center gap-3'>
                                        <div className='flex-1 max-w-[200px]'>
                                            <div className='h-2 rounded-full bg-gray-200 dark:bg-gray-700'>
                                                <div
                                                    className='h-2 rounded-full transition-all duration-500'
                                                    style={{
                                                        width: `${percentage}%`,
                                                        backgroundColor: COLORS[index % COLORS.length]
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <span
                                            className='text-xs font-semibold min-w-[45px]'
                                            style={{ color: COLORS[index % COLORS.length] }}
                                        >
                                            {percentage}%
                                        </span>
                                    </div>
                                </div>
                                <div className='ml-4 text-right'>
                                    <p className='text-3xl font-bold text-gray-900 dark:text-white'>
                                        {item.value}
                                    </p>
                                    <p className='text-xs text-gray-500 dark:text-gray-400'>
                                        kasus
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

// Total Lansia Terlantar - Simple Clear List with Vibrant Colors
export function LansiaTerlantarByConditionChart() {
    const conditionCount = lansiaTerlantarData.reduce((acc, curr) => {
        acc[curr.kondisi] = (acc[curr.kondisi] || 0) + 1
        return acc
    }, {} as Record<string, number>)

    const chartData = Object.entries(conditionCount)
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value)

    const COLORS = ['#7c3aed', '#a855f7', '#c084fc', '#e879f9']

    const total = chartData.reduce((sum, item) => sum + item.value, 0)

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-1'>
                Total Lansia Terlantar
            </h3>
            <p className='text-sm text-gray-500 dark:text-gray-400 mb-6'>
                {total} kasus berdasarkan kondisi tempat tinggal
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

// Total Anak Putus Sekolah by Level - Card Layout
export function AnakPutusSekolahByLevelChart() {
    const levelCount = anakPutusSekolahData.reduce((acc, curr) => {
        acc[curr.jenjang] = (acc[curr.jenjang] || 0) + 1
        return acc
    }, {} as Record<string, number>)

    const chartData = Object.entries(levelCount)
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value)

    const COLORS = ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe']

    const total = chartData.reduce((sum, item) => sum + item.value, 0)

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-1'>
                Total Anak Putus Sekolah
            </h3>
            <p className='text-sm text-gray-500 dark:text-gray-400 mb-6'>
                {total} kasus berdasarkan jenjang pendidikan
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

// Total Penyebab Anak Putus Sekolah - Vertical Bar
export function AnakPutusSekolahByCauseChart() {
    const causeCount = anakPutusSekolahData.reduce((acc, curr) => {
        acc[curr.penyebab] = (acc[curr.penyebab] || 0) + 1
        return acc
    }, {} as Record<string, number>)

    const chartData = Object.entries(causeCount)
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value)

    const COLORS = ['#ef4444', '#f97316', '#f59e0b', '#84cc16', '#10b981', '#06b6d4']

    const total = chartData.reduce((sum, item) => sum + item.value, 0)

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-1'>
                Total Penyebab Anak Putus Sekolah
            </h3>
            <p className='text-sm text-gray-500 dark:text-gray-400 mb-6'>
                {total} kasus berdasarkan penyebab
            </p>

            <div className='h-[320px]'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={chartData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                        <XAxis
                            dataKey="name"
                            tick={{ fontSize: 12, fill: '#6b7280' }}
                            angle={-45}
                            textAnchor="end"
                            height={80}
                        />
                        <YAxis tick={{ fontSize: 12, fill: '#6b7280' }} />
                        <Tooltip
                            content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                    const percentage = ((payload[0].value as number / total) * 100).toFixed(1)
                                    return (
                                        <div className="rounded-lg border bg-background p-3 shadow-md">
                                            <p className="font-semibold text-sm">{payload[0].payload.name}</p>
                                            <p className="text-xs mt-1">
                                                <span className="font-bold">{payload[0].value}</span> kasus ({percentage}%)
                                            </p>
                                        </div>
                                    )
                                }
                                return null
                            }}
                            cursor={{ fill: 'transparent' }}
                        />
                        <Bar dataKey="value" radius={[8, 8, 0, 0]} maxBarSize={80}>
                            {chartData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                            <LabelList
                                dataKey="value"
                                position="top"
                                style={{ fill: '#374151', fontSize: 12, fontWeight: 'bold' }}
                            />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}