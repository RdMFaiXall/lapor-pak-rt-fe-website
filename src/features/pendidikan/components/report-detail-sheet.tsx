import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { EducationReport } from '../constants'
import { ReportDetailModal } from '@/components/report-detail-modal'

interface ReportDetailSheetProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    report: EducationReport | null
}

export function ReportDetailSheet({
    open,
    onOpenChange,
    report,
}: ReportDetailSheetProps) {
    if (!report) return null

    return (
        <ReportDetailModal
            open={open}
            onOpenChange={onOpenChange}
            title='Detail Laporan Pendidikan'
            description='Informasi lengkap mengenai status pendidikan warga.'
        >
            <div className='flex flex-col gap-6'>
                {/* Informasi Dasar */}
                <div>
                    <h3 className='mb-2 text-sm font-medium text-muted-foreground'>
                        Informasi Warga
                    </h3>
                    <div className='grid gap-2 text-sm'>
                        <div className='grid grid-cols-3'>
                            <span className='font-medium'>Nama Warga</span>
                            <span className='col-span-2 text-muted-foreground'>
                                : {report.nama_warga}
                            </span>
                        </div>
                        <div className='grid grid-cols-3'>
                            <span className='font-medium'>Tanggal Lapor</span>
                            <span className='col-span-2 text-muted-foreground'>
                                : {report.tanggal_laporan}
                            </span>
                        </div>
                    </div>
                </div>

                <Separator />

                {/* Masalah Pendidikan */}
                <div>
                    <h3 className='mb-2 text-sm font-medium text-muted-foreground'>
                        Status Pendidikan & Potensi
                    </h3>
                    <div className='rounded-lg border p-3 bg-muted/40'>
                        <div className='mb-3 flex items-center justify-between'>
                            <span className='font-semibold'>{report.isu_pendidikan}</span>
                            <Badge variant='outline'>{report.jenjang_terakhir}</Badge>
                        </div>

                        <div className='space-y-2 text-sm'>
                            {report.nama_sekolah && report.nama_sekolah !== '-' && (
                                <div className='grid grid-cols-3'>
                                    <span className='font-medium'>Sekolah Terakhir</span>
                                    <span className='col-span-2'>: {report.nama_sekolah}</span>
                                </div>
                            )}

                            {report.alasan_putus && report.alasan_putus.length > 0 && (
                                <div className='grid grid-cols-3'>
                                    <span className='font-medium'>Alasan Putus</span>
                                    <span className='col-span-2'>
                                        : {report.alasan_putus.join(', ')}
                                    </span>
                                </div>
                            )}

                            {report.durasi_menganggur && (
                                <div className='grid grid-cols-3'>
                                    <span className='font-medium'>Lama Menganggur</span>
                                    <span className='col-span-2'>: {report.durasi_menganggur}</span>
                                </div>
                            )}

                            {report.minat_bakat && report.minat_bakat.length > 0 && (
                                <div className='grid grid-cols-3'>
                                    <span className='font-medium'>Minat & Bakat</span>
                                    <span className='col-span-2'>
                                        : {report.minat_bakat.map(m => <Badge key={m} variant="secondary" className="mr-1 mb-1">{m}</Badge>)}
                                    </span>
                                </div>
                            )}

                            {report.status_aktif !== undefined && (
                                <div className='grid grid-cols-3'>
                                    <span className='font-medium'>Aktif Organisasi</span>
                                    <span className='col-span-2'>: {report.status_aktif ? 'Ya (Karang Taruna)' : 'Tidak'}</span>
                                </div>
                            )}

                            <div className='pt-2'>
                                <p className='font-medium text-xs text-muted-foreground mb-1'>Keterangan Tambahan:</p>
                                <p className='italic text-foreground/80'>{report.detail_info}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator />

                {/* Solusi & Rekomendasi */}
                <div>
                    <h3 className='mb-2 text-sm font-medium text-muted-foreground'>
                        Tindakan & Solusi
                    </h3>

                    <div className='mb-4'>
                        <p className='mb-1 text-sm font-medium'>Rekomendasi RT:</p>
                        <ul className='list-disc pl-5 text-sm space-y-1 text-muted-foreground'>
                            {report.rekomendasi_rt.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {report.catatan_khusus && (
                        <div className='rounded-md bg-yellow-50 dark:bg-yellow-900/20 p-3 border border-yellow-200 dark:border-yellow-800'>
                            <p className='text-xs font-bold text-yellow-800 dark:text-yellow-500 mb-1'>Catatan Khusus:</p>
                            <p className='text-sm text-yellow-700 dark:text-yellow-400'>{report.catatan_khusus}</p>
                        </div>
                    )}
                </div>
            </div>
        </ReportDetailModal>
    )
}
