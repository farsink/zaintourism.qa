import type { FC, ReactNode } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUp } from 'lucide-react'

import { Logo } from '@/components/site/logo'
import { siteTagline, footerNavigation, contactDetails } from '@/constants/site'

export const Footer: FC = (): ReactNode => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className='bg-ink text-white'>
            <div className='mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20'>
                <div className='grid gap-12 lg:grid-cols-12 lg:gap-10'>
                    <div className='flex flex-col gap-5 lg:col-span-3'>
                        <Logo tone='light' />

                        <p className='max-w-[220px] text-[14px] leading-relaxed text-white/55'>
                            {siteTagline}
                        </p>

                        <a
                            href={`mailto:${contactDetails.email}`}
                            className='mt-2 text-[14px] text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline'
                        >
                            {contactDetails.email}
                        </a>
                    </div>

                    <div className='grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-6'>
                        {footerNavigation.map((group) => (
                            <div key={group.title} className='flex flex-col gap-5'>
                                <p className='eyebrow text-white/40'>
                                    {group.title}
                                </p>

                                <ul className='flex flex-col gap-3'>
                                    {group.items.map((item) => (
                                        <li key={item.label}>
                                            {item.href.startsWith('http') ? (
                                                <a
                                                    href={item.href}
                                                    target='_blank'
                                                    rel='noreferrer'
                                                    className='text-[14px] text-white/65 transition-colors hover:text-white'
                                                >
                                                    {item.label}
                                                </a>
                                            ) : (
                                                <Link
                                                    href={item.href}
                                                    className='text-[14px] text-white/65 transition-colors hover:text-white'
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

                    <div className='lg:col-span-3'>
                        <Link
                            href='/destinations'
                            className='group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl sm:aspect-[16/9] lg:aspect-[4/3]'
                        >
                            <Image
                                src='/images/footer-explore.jpg'
                                alt='A dusty road running through desert rock formations'
                                fill
                                sizes='(max-width: 1024px) 100vw, 320px'
                                className='object-cover transition-transform duration-700 group-hover:scale-105'
                            />

                            <div className='absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent' />

                            <p className='heading-lg absolute bottom-5 left-5 right-5 text-[20px] text-white'>
                                Explore the world
                                <br />
                                with open eyes.
                            </p>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='border-t border-white/10'>
                <div className='mx-auto flex w-full max-w-[1440px] flex-col items-start gap-5 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12'>
                    <p className='text-[13px] text-white/45'>
                        © 2026 Wayfare Travels. All rights reserved.
                    </p>

                    <div className='flex w-full items-center justify-between gap-6 sm:w-auto'>
                        <p className='text-[13px] text-white/45'>
                            Made for people who would rather be out there.
                        </p>

                        <button
                            type='button'
                            onClick={scrollToTop}
                            aria-label='Back to top'
                            className='grid size-10 shrink-0 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-white/60 hover:bg-white/10'
                        >
                            <ArrowUp className='size-4' strokeWidth={1.75} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
