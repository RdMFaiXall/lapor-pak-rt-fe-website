import { type QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext, Outlet, ScrollRestoration, useLocation } from '@tanstack/react-router'
import { useEffect } from 'react'
import { Toaster } from '@/components/ui/sonner'
import { NavigationProgress } from '@/components/navigation-progress'
import { GeneralError } from '@/features/errors/general-error'
import { NotFoundError } from '@/features/errors/not-found-error'
import { SearchProvider } from '@/context/search-provider'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.scrollTo(0, 0)
    document.body.scrollTo(0, 0)

    requestAnimationFrame(() => {
      const scrollableAreas = document.querySelectorAll(
        '.overflow-y-auto, .overflow-auto, main, [data-sidebar="content"], [data-slot="sidebar-inset"], #root'
      )
      scrollableAreas.forEach(area => {
        area.scrollTo(0, 0)
      })
    })
  }, [pathname])

  return null
}

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: () => {
    return (
      <>
        <SearchProvider>
          <NavigationProgress />
          <ScrollToTop />
          <Outlet />
          <ScrollRestoration />
          <Toaster duration={5000} position='top-center' richColors />
        </SearchProvider>
        {import.meta.env.MODE === 'development' && (
          <>
          </>
        )}
      </>
    )
  },
  notFoundComponent: NotFoundError,
  errorComponent: GeneralError,
})
