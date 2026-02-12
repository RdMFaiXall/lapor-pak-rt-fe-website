import { createFileRoute } from '@tanstack/react-router'
import { MonitoringDashboard } from '@/features/sosial'

export const Route = createFileRoute('/_authenticated/sosial/monitoring')({
    component: MonitoringDashboard,
})
