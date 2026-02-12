import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/ekonomi/')({
    beforeLoad: () => {
        throw redirect({
            to: '/ekonomi/monitoring',
        })
    },
})
