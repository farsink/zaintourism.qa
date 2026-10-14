import type { FC, ReactNode } from 'react'
import type { HeaderVariant } from '@/types'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Search, Menu, X } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Logo } from '@/components/site/logo'
import { PillLink } from '@/components/site/pill'
import { navigation, contactDetails } from '@/constants/site'

interface HeaderProps {
    variant?: HeaderVariant
}

export const Header: FC<HeaderProps> = ({ variant = 'solid' }): ReactNode => {
    const router = useRouter()
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    const isOverlay = variant === 'overlay'

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24)

        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        if (!menuOpen) return

        const previous = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = previous
        }
    }, [menuOpen])

    useEffect(() => {
        const close = () => setMenuOpen(false)

        router.events.on('routeChangeComplete', close)

        return () => router.events.off('routeChangeComplete', close)
    }, [router.events])

    const isActive = (href: string): boolean => {
        if (href === '/') return router.pathname === '/'
        return router.pathname === href || router.pathname.startsWith(`${href}/`)
    }

    return (
        <>
            <header
                className={cn(
                    'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
                    isOverlay
                        ? scrolled
                            ? 'bg-brand/95 backdrop-blur-md'
                            : 'bg-transparent'
                        : 'border-b border-brand/20 bg-brand'
                )}
            >
                <div className='mx-auto flex h-[4.5rem] w-full max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12'>
                    <Logo tone='light' />

                    <nav aria-label='Main' className='hidden items-center gap-9 lg:flex'>
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    'relative text-[14px] tracking-[-0.01em] transition-colors',
                                    isOverlay
                                        ? isActive(item.href) ? 'text-white' : 'text-white/70 hover:text-white'
                                        : isActive(item.href) ? 'text-white' : 'text-white/70 hover:text-white'
                                )}
                            >
                                {item.label}

                                {isActive(item.href) && (
                                    <span
                                        aria-hidden='true'
                                        className={cn(
                                            'absolute -bottom-2 left-1/2 size-1 -translate-x-1/2 rounded-full',
                                            'bg-white'
                                        )}
                                    />
                                )}
                            </Link>
                        ))}
                    </nav>

                    <div className='flex items-center gap-2 sm:gap-3'>
                        <Link
                            href='/destinations'
                            aria-label='Search destinations'
                            className={cn(
                                'hidden size-10 place-items-center rounded-full transition-colors sm:grid',
                                isOverlay
                                    ? 'text-white hover:bg-white/15'
                                    : 'text-white hover:bg-white/15'
                            )}
                        >
                            <Search className='size-[18px]' strokeWidth={1.6} />
                        </Link>

                        <PillLink
                            href='/contact'
                            variant='light'
                            size='md'
                            className='hidden sm:inline-flex'
                        >
                            Plan Your Trip
                        </PillLink>

                        <button
                            type='button'
                            onClick={() => setMenuOpen(true)}
                            aria-label='Open menu'
                            className={cn(
                                'grid size-10 place-items-center rounded-full transition-colors lg:hidden',
                                'text-white hover:bg-white/15'
                            )}
                        >
                            <Menu className='size-5' strokeWidth={1.6} />
                        </button>
                    </div>
                </div>
            </header>

            {menuOpen && (
                <div className='fixed inset-0 z-[60] flex flex-col bg-ink text-white lg:hidden'>
                    <div className='flex h-[4.5rem] items-center justify-between px-5 sm:px-8'>
                        <Logo tone='light' />

                        <button
                            type='button'
                            onClick={() => setMenuOpen(false)}
                            aria-label='Close menu'
                            className='grid size-10 place-items-center rounded-full text-white transition-colors hover:bg-white/15'
                        >
                            <X className='size-5' strokeWidth={1.6} />
                        </button>
                    </div>

                    <nav aria-label='Mobile' className='flex flex-1 flex-col justify-center gap-2 px-5 sm:px-8'>
                        {navigation.map((item, index) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                className='group flex items-baseline gap-4 border-b border-white/10 py-4'
                            >
                                <span className='eyebrow text-white/40'>
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                <span
                                    className={cn(
                                        'heading-lg text-[2rem] transition-opacity',
                                        isActive(item.href) ? 'text-white' : 'text-white/70 group-hover:text-white'
                                    )}
                                >
                                    {item.label}
                                </span>
                            </Link>
                        ))}
                    </nav>

                    <div className='flex flex-col gap-4 px-5 pb-10 sm:px-8'>
                        <PillLink href='/contact' variant='light' size='lg' className='w-full'>
                            Plan Your Trip
                        </PillLink>

                        <a href={`mailto:${contactDetails.email}`} className='text-[14px] text-white/60'>
                            {contactDetails.email}
                        </a>
                    </div>
                </div>
            )}
        </>
    )
}
