import type { FC, ReactNode } from 'react'
import type { GetStaticPaths, GetStaticProps } from 'next'
import type { QatarTourDetail } from '@/constants/qatar-preview'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Clock, MapPin } from 'lucide-react'

import { Seo } from '@/components/generals/seo'
import { Eyebrow } from '@/components/site/eyebrow'
import { CtaBand } from '@/components/site/cta-band'
import { PillLink } from '@/components/site/pill'
import { QatarTourExtras, QatarTourStatsStrip } from '@/components/sites/qatar-preview/qatar-tour-extras'
import { QatarPreviewLayout } from '@/components/sites/qatar-preview/qatar-preview-layout'

import {
    getQatarExperience,
    getQatarTourPage,
    qatarExperiences,
    qatarTourPages,
    qatarPreviewBasePath
} from '@/constants/qatar-preview'

interface QatarExperienceDetailProps {
    experience: QatarTourDetail
}

const QatarExperienceDetail: FC<QatarExperienceDetailProps> = ({ experience }): ReactNode => {
    return (
        <QatarPreviewLayout headerVariant='overlay'>
            <Seo
                title={`${experience.title} preview`}
                siteName='Zain Tourism'
                description={experience.summary}
                ogImage={experience.image}
            />

            <section className='relative isolate min-h-[88svh] overflow-hidden bg-ink'>
                <Image
                    src={experience.image}
                    alt={experience.imageAlt}
                    fill
                    priority
                    sizes='100vw'
                    className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/25 to-ink/85' />

                <div className='relative mx-auto flex min-h-[88svh] w-full max-w-[1440px] flex-col justify-end px-5 pb-8 pt-24 sm:px-8 sm:pb-12 sm:pt-28 lg:px-12 lg:pb-16'>
                    <nav aria-label='Breadcrumb' className='mb-auto pt-6'>
                        <ol className='flex flex-wrap items-center gap-2 text-[13px] text-white/60'>
                            <li>
                                <Link href={qatarPreviewBasePath} className='transition-colors hover:text-white'>
                                    Home
                                </Link>
                            </li>
                            <ChevronRight className='size-3.5' strokeWidth={1.6} aria-hidden='true' />
                            <li>
                                <Link href={`${qatarPreviewBasePath}/tours`} className='transition-colors hover:text-white'>
                                    Tours
                                </Link>
                            </li>
                            <ChevronRight className='size-3.5' strokeWidth={1.6} aria-hidden='true' />
                            <li className='text-white' aria-current='page'>
                                {experience.title}
                            </li>
                        </ol>
                    </nav>

                    <div className='flex flex-col gap-6 pt-10 sm:gap-7 sm:pt-16'>
                        <Eyebrow label={experience.category} tone='light' withDot />
                        <h1 className='heading-xl max-w-[14ch] text-[clamp(2.6rem,7vw,5.5rem)] text-white'>
                            {experience.title}
                        </h1>
                        <p className='max-w-xl text-[15px] leading-relaxed text-white/75'>
                            {experience.summary}
                        </p>
                        <div className='flex flex-wrap gap-x-5 gap-y-3 border-t border-white/15 pt-5 text-[14px] text-white/80 sm:gap-x-8 sm:gap-y-4 sm:pt-7'>
                            <span className='inline-flex items-center gap-2'>
                                <Clock className='size-4' strokeWidth={1.6} aria-hidden='true' />
                                {experience.duration}
                            </span>
                            <span className='inline-flex items-center gap-2'>
                                <MapPin className='size-4' strokeWidth={1.6} aria-hidden='true' />
                                {experience.pickup}
                            </span>
                            <span>{experience.bestFor}</span>
                            {typeof experience.rating === 'number' && (
                                <span>
                                    {`${experience.rating.toFixed(1)} rating`}

                                    {typeof experience.reviews === 'number' && ` (${experience.reviews} reviews)`}
                                </span>
                            )}
                        </div>
                        <div className='flex flex-wrap gap-3 pt-2'>
                            <PillLink href={`${qatarPreviewBasePath}/contact-us#enquiry`} variant='light' size='lg'>
                                Plan this tour
                            </PillLink>
                            <PillLink href={`${qatarPreviewBasePath}/tours`} variant='outlineLight' size='lg'>
                                View all tours
                            </PillLink>
                        </div>
                    </div>
                </div>
            </section>

            {experience.stats && <QatarTourStatsStrip stats={experience.stats} />}

            <section className='bg-background py-20 lg:py-28'>
                <div className='mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12'>
                    <div className='flex flex-col gap-5 lg:col-span-7'>
                        <Eyebrow label='Overview' number='01' />
                        <h2 className='heading-lg max-w-[18ch] text-[clamp(1.9rem,3.6vw,3rem)] text-ink'>
                            A flexible route with a clear starting point
                        </h2>
                        <p className='max-w-2xl text-[16px] leading-relaxed text-muted-foreground'>
                            {experience.overview}
                        </p>
                    </div>

                    <aside className='rounded-2xl border border-border bg-card p-6 sm:p-8 lg:col-span-5'>
                        <p className='eyebrow text-muted-foreground'>
                            Useful for
                        </p>
                        <p className='mt-4 heading-lg text-[24px] text-ink'>
                            {experience.bestFor}
                        </p>
                        <ul className='mt-6 flex flex-col gap-3 border-t border-border pt-6 text-[14px] leading-relaxed text-muted-foreground'>
                            {experience.highlights.map((highlight) => (
                                <li key={highlight} className='flex gap-3'>
                                    <span aria-hidden='true' className='mt-2 size-1.5 shrink-0 rounded-full bg-brand' />
                                    {highlight}
                                </li>
                            ))}
                        </ul>
                    </aside>
                </div>
            </section>

            <section className='bg-sand/60 py-20 lg:py-28'>
                <div className='mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12'>
                    <div className='flex flex-col gap-5 lg:col-span-4'>
                        <Eyebrow label='The shape of the day' number='02' />
                        <h2 className='heading-lg text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                            An itinerary that leaves room to adjust
                        </h2>
                        <p className='text-[15px] leading-relaxed text-muted-foreground'>
                            These stops are a planning guide, not a fixed promise. The final route should be confirmed around date, traffic, opening conditions and your group’s needs.
                        </p>
                    </div>

                    <ol className='flex flex-col lg:col-span-8'>
                        {experience.itinerary.map((step) => (
                            <li key={step.title} className='grid gap-3 border-t border-ink/15 py-6 first:pt-5 sm:grid-cols-[7rem_1fr]'>
                                <span className='eyebrow pt-1 text-brand'>
                                    {step.time}
                                </span>
                                <div className='flex flex-col gap-2'>
                                    <h3 className='heading-lg text-[20px] text-ink'>
                                        {step.title}
                                    </h3>
                                    <p className='text-[14px] leading-relaxed text-muted-foreground'>
                                        {step.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <QatarTourExtras detail={experience} />

            <CtaBand
                eyebrow='Start with the essentials'
                title='A unique experience for memorable sensations'
                description='Share the essentials needed to match an experience or transfer to your visit.'
                primaryLabel='Plan your visit'
                primaryHref='/contact-us#enquiry'
                secondaryLabel='Explore services'
                secondaryHref='/services'
                image='/images/doha-bay-sunset.jpg'
                imageAlt='Sunset over Doha Bay with the West Bay skyline across the water'
                imageClassName='opacity-90'
            />
        </QatarPreviewLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => ({
    paths: [...qatarExperiences, ...qatarTourPages].map((experience) => ({ params: { slug: experience.slug } })),
    fallback: false
})

export const getStaticProps: GetStaticProps<QatarExperienceDetailProps> = async ({ params }) => {
    const slug = typeof params?.slug === 'string' ? params.slug : ''
    const experience = getQatarExperience(slug) ?? getQatarTourPage(slug)

    if (!experience) return { notFound: true }

    return { props: { experience } }
}

export default QatarExperienceDetail
