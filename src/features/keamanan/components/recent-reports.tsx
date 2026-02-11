
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

export function RecentReports() {
    return (
        <div className='space-y-8'>
            <div className='flex items-center'>
                <Avatar className='h-9 w-9'>
                    <AvatarImage src='/avatars/01.png' alt='Avatar' />
                    <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className='ml-4 space-y-1'>
                    <p className='text-sm font-medium leading-none'>Olivia Martin</p>
                    <p className='text-sm text-muted-foreground'>
                        Laporan Kebisingan - Blok A No. 12
                    </p>
                </div>
                <div className='ml-auto font-medium'>
                    <Badge variant='outline'>Baru</Badge>
                </div>
            </div>
            <div className='flex items-center'>
                <Avatar className='flex h-9 w-9 items-center justify-center space-y-0 border'>
                    <AvatarImage src='/avatars/02.png' alt='Avatar' />
                    <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div className='ml-4 space-y-1'>
                    <p className='text-sm font-medium leading-none'>Jackson Lee</p>
                    <p className='text-sm text-muted-foreground'>
                        Laporan Pencurian - Blok B No. 3
                    </p>
                </div>
                <div className='ml-auto font-medium'>
                    <Badge variant='destructive'>Kritis</Badge>
                </div>
            </div>
            <div className='flex items-center'>
                <Avatar className='h-9 w-9'>
                    <AvatarImage src='/avatars/03.png' alt='Avatar' />
                    <AvatarFallback>IN</AvatarFallback>
                </Avatar>
                <div className='ml-4 space-y-1'>
                    <p className='text-sm font-medium leading-none'>Isabella Nguyen</p>
                    <p className='text-sm text-muted-foreground'>
                        Laporan Tamu Mencurigakan
                    </p>
                </div>
                <div className='ml-auto font-medium'>
                    <Badge variant='secondary'>Proses</Badge>
                </div>
            </div>
            <div className='flex items-center'>
                <Avatar className='h-9 w-9'>
                    <AvatarImage src='/avatars/04.png' alt='Avatar' />
                    <AvatarFallback>WK</AvatarFallback>
                </Avatar>
                <div className='ml-4 space-y-1'>
                    <p className='text-sm font-medium leading-none'>William Kim</p>
                    <p className='text-sm text-muted-foreground'>
                        Laporan Parkir Sembarangan
                    </p>
                </div>
                <div className='ml-auto font-medium'>
                    <Badge className='bg-green-500 hover:bg-green-600'>Selesai</Badge>
                </div>
            </div>
            <div className='flex items-center'>
                <Avatar className='h-9 w-9'>
                    <AvatarImage src='/avatars/05.png' alt='Avatar' />
                    <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div className='ml-4 space-y-1'>
                    <p className='text-sm font-medium leading-none'>Sofia Davis</p>
                    <p className='text-sm text-muted-foreground'>
                        Laporan Lampu Jalan Mati
                    </p>
                </div>
                <div className='ml-auto font-medium'>
                    <Badge className='bg-green-500 hover:bg-green-600'>Selesai</Badge>
                </div>
            </div>
        </div>
    )
}
