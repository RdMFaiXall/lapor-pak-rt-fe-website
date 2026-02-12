import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { DisasterReport } from '../constants'
import { ReportDetailModal } from '@/components/report-detail-modal'
import { AlertTriangle, MapPin, Calendar, User } from 'lucide-react'

interface ReportDetailModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    report: DisasterReport | null
}

export function DisasterDetailModal({
    open,
    onOpenChange,
    report,
}: ReportDetailModalProps) {
    if (!report) return null

    return (
        <ReportDetailModal
            open={open}
            onOpenChange={onOpenChange}
            title={`Detail Laporan: ${report.jenis_bencana}`}
            description='Informasi lengkap mengenai musibah/bencana yang dilaporkan.'
        >
            <div className='flex flex-col gap-6'>
                {/* Informasi Dasar */}
                <div className='grid gap-4 rounded-lg bg-muted/40 p-3 text-sm'>
                    <div className='flex items-center gap-2'>
                        <User className='h-4 w-4 text-muted-foreground' />
                        <span className='font-medium'>Pelapor:</span> {report.pelapor}
                    </div>
                    <div className='flex items-center gap-2'>
                        <MapPin className='h-4 w-4 text-muted-foreground' />
                        <span className='font-medium'>Lokasi:</span> {report.lokasi}
                    </div>
                    <div className='flex items-center gap-2'>
                        <Calendar className='h-4 w-4 text-muted-foreground' />
                        <span className='font-medium'>Waktu Kejadian:</span> {report.waktu_kejadian}
                    </div>
                    <div className='flex items-center gap-2'>
                        <AlertTriangle className='h-4 w-4 text-destructive' />
                        <span className='font-medium'>Status:</span>
                        <Badge variant={report.status_penanganan === 'Selesai' ? 'default' : 'destructive'} className='ml-1 text-[10px]'>
                            {report.status_penanganan}
                        </Badge>
                    </div>
                </div>

                <Separator />

                {/* Dampak Korban */}
                <div>
                    <h3 className='mb-2 text-sm font-medium text-muted-foreground'>
                        Dampak Korban Jiwa
                    </h3>
                    <div className='grid grid-cols-4 gap-2 text-center'>
                        <div className='rounded-md border p-2'>
                            <div className='text-lg font-bold text-red-600'>{report.dampak_korban.meninggal}</div>
                            <div className='text-[10px] text-muted-foreground'>Meninggal</div>
                        </div>
                        <div className='rounded-md border p-2'>
                            <div className='text-lg font-bold text-orange-600'>{report.dampak_korban.luka_berat}</div>
                            <div className='text-[10px] text-muted-foreground'>Luka Berat</div>
                        </div>
                        <div className='rounded-md border p-2'>
                            <div className='text-lg font-bold text-yellow-600'>{report.dampak_korban.luka_ringan}</div>
                            <div className='text-[10px] text-muted-foreground'>Luka Ringan</div>
                        </div>
                        <div className='rounded-md border p-2'>
                            <div className='text-lg font-bold text-blue-600'>{report.dampak_korban.mengungsi}</div>
                            <div className='text-[10px] text-muted-foreground'>Mengungsi</div>
                        </div>
                    </div>
                </div>

                <Separator />

                {/* Kerusakan & Kebutuhan */}
                <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                        <h3 className='mb-2 text-sm font-medium text-muted-foreground'>Dampak Kerusakan</h3>
                        <ul className='list-disc pl-4 text-sm'>
                            {report.dampak_kerusakan.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className='mb-2 text-sm font-medium text-muted-foreground'>Kebutuhan Mendesak</h3>
                        <div className='flex flex-wrap gap-1'>
                            {report.kebutuhan_mendesak.map((item, i) => (
                                <Badge key={i} variant='secondary' className='text-[10px]'>{item}</Badge>
                            ))}
                        </div>
                    </div>
                </div>

                {report.keterangan_tambahan && (
                    <>
                        <Separator />
                        <div>
                            <h3 className='mb-1 text-sm font-medium text-muted-foreground'>Keterangan Tambahan</h3>
                            <p className='text-sm italic text-muted-foreground'>"{report.keterangan_tambahan}"</p>
                        </div>
                    </>
                )}
            </div>
        </ReportDetailModal>
    )
}
