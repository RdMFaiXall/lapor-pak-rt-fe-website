import { createFileRoute } from '@tanstack/react-router'
import Sosial from '@/features/sosial'

export const Route = createFileRoute('/_authenticated/sosial/')({
    component: Sosial,
})
