import { createFileRoute } from '@tanstack/react-router'
import { LaporanList } from '@/features/sosial'

export const Route = createFileRoute('/_authenticated/sosial/laporan')({
    component: LaporanList,
})
