
import { createFileRoute } from '@tanstack/react-router'
import { KeamananList } from '@/features/keamanan'

export const Route = createFileRoute('/_authenticated/keamanan/laporan')({
    component: KeamananList,
})
