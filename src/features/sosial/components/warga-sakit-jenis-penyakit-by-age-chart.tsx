import { wargaSakitData } from '../data/data'

const AGE_GROUPS = [
    { key: 'Anak', label: 'Anak', color: '#06b6d4' },
    { key: 'Produktif Muda', label: 'P. Muda', color: '#10b981' },
    { key: 'Produktif Dewasa', label: 'P. Dewasa', color: '#f59e0b' },
    { key: 'Lansia', label: 'Lansia', color: '#ef4444' },
]

function getAgeGroup(umur: number): string {
    if (umur < 15) return 'Anak'
    if (umur <= 35) return 'Produktif Muda'
    if (umur <= 59) return 'Produktif Dewasa'
    return 'Lansia'
}

// One row per jenis penyakit; columns = age group counts
function buildChartData() {
    const map: Record<string, Record<string, number>> = {}

    for (const w of wargaSakitData) {
        const penyakit = w.jenisPenyakit
        const ageGroup = getAgeGroup(w.umur)

        if (!map[penyakit]) {
            map[penyakit] = { Anak: 0, 'Produktif Muda': 0, 'Produktif Dewasa': 0, Lansia: 0 }
        }
        map[penyakit][ageGroup] = (map[penyakit][ageGroup] || 0) + 1
    }

    return Object.entries(map)
        .map(([name, groups]) => ({ name, ...groups, total: Object.values(groups).reduce((a, b) => a + b, 0) }))
        .sort((a, b) => b.total - a.total)
}

export default function WargaSakitJenisPenyakitByAgeChart() {
    const chartData = buildChartData()

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col'>
            <h3 className='text-md font-bold text-black dark:text-white mb-6'>
                Jenis Penyakit per Kelompok Usia
            </h3>

            <div className='flex-1 overflow-y-auto pr-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6'>
                {chartData.map((penyakit, index) => (
                    <div key={index} className="flex flex-col bg-gray-50/50 dark:bg-gray-900/20 p-4 rounded-xl border border-gray-50 dark:border-gray-800/50">
                        <div className='flex items-center justify-between mb-4'>
                            <span className='text-sm font-semibold text-gray-900 dark:text-white'>
                                {penyakit.name}
                            </span>
                            <div className='flex items-center gap-1.5 px-2.5 py-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700'>
                                <span className='text-xs font-bold text-gray-900 dark:text-white'>
                                    {penyakit.total}
                                </span>
                                <span className='text-[10px] text-gray-500 font-medium'>
                                    kasus
                                </span>
                            </div>
                        </div>

                        <div className='space-y-3.5'>
                            {AGE_GROUPS.map((group) => {
                                const count = (penyakit as any)[group.key] || 0;
                                const percentage = penyakit.total > 0 ? ((count / penyakit.total) * 100).toFixed(1) : '0';

                                return (
                                    <div key={group.key}>
                                        <div className='flex items-center justify-between mb-1.5 px-1'>
                                            <div className='flex items-center gap-2'>
                                                <div className="w-2 h-2 rounded-full shadow-sm" style={{ backgroundColor: group.color }} />
                                                <span className='text-[11px] font-medium text-gray-600 dark:text-gray-400'>
                                                    {group.label}
                                                </span>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <span className='text-xs font-bold text-gray-800 dark:text-gray-200'>
                                                    {count}
                                                </span>
                                                <span className='text-[10px] text-gray-400 font-medium min-w-[32px] text-right'>
                                                    ({percentage}%)
                                                </span>
                                            </div>
                                        </div>
                                        <div className='w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-2 overflow-hidden'>
                                            <div
                                                className='h-full rounded-full transition-all duration-700 ease-out'
                                                style={{
                                                    width: `${percentage}%`,
                                                    backgroundColor: group.color
                                                }}
                                            />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}