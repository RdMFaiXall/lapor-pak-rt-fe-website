import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/pendidikan/')({
  loader: () => redirect({ to: '/pendidikan/monitoring' }),
})
