import { createFileRoute } from '@tanstack/react-router'
import Ekonomi from '@/features/ekonomi'

export const Route = createFileRoute('/_authenticated/ekonomi/')({
    component: Ekonomi,
})
