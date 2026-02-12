import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { HealthReport } from '../constants'
import { ReportDetailModal } from '@/components/report-detail-modal'
import { ScrollArea } from '@/components/ui/scroll-area'

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
            <ScrollArea className='h-[calc(100vh-10rem)] pr-4'>
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
                                <span className='font-medium'>Pelapor</span>
                                <span className='col-span-2 text-muted-foreground'>
                                    : {report.pelapor} (RT {report.rt})
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

                    {/* Dynamic Content Based on Issue */}
                    {report.isu_kesehatan === 'Wabah DBD' && (
                        <div>
                            <h3 className='mb-2 text-sm font-medium text-muted-foreground'>Detail Wabah DBD</h3>
                            <div className='grid grid-cols-2 gap-4 text-sm'>
                                <div>
                                    <span className='block text-xs text-muted-foreground'>Status Perawatan</span>
                                    <span className='font-medium'>{report.kondisi_dbd}</span>
                                </div>
                                <div className='col-span-2'>
                                    <span className='block text-xs text-muted-foreground'>Kondisi Lingkungan</span>
                                    <div className='flex flex-wrap gap-1 mt-1'>
                                        {report.lingkungan_dbd?.map((item, i) => (
                                            <Badge key={i} variant='destructive' className='text-[10px]'>{item}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {report.isu_kesehatan === 'Stunting / Gizi Buruk' && (
                        <div>
                            <h3 className='mb-2 text-sm font-medium text-muted-foreground'>Data Fisik Anak</h3>
                            <div className='grid grid-cols-2 gap-4 text-sm'>
                                <div>
                                    <span className='block text-xs text-muted-foreground'>Berat Badan</span>
                                    <span className='font-medium'>{report.berat_badan} kg</span>
                                </div>
                                <div>
                                    <span className='block text-xs text-muted-foreground'>Tinggi Badan</span>
                                    <span className='font-medium'>{report.tinggi_badan} cm</span>
                                </div>
                                <div>
                                    <span className='block text-xs text-muted-foreground'>Umur</span>
                                    <span className='font-medium'>{report.umur_bulan} Bulan</span>
                                </div>
                                <div>
                                    <span className='block text-xs text-muted-foreground'>Status PMT</span>
                                    <Badge variant={report.status_pmt ? 'default' : 'destructive'} className='mt-1'>
                                        {report.status_pmt ? 'Sudah Dapat' : 'Belum Dapat'}
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    )}

                    {report.isu_kesehatan === 'Ibu Hamil Berisiko' && (
                        <div>
                            <h3 className='mb-2 text-sm font-medium text-muted-foreground'>Detail Kehamilan</h3>
                            <div className='grid grid-cols-2 gap-4 text-sm'>
                                <div>
                                    <span className='block text-xs text-muted-foreground'>Usia Kandungan</span>
                                    <span className='font-medium'>{report.usia_kandungan}</span>
                                </div>
                                <div className='col-span-2'>
                                    <span className='block text-xs text-muted-foreground'>Faktor Risiko</span>
                                    <div className='flex flex-wrap gap-1 mt-1'>
                                        {report.faktor_risiko?.map((item, i) => (
                                            <Badge key={i} variant='secondary' className='text-[10px]'>{item}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {report.isu_kesehatan === 'Warga Belum BPJS' && (
                        <div>
                            <h3 className='mb-2 text-sm font-medium text-muted-foreground'>Kendala BPJS</h3>
                            <div className='text-sm'>
                                <span className='block text-xs text-muted-foreground'>Alasan Belum Punya</span>
                                <span className='font-medium text-destructive'>{report.alasan_bpjs}</span>
                            </div>
                        </div>
                    )}

                    <Separator />

                    {/* Tindakan RT & Status */}
                    <div>
                        <h3 className='mb-2 text-sm font-medium text-muted-foreground'>Tindakan & Status</h3>
                        <div className='grid gap-4 text-sm'>
                            <div>
                                <span className='block text-xs text-muted-foreground'>Intervensi RT</span>
                                <div className='flex flex-wrap gap-1 mt-1'>
                                    {report.intervensi_rt?.map((item, i) => (
                                        <Badge key={i} variant='outline' className='text-[10px]'>{item}</Badge>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <span className='block text-xs text-muted-foreground'>Status Kesehatan Terkini</span>
                                <Badge
                                    className='mt-1'
                                    variant={
                                        report.status_kesehatan === 'Kritis' ? 'destructive' :
                                            report.status_kesehatan === 'Dalam Pemantauan' ? 'secondary' : 'default'
                                    }
                                >
                                    {report.status_kesehatan}
                                </Badge>
                            </div>
                        </div>
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
            </ScrollArea>
        </ReportDetailModal>
    )
}
