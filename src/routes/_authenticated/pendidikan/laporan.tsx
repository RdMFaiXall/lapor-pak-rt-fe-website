import { createFileRoute } from '@tanstack/react-router'
import { LaporanView } from '@/features/pendidikan'

export const Route = createFileRoute('/_authenticated/pendidikan/laporan')({
    component: LaporanView,
})
