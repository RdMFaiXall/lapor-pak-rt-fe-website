import { ColumnDef } from '@tanstack/react-table'
import { Checkbox } from '@/components/ui/checkbox'
import { DataTableColumnHeader } from '@/components/data-table/column-header'
import { DisasterReport } from '../constants'
import { Button } from '@/components/ui/button'
import { DisasterDetailModal } from './report-detail-modal'
import { useState } from 'react'
import { Eye, Edit, Trash2, MoreHorizontal } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { toast } from 'sonner'

const ActionCell = ({ report }: { report: DisasterReport }) => {
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
            <DisasterDetailModal open={open} onOpenChange={setOpen} report={report} />
        </>
    )
}

export const columns: ColumnDef<DisasterReport>[] = [
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
        cell: ({ row }) => (
            <span className='font-medium'>{row.getValue('Pelapor')}</span>
        ),
    },
    {
        accessorKey: 'rt',
        id: 'RT',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='RT' />
        ),
        cell: ({ row }) => (
            <span className='font-medium text-gray-900 dark:text-gray-100'>RT {row.getValue('RT')}</span>
        ),
    },
    {
        accessorKey: 'tanggal_laporan',
        id: 'Tanggal Melapor',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Tanggal Melapor' />
        ),
        cell: ({ row }) => {
            const date = new Date(row.getValue('Tanggal Melapor'))
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
        accessorKey: 'jenis_bencana',
        id: 'Jenis Bencana',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Jenis Bencana' />
        ),
        cell: ({ row }) => {
            return (
                <div className='flex w-[150px] items-center'>
                    <span className='font-medium truncate'>{row.getValue('Jenis Bencana')}</span>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    // Hidden columns (Available in detail)
    // {
    //     accessorKey: 'lokasi',
    //     header: ({ column }) => (
    //         <DataTableColumnHeader column={column} title='Lokasi' />
    //     ),
    //     cell: ({ row }) => (
    //         <div className='w-[150px] truncate'>{row.getValue('lokasi')}</div>
    //     ),
    // },
    {
        id: 'actions',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Aksi' />
        ),
        cell: ({ row }) => <ActionCell report={row.original} />,
    },
]
