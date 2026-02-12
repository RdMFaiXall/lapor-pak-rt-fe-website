import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { EconomyReport } from '../constants'
import { ReportDetailModal } from '@/components/report-detail-modal'

interface ReportDetailModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    report: EconomyReport | null
}

export function EconomyDetailModal({
    open,
    onOpenChange,
    report,
}: ReportDetailModalProps) {
    if (!report) return null

    return (
        <ReportDetailModal
            open={open}
            onOpenChange={onOpenChange}
            title='Detail Laporan Ekonomi'
            description='Informasi lengkap mengenai status ekonomi warga.'
        >
            <div className='flex flex-col gap-6'>
                {/* Informasi Dasar */}
                <div>
                    <h3 className='mb-2 text-sm font-medium text-muted-foreground'>
                        Informasi Warga
                    </h3>
                    <div className='grid gap-2 text-sm'>
                        <div className='grid grid-cols-3'>
                            <span className='font-medium'>Nama Kepala Keluarga</span>
                            <span className='col-span-2 text-muted-foreground'>
                                : {report.nama_warga}
                            </span>
                        </div>
                        <div className='grid grid-cols-3'>
                            <span className='font-medium'>Pelapor</span>
                            <span className='col-span-2 text-muted-foreground'>
                                : {report.pelapor}
                            </span>
                        </div>
                        <div className='grid grid-cols-3'>
                            <span className='font-medium'>Tanggal Laporan</span>
                            <span className='col-span-2 text-muted-foreground'>
                                : {report.tanggal_laporan}
                            </span>
                        </div>
                    </div>
                </div>

                <Separator />

                {/* Dynamic Content Based on Category */}
                {report.kategori_isu_ekonomi === 'Warga tidak punya pekerjaan' && (
                    <>
                        <Separator />
                        <div>
                            <h3 className='mb-2 text-sm font-medium text-muted-foreground'>Detail Pengangguran</h3>
                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <span className='block text-xs text-muted-foreground'>Lama Menganggur</span>
                                    <span className='font-medium text-sm'>{report.lama_menganggur}</span>
                                </div>
                                <div>
                                    <span className='block text-xs text-muted-foreground'>Minat Pelatihan</span>
                                    <div className='flex flex-wrap gap-1 mt-1'>
                                        {report.minat_pelatihan?.map((item, i) => (
                                            <Badge key={i} variant='secondary' className='text-[10px]'>{item}</Badge>
                                        ))}
                                    </div>
                                </div>
                                <div className='col-span-2'>
                                    <span className='block text-xs text-muted-foreground'>Keahlian / Skill</span>
                                    <div className='flex flex-wrap gap-1 mt-1'>
                                        {report.skill_terakhir?.map((item, i) => (
                                            <Badge key={i} variant='outline' className='text-[10px]'>{item}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {report.kategori_isu_ekonomi === 'UMKM tidak berkembang' && (
                    <>
                        <Separator />
                        <div>
                            <h3 className='mb-2 text-sm font-medium text-muted-foreground'>Detail Usaha</h3>
                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <span className='block text-xs text-muted-foreground'>Nama Usaha</span>
                                    <span className='font-medium text-sm'>{report.nama_jenis_usaha}</span>
                                </div>
                                <div>
                                    <span className='block text-xs text-muted-foreground'>Rata-rata Omzet</span>
                                    <span className='font-medium text-sm'>{report.omzet_rata_rata}</span>
                                </div>
                                <div className='col-span-2'>
                                    <span className='block text-xs text-muted-foreground'>Kendala Utama</span>
                                    <div className='flex flex-wrap gap-1 mt-1'>
                                        {report.kendala_umkm?.map((item, i) => (
                                            <Badge key={i} variant='destructive' className='text-[10px]'>{item}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {report.kategori_isu_ekonomi === 'Warga berhutang' && (
                    <>
                        <Separator />
                        <div>
                            <h3 className='mb-2 text-sm font-medium text-muted-foreground'>Detail Hutang</h3>
                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <span className='block text-xs text-muted-foreground'>Sumber Hutang</span>
                                    <span className='font-medium text-sm'>{report.sumber_hutang}</span>
                                </div>
                                <div>
                                    <span className='block text-xs text-muted-foreground'>Estimasi Total</span>
                                    <span className='font-medium text-sm text-red-600'>{report.estimasi_total_hutang}</span>
                                </div>
                                <div className='col-span-2'>
                                    <span className='block text-xs text-muted-foreground'>Butuh Mediasi RT?</span>
                                    <Badge variant={report.butuh_mediasi ? 'default' : 'secondary'} className='mt-1'>
                                        {report.butuh_mediasi ? 'Ya, Butuh Bantuan' : 'Tidak / Belum Perlu'}
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {report.kategori_isu_ekonomi === 'Calon penerima bansos' && (
                    <>
                        <Separator />
                        <div>
                            <h3 className='mb-2 text-sm font-medium text-muted-foreground'>Kelayakan Bansos</h3>
                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <span className='block text-xs text-muted-foreground'>Status Hunian</span>
                                    <span className='font-medium text-sm'>{report.status_hunian}</span>
                                </div>
                                <div>
                                    <span className='block text-xs text-muted-foreground'>Jumlah Tanggungan</span>
                                    <span className='font-medium text-sm'>{report.jumlah_tanggungan} Jiwa</span>
                                </div>
                                <div>
                                    <span className='block text-xs text-muted-foreground'>Penghasilan KK</span>
                                    <span className='font-medium text-sm'>{report.penghasilan_kk}</span>
                                </div>
                                <div>
                                    <span className='block text-xs text-muted-foreground'>Riwayat Bantuan</span>
                                    <div className='flex flex-wrap gap-1 mt-1'>
                                        {report.riwayat_bantuan?.map((item, i) => (
                                            <Badge key={i} variant='secondary' className='text-[10px]'>{item}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </ReportDetailModal>
    )
}
