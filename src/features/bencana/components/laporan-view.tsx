import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { mockData } from '../constants'
import { columns } from './columns'
import {
    getCoreRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
    SortingState,
    VisibilityState,
    ColumnFiltersState,
    flexRender,
} from '@tanstack/react-table'
import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { DataTablePagination } from '@/components/data-table/pagination'
import { DataTableToolbar } from '@/components/data-table/toolbar'

export default function LaporanView() {
    const [rowSelection, setRowSelection] = useState({})
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [sorting, setSorting] = useState<SortingState>([])

    const table = useReactTable({
        data: mockData,
        columns,
        state: {
            sorting,
            columnVisibility,
            rowSelection,
            columnFilters,
        },
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
    })

    return (
        <>
            <Header>
                <div className='ms-auto flex items-center space-x-4'>
                    <Search />
                    <ThemeSwitch />
                    <ProfileDropdown />
                </div>
            </Header>
            <Main>
                <div className='mb-6 flex items-center justify-between space-y-2'>
                    <h1 className='text-2xl font-bold tracking-tight'>Data Laporan Bencana</h1>
                </div>

                <div className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Rekapitulasi Laporan Bencana</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <DataTableToolbar
                                    table={table}
                                    searchKey="jenis_bencana"
                                    searchPlaceholder='Cari jenis bencana...'
                                    filters={[
                                        {
                                            columnId: 'jenis_bencana',
                                            title: 'Jenis Bencana',
                                            options: [
                                                { label: 'Banjir', value: 'Banjir' },
                                                { label: 'Kebakaran', value: 'Kebakaran' },
                                                { label: 'Pohon Tumbang', value: 'Pohon Tumbang' },
                                                { label: 'Tanah Longsor', value: 'Tanah Longsor' },
                                                { label: 'Angin Puting Beliung', value: 'Angin Puting Beliung' },
                                                { label: 'Lainnya', value: 'Lainnya' },
                                            ]
                                        },
                                        {
                                            columnId: 'status_penanganan',
                                            title: 'Status',
                                            options: [
                                                { label: 'Darurat', value: 'Darurat' },
                                                { label: 'Butuh Bantuan', value: 'Butuh Bantuan' },
                                                { label: 'Dalam Penanganan', value: 'Dalam Penanganan' },
                                                { label: 'Selesai', value: 'Selesai' },
                                            ]
                                        }
                                    ]}
                                />
                                <div className="rounded-md border">
                                    <Table>
                                        <TableHeader>
                                            {table.getHeaderGroups().map((headerGroup) => (
                                                <TableRow key={headerGroup.id}>
                                                    {headerGroup.headers.map((header) => {
                                                        return (
                                                            <TableHead key={header.id} colSpan={header.colSpan}>
                                                                {header.isPlaceholder
                                                                    ? null
                                                                    : flexRender(
                                                                        header.column.columnDef.header,
                                                                        header.getContext()
                                                                    )}
                                                            </TableHead>
                                                        )
                                                    })}
                                                </TableRow>
                                            ))}
                                        </TableHeader>
                                        <TableBody>
                                            {table.getRowModel().rows?.length ? (
                                                table.getRowModel().rows.map((row) => (
                                                    <TableRow
                                                        key={row.id}
                                                        data-state={row.getIsSelected() && 'selected'}
                                                    >
                                                        {row.getVisibleCells().map((cell) => (
                                                            <TableCell key={cell.id}>
                                                                {flexRender(
                                                                    cell.column.columnDef.cell,
                                                                    cell.getContext()
                                                                )}
                                                            </TableCell>
                                                        ))}
                                                    </TableRow>
                                                ))
                                            ) : (
                                                <TableRow>
                                                    <TableCell
                                                        colSpan={columns.length}
                                                        className='h-24 text-center'
                                                    >
                                                        No results.
                                                    </TableCell>
                                                </TableRow>
                                            )}
                                        </TableBody>
                                    </Table>
                                </div>
                                <DataTablePagination table={table} />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </Main>
        </>
    )
}
