import type { FC, ReactNode } from 'react'

import Head from 'next/head'

import { Layout } from '@/components/generals/layout'
import { Eyebrow } from '@/components/site/eyebrow'
import { PillLink } from '@/components/site/pill'
import { contactDetails } from '@/constants/site'

const ServerError: FC = (): ReactNode => {
    return (
        <Layout>
            <Head>
                <title>
                    Something went wrong - Zain Tourism
                </title>

                <meta name='robots' content='noindex' />
            </Head>

            <section className='bg-background py-20 sm:py-28 lg:py-40'>
                <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                    <div className='flex max-w-2xl flex-col gap-6 sm:gap-8'>
                        <Eyebrow label='Error 500' withDot />

                        <h1 className='heading-xl text-[clamp(2.5rem,6vw,4.5rem)] text-ink'>
                            Something went wrong on our side
                        </h1>

                        <p className='max-w-md text-[15px] leading-relaxed text-muted-foreground'>
                            This one is on us, not on you. Try again in a moment, and if it keeps
                            happening, send us a note and we will sort it out.
                        </p>

                        <div className='flex flex-wrap items-center gap-4 pt-2 sm:gap-5'>
                            <PillLink href='/' size='lg'>
                                Back to home
                            </PillLink>

                            <a
                                href={`mailto:${contactDetails.email}`}
                                className='text-[14px] text-muted-foreground underline underline-offset-4 transition-colors hover:text-ink'
                            >
                                {contactDetails.email}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default ServerError
