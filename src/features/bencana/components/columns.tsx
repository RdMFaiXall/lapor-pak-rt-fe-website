import { ColumnDef } from '@tanstack/react-table'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { DataTableColumnHeader } from '@/components/data-table/column-header'
import { DisasterReport } from '../constants'
import { Button } from '@/components/ui/button'
import { DisasterDetailModal } from './report-detail-modal'
import { useState } from 'react'
import { Eye } from 'lucide-react'

const ActionCell = ({ report }: { report: DisasterReport }) => {
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
        accessorKey: 'jenis_bencana',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Jenis Bencana' />
        ),
        cell: ({ row }) => {
            return (
                <div className='flex w-[150px] items-center'>
                    <span className='font-medium truncate'>{row.getValue('jenis_bencana')}</span>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: 'status_penanganan',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Status' />
        ),
        cell: ({ row }) => {
            const status = row.getValue('status_penanganan') as string
            let variant: 'default' | 'destructive' | 'outline' | 'secondary' = 'outline'

            if (status === 'Selesai') variant = 'default'
            if (status === 'Darurat') variant = 'destructive'
            if (status === 'Dalam Penanganan') variant = 'secondary'

            return (
                <Badge variant={variant} className='text-[10px]'>
                    {status}
                </Badge>
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
