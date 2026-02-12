import { ColumnDef } from '@tanstack/react-table'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { DataTableColumnHeader } from '@/components/data-table/column-header'
import { EconomyReport } from '../constants'
import { Button } from '@/components/ui/button'
import { EconomyDetailModal } from './report-detail-modal'
import { useState } from 'react'
import { Eye } from 'lucide-react'

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
                <span className='font-medium'>{row.original.pelapor}</span>
                <span className='text-xs text-muted-foreground'>RT {row.original.rt}</span>
            </div>
        ),
    },
    {
        accessorKey: 'tanggal_update',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Tanggal' />
        ),
        cell: ({ row }) => {
            const date = new Date(row.getValue('tanggal_update'))
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
            <DataTableColumnHeader column={column} title='Kepala Keluarga' />
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
        accessorKey: 'status_pekerjaan',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Status Kerja' />
        ),
        cell: ({ row }) => {
            return (
                <div className='flex w-[100px] items-center'>
                    <span>{row.getValue('status_pekerjaan')}</span>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: 'status_bansos',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Bansos' />
        ),
        cell: ({ row }) => {
            const status = row.getValue('status_bansos') as string
            let variant: 'default' | 'destructive' | 'outline' | 'secondary' = 'outline'

            if (status === 'Sudah Menerima') variant = 'default' // Greenish handled by class usually, but Badge variant is specific
            if (status === 'Sedang Mengajukan') variant = 'secondary'
            if (status === 'Tidak Menerima') variant = 'outline'

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
    {
        id: 'actions',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Aksi' />
        ),
        cell: ({ row }) => <ActionCell report={row.original} />,
    },
]
