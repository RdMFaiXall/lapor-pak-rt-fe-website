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
        accessorKey: 'tanggal_laporan',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Tanggal' />
        ),
        cell: ({ row }) => {
            const date = new Date(row.getValue('tanggal_laporan'))
            const formattedDate = date.toLocaleDateString('id-ID', {
                weekday: 'long',
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
            return (
                <div className='flex space-x-2'>
                    <span className='max-w-[500px] truncate font-medium'>
                        {formattedDate}
                    </span>
                </div>
            )
        },
    },
    {
        accessorKey: 'nama_warga',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Nama Warga' />
        ),
        cell: ({ row }) => {
            return (
                <div className='flex space-x-2'>
                    <span className='max-w-[500px] truncate font-medium'>
                        {row.getValue('nama_warga')}
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
            return (
                <div className='flex w-[100px] items-center'>
                    <span>{row.getValue('isu_kesehatan')}</span>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    // {
    //     accessorKey: 'usia_penderita',
    //     header: ({ column }) => (
    //         <DataTableColumnHeader column={column} title='Usia' />
    //     ),
    //     cell: ({ row }) => (
    //         <div className='w-[80px]'>{row.getValue('usia_penderita')}</div>
    //     ),
    // },
    // {
    //     accessorKey: 'status_bpjs',
    //     header: ({ column }) => (
    //         <DataTableColumnHeader column={column} title='BPJS' />
    //     ),
    //     cell: ({ row }) => {
    //         const status = row.getValue('status_bpjs') as string
    //         return (
    //             <Badge variant={status.includes('Tidak') ? 'destructive' : 'outline'} className='text-[10px]'>
    //                 {status}
    //             </Badge>
    //         )
    //     },
    //     filterFn: (row, id, value) => {
    //         return value.includes(row.getValue(id))
    //     },
    // },
    // Hidden columns to prevent horizontal scroll (available in detail modal)
    // {
    //     accessorKey: 'detail_kondisi',
    //     header: ({ column }) => (
    //         <DataTableColumnHeader column={column} title='Detail & Risiko' />
    //     ),
    //     cell: ({ row }) => {
    //         return (
    //             <div className='flex space-x-2'>
    //                 <span className='max-w-[300px] truncate' title={row.getValue('detail_kondisi')}>
    //                     {row.getValue('detail_kondisi')}
    //                 </span>
    //             </div>
    //         )
    //     },
    // },
    // {
    //     accessorKey: 'intervensi_rt',
    //     header: ({ column }) => (
    //         <DataTableColumnHeader column={column} title='Tindakan RT' />
    //     ),
    //     cell: ({ row }) => {
    //         const interventions = row.getValue('intervensi_rt') as string[]
    //         return (
    //             <div className="flex flex-wrap gap-1">
    //                 {interventions.map((action, idx) => (
    //                     <Badge key={idx} variant="secondary" className="text-[10px]">
    //                         {action}
    //                     </Badge>
    //                 ))}
    //             </div>
    //         )
    //     },
    // },
    {
        accessorKey: 'status_kesehatan',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Status' />
        ),
        cell: ({ row }) => {
            const status = row.getValue('status_kesehatan') as string
            let badgeClass = ''

            switch (status) {
                case 'Kritis':
                    badgeClass = 'bg-red-600 hover:bg-red-700'
                    break
                case 'Dalam Pemantauan':
                    badgeClass = 'bg-yellow-500 hover:bg-yellow-600'
                    break
                case 'Stabil':
                    badgeClass = 'bg-green-600 hover:bg-green-700'
                    break
                default:
                    badgeClass = 'bg-gray-500'
            }

            return (
                <Badge className={badgeClass}>{status}</Badge>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        id: 'actions',
        cell: ({ row }) => <ActionCell report={row.original} />,
    },
]
