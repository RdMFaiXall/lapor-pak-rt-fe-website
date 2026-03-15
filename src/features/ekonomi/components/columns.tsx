import { ColumnDef } from '@tanstack/react-table'
import { DataTableColumnHeader } from '@/components/data-table/column-header'
import { EconomyReport } from '../constants'
import { Button } from '@/components/ui/button'
import { EconomyDetailModal } from './report-detail-modal'
import { useState } from 'react'
import { Eye, Edit, Trash2, MoreHorizontal } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { toast } from 'sonner'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'

const ActionCell = ({ report }: { report: EconomyReport }) => {
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
        accessorKey: 'kategori_isu_ekonomi',
        id: 'Kategori Isu',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Kategori Isu' />
        ),
        cell: ({ row }) => {
            const kategori = row.getValue('Kategori Isu') as string
            let variant: 'default' | 'secondary' | 'outline' | 'destructive' = 'outline'

            if (kategori === 'Warga tidak punya pekerjaan') variant = 'destructive'
            else if (kategori === 'UMKM tidak berkembang') variant = 'default'
            else if (kategori === 'Warga berhutang') variant = 'secondary'
            else if (kategori === 'Calon penerima bansos') variant = 'outline'

            return (
                <Badge variant={variant} className='whitespace-nowrap text-[10px]'>
                    {kategori}
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
            switch (data.kategori_isu_ekonomi) {
                case 'Warga tidak punya pekerjaan':
                    return (
                        <div className="text-xs">
                            <div className="font-medium">Menganggur: {data.lama_menganggur}</div>
                            <div className="text-[10px] text-muted-foreground">Skill: {data.skill_terakhir?.join(', ') || '-'}</div>
                        </div>
                    )
                case 'UMKM tidak berkembang':
                    return (
                        <div className="text-xs">
                            <div className="font-medium">{data.nama_jenis_usaha}</div>
                            <div className="text-[10px] text-muted-foreground">Omzet: {data.omzet_rata_rata}</div>
                        </div>
                    )
                case 'Warga berhutang':
                    return (
                        <div className="text-xs">
                            <div className="font-medium">{data.sumber_hutang}</div>
                            <div className="text-[10px] text-muted-foreground">Total: {data.estimasi_total_hutang}</div>
                        </div>
                    )
                case 'Calon penerima bansos':
                    return (
                        <div className="text-xs">
                            <div className="font-medium">{data.jumlah_tanggungan} Tanggungan</div>
                            <div className="text-[10px] text-muted-foreground">Penghasilan: {data.penghasilan_kk}</div>
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
    {
        id: 'actions',
        cell: ({ row }) => <ActionCell report={row.original} />,
    },
]
