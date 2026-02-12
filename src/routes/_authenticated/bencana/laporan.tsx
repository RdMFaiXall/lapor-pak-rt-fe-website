import { createFileRoute } from '@tanstack/react-router'
import { LaporanView } from '@/features/bencana'

export const Route = createFileRoute('/_authenticated/bencana/laporan')({
    component: LaporanView,
})
