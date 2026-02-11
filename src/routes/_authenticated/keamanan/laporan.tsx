import { createFileRoute } from '@tanstack/react-router'
import KeamananPage from '@/features/keamanan'

export const Route = createFileRoute('/_authenticated/keamanan/laporan')({
    component: KeamananPage,
})
