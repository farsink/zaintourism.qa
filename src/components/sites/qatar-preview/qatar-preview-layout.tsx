import type { FC, ReactNode } from 'react'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChevronDown, Menu, X } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Logo } from '@/components/site/logo'
import { PillLink } from '@/components/site/pill'
import { WhatsAppBrandIcon } from '@/components/sites/qatar-preview/whatsapp-brand-icon'
import { getQatarPreviewNavigation, qatarPreviewBasePath, qatarToursMenu } from '@/constants/qatar-preview'

interface QatarPreviewLayoutProps {
    children: ReactNode
    headerVariant?: 'solid' | 'overlay'
    basePath?: string
    contactHref?: string
}

export const QatarPreviewLayout: FC<QatarPreviewLayoutProps> = ({
    children,
    headerVariant = 'solid',
    basePath = qatarPreviewBasePath,
    contactHref: contactHrefOverride
}): ReactNode => {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [toursOpen, setToursOpen] = useState(false)
    const isOverlay = headerVariant === 'overlay'
    const router = useRouter()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 24)

        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (!menuOpen) return

        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = previousOverflow
        }
    }, [menuOpen])

    useEffect(() => {
        const close = () => {
            setMenuOpen(false)
            setToursOpen(false)
        }

        router.events.on('routeChangeComplete', close)

        return () => router.events.off('routeChangeComplete', close)
    }, [router.events])

    useEffect(() => {
        if (!toursOpen) return

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setToursOpen(false)
        }

        window.addEventListener('keydown', onKeyDown)

        return () => window.removeEventListener('keydown', onKeyDown)
    }, [toursOpen])

    const contactHref = contactHrefOverride ?? `${basePath}/contact-us#enquiry`
    const navigation = getQatarPreviewNavigation(basePath)
    const isRootHomepage = basePath === ''
    const navigationLabel = isRootHomepage ? 'Main navigation' : 'Preview navigation'

    return (
        <div className='flex min-h-screen flex-col bg-background'>
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
                <div className='mx-auto flex h-[4.5rem] w-full max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12'>
                    <Logo href={basePath || '/'} name='Zain Tourism' tone='light' />

                    <nav aria-label={navigationLabel} className='hidden items-center gap-9 lg:flex'>
                        {navigation.map((item) => item.label === 'Tours'
                            ? (
                                <div key={item.href} className='relative'>
                                    <button
                                        type='button'
                                        onClick={() => setToursOpen((open) => !open)}
                                        aria-expanded={toursOpen}
                                        aria-haspopup='true'
                                        className={cn(
                                            'inline-flex items-center gap-1.5 text-[17px] tracking-[-0.01em] transition-colors',
                                            toursOpen ? 'text-white' : 'text-white/75 hover:text-white'
                                        )}
                                    >
                                        {item.label}

                                        <ChevronDown
                                            className={cn('size-4 transition-transform duration-300', toursOpen && 'rotate-180')}
                                            strokeWidth={1.6}
                                            aria-hidden='true'
                                        />
                                    </button>

                                    {toursOpen && (
                                        <>
                                            <button
                                                type='button'
                                                aria-hidden='true'
                                                tabIndex={-1}
                                                onClick={() => setToursOpen(false)}
                                                className='fixed inset-0 z-40 cursor-default'
                                            />

                                            <div className='absolute left-0 top-full z-50 mt-4 w-[24rem] rounded-2xl border border-border bg-card p-2 shadow-xl shadow-ink/10 animate-in fade-in slide-in-from-top-2 duration-200 ease-out'>
                                                {qatarToursMenu.map((tour, index) => (
                                                    <Link
                                                        key={tour.href}
                                                        href={tour.href}
                                                        onClick={() => setToursOpen(false)}
                                                        className={cn(
                                                            'block rounded-xl px-4 py-3 transition-colors hover:bg-brand/5 focus-visible:bg-brand/5 focus-visible:outline-none',
                                                            index === 0 && 'mb-1 border-b border-ink/10'
                                                        )}
                                                    >
                                                        <span className='block text-[15px] font-semibold text-ink'>
                                                            {tour.label}
                                                        </span>

                                                        {tour.description && (
                                                            <span className='mt-0.5 block text-[13px] text-muted-foreground'>
                                                                {tour.description}
                                                            </span>
                                                        )}
                                                    </Link>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            )
                            : (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        'text-[17px] tracking-[-0.01em] transition-colors',
                                        'text-white/75 hover:text-white'
                                    )}
                                >
                                    {item.label}
                                </Link>
                            ))}
                    </nav>

                    <div className='flex items-center gap-1.5 sm:gap-2'>
                        <PillLink
                            href={contactHref}
                            variant='outlineLight'
                            size='md'
                            withArrow={false}
                            className='inline-flex'
                        >
                            <WhatsAppBrandIcon className='size-[18px] shrink-0' />
                            WhatsApp
                        </PillLink>

                        <PillLink href={contactHref} variant='light' size='md' className='hidden md:inline-flex'>
                            Book now
                        </PillLink>

                        <button
                            type='button'
                            onClick={() => setMenuOpen(true)}
                            aria-label={`Open ${isRootHomepage ? 'main' : 'preview'} navigation menu`}
                            className={cn(
                                'grid size-10 place-items-center rounded-full transition-colors active:scale-[0.96] lg:hidden',
                                'text-white hover:bg-white/15'
                            )}
                        >
                            <Menu className='size-5' strokeWidth={1.6} aria-hidden='true' />
                        </button>
                    </div>
                </div>
            </header>

            {menuOpen && (
                <div className='fixed inset-0 z-[60] flex flex-col bg-brand text-white lg:hidden'>
                    <div className='flex h-[4.5rem] items-center justify-between px-5 sm:px-8'>
                        <Logo href={basePath || '/'} name='Zain Tourism' tone='light' />

                        <button
                            type='button'
                            onClick={() => setMenuOpen(false)}
                            aria-label={`Close ${isRootHomepage ? 'main' : 'preview'} navigation menu`}
                            className='grid size-10 place-items-center rounded-full text-white transition-colors hover:bg-white/15 active:scale-[0.96]'
                        >
                            <X className='size-5' strokeWidth={1.6} aria-hidden='true' />
                        </button>
                    </div>

                    <nav aria-label={`${navigationLabel} menu`} className='flex flex-1 flex-col justify-center gap-2 px-5 sm:px-8'>
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

                                <span className='heading-lg text-[2rem] text-white/75 transition-colors group-hover:text-white'>
                                    {item.label}
                                </span>
                            </Link>
                        ))}
                    </nav>

                    <div className='px-5 pb-10 sm:px-8'>
                        <PillLink href={contactHref} variant='light' size='lg' className='w-full'>
                            Book now
                        </PillLink>
                    </div>
                </div>
            )}

            <main id='main-content' className={cn('flex-1', headerVariant === 'solid' && 'pt-[4.5rem]')}>
                {children}
            </main>

            <footer className='bg-ink text-white'>
                <div className='mx-auto flex w-full max-w-[1440px] flex-col gap-7 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-12'>
                    <div className='flex flex-col gap-4'>
                        <Logo href={basePath || '/'} name='Zain Tourism' tone='light' />
                        <p className='max-w-sm text-[14px] leading-relaxed text-white/55'>
                            {isRootHomepage
                                ? 'Private Qatar travel planning for city experiences, desert days, layovers and onward journeys.'
                                : 'Qatar travel planning preview. Service descriptions and contact actions are local examples pending business review.'}
                        </p>
                    </div>

                    <div className='flex flex-wrap gap-x-6 gap-y-3 text-[14px] text-white/65'>
                        {navigation.slice(1).map((item) => (
                            <Link key={item.href} href={item.href} className='transition-colors hover:text-white'>
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    )
}
