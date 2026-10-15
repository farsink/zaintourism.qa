import type { FC, ReactNode } from 'react'
import type { NavItem } from '@/types'

import Link from 'next/link'
import { ArrowUp } from 'lucide-react'

import { Logo } from '@/components/site/logo'
import { PillLink } from '@/components/site/pill'
import { siteTagline, footerNavigation, contactDetails } from '@/constants/site'

export interface FooterGroup {
    title: string
    items: NavItem[]
}

interface FooterProps {
    name?: string
    homeHref?: string
    description?: string
    contactHref?: string
    groups?: FooterGroup[]
    tagline?: string
}

export const Footer: FC<FooterProps> = ({
    name,
    homeHref = '/',
    description = siteTagline,
    contactHref = '/contact',
    groups = footerNavigation,
    tagline = 'Made for people who would rather be out there.'
}): ReactNode => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className='border-t-4 border-brand bg-ink text-white'>
            <div className='mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20'>
                <div className='grid gap-12 lg:grid-cols-[1.05fr_1.95fr] lg:gap-16'>
                    <div className='flex max-w-sm flex-col items-start gap-5'>
                        <span className='eyebrow text-white/45'>
                            Travel, considered
                        </span>

                        <Logo href={homeHref} name={name} tone='light' />

                        <p className='max-w-[28rem] text-[15px] leading-relaxed text-white/60'>
                            {description}
                        </p>

                        <PillLink href={contactHref} variant='light' size='md'>
                            Start a conversation
                        </PillLink>

                        {!name && (
                            <a
                                href={`mailto:${contactDetails.email}`}
                                className='text-[14px] text-white/55 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'
                            >
                                {contactDetails.email}
                            </a>
                        )}
                    </div>

                    <div className='grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3'>
                        {groups.map((group) => (
                            <div key={group.title} className='flex flex-col gap-5'>
                                <p className='eyebrow text-white/45'>
                                    {group.title}
                                </p>

                                <ul className='flex flex-col gap-1'>
                                    {group.items.map((item) => (
                                        <li key={item.label}>
                                            {item.href.startsWith('http') ? (
                                                <a
                                                    href={item.href}
                                                    target='_blank'
                                                    rel='noreferrer'
                                                    className='inline-flex min-h-9 items-center text-[14px] text-white/65 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'
                                                >
                                                    {item.label}
                                                </a>
                                            ) : (
                                                <Link
                                                    href={item.href}
                                                    className='inline-flex min-h-9 items-center text-[14px] text-white/65 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'
                                                >
                                                    {item.label}
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='border-t border-white/10'>
                <div className='mx-auto flex w-full max-w-[1440px] flex-col gap-5 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12'>
                    <p className='text-[13px] text-white/45'>
                        © 2026 {name ?? 'Wayfare Travels'}. All rights reserved.
                    </p>

                    <div className='flex w-full items-center justify-between gap-6 sm:w-auto'>
                        <p className='text-[13px] text-white/45'>
                            {tagline}
                        </p>

                        <button
                            type='button'
                            onClick={scrollToTop}
                            aria-label='Back to top'
                            className='grid size-10 shrink-0 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-white/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'
                        >
                            <ArrowUp className='size-4' strokeWidth={1.75} aria-hidden='true' />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
