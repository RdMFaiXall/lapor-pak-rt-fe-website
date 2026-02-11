import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/lingkungan/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authenticated/lingkungan/"!</div>
}
