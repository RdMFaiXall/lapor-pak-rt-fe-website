import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/ekonomi/monitoring')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>Hello "/_authenticated/ekonomi/monitoring"!</div>
}
