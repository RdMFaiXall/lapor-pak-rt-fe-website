import { createFileRoute } from '@tanstack/react-router'
import { MonitoringView } from '@/features/bencana'

export const Route = createFileRoute('/_authenticated/bencana/monitoring')({
  component: MonitoringView,
})
