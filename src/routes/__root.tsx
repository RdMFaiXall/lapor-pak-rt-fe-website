import { type QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext, Outlet, ScrollRestoration, useLocation } from '@tanstack/react-router'
import { useEffect } from 'react'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Toaster } from '@/components/ui/sonner'
import { NavigationProgress } from '@/components/navigation-progress'
import { GeneralError } from '@/features/errors/general-error'
import { NotFoundError } from '@/features/errors/not-found-error'
import { SearchProvider } from '@/context/search-provider'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll window/body
    window.scrollTo(0, 0)
    document.documentElement.scrollTo(0, 0)
    document.body.scrollTo(0, 0)

    // Sometimes layouts wrap main content in a screen-height overflow container. 
    // Wait for the next paint frame so DOM is ready
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
          <Toaster duration={5000} />
        </SearchProvider>
        {import.meta.env.MODE === 'development' && (
          <>
            {/* <ReactQueryDevtools buttonPosition='bottom-left' />
            <TanStackRouterDevtools position='bottom-right' /> */}
          </>
        )}
      </>
    )
  },
  notFoundComponent: NotFoundError,
  errorComponent: GeneralError,
})
