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
    Label,
} from 'recharts'
import {
    wargaMiskinData,
    wargaSakitData,
    wargaMeninggalData,
    lansiaTerlantarData,
    anakPutusSekolahData,
} from '../data/data'

export function EconomicConditionChart() {
    const economicCount = wargaMiskinData.reduce((acc, curr) => {
        acc[curr.kondisiEkonomi] = (acc[curr.kondisiEkonomi] || 0) + 1
        return acc
    }, {} as Record<string, number>)

    const total = wargaMiskinData.length

    const COLORS = ['#10b981', '#14b8a6', '#06b6d4', '#0ea5e9', '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7']

    const chartData = Object.entries(economicCount).map(([name, value]) => ({
        name,
        value,
        percentage: total > 0 ? ((value / total) * 100).toFixed(2) : '0'
    }))

    const maxValue = Math.max(...chartData.map(d => d.value), 0)

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700'>
            <h3 className="text-md font-bold text-black dark:text-white mb-6">Kondisi Ekonomi</h3>
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
                                domain={[0, maxValue]}
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: '#94a3b8' }}
                                tickFormatter={(val) => val.toString().replace(/,/g, '')}
                            >
                                <Label value="Jumlah Kasus" offset={-10} position="insideBottom" style={{ fill: '#94a3b8', fontSize: 12, fontWeight: 'bold' }} />
                            </XAxis>
                            <YAxis
                                dataKey="name"
                                type="category"
                                width={145}
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
                                        const { x, y, width, height, value, index } = props;
                                        if (value === undefined || value === null) return null;
                                        const isSmallValue = value < 2;
                                        const percentage = chartData[index]?.percentage || '0';
                                        return (
                                            <text
                                                x={isSmallValue ? x + width + 8 : x + 10}
                                                y={y + height / 2}
                                                fill={isSmallValue ? "#64748b" : "#fff"}
                                                fontSize={11}
                                                fontWeight="bold"
                                                dominantBaseline="middle"
                                            >
                                                {value} kasus ({percentage}%)
                                            </text>
                                        );
                                    }}
                                />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
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
            <h3 className='text-md font-bold text-black dark:text-white mb-1'>
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

export function WargaSakitByDiseaseChart() {
    const ageGroups = wargaSakitData.reduce((acc, curr) => {
        let group = ''
        if (curr.umur < 15) group = 'Anak'
        else if (curr.umur <= 35) group = 'Produktif Muda'
        else if (curr.umur <= 59) group = 'Produktif Dewasa'
        else group = 'Lansia'

        acc[group] = (acc[group] || 0) + 1
        return acc
    }, {} as Record<string, number>)

    const total = wargaSakitData.length

    const COLORS = ['#06b6d4', '#10b981', '#f59e0b', '#ef4444']

    const chartData = [
        { label: 'Anak', range: '(0-14 tahun)', value: ageGroups['Anak'] || 0 },
        { label: 'Produktif Muda', range: '(15-35 tahun)', value: ageGroups['Produktif Muda'] || 0 },
        { label: 'Produktif Dewasa', range: '(36-59 tahun)', value: ageGroups['Produktif Dewasa'] || 0 },
        { label: 'Lansia', range: '(60+ tahun)', value: ageGroups['Lansia'] || 0 }
    ].map(item => ({
        ...item,
        name: item.label,
        percentage: total > 0 ? ((item.value / total) * 100).toFixed(1) : '0'
    }))

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col'>
            <h3 className="text-md font-bold text-black dark:text-white mt-2 mb-4">Warga Sakit</h3>
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

                <div className='w-full max-w-[240px] mx-auto grid grid-cols-2 gap-y-3 gap-x-2 mt-6 shrink-0'>
                    {chartData.map((item, index) => (
                        <div key={index} className='flex items-start gap-2'>
                            <div className='w-3 h-3 rounded-full mt-1 shrink-0' style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                            <div className='flex flex-col'>
                                <p className='text-xs text-gray-700 dark:text-gray-300 font-medium leading-tight'>{item.label} <span className="font-bold">({item.percentage}%)</span></p>
                                <p className='text-[10px] text-gray-500 font-medium leading-tight'>{item.range}</p>
                            </div>
                        </div>
                    ))}
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

// Total Anak Tidak Sekolah by Level - Card Layout
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
                Total Anak Tidak Sekolah
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

// Total Penyebab Anak Tidak Sekolah - Vertical Bar
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
                Total Penyebab Anak Tidak Sekolah
            </h3>
            <p className='text-sm text-gray-500 dark:text-gray-400 mb-6'>
                {total} kasus berdasarkan penyebab
            </p>

            <div className='h-[400px]'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={chartData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                        <XAxis
                            dataKey="name"
                            tick={{ fontSize: 11, fill: '#6b7280' }}
                            angle={-30}
                            textAnchor="end"
                            height={70}
                            interval={0}
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