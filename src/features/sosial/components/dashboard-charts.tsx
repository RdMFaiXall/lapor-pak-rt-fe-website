import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts'
import {
    wargaMiskinData,
    wargaSakitData,
} from '../data/dashboard-data'

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 px-4 py-3">
                {payload.map((entry: any, index: number) => (
                    <div key={index} className="flex items-center gap-3">
                        <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: entry.color }}
                        />
                        <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{entry.name}</p>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                {entry.value.toLocaleString()}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
    return null
}

// Kelompok Usia Produktivitas
export function AgeProductivityChart() {
    const ageGroups = [
        { name: 'Anak (0-14)', value: 635, percentage: '11.77%', color: '#8b5cf6' },
        { name: 'Produktif Muda (15-29)', value: 1858, percentage: '34.45%', color: '#06b6d4' },
        { name: 'Produktif Dewasa (30-65)', value: 2901, percentage: '53.78%', color: '#10b981' },
        { name: 'Lansia (65+)', value: 0, percentage: '0%', color: '#6b7280' },
    ]

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-1'>
                Kelompok Usia Produktivitas
            </h3>
            <p className='text-sm text-gray-500 dark:text-gray-400 mb-6'>
                Distribusi usia penduduk
            </p>

            <div className='space-y-4'>
                {ageGroups.map((group, index) => (
                    <div key={index}>
                        <div className='flex items-center justify-between mb-2'>
                            <div className='flex items-center gap-3'>
                                <div
                                    className='w-3 h-3 rounded-full'
                                    style={{ backgroundColor: group.color }}
                                />
                                <span className='text-sm text-gray-700 dark:text-gray-300'>{group.name}</span>
                            </div>
                            <span className='text-sm font-semibold text-gray-900 dark:text-white'>
                                {group.percentage}
                            </span>
                        </div>
                        <div className='relative'>
                            <div className='w-full bg-gray-100 dark:bg-gray-700 rounded-full h-10 flex items-center'>
                                <div
                                    className='h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold'
                                    style={{
                                        width: group.percentage,
                                        backgroundColor: group.color
                                    }}
                                >
                                    {group.value > 0 && group.value.toLocaleString()}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

// Statistik Agama
export function ReligionStatsChart() {
    const religions = [
        { name: 'Islam', value: 5394, percentage: '100%', color: '#10b981', icon: '☪' },
        { name: 'Kristen', value: 0, percentage: '0%', color: '#3b82f6', icon: '✝' },
        { name: 'Katolik', value: 0, percentage: '0%', color: '#f59e0b', icon: '✝' },
        { name: 'Kong Hu Cu', value: 0, percentage: '0%', color: '#8b5cf6', icon: '☯' },
        { name: 'Buddha', value: 0, percentage: '0%', color: '#6b7280', icon: '☸' },
        { name: 'Hindu', value: 0, percentage: '0%', color: '#ef4444', icon: '🕉' },
    ]

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-1'>
                Statistik Agama
            </h3>
            <p className='text-sm text-gray-500 dark:text-gray-400 mb-6'>
                Distribusi berdasarkan agama
            </p>

            <div className='space-y-3'>
                {religions.map((religion, index) => (
                    <div key={index} className='flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0'>
                        <div className='flex items-center gap-3'>
                            <div
                                className='w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm'
                                style={{ backgroundColor: religion.color }}
                            >
                                {religion.icon}
                            </div>
                            <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                                {religion.name}
                            </span>
                        </div>
                        <div className='flex items-center gap-4'>
                            <span className='text-sm font-bold text-gray-900 dark:text-white'>
                                {religion.value.toLocaleString()}
                            </span>
                            <span
                                className='text-sm font-semibold px-2 py-1 rounded'
                                style={{
                                    backgroundColor: religion.value > 0 ? religion.color : '#f3f4f6',
                                    color: religion.value > 0 ? 'white' : '#6b7280'
                                }}
                            >
                                {religion.percentage}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

// Status Perkawinan
export function MarriageStatusChart() {
    const statuses = [
        { name: 'Belum Kawin', value: 500, color: '#10b981' },
        { name: 'Kawin Tercatat', value: 2297, color: '#8b5cf6' },
        { name: 'Kawin Belum Tercatat', value: 340, color: '#06b6d4' },
        { name: 'Cerai Hidup Tercatat', value: 147, color: '#f59e0b' },
        { name: 'Cerai Mati', value: 105, color: '#a78bfa' },
        { name: 'Cerai Hidup Belum Terca', value: 5, color: '#fbbf24' },
    ]

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-1'>
                Statistik Status Perkawinan
            </h3>
            <p className='text-sm text-gray-500 dark:text-gray-400 mb-6'>
                Status perkawinan penduduk
            </p>

            <div className='h-[300px] mb-4'>
                <ResponsiveContainer width='100%' height='100%'>
                    <BarChart
                        data={statuses}
                        layout="horizontal"
                        margin={{ top: 5, right: 30, left: 20, bottom: 80 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                        <XAxis
                            type="category"
                            dataKey="name"
                            tick={{ fontSize: 11, fill: '#6b7280' }}
                            angle={0}
                            textAnchor="middle"
                            height={80}
                            interval={0}
                        />
                        <YAxis type="number" tick={{ fontSize: 12, fill: '#6b7280' }} />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
                        <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={60}>
                            {statuses.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

// Pendidikan Terakhir
export function EducationLevelChart() {
    const educationLevels = [
        { code: 'BS', name: 'Tidak/Belum Sekolah', value: 712, percentage: '13.2%', color: '#e0e7ff' },
        { code: 'BTS', name: 'Belum Tamat SD/Sederajat', value: 1038, percentage: '19.2%', color: '#06b6d4' },
        { code: 'SD', name: 'Tamat SD', value: 1189, percentage: '22%', color: '#f59e0b' },
        { code: 'SMP', name: 'SLTP/SMP/Sederajat', value: 1106, percentage: '20.5%', color: '#f59e0b' },
        { code: 'SMA', name: 'SLTA/SMA/Sederajat', value: 1163, percentage: '21.6%', color: '#10b981' },
        { code: 'D1/2', name: 'Diploma I/II', value: 25, percentage: '0.5%', color: '#06b6d4' },
        { code: 'D3', name: 'Diploma III/Sarjana Muda', value: 23, percentage: '0.4%', color: '#3b82f6' },
        { code: 'S1', name: 'Strata I', value: 0, percentage: '0%', color: '#8b5cf6' },
        { code: 'S2', name: 'Strata II', value: 0, percentage: '0%', color: '#a78bfa' },
        { code: 'S3', name: 'Strata III', value: 0, percentage: '0%', color: '#c4b5fd' },
        { code: 'L', name: 'Lainnya', value: 0, percentage: '0%', color: '#6b7280' },
    ]

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-1'>
                Pendidikan Terakhir
            </h3>
            <p className='text-sm text-gray-500 dark:text-gray-400 mb-6'>
                Tingkat pendidikan penduduk
            </p>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {educationLevels.map((level, index) => (
                    <div
                        key={index}
                        className='border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow'
                    >
                        <div
                            className='w-12 h-12 rounded-lg flex items-center justify-center mb-3 text-white font-bold text-sm'
                            style={{ backgroundColor: level.color }}
                        >
                            {level.code}
                        </div>
                        <p className='text-2xl font-bold text-gray-900 dark:text-white mb-1'>
                            {level.value.toLocaleString()} <span className='text-sm font-normal text-gray-500'>Jiwa</span>
                        </p>
                        <p className='text-xs text-gray-600 dark:text-gray-400 mb-2'>{level.name}</p>
                        <div className='flex items-center gap-2'>
                            <div className='flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5'>
                                <div
                                    className='h-1.5 rounded-full'
                                    style={{
                                        width: level.percentage,
                                        backgroundColor: level.color
                                    }}
                                />
                            </div>
                            <span className='text-xs font-semibold text-gray-700 dark:text-gray-300'>
                                {level.percentage}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

// Warga Sakit Distribution
export function WargaSakitDistribution() {
    const diseaseCount = wargaSakitData.reduce((acc, curr) => {
        acc[curr.jenisPenyakit] = (acc[curr.jenisPenyakit] || 0) + 1
        return acc
    }, {} as Record<string, number>)

    const chartData = Object.entries(diseaseCount)
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value)
        .slice(0, 5)

    const COLORS = ['#ef4444', '#f97316', '#f59e0b', '#84cc16', '#10b981']

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-1'>
                Top 5 Jenis Penyakit
            </h3>
            <p className='text-sm text-gray-500 dark:text-gray-400 mb-6'>
                Penyakit yang paling banyak tercatat
            </p>

            <div className='h-[280px]'>
                <ResponsiveContainer width='100%' height='100%'>
                    <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                        <XAxis
                            dataKey="name"
                            tick={{ fontSize: 12, fill: '#6b7280' }}
                        />
                        <YAxis allowDecimals={false} tick={{ fontSize: 12, fill: '#6b7280' }} />
                        <Tooltip content={<CustomTooltip />} />
                        <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                            {chartData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

// Jenis Bantuan Sosial
export function SocialAidChart() {
    const bantuanCount = wargaMiskinData.reduce((acc, curr) => {
        if (curr.jenisBantuan) {
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
                Jenis Bantuan Sosial
            </h3>
            <p className='text-sm text-gray-500 dark:text-gray-400 mb-6'>
                {total} penerima bantuan aktif
            </p>

            <div className='space-y-3'>
                {chartData.map((item, index) => {
                    const percentage = ((item.value / total) * 100).toFixed(1)
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