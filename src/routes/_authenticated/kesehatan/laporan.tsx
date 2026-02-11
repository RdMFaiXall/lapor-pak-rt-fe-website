import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/kesehatan/laporan')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>Hello "/_authenticated/kesehatan/laporan"!</div>
}
