import { createFileRoute } from '@tanstack/react-router'
import { MonitoringView } from '@/features/ekonomi'

export const Route = createFileRoute('/_authenticated/ekonomi/monitoring')({
    component: MonitoringView,
})
