import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/keamanan/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authenticated/keamanan/"!</div>
}
