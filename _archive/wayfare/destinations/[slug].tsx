import type { FC, ReactNode } from 'react'
import type { GetStaticPaths, GetStaticProps } from 'next'
import type { Destination } from '@/types'

import Link from 'next/link'
import Image from 'next/image'
import { Star, ChevronRight } from 'lucide-react'

import { Seo } from '@/components/generals/seo'
import { Layout } from '@/components/generals/layout'
import { Icon } from '@/components/site/icon'
import { Eyebrow } from '@/components/site/eyebrow'
import { PillLink } from '@/components/site/pill'
import { DestinationCard, tagIcon } from '@/components/site/destination-card'
import { CtaBand } from '@/components/site/cta-band'
import { travelPackages } from '@/constants/packages'

import {
    destinations,
    getDestinationBySlug,
    getRelatedDestinations
} from '@/constants/destinations'

interface DestinationDetailProps {
    destination: Destination
    related: Destination[]
    packageSlug: string | null
}

const DestinationDetail: FC<DestinationDetailProps> = ({
    destination,
    related,
    packageSlug
}): ReactNode => {
    return (
        <Layout headerVariant='overlay'>
            <Seo
                title={`${destination.name}, ${destination.country}`}
                description={destination.summary}
                ogImage={destination.image}
            />

            <section className='relative isolate min-h-[88svh] overflow-hidden bg-ink'>
                <Image
                    src={destination.image}
                    alt={`${destination.name}, ${destination.country}`}
                    fill
                    priority
                    sizes='100vw'
                    className='object-cover'
                />

                <div className='absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/25 to-ink/85' />

                <div className='relative mx-auto flex min-h-[88svh] w-full max-w-[1440px] flex-col justify-end px-5 pb-12 pt-28 sm:px-8 lg:px-12 lg:pb-16'>
                    <nav aria-label='Breadcrumb' className='mb-auto pt-6'>
                        <ol className='flex flex-wrap items-center gap-2 text-[13px] text-white/60'>
                            <li>
                                <Link href='/' className='transition-colors hover:text-white'>
                                    Home
                                </Link>
                            </li>

                            <ChevronRight className='size-3.5' strokeWidth={1.6} aria-hidden='true' />

                            <li>
                                <Link href='/destinations' className='transition-colors hover:text-white'>
                                    Destinations
                                </Link>
                            </li>

                            <ChevronRight className='size-3.5' strokeWidth={1.6} aria-hidden='true' />

                            <li className='text-white' aria-current='page'>
                                {destination.name}
                            </li>
                        </ol>
                    </nav>

                    <div className='flex flex-col gap-7 pt-16'>
                        <Eyebrow label={`${destination.region} · ${destination.category}`} tone='light' withDot />

                        <h1 className='heading-xl max-w-[13ch] text-[clamp(2.6rem,7vw,5.5rem)] text-white'>
                            {`${destination.name}, ${destination.country}`}
                        </h1>

                        <p className='max-w-md text-[15px] leading-relaxed text-white/75'>
                            {destination.tagline}
                        </p>

                        <div className='flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/15 pt-7'>
                            <span className='inline-flex items-center gap-2 text-[14px] text-white'>
                                <Star className='size-4 fill-white text-white' strokeWidth={0} />
                                {destination.rating}

                                <span className='text-white/55'>
                                    {`(${destination.reviews} reviews)`}
                                </span>
                            </span>

                            <span className='text-[14px] text-white/75'>
                                {destination.duration}
                            </span>

                            <span className='text-[14px] text-white/75'>
                                {destination.bestSeason}
                            </span>

                            <span className='text-[14px] text-white'>
                                {`From $${destination.priceFrom.toLocaleString('en-US')} per person`}
                            </span>
                        </div>

                        <div className='flex flex-wrap items-center gap-3 pt-2'>
                            <PillLink href='#plan' variant='light' size='lg'>
                                Plan your trip
                            </PillLink>

                            <PillLink href='#itinerary' variant='outlineLight' size='lg'>
                                See the route
                            </PillLink>
                        </div>
                    </div>
                </div>
            </section>

            <section id='overview' className='bg-background py-20 lg:py-28'>
                <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                    <div className='grid gap-14 lg:grid-cols-12 lg:gap-16'>
                        <div className='flex flex-col gap-7 lg:col-span-7'>
                            <Eyebrow label='Overview' number='01' />

                            <h2 className='heading-lg text-[clamp(1.9rem,3.6vw,3rem)] text-ink'>
                                {destination.tagline}
                            </h2>

                            <p className='max-w-2xl text-[16px] leading-relaxed text-muted-foreground'>
                                {destination.summary}
                            </p>

                            <div className='flex flex-wrap gap-2 pt-2'>
                                {destination.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className='inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-[13px] text-ink'
                                    >
                                        <Icon name={tagIcon(tag)} className='size-3.5' />
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className='lg:col-span-5'>
                            <div className='rounded-2xl border border-border bg-card p-6 sm:p-8'>
                                <p className='eyebrow text-muted-foreground'>
                                    Key information
                                </p>

                                <dl className='mt-6 divide-y divide-border'>
                                    {destination.keyFacts.map((fact) => (
                                        <div key={fact.label} className='flex items-start gap-4 py-4 first:pt-0 last:pb-0'>
                                            <span className='mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-sand text-ink'>
                                                <Icon name={fact.icon} className='size-4' />
                                            </span>

                                            <div className='flex flex-1 flex-col gap-0.5'>
                                                <dt className='text-[12px] uppercase tracking-[0.12em] text-muted-foreground'>
                                                    {fact.label}
                                                </dt>

                                                <dd className='text-[14px] text-ink'>
                                                    {fact.value}
                                                </dd>
                                            </div>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='experience' className='bg-background pb-20 lg:pb-28'>
                <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                    <div className='flex flex-col gap-5'>
                        <Eyebrow label='Things to experience' number='02' />

                        <h2 className='heading-lg max-w-[18ch] text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                            {`What a week in ${destination.name} actually looks like`}
                        </h2>
                    </div>

                    <div className='mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14'>
                        <ul className='flex flex-col divide-y divide-border lg:col-span-6'>
                            {destination.experiences.map((experience) => (
                                <li key={experience.title} className='flex items-start gap-5 py-6 first:pt-0'>
                                    <span className='grid size-11 shrink-0 place-items-center rounded-full border border-ink/15 text-ink'>
                                        <Icon name={experience.icon} className='size-[18px]' />
                                    </span>

                                    <div className='flex flex-col gap-1.5'>
                                        <h3 className='heading-lg text-[18px] text-ink'>
                                            {experience.title}
                                        </h3>

                                        <p className='text-[14px] leading-relaxed text-muted-foreground'>
                                            {experience.description}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className='grid grid-cols-2 gap-4 lg:col-span-6'>
                            <div className='relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl bg-sand'>
                                <Image
                                    src={destination.gallery[0]}
                                    alt={`A scene from ${destination.name}`}
                                    fill
                                    sizes='(max-width: 1024px) 100vw, 46vw'
                                    className='object-cover'
                                />
                            </div>

                            {destination.gallery.slice(1, 3).map((image, index) => (
                                <div
                                    key={image}
                                    className='relative aspect-square overflow-hidden rounded-2xl bg-sand'
                                >
                                    <Image
                                        src={image}
                                        alt={`${destination.name} detail ${index + 1}`}
                                        fill
                                        sizes='(max-width: 1024px) 50vw, 23vw'
                                        className='object-cover'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id='itinerary' className='bg-sand/60 py-20 lg:py-28'>
                <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                    <div className='grid gap-12 lg:grid-cols-12 lg:gap-16'>
                        <div className='flex flex-col gap-5 lg:col-span-4'>
                            <Eyebrow label='The route' number='03' />

                            <h2 className='heading-lg text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                                A suggested itinerary
                            </h2>

                            <p className='max-w-sm text-[15px] leading-relaxed text-muted-foreground'>
                                This is the shape most people travel. Every part of it can be
                                lengthened, swapped or dropped, and private departures run on any
                                date you like.
                            </p>

                            <PillLink href='/contact' className='mt-3 self-start'>
                                Adjust this route
                            </PillLink>
                        </div>

                        <ol className='relative flex flex-col lg:col-span-8'>
                            {destination.itinerary.map((day) => (
                                <li
                                    key={day.day}
                                    className='relative flex flex-col gap-3 border-l border-ink/15 pb-10 pl-8 last:border-transparent last:pb-0 sm:flex-row sm:gap-10'
                                >
                                    <span
                                        aria-hidden='true'
                                        className='absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-ink'
                                    />

                                    <span className='eyebrow w-[92px] shrink-0 pt-1 text-brand'>
                                        {day.day}
                                    </span>

                                    <div className='flex flex-col gap-2'>
                                        <h3 className='heading-lg text-[20px] text-ink'>
                                            {day.title}
                                        </h3>

                                        <p className='max-w-xl text-[14px] leading-relaxed text-muted-foreground'>
                                            {day.description}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            <section id='stays' className='bg-background py-20 lg:py-28'>
                <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                    <div className='flex flex-wrap items-end justify-between gap-6'>
                        <div className='flex flex-col gap-5'>
                            <Eyebrow label='Where you stay' number='04' />

                            <h2 className='heading-lg text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                                Three places we book here
                            </h2>
                        </div>

                        <p className='max-w-sm text-[14px] leading-relaxed text-muted-foreground'>
                            Family guesthouses, refuges and restored houses. We have slept in every
                            one of them, and the prices below are what you would pay direct.
                        </p>
                    </div>

                    <div className='mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                        {destination.stays.map((stay) => (
                            <article
                                key={stay.name}
                                className='flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-2.5'
                            >
                                <div className='relative aspect-[4/3] overflow-hidden rounded-xl bg-sand'>
                                    <Image
                                        src={stay.image}
                                        alt={stay.name}
                                        fill
                                        sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                                        className='object-cover'
                                    />

                                    <span className='absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink'>
                                        {stay.type}
                                    </span>
                                </div>

                                <div className='flex flex-1 flex-col gap-3 p-4 pt-5'>
                                    <h3 className='heading-lg text-[20px] text-ink'>
                                        {stay.name}
                                    </h3>

                                    <p className='text-[14px] leading-relaxed text-muted-foreground'>
                                        {stay.description}
                                    </p>

                                    <p className='mt-auto border-t border-border pt-4 text-[14px] text-ink'>
                                        {stay.price}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id='story' className='bg-ink py-20 text-white lg:py-28'>
                <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                    <div className='grid items-center gap-12 lg:grid-cols-12 lg:gap-16'>
                        <div className='relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink lg:col-span-5'>
                            <Image
                                src={destination.gallery[destination.gallery.length - 1]}
                                alt={`An editorial photograph from ${destination.name}`}
                                fill
                                sizes='(max-width: 1024px) 100vw, 40vw'
                                className='object-cover'
                            />
                        </div>

                        <div className='flex flex-col gap-8 lg:col-span-7'>
                            <Eyebrow label='From the field' number='05' tone='light' />

                            <blockquote className='heading-lg text-[clamp(1.5rem,2.8vw,2.25rem)] text-white'>
                                {`“${destination.storyQuote}”`}
                            </blockquote>

                            <p className='max-w-2xl text-[15px] leading-relaxed text-white/65'>
                                {destination.story}
                            </p>

                            <p className='text-[13px] text-white/45'>
                                Written by the Wayfare planner who runs this route.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id='related' className='bg-background py-20 lg:py-28'>
                <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                    <div className='flex flex-wrap items-end justify-between gap-6'>
                        <div className='flex flex-col gap-5'>
                            <Eyebrow label='You might also like' number='06' />

                            <h2 className='heading-lg text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                                Places with a similar feel
                            </h2>
                        </div>

                        <PillLink href='/destinations' variant='outline'>
                            All destinations
                        </PillLink>
                    </div>

                    <div className='mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                        {related.map((item) => (
                            <DestinationCard key={item.slug} destination={item} />
                        ))}
                    </div>
                </div>
            </section>

            <div id='plan'>
                <CtaBand
                    eyebrow='Plan your trip'
                    title={`Let us build your ${destination.name} trip around you`}
                    description='Send us your dates and the kind of days you want. We will come back with a route, a realistic price and an honest view on whether the timing works.'
                    primaryLabel='Start your enquiry'
                    primaryHref='/contact'
                    secondaryLabel={packageSlug ? 'See the full package' : 'Browse packages'}
                    secondaryHref={packageSlug ? `/packages#${packageSlug}` : '/packages'}
                    image={destination.image}
                />
            </div>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: destinations.map((destination) => ({ params: { slug: destination.slug } })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<DestinationDetailProps> = async ({ params }) => {
    const slug = typeof params?.slug === 'string' ? params.slug : ''
    const destination = getDestinationBySlug(slug)

    if (!destination) {
        return { notFound: true }
    }

    const linkedPackage = travelPackages.find((item) => item.destinationSlug === destination.slug)

    return {
        props: {
            destination,
            related: getRelatedDestinations(destination.slug, 3),
            packageSlug: linkedPackage?.slug ?? null
        }
    }
}

export default DestinationDetail
