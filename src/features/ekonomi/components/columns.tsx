import { ColumnDef } from '@tanstack/react-table'
import { DataTableColumnHeader } from '@/components/data-table/column-header'
import { EconomyReport } from '../constants'
import { Button } from '@/components/ui/button'
import { EconomyDetailModal } from './report-detail-modal'
import { useState } from 'react'
import { Eye } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'

const ActionCell = ({ report }: { report: EconomyReport }) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Button
                variant='ghost'
                size='icon'
                className='h-8 w-8 p-0'
                onClick={() => setOpen(true)}
            >
                <span className='sr-only'>Open menu</span>
                <Eye className='h-4 w-4' />
            </Button>
            <EconomyDetailModal open={open} onOpenChange={setOpen} report={report} />
        </>
    )
}

export const columns: ColumnDef<EconomyReport>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && 'indeterminate')
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label='Select all'
                className='translate-y-[2px]'
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label='Select row'
                className='translate-y-[2px]'
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'pelapor',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Pelapor' />
        ),
        cell: ({ row }) => (
            <div className='flex flex-col'>
                <span className='font-medium'>{row.getValue('pelapor')}</span>
                <span className='text-xs text-muted-foreground'>RT {row.original.rt}</span>
            </div>
        ),
    },
    {
        accessorKey: 'nama_warga',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Nama Warga' />
        ),
        cell: ({ row }) => {
            return (
                <div className='flex flex-col space-y-1'>
                    <span className='max-w-[500px] truncate font-medium'>
                        {row.getValue('nama_warga')}
                    </span>
                    <span className='text-xs text-muted-foreground'>
                        NIK: {row.original.nik}
                    </span>
                </div>
            )
        },
    },
    {
        accessorKey: 'kategori_isu_ekonomi',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Kategori Isu' />
        ),
        cell: ({ row }) => {
            const kategori = row.getValue('kategori_isu_ekonomi') as string
            let variant: 'default' | 'secondary' | 'outline' | 'destructive' = 'outline'

            if (kategori === 'Warga tidak punya pekerjaan') variant = 'destructive'
            else if (kategori === 'UMKM tidak berkembang') variant = 'default'
            else if (kategori === 'Warga berhutang') variant = 'secondary'
            else if (kategori === 'Calon penerima bansos') variant = 'outline'

            return (
                <Badge variant={variant} className='whitespace-nowrap'>
                    {kategori}
                </Badge>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        id: 'detail_utama',
        header: 'Detail Utama',
        cell: ({ row }) => {
            const data = row.original
            switch (data.kategori_isu_ekonomi) {
                case 'Warga tidak punya pekerjaan':
                    return (
                        <div className="text-sm">
                            <div className="font-medium">Menganggur: {data.lama_menganggur}</div>
                            <div className="text-xs text-muted-foreground">Skill: {data.skill_terakhir?.join(', ') || '-'}</div>
                        </div>
                    )
                case 'UMKM tidak berkembang':
                    return (
                        <div className="text-sm">
                            <div className="font-medium">{data.nama_jenis_usaha}</div>
                            <div className="text-xs text-muted-foreground">Omzet: {data.omzet_rata_rata}</div>
                        </div>
                    )
                case 'Warga berhutang':
                    return (
                        <div className="text-sm">
                            <div className="font-medium">{data.sumber_hutang}</div>
                            <div className="text-xs text-muted-foreground">Total: {data.estimasi_total_hutang}</div>
                        </div>
                    )
                case 'Calon penerima bansos':
                    return (
                        <div className="text-sm">
                            <div className="font-medium">{data.jumlah_tanggungan} Tanggungan</div>
                            <div className="text-xs text-muted-foreground">Penghasilan: {data.penghasilan_kk}</div>
                        </div>
                    )
                default:
                    return <span className='text-muted-foreground'>-</span>
            }
        }
    },
    {
        accessorKey: 'tanggal_laporan',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Tgl Laporan' />
        ),
        cell: ({ row }) => <div className="text-sm">{row.getValue('tanggal_laporan')}</div>,
    },
    {
        id: 'actions',
        cell: ({ row }) => <ActionCell report={row.original} />,
    },
]
