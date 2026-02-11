import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/sosial/monitoring')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>Hello "/_authenticated/sosial/monitoring"!</div>
}
