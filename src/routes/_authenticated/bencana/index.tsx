import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/bencana/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authenticated/bencana/"!</div>
}
