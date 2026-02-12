import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/kesehatan/')({
    loader: () => redirect({ to: '/kesehatan/monitoring' }),
})
