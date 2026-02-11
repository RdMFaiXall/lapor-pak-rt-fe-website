import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/keamanan/monitoring')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>Hello "/_authenticated/keamanan/monitoring"!</div>
}
