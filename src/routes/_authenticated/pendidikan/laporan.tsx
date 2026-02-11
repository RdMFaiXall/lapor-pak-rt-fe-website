import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/pendidikan/laporan')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>Hello "/_authenticated/pendidikan/laporan"!</div>
}
