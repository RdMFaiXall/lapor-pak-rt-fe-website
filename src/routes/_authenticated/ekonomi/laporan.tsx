import { createFileRoute } from '@tanstack/react-router'
import { LaporanView } from '@/features/ekonomi'

export const Route = createFileRoute('/_authenticated/ekonomi/laporan')({
    component: LaporanView,
})
