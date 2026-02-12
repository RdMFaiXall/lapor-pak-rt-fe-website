import { createFileRoute } from '@tanstack/react-router'
import { LaporanView } from '@/features/kesehatan'

export const Route = createFileRoute('/_authenticated/kesehatan/laporan')({
    component: LaporanView,
})
