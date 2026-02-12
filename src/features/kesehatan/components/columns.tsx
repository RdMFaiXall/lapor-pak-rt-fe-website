import { ColumnDef } from '@tanstack/react-table'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { DataTableColumnHeader } from '@/components/data-table/column-header'
import { HealthReport } from '../constants'
import { Button } from '@/components/ui/button'
import { ReportDetailSheet } from './report-detail-sheet'
import { useState } from 'react'
import { Eye } from 'lucide-react'

const ActionCell = ({ report }: { report: HealthReport }) => {
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
            <ReportDetailSheet open={open} onOpenChange={setOpen} report={report} />
        </>
    )
}

export const columns: ColumnDef<HealthReport>[] = [
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
                <span className='font-medium'>{row.original.pelapor}</span>
                <span className='text-xs text-muted-foreground'>RT {row.original.rt}</span>
            </div>
        ),
    },
    {
        accessorKey: 'nama_warga',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Warga' />
        ),
        cell: ({ row }) => {
            return (
                <div className='flex flex-col space-y-1'>
                    <span className='font-medium'>
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
        accessorKey: 'isu_kesehatan',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Masalah Utama' />
        ),
        cell: ({ row }) => {
            const isu = row.getValue('isu_kesehatan') as string
            let variant: 'default' | 'secondary' | 'outline' | 'destructive' = 'outline'

            if (isu === 'Wabah DBD') variant = 'destructive'
            else if (isu === 'Stunting / Gizi Buruk') variant = 'default'
            else if (isu === 'Ibu Hamil Berisiko') variant = 'secondary'
            else if (isu === 'Warga Belum BPJS') variant = 'outline'

            return (
                <Badge variant={variant} className='whitespace-nowrap'>
                    {isu}
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
            switch (data.isu_kesehatan) {
                case 'Wabah DBD':
                    return (
                        <div className="text-sm">
                            <div className="font-medium">{data.kondisi_dbd}</div>
                            <div className="text-xs text-muted-foreground">
                                {data.lingkungan_dbd?.slice(0, 1).join(', ')}...
                            </div>
                        </div>
                    )
                case 'Stunting / Gizi Buruk':
                    return (
                        <div className="text-sm">
                            <div className="font-medium">BB: {data.berat_badan}kg, TB: {data.tinggi_badan}cm</div>
                            <div className="text-xs text-muted-foreground">
                                Umur: {data.umur_bulan} bln • PMT: {data.status_pmt ? '✅' : '❌'}
                            </div>
                        </div>
                    )
                case 'Ibu Hamil Berisiko':
                    return (
                        <div className="text-sm">
                            <div className="font-medium">{data.usia_kandungan}</div>
                            <div className="text-xs text-muted-foreground">
                                {data.faktor_risiko?.length ? `${data.faktor_risiko.length} Faktor Risiko` : '-'}
                            </div>
                        </div>
                    )
                case 'Warga Belum BPJS':
                    return (
                        <div className="text-sm text-destructive font-medium">
                            {data.alasan_bpjs}
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
            <DataTableColumnHeader column={column} title='Tgl Lapor' />
        ),
        cell: ({ row }) => (
            <span className='text-sm text-muted-foreground'>
                {row.getValue('tanggal_laporan')}
            </span>
        ),
    },
    // {
    //     accessorKey: 'status_kesehatan',
    //     header: ({ column }) => (
    //         <DataTableColumnHeader column={column} title='Status' />
    //     ),
    //     cell: ({ row }) => {
    //         const status = row.getValue('status_kesehatan') as string
    //         let badgeClass = ''

    //         switch (status) {
    //             case 'Kritis':
    //                 badgeClass = 'bg-red-600 hover:bg-red-700'
    //                 break
    //             case 'Dalam Pemantauan':
    //                 badgeClass = 'bg-yellow-500 hover:bg-yellow-600'
    //                 break
    //             case 'Stabil':
    //                 badgeClass = 'bg-green-600 hover:bg-green-700'
    //                 break
    //             default:
    //                 badgeClass = 'bg-gray-500'
    //         }

    //         return (
    //             <Badge className={badgeClass}>{status}</Badge>
    //         )
    //     },
    //     filterFn: (row, id, value) => {
    //         return value.includes(row.getValue(id))
    //     },
    // },
    {
        id: 'actions',
        cell: ({ row }) => <ActionCell report={row.original} />,
    },
]
