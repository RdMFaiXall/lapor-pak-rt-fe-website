import { createFileRoute } from '@tanstack/react-router'
import { MonitoringView } from '@/features/kesehatan'

export const Route = createFileRoute('/_authenticated/kesehatan/monitoring')({
    component: MonitoringView,
})
