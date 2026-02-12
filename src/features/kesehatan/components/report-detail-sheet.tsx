import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { HealthReport } from '../constants'
import { ReportDetailModal } from '@/components/report-detail-modal'

interface ReportDetailSheetProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    report: HealthReport | null
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
            title='Detail Laporan Kesehatan'
            description='Informasi lengkap mengenai laporan warga.'
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
                        <div className='grid grid-cols-3'>
                            <span className='font-medium'>Usia Penderita</span>
                            <span className='col-span-2 text-muted-foreground'>
                                : {report.usia_penderita}
                            </span>
                        </div>
                        <div className='grid grid-cols-3'>
                            <span className='font-medium'>Status BPJS</span>
                            <span className='col-span-2'>
                                : <Badge variant={report.status_bpjs.includes('Tidak') ? 'destructive' : 'outline'}>{report.status_bpjs}</Badge>
                            </span>
                        </div>
                    </div>
                </div>

                <Separator />

                {/* Masalah Kesehatan */}
                <div>
                    <h3 className='mb-2 text-sm font-medium text-muted-foreground'>
                        Detail Masalah Kesehatan
                    </h3>
                    <div className='rounded-lg border p-3 bg-muted/40'>
                        <div className='mb-2 flex items-center justify-between'>
                            <span className='font-semibold'>{report.isu_kesehatan}</span>
                            <Badge
                                variant={
                                    report.status_kesehatan === 'Kritis'
                                        ? 'destructive'
                                        : report.status_kesehatan === 'Dalam Pemantauan'
                                            ? 'default' // Changed to default or warn if available, standard badge for now
                                            : 'secondary'
                                }
                            >
                                {report.status_kesehatan}
                            </Badge>
                        </div>
                        {report.detail_penyakit && report.detail_penyakit !== '-' && (
                            <p className='text-sm mb-1'>
                                <span className='font-medium'>Diagnosa/Penyakit:</span> {report.detail_penyakit}
                            </p>
                        )}
                        <p className='text-sm text-foreground/80'>
                            <span className='font-medium'>Kondisi:</span> {report.detail_kondisi}
                        </p>
                    </div>
                </div>

                <Separator />

                {/* Intervensi & Bantuan */}
                <div>
                    <h3 className='mb-2 text-sm font-medium text-muted-foreground'>
                        Tindakan & Bantuan
                    </h3>

                    <div className='mb-4'>
                        <p className='mb-1 text-sm font-medium'>Intervensi RT / Lingkungan:</p>
                        <ul className='list-disc pl-5 text-sm space-y-1 text-muted-foreground'>
                            {report.intervensi_rt.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {report.bantuan_diperlukan && report.bantuan_diperlukan.length > 0 && (
                        <div>
                            <p className='mb-1 text-sm font-medium'>Bantuan yang Diperlukan:</p>
                            <div className='flex flex-wrap gap-2'>
                                {report.bantuan_diperlukan.map((item, i) => (
                                    <Badge key={i} variant='secondary' className='text-xs'>
                                        {item}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                {/* Dokumentasi */}
                {report.foto_dokumentasi && report.foto_dokumentasi.length > 0 && (
                    <>
                        <Separator />
                        <div>
                            <h3 className='mb-2 text-sm font-medium text-muted-foreground'>
                                Dokumentasi
                            </h3>
                            <div className='grid grid-cols-2 gap-2'>
                                {report.foto_dokumentasi.map((url, i) => (
                                    <div key={i} className='overflow-hidden rounded-md border'>
                                        <img
                                            src={url}
                                            alt={`Dokumentasi ${i + 1}`}
                                            className='h-32 w-full object-cover transition-all hover:scale-105'
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </ReportDetailModal>
    )
}
