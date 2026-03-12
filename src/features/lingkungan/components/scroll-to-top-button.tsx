'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > 300)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll ke atas"
            className={cn(
                // base layout
                'fixed bottom-8 right-8 z-50',
                'flex items-center justify-center',
                'w-12 h-12 rounded-2xl',
                // gradient background
                'bg-linear-to-br from-indigo-500 via-violet-500 to-purple-600',
                // glow / shadow
                'shadow-[0_4px_24px_rgba(99,102,241,0.55)]',
                // icon color
                'text-white',
                // interactions
                'hover:scale-110 hover:shadow-[0_6px_32px_rgba(99,102,241,0.7)]',
                'active:scale-95',
                // show/hide animation
                'transition-all duration-300 ease-out',
                visible
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 translate-y-5 pointer-events-none'
            )}
            style={{
                // extra: subtle inner highlight on the top-left edge
                boxShadow: visible
                    ? '0 4px 24px rgba(99,102,241,0.55), inset 0 1px 0 rgba(255,255,255,0.25)'
                    : undefined,
            }}
        >
            <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>
    )
}
