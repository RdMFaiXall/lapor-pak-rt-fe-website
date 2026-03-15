import { ColumnDef } from '@tanstack/react-table'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { DataTableColumnHeader } from '@/components/data-table/column-header'
import { Keamanan } from '../data/schema'
import { categories } from '../data/data'
import { Eye, Edit, Trash2, MoreHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { toast } from 'sonner'

const ActionCell = ({ report: _report }: { report: Keamanan }) => {
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
                    <DropdownMenuItem onClick={() => toast.info('Fitur detail sedang dikembangkan')}>
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
        </>
    )
}

export const keamananColumns: ColumnDef<Keamanan>[] = [
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
        accessorKey: 'reportedBy',
        id: 'Pelapor',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Pelapor' />
        ),
        cell: ({ row }) => <span className='font-medium'>{row.getValue('Pelapor')}</span>,
    },
    {
        accessorKey: 'location',
        id: 'RT',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='RT' />
        ),
        cell: ({ row }) => {
            const fullLocation = row.getValue('RT')?.toString() || ''
            const rtPart = fullLocation.split('/')[0].trim()
            return (
                <span className='font-medium text-gray-900 dark:text-gray-100'>
                    {rtPart.includes('RT') ? rtPart : `RT ${rtPart}`}
                </span>
            )
        },
    },
    {
        accessorKey: 'category',
        id: 'Kategori',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Kategori' />
        ),
        cell: ({ row }) => {
            const category = categories.find(
                (cat) => cat.value === row.getValue('Kategori')
            )
            if (!category) return null
            return (
                <div className='flex items-center'>
                    <Badge variant='outline' className='text-[10px]'>{category.label}</Badge>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: 'date',
        id: 'Tanggal Melapor',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Tanggal Melapor' />
        ),
        cell: ({ row }) => {
            const date = new Date(row.getValue('Tanggal Melapor'))
            return (
                <span className='font-medium'>
                    {date.toLocaleDateString('id-ID', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric'
                    })}
                </span>
            )
        }
    },
    {
        id: 'actions',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Aksi' />
        ),
        cell: ({ row }) => <ActionCell report={row.original} />,
    },
]
