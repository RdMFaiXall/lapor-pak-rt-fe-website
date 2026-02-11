import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/sosial/laporan')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>Hello "/_authenticated/sosial/laporan"!</div>
}
