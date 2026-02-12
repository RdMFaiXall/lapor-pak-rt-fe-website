import { createFileRoute } from '@tanstack/react-router'
import { MonitoringView } from '@/features/pendidikan'

export const Route = createFileRoute('/_authenticated/pendidikan/monitoring')({
    component: MonitoringView,
})
