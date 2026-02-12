import { ColumnDef } from '@tanstack/react-table'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { DataTableColumnHeader } from '@/components/data-table/column-header'
import { EducationReport } from '../constants'
import { Button } from '@/components/ui/button'
import { ReportDetailSheet } from './report-detail-sheet'
import { useState } from 'react'
import { Eye } from 'lucide-react'

const ActionCell = ({ report }: { report: EducationReport }) => {
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

export const columns: ColumnDef<EducationReport>[] = [
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
            <div className='w-[80px]'>{row.getValue('pelapor')}</div>
        ),
    },
    {
        accessorKey: 'tanggal_laporan',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Tanggal' />
        ),
        cell: ({ row }) => {
            return (
                <div className='flex space-x-2'>
                    <span className='max-w-[500px] truncate font-medium'>
                        {row.getValue('tanggal_laporan')}
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
        accessorKey: 'isu_pendidikan',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Isu Pendidikan' />
        ),
        cell: ({ row }) => {
            return (
                <div className='flex w-[150px] items-center'>
                    <span className='font-medium'>{row.getValue('isu_pendidikan')}</span>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    // Hidden columns to prevent horizontal scroll (available in detail modal)
    // {
    //     accessorKey: 'jenjang_terakhir',
    //     header: ({ column }) => (
    //         <DataTableColumnHeader column={column} title='Jenjang' />
    //     ),
    //     cell: ({ row }) => (
    //         <div className='w-[80px]'>{row.getValue('jenjang_terakhir')}</div>
    //     ),
    //     filterFn: (row, id, value) => {
    //         return value.includes(row.getValue(id))
    //     },
    // },
    // {
    //     accessorKey: 'nama_sekolah',
    //     header: ({ column }) => (
    //         <DataTableColumnHeader column={column} title='Sekolah' />
    //     ),
    //     cell: ({ row }) => (
    //         <div className='w-[150px] truncate' title={row.getValue('nama_sekolah')}>
    //             {row.getValue('nama_sekolah')}
    //         </div>
    //     ),
    // },
    // {
    //     accessorKey: 'detail_info',
    //     header: ({ column }) => (
    //         <DataTableColumnHeader column={column} title='Detail & Keterangan' />
    //     ),
    //     cell: ({ row }) => {
    //         return (
    //             <div className='flex space-x-2'>
    //                 <span className='max-w-[300px] truncate' title={row.getValue('detail_info')}>
    //                     {row.getValue('detail_info')}
    //                 </span>
    //             </div>
    //         )
    //     },
    // },
    {
        accessorKey: 'rekomendasi_rt',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Rekomendasi RT' />
        ),
        cell: ({ row }) => {
            const recommendations = row.getValue('rekomendasi_rt') as string[]
            return (
                <div className="flex flex-wrap gap-1">
                    {recommendations.map((action, idx) => (
                        <Badge key={idx} variant="outline" className="text-[10px]">
                            {action}
                        </Badge>
                    ))}
                </div>
            )
        },
    },
    {
        id: 'actions',
        cell: ({ row }) => <ActionCell report={row.original} />,
    },
]
