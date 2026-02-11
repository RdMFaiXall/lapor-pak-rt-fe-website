import KeamananDashboard from '@/features/keamanan/dashboard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/keamanan/monitoring')({
    component: KeamananDashboard,
})