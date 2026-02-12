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
            title='Detail Ekonomi & UMKM'
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
                            <span className='font-medium'>Tanggal Update</span>
                            <span className='col-span-2 text-muted-foreground'>
                                : {report.tanggal_update}
                            </span>
                        </div>
                    </div>
                </div>

                <Separator />

                {/* Status Pekerjaan & Ekonomi */}
                <div>
                    <h3 className='mb-2 text-sm font-medium text-muted-foreground'>
                        Status Pekerjaan & Keuangan
                    </h3>
                    <div className='rounded-lg border p-3 bg-muted/40'>
                        <div className='mb-3 flex items-center justify-between'>
                            <span className='font-semibold'>{report.status_pekerjaan}</span>
                            <Badge variant={
                                report.penghasilan_bulanan === '< 1 Juta' ? 'destructive' :
                                    report.penghasilan_bulanan === '1-3 Juta' ? 'outline' : 'default'
                            }>
                                {report.penghasilan_bulanan}
                            </Badge>
                        </div>

                        <div className='space-y-2 text-sm'>
                            <div className='grid grid-cols-3'>
                                <span className='font-medium'>Jenis Pekerjaan</span>
                                <span className='col-span-2'>: {report.jenis_pekerjaan}</span>
                            </div>
                            <div className='grid grid-cols-3'>
                                <span className='font-medium'>Pengeluaran</span>
                                <span className='col-span-2'>: {report.pengeluaran_bulanan}</span>
                            </div>
                            <div className='grid grid-cols-3'>
                                <span className='font-medium'>Tempat Tinggal</span>
                                <span className='col-span-2'>: {report.status_tempat_tinggal}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator />

                {/* Aset & Bansos */}
                <div>
                    <h3 className='mb-2 text-sm font-medium text-muted-foreground'>
                        Aset & Bantuan Sosial
                    </h3>
                    <div className='grid gap-4 sm:grid-cols-2'>
                        <div>
                            <p className='text-xs font-medium text-muted-foreground mb-1'>Aset Kendaraan:</p>
                            <div className='flex flex-wrap gap-1'>
                                {report.aset_kendaraan.map((aset, i) => (
                                    <Badge key={i} variant='secondary' className='text-[10px]'>{aset}</Badge>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className='text-xs font-medium text-muted-foreground mb-1'>Tabungan (Emas/Bank):</p>
                            <span className='text-sm font-medium'>{report.tabungan_aset}</span>
                        </div>
                    </div>

                    <div className='mt-4 p-3 border rounded-md'>
                        <div className='flex items-center justify-between'>
                            <span className='text-sm font-medium'>Status Bansos</span>
                            <Badge className={
                                report.status_bansos === 'Sudah Menerima' ? 'bg-green-600' :
                                    report.status_bansos === 'Sedang Mengajukan' ? 'bg-yellow-500' :
                                        'bg-gray-500'
                            }>
                                {report.status_bansos}
                            </Badge>
                        </div>
                    </div>
                </div>

                {/* Detail Usaha (Optional) */}
                {report.status_pekerjaan === 'Usaha Mandiri' && report.detail_usaha && (
                    <>
                        <Separator />
                        <div>
                            <h3 className='mb-2 text-sm font-medium text-muted-foreground'>
                                Detail Usaha (UMKM)
                            </h3>
                            <div className='rounded-lg border p-3 bg-blue-50 dark:bg-blue-950/20'>
                                <div className='grid gap-2 text-sm'>
                                    <div className='grid grid-cols-3'>
                                        <span className='font-medium'>Nama Usaha</span>
                                        <span className='col-span-2'>: {report.detail_usaha.nama_usaha}</span>
                                    </div>
                                    <div className='grid grid-cols-3'>
                                        <span className='font-medium'>Jenis</span>
                                        <span className='col-span-2'>: {report.detail_usaha.jenis_usaha}</span>
                                    </div>
                                    <div className='grid grid-cols-3'>
                                        <span className='font-medium'>Omzet/Bulan</span>
                                        <span className='col-span-2'>: {report.detail_usaha.omzet_bulanan}</span>
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
