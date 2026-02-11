import { createFileRoute } from '@tanstack/react-router'
import Kesehatan from '@/features/kesehatan'

export const Route = createFileRoute('/_authenticated/kesehatan/')({
    component: Kesehatan,
})
