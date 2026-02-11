import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/pendidikan/monitoring')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>Hello "/_authenticated/pendidikan/monitoring"!</div>
}
