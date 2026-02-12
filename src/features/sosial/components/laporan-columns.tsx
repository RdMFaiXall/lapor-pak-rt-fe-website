
import { ColumnDef } from '@tanstack/react-table'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { DataTableColumnHeader } from '@/components/data-table/column-header'
import { Sosial } from '../data/schema'
import { priorities, categories } from '../data/data'
import { format } from 'date-fns'

export const sosialColumns: ColumnDef<Sosial>[] = [
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
        accessorKey: 'id',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='ID' />
        ),
        cell: ({ row }) => <div className='w-[80px]'>{row.getValue('id')}</div>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'title',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Judul' />
        ),
        cell: ({ row }) => {
            const category = categories.find(
                (cat) => cat.value === row.original.category
            )

            return (
                <div className='flex space-x-2'>
                    {category && <Badge variant='outline'>{category.label}</Badge>}
                    <span className='max-w-[500px] truncate font-medium'>
                        {row.getValue('title')}
                    </span>
                </div>
            )
        },
    },
    // {
    //     accessorKey: 'status',
    //     header: ({ column }) => (
    //         <DataTableColumnHeader column={column} title='Status' />
    //     ),
    //     cell: ({ row }) => {
    //         const status = statuses.find(
    //             (status) => status.value === row.getValue('status')
    //         )

    //         if (!status) {
    //             return null
    //         }

    //         const Icon = status.icon

    //         return (
    //             <div className='flex w-[100px] items-center'>
    //                 {Icon && (
    //                     <Icon className='mr-2 h-4 w-4 text-muted-foreground' />
    //                 )}
    //                 <span>{status.label}</span>
    //             </div>
    //         )
    //     },
    //     filterFn: (row, id, value) => {
    //         return value.includes(row.getValue(id))
    //     },
    // },
    {
        accessorKey: 'priority',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Prioritas' />
        ),
        cell: ({ row }) => {
            const priority = priorities.find(
                (priority) => priority.value === row.getValue('priority')
            )

            if (!priority) {
                return null
            }

            const Icon = priority.icon

            return (
                <div className='flex items-center'>
                    {Icon && (
                        <Icon className='mr-2 h-4 w-4 text-muted-foreground' />
                    )}
                    <span>{priority.label}</span>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: 'date',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Tanggal' />
        ),
        cell: ({ row }) => <div>{format(new Date(row.getValue('date')), 'dd/MM/yyyy')}</div>
    },
]
