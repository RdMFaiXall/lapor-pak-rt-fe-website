import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    ShieldAlert,
    Siren,
    Trees,
    Users,
    HeartPulse,
    Coins,
    ArrowUpRight,
} from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { mockKeamananData } from '@/features/keamanan/data/data'
import { mockData as mockBencanaData } from '@/features/bencana/constants'
import { mockLingkunganData } from '@/features/lingkungan/data/data'
import { dashboardStats as sosialStats } from '@/features/sosial/data/data'
import { mockData as mockKesehatanData } from '@/features/kesehatan/constants'
import { mockData as mockEkonomiData } from '@/features/ekonomi/constants'

export function DashboardOverview() {
    // Keamanan Metrics
    const keamananTotal = mockKeamananData.length
    const keamananOpen = mockKeamananData.filter((d) => d.status === 'open').length

    // Bencana Metrics
    const bencanaTotal = mockBencanaData.length
    const bencanaDarurat = mockBencanaData.filter((d) => d.status_penanganan === 'Darurat').length

    // Lingkungan Metrics
    const lingkunganTotal = mockLingkunganData.length
    const lingkunganOpen = mockLingkunganData.filter((d) => d.status === 'open').length

    // Kesehatan Metrics
    const kesehatanTotal = mockKesehatanData.length
    const kesehatanKritis = mockKesehatanData.filter((d) => d.status_kesehatan === 'Kritis').length

    // Ekonomi Metrics
    const ekonomiTotal = mockEkonomiData.length
    const pengangguran = mockEkonomiData.filter((d) => d.kategori_isu_ekonomi === 'Warga tidak punya pekerjaan').length

    const overviewItems = [
        {
            title: 'Keamanan',
            value: keamananTotal,
            description: `${keamananOpen} Laporan Baru`,
            icon: ShieldAlert,
            color: 'text-red-500',
            bgColor: 'bg-red-500/10',
            link: '/keamanan/monitoring',
        },
        {
            title: 'Bencana',
            value: bencanaTotal,
            description: `${bencanaDarurat} Status Darurat`,
            icon: Siren,
            color: 'text-orange-500',
            bgColor: 'bg-orange-500/10',
            link: '/bencana/monitoring',
        },
        {
            title: 'Lingkungan',
            value: lingkunganTotal,
            description: `${lingkunganOpen} Masalah Terbuka`,
            icon: Trees,
            color: 'text-green-500',
            bgColor: 'bg-green-500/10',
            link: '/lingkungan/monitoring',
        },
        {
            title: 'Sosial',
            value: sosialStats.totalWargaMiskin + sosialStats.totalWargaSakit,
            description: `${sosialStats.totalWargaMiskin} Miskin Ekstrem`,
            icon: Users,
            color: 'text-blue-500',
            bgColor: 'bg-blue-500/10',
            link: '/sosial/monitoring',
        },
        {
            title: 'Kesehatan',
            value: kesehatanTotal,
            description: `${kesehatanKritis} Kondisi Kritis`,
            icon: HeartPulse,
            color: 'text-pink-500',
            bgColor: 'bg-pink-500/10',
            link: '/kesehatan/monitoring',
        },
        {
            title: 'Ekonomi',
            value: ekonomiTotal,
            description: `${pengangguran} Pengangguran`,
            icon: Coins,
            color: 'text-yellow-500',
            bgColor: 'bg-yellow-500/10',
            link: '/ekonomi/monitoring',
        },
    ]

    return (
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {overviewItems.map((item) => (
                <Card key={item.title} className='overflow-hidden transition-all hover:shadow-md'>
                    <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                        <div className={`rounded-lg p-2 ${item.bgColor}`}>
                            <item.icon className={`h-5 w-5 ${item.color}`} />
                        </div>
                        <Link
                            to={item.link}
                            className='text-muted-foreground hover:text-primary transition-colors'
                        >
                            <ArrowUpRight className='h-4 w-4' />
                        </Link>
                    </CardHeader>
                    <CardContent>
                        <div className='space-y-1'>
                            <CardTitle className='text-sm font-medium text-muted-foreground'>
                                {item.title}
                            </CardTitle>
                            <div className='flex items-baseline justify-between'>
                                <div className='text-2xl font-bold'>{item.value}</div>
                                <div className='text-xs text-muted-foreground font-medium'>
                                    {item.description}
                                </div>
                            </div>
                        </div>
                        <div className='mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted'>
                            <div
                                className={`h-full ${item.color.replace('text', 'bg')} opacity-60`}
                                style={{ width: `${Math.min(100, (item.value / 25) * 100)}%` }}
                            />
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
