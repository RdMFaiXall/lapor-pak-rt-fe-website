import { createFileRoute } from '@tanstack/react-router'
import { LaporanList } from '@/features/lingkungan'

export const Route = createFileRoute(
    '/_authenticated/lingkungan/laporan',
)({
    component: LaporanList,
})
