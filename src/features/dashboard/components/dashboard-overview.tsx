import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    Users,
    MessageSquare,
    ArrowUpRight,
} from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { mockKeamananData } from '@/features/keamanan/data/data'
import { mockLingkunganData } from '@/features/lingkungan/data/data'
import { mockData as mockKesehatanData } from '@/features/kesehatan/constants'

export function DashboardOverview() {
    // Basic aggregation for clear senior display
    const kesehatanTotal = mockKesehatanData.length
    const laporanTotal = mockKeamananData.length + mockLingkunganData.length

    const stats = [
        {
            title: 'Warga Sakit',
            value: kesehatanTotal,
            description: 'Perlu Perhatian Khusus',
            icon: Users,
            color: 'text-red-600',
            bgColor: 'bg-red-50 dark:bg-red-950/20',
            link: '/kesehatan',
            progressColor: 'bg-red-600'
        },
        {
            title: 'Laporan Warga',
            value: laporanTotal,
            description: 'Aduan Belum Selesai',
            icon: MessageSquare,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50 dark:bg-blue-950/20',
            link: '/',
            progressColor: 'bg-blue-600'
        },
    ]

    return (
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-2'>
            {stats.map((item) => (
                <Card key={item.title} className='relative rounded-2xl border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm overflow-hidden transition-all hover:shadow-md group'>
                    <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-1 pt-4 px-6'>
                        <div className='flex items-center gap-2'>
                            <div className={`rounded-xl p-2 ${item.bgColor}`}>
                                <item.icon className={`h-5 w-5 ${item.color}`} />
                            </div>
                            <CardTitle className='text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest'>
                                {item.title}
                            </CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className='pb-5 px-6'>
                        <div className='flex items-end justify-between'>
                            <div className='space-y-0.5'>
                                <div className='text-4xl font-black tracking-tight text-gray-900 dark:text-white'>
                                    {item.value}
                                    <span className='text-base font-bold text-gray-400 ml-1.5'>Jiwa</span>
                                </div>
                                <p className='text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-tight'>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                        <div className='mt-5 flex gap-1'>
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${i < (item.value / 20) * 5 ? (item.progressColor) : 'bg-gray-100 dark:bg-gray-800'}`}
                                />
                            ))}
                        </div>
                        <Link
                            to={item.link}
                            className='mt-4 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 text-xs font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'
                        >
                            Klik untuk Lihat Detail
                            <ArrowUpRight className='h-3.5 w-3.5' />
                        </Link>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
