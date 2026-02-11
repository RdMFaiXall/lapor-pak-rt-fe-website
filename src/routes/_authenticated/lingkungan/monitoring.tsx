import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/lingkungan/monitoring')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>Hello "/_authenticated/lingkungan/monitoring"!</div>
}
