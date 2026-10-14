import type { FC, ReactNode } from 'react'

import Head from 'next/head'
import Image from 'next/image'

import { Eyebrow } from '@/components/site/eyebrow'
import { PillLink } from '@/components/site/pill'
import { QatarTourCard } from '@/components/sites/qatar-preview/qatar-tour-card'
import { QatarPreviewLayout } from '@/components/sites/qatar-preview/qatar-preview-layout'
import { featuredQatarTours } from '@/constants/qatar-preview'

const NotFound: FC = (): ReactNode => {
    return (
        <QatarPreviewLayout>
            <Head>
                <title>
                    Page not found - Zain Tourism
                </title>

                <meta name='robots' content='noindex' />
            </Head>

            <section className='relative isolate overflow-hidden bg-ink'>
                <Image
                    src='/images/footer-explore.jpg'
                    alt=''
                    fill
                    sizes='100vw'
                    className='object-cover opacity-40'
                />

                <div className='absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40' />

                <div className='relative mx-auto w-full max-w-[1440px] px-5 py-28 sm:px-8 lg:px-12 lg:py-36'>
                    <div className='flex max-w-2xl flex-col gap-8'>
                        <Eyebrow label='Error 404' tone='light' withDot />

                        <h1 className='heading-xl text-[clamp(2.5rem,6vw,4.5rem)] text-white'>
                            This road does not go anywhere
                        </h1>

                        <p className='max-w-md text-[15px] leading-relaxed text-white/70'>
                            The page you were looking for has moved, or it never existed. Either way,
                            there are better places to be standing.
                        </p>

                        <div className='flex flex-wrap gap-3 pt-2'>
                            <PillLink href='/' variant='light' size='lg'>
                                Back to home
                            </PillLink>

                            <PillLink href='/tours' variant='outlineLight' size='lg'>
                                Browse tours
                            </PillLink>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-background py-20 lg:py-24'>
                <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                    <h2 className='heading-lg text-[clamp(1.6rem,3vw,2.25rem)] text-ink'>
                        Try one of these instead
                    </h2>

                    <div className='mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                        {featuredQatarTours.slice(0, 3).map((tour) => (
                            <QatarTourCard key={tour.slug} tour={tour} />
                        ))}
                    </div>
                </div>
            </section>
        </QatarPreviewLayout>
    )
}

export default NotFound
