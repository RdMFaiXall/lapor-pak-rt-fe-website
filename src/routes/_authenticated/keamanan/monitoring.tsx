
import { createFileRoute } from '@tanstack/react-router'
import { MonitoringDashboard } from '@/features/keamanan'

export const Route = createFileRoute('/_authenticated/keamanan/monitoring')({
    component: MonitoringDashboard,
})