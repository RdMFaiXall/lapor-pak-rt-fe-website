import { createFileRoute } from '@tanstack/react-router'
import { MonitoringDashboard } from '@/features/lingkungan'

export const Route = createFileRoute('/_authenticated/lingkungan/monitoring')({
    component: MonitoringDashboard,
})
