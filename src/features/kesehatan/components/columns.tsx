import { ColumnDef } from '@tanstack/react-table'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { DataTableColumnHeader } from '@/components/data-table/column-header'
import { HealthReport } from '../constants'
import { Button } from '@/components/ui/button'
import { ReportDetailSheet } from './report-detail-sheet'
import { useState } from 'react'
import { Eye, Edit, Trash2, MoreHorizontal } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { toast } from 'sonner'

const ActionCell = ({ report }: { report: HealthReport }) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant='ghost'
                        className='flex h-8 w-8 p-0 data-[state=open]:bg-muted'
                    >
                        <MoreHorizontal className='h-4 w-4' />
                        <span className='sr-only'>Buka menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end' className='w-[160px]'>
                    <DropdownMenuItem onClick={() => setOpen(true)}>
                        <Eye className='mr-2 h-4 w-4' />
                        Lihat Detail
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => toast.info('Fitur sedang dikembangkan')}>
                        <Edit className='mr-2 h-4 w-4' />
                        Edit Data
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                        onClick={() => toast.info('Fitur sedang dikembangkan')}
                        className='text-rose-600 focus:text-rose-600 dark:text-rose-400 dark:focus:text-rose-400'
                    >
                        <Trash2 className='mr-2 h-4 w-4' />
                        Hapus Data
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
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
        id: 'no',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='No.' />
        ),
        cell: ({ row, table }) => {
            const index = table.getSortedRowModel().flatRows.indexOf(row) + 1
            return (
                <span className='font-medium text-muted-foreground'>
                    {index}
                </span>
            )
        },
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'pelapor',
        id: 'Pelapor',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Pelapor' />
        ),
        cell: ({ row }) => <span className='font-medium'>{row.getValue('Pelapor')}</span>,
    },
    {
        accessorKey: 'rt',
        id: 'RT',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='RT' />
        ),
        cell: ({ row }) => (
            <span className='font-medium text-gray-900 dark:text-gray-100'>
                {row.getValue('RT')?.toString().includes('RT') ? row.getValue('RT') : `RT ${row.getValue('RT')}`}
            </span>
        ),
    },
    {
        accessorKey: 'nama_warga',
        id: 'Warga',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Warga' />
        ),
        cell: ({ row }) => {
            return (
                <div className='flex flex-col'>
                    <span className='font-medium'>
                        {row.getValue('Warga')}
                    </span>
                    <span className='text-[10px] text-muted-foreground'>
                        NIK: {row.original.nik}
                    </span>
                </div>
            )
        },
    },
    {
        accessorKey: 'isu_kesehatan',
        id: 'Masalah Utama',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Masalah Utama' />
        ),
        cell: ({ row }) => {
            const isu = row.getValue('Masalah Utama') as string
            let variant: 'default' | 'secondary' | 'outline' | 'destructive' = 'outline'

            if (isu === 'Wabah DBD') variant = 'destructive'
            else if (isu === 'Stunting / Gizi Buruk') variant = 'default'
            else if (isu === 'Ibu Hamil Berisiko') variant = 'secondary'
            else if (isu === 'Warga Belum BPJS') variant = 'outline'

            return (
                <Badge variant={variant} className='whitespace-nowrap text-[10px]'>
                    {isu}
                </Badge>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        id: 'Detail Utama',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Detail Utama' />
        ),
        cell: ({ row }) => {
            const data = row.original
            switch (data.isu_kesehatan) {
                case 'Wabah DBD':
                    return (
                        <div className="text-xs">
                            <div className="font-medium">{data.perkembangan_kasus}</div>
                            <div className="text-[10px] text-muted-foreground">
                                {data.lingkungan_dbd?.slice(0, 1).join(', ')}...
                            </div>
                        </div>
                    )
                case 'Stunting / Gizi Buruk':
                    return (
                        <div className="text-xs">
                            <div className="font-medium">BB: {data.berat_badan}kg, TB: {data.tinggi_badan}cm</div>
                            <div className="text-[10px] text-muted-foreground">
                                Umur: {data.umur_bulan} bln • PMT: {data.status_pmt ? '✅' : '❌'}
                            </div>
                        </div>
                    )
                case 'Ibu Hamil Berisiko':
                    return (
                        <div className="text-xs">
                            <div className="font-medium">{data.usia_kandungan}</div>
                            <div className="text-[10px] text-muted-foreground">
                                {data.faktor_risiko?.length ? `${data.faktor_risiko.length} Faktor Risiko` : '-'}
                            </div>
                        </div>
                    )
                case 'Warga Belum BPJS':
                    return (
                        <div className="text-xs text-destructive font-medium">
                            {data.alasan_bpjs}
                        </div>
                    )
                default:
                    return <span className='text-xs text-muted-foreground'>-</span>
            }
        }
    },
    {
        accessorKey: 'tanggal_laporan',
        id: 'Tanggal Melapor',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Tanggal Melapor' />
        ),
        cell: ({ row }) => {
            const dateStr = row.getValue('Tanggal Melapor') as string
            const date = new Date(dateStr)
            return (
                <span className='font-medium'>
                    {isNaN(date.getTime()) ? dateStr : date.toLocaleDateString('id-ID', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric'
                    })}
                </span>
            )
        },
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
