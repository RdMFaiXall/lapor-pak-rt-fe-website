
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { AlertTriangle, CheckCircle, Clock, ShieldAlert } from 'lucide-react'

export function StatsCards() {
    return (
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>
                        Total Laporan
                    </CardTitle>
                    <ShieldAlert className='h-4 w-4 text-muted-foreground' />
                </CardHeader>
                <CardContent>
                    <div className='text-2xl font-bold'>12</div>
                    <p className='text-xs text-muted-foreground'>
                        +2 dari minggu lalu
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>
                        Dalam Penanganan
                    </CardTitle>
                    <Clock className='h-4 w-4 text-muted-foreground' />
                </CardHeader>
                <CardContent>
                    <div className='text-2xl font-bold'>4</div>
                    <p className='text-xs text-muted-foreground'>
                        Sedang diproses oleh petugas
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>Selesai</CardTitle>
                    <CheckCircle className='h-4 w-4 text-muted-foreground' />
                </CardHeader>
                <CardContent>
                    <div className='text-2xl font-bold'>8</div>
                    <p className='text-xs text-muted-foreground'>
                        Telah diselesaikan bulan ini
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>
                        Laporan Kritis
                    </CardTitle>
                    <AlertTriangle className='h-4 w-4 text-red-500' />
                </CardHeader>
                <CardContent>
                    <div className='text-2xl font-bold text-red-600'>1</div>
                    <p className='text-xs text-muted-foreground'>
                        Perlu tindakan segera
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
