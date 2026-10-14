import type { FC, ReactNode } from 'react'
import type { QatarTour } from '@/constants/qatar-preview'

import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import Image from 'next/image'

import { Seo } from '@/components/generals/seo'
import { Eyebrow } from '@/components/site/eyebrow'
import { CtaBand } from '@/components/site/cta-band'
import { PillLink } from '@/components/site/pill'
import { QatarTourStatsStrip } from '@/components/sites/qatar-preview/qatar-tour-extras'
import { QatarTourCard } from '@/components/sites/qatar-preview/qatar-tour-card'
import { QatarPreviewLayout } from '@/components/sites/qatar-preview/qatar-preview-layout'

import { featuredQatarTours, remainingQatarTours } from '@/constants/qatar-preview'

const allQatarTours: QatarTour[] = [...featuredQatarTours, ...remainingQatarTours]

const tourBySlug = new Map(allQatarTours.map((tour) => [tour.slug, tour]))

const pick = (slug: string): QatarTour => {
    const tour = tourBySlug.get(slug)

    if (!tour) throw new Error(`Unknown tour slug: ${slug}`)

    return tour
}

const categorySections: { id: string, label: string, heading: string, intro: string, slugs: string[] }[] = [
    {
        id: 'desert-safaris',
        label: 'Desert & dunes',
        heading: 'Desert safaris and the Inland Sea',
        intro: 'Classic half-day dune routes and the overnight camp, ending where the sand meets the Gulf.',
        slugs: ['desert-safari-qatar', 'overnight-desert-safari']
    },
    {
        id: 'city-tours',
        label: 'City sightseeing',
        heading: 'Doha city tours',
        intro: 'The skyline, souq and waterfront in private cars — express or a gentler pace with a gondola detour.',
        slugs: ['doha-city-tour', 'villaggio-gondola-tour']
    },
    {
        id: 'culture',
        label: 'Museums & culture',
        heading: 'Museums, heritage and culture',
        intro: 'From the museums of Doha to the fort at Al Zubarah — slow itineraries for the story of Qatar.',
        slugs: ['museum-souq-waqif-tour', 'national-museum-katara-lusail', 'west-coast-camel-race-track', 'north-qatar-half-day']
    },
    {
        id: 'dhow-cruises',
        label: 'Dhow cruises',
        heading: 'On the water',
        intro: 'An evening aboard a traditional wooden dhow, with the skyline turning gold across Doha Bay.',
        slugs: ['sunset-dhow-cruise']
    },
    {
        id: 'short-stay',
        label: 'Layover & cruise',
        heading: 'Layover and shore time',
        intro: 'Built around arrival times, with pickup from Hamad International Airport or the cruise terminal.',
        slugs: ['doha-layover-tour']
    },
    {
        id: 'combos',
        label: 'Combos & indoor',
        heading: 'See more in one trip',
        intro: 'Two signature experiences joined into a single day, plus indoor tickets with private transfer.',
        slugs: ['doha-desert-combo', 'snow-dunes-qatar']
    }
]

const tourFinder = categorySections.map((section) => ({
    label: section.label,
    heading: section.heading,
    href: `#${section.id}`
}))

const chooser: { situation: string, title: string, text: string, href: string }[] = [
    {
        situation: 'First visit to Doha',
        title: 'Start with the city tour',
        text: 'A broad private introduction to the souq, the Corniche and the modern districts.',
        href: '/tours/doha-city-tour'
    },
    {
        situation: 'Adventure and landscapes',
        title: 'Choose the desert safari',
        text: 'Dune driving, camels and the Inland Sea in one door-to-door afternoon.',
        href: '/tours/desert-safari-qatar'
    },
    {
        situation: 'Art, history and culture',
        title: 'Choose the museum route',
        text: 'The Museum of Islamic Art paired with the lanes of the old souq.',
        href: '/tours/museum-souq-waqif-tour'
    },
    {
        situation: 'Between flights',
        title: 'Choose the layover tour',
        text: 'A city route planned around your transit window, with airport-area pickup.',
        href: '/tours/doha-layover-tour'
    },
    {
        situation: 'Two experiences, one day',
        title: 'Choose the combo',
        text: 'City sights before lunch, dunes and an Inland Sea sunset after.',
        href: '/tours/doha-desert-combo'
    },
    {
        situation: 'Beyond the capital',
        title: 'Head out of Doha',
        text: 'Day trips north and west — forts, mangroves, camels and quiet coast.',
        href: '/tours/north-qatar-half-day'
    }
]

interface PopularPlace {
    tag: string
    name: string
    text: string
    href: string
    image: string
    imageAlt: string
}

const popularPlaces: PopularPlace[] = [
    {
        tag: 'Old Doha',
        name: 'Souq Waqif',
        text: 'Restored market streets with spice lanes, cafés and the evening crowd.',
        href: '/tours/doha-city-tour',
        image: '/images/places/souq-waqif.jpg',
        imageAlt: 'Lantern-lit market lane in Souq Waqif, Doha'
    },
    {
        tag: 'Culture',
        name: 'Katara Cultural Village',
        text: 'Amphitheatre, galleries and a beach at the northern end of the Corniche.',
        href: '/tours/doha-city-tour',
        image: '/images/places/katara-village.jpg',
        imageAlt: 'The open plaza of Katara Cultural Village in Doha'
    },
    {
        tag: 'Waterfront',
        name: 'The Pearl',
        text: 'Marina promenades and island neighbourhoods with a Riviera feel.',
        href: '/tours/doha-city-tour',
        image: '/images/places/pearl-marina.jpg',
        imageAlt: 'Calm marina waters and boats at The Pearl in Doha'
    },
    {
        tag: 'Museum',
        name: 'Museum of Islamic Art',
        text: 'I. M. Pei’s landmark on a peninsula at the edge of the bay.',
        href: '/tours/museum-souq-waqif-tour',
        image: '/images/experiences/museum-souq-waqif.jpg',
        imageAlt: 'The Museum of Islamic Art building on the Doha Corniche'
    },
    {
        tag: 'National story',
        name: 'National Museum of Qatar',
        text: 'The desert-rose building and the full story of the country.',
        href: '/tours/national-museum-katara-lusail',
        image: '/images/experiences/national-museum-katara.jpg',
        imageAlt: 'The National Museum of Qatar beside the Corniche'
    },
    {
        tag: 'Promenade',
        name: 'Doha Corniche',
        text: 'A crescent of waterfront with the whole West Bay skyline on show.',
        href: '/tours/sunset-dhow-cruise',
        image: '/images/experiences/doha-city-tour.jpg',
        imageAlt: 'The Doha Corniche waterfront with the West Bay skyline'
    },
    {
        tag: 'South Qatar',
        name: 'Inland Sea',
        text: 'Where the dunes run into the tidal water of Khor Al Adaid.',
        href: '/tours/desert-safari-qatar',
        image: '/images/experiences/desert-safari/inland-sea.jpg',
        imageAlt: 'Dunes meeting the tidal water of the Inland Sea'
    },
    {
        tag: 'North Qatar',
        name: 'Al Zubarah Fort',
        text: 'The UNESCO-listed fort and abandoned town on the northern coast.',
        href: '/tours/north-qatar-half-day',
        image: '/images/experiences/north-qatar-zubarah.jpg',
        imageAlt: 'Al Zubarah Fort in north Qatar'
    }
]

const QatarTours: FC = (): ReactNode => {
    return (
        <QatarPreviewLayout headerVariant='overlay'>
            <Seo
                title='Tours'
                siteName='Zain Tourism'
                description='Browse private Doha city tours, desert safaris, cultural routes, dhow cruises, day trips and layover transfers — planned around your date and pickup point.'
                ogImage='/images/hero/doha-tours-hero.jpg'
            />

            <section className='bg-ink relative isolate min-h-[88svh] overflow-hidden'>
                <Image
                    src='/images/hero/doha-tours-hero.jpg'
                    alt='The illuminated West Bay skyline across Doha Bay by night'
                    fill
                    priority
                    sizes='100vw'
                    className='object-cover'
                />
                <div className='bg-gradient-to-b from-ink/75 via-ink/25 to-ink/85 absolute inset-0' />

                <div className='relative mx-auto flex min-h-[88svh] w-full max-w-[1440px] flex-col justify-end px-5 pb-12 pt-28 sm:px-8 lg:px-12 lg:pb-16'>
                    <nav aria-label='Breadcrumb' className='mb-auto pt-6'>
                        <ol className='flex flex-wrap items-center gap-2 text-[13px] text-white/60'>
                            <li>
                                <Link href='/' className='transition-colors hover:text-white'>
                                    Home
                                </Link>
                            </li>
                            <ChevronRight className='size-3.5' strokeWidth={1.6} aria-hidden='true' />
                            <li className='text-white' aria-current='page'>
                                Tours
                            </li>
                        </ol>
                    </nav>

                    <div className='flex flex-col gap-7 pt-16'>
                        <Eyebrow label='All tours & experiences' tone='light' withDot />

                        <h1 className='heading-xl max-w-[14ch] text-[clamp(2.6rem,7vw,5.5rem)] text-white'>
                            Every route in Qatar, grouped the way you travel
                        </h1>

                        <p className='max-w-xl text-[15px] leading-relaxed text-white/75'>
                            City, desert, culture and coast — compare the routes first, then shape the one you like around your date, pickup point and group.
                        </p>

                        <div className='flex flex-wrap gap-3 pt-2'>
                            <PillLink href='/contact-us#enquiry' variant='light' size='lg'>
                                Plan your visit
                            </PillLink>
                            <PillLink href='/services' variant='outlineLight' size='lg'>
                                Explore services
                            </PillLink>
                        </div>
                    </div>
                </div>
            </section>

            <QatarTourStatsStrip
                stats={[
                    { value: '12 tours', label: 'Across six ways to explore' },
                    { value: 'Private or shared', label: 'Group styles for most routes' },
                    { value: 'Doha-based', label: 'Local planning and pickup' },
                    { value: 'Door to door', label: 'Hotel, airport or cruise pickup' }
                ]}
            />

            <section id='tour-finder' className='bg-background py-20 scroll-mt-[4.5rem] lg:py-28'>
                <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                    <div className='flex flex-wrap items-end justify-between gap-6'>
                        <div className='flex flex-col gap-5'>
                            <Eyebrow label='Tour finder' />
                            <h2 className='heading-lg max-w-[20ch] text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                                Start with the type of day
                            </h2>
                        </div>

                        <p className='max-w-sm text-[15px] leading-relaxed text-muted-foreground'>
                            Pick the style of experience first, then compare the routes inside it. Each section below holds a small set of real itineraries.
                        </p>
                    </div>

                    <div className='mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                        {tourFinder.map((entry, index) => (
                            <Link
                                key={entry.href}
                                href={entry.href}
                                className='group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card px-6 py-5 transition-colors hover:border-ink/30'
                            >
                                <div className='flex flex-col gap-1'>
                                    <span className='eyebrow text-brand'>
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className='heading-lg text-[15px] text-ink'>
                                        {entry.label}
                                    </span>
                                    <span className='text-[13px] text-muted-foreground'>
                                        {entry.heading}
                                    </span>
                                </div>

                                <ArrowRight
                                    className='size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1'
                                    strokeWidth={1.6}
                                    aria-hidden='true'
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {categorySections.map((section, sectionIndex) => {
                const tours = section.slugs.map((slug) => pick(slug))

                return (
                    <section
                        key={section.id}
                        id={section.id}
                        className={(sectionIndex % 2 === 0 ? 'bg-sand/60' : 'bg-background') + ' py-20 scroll-mt-[4.5rem] lg:py-28'}
                    >
                        <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                            <div className='flex flex-wrap items-end justify-between gap-6'>
                                <div className='flex flex-col gap-5'>
                                    <Eyebrow label={section.label} number={String(sectionIndex + 1).padStart(2, '0')} />
                                    <h2 className='heading-lg max-w-[22ch] text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                                        {section.heading}
                                    </h2>
                                </div>

                                <p className='max-w-sm text-[15px] leading-relaxed text-muted-foreground'>
                                    {section.intro}
                                </p>
                            </div>

                            <div className='mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                                {tours.map((tour) => (
                                    <QatarTourCard key={tour.slug} tour={tour} />
                                ))}
                            </div>
                        </div>
                    </section>
                )
            })}

            <section className='bg-background py-20 lg:py-28'>
                <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                    <div className='flex flex-wrap items-end justify-between gap-6'>
                        <div className='flex flex-col gap-5'>
                            <Eyebrow label='Help me choose' />
                            <h2 className='heading-lg max-w-[20ch] text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                                Which route suits your stay?
                            </h2>
                        </div>

                        <p className='max-w-sm text-[15px] leading-relaxed text-muted-foreground'>
                            Narrow the list by what your trip looks like — time available, interests and how much of Qatar you want to see.
                        </p>
                    </div>

                    <div className='mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                        {chooser.map((entry) => (
                            <Link
                                key={entry.title}
                                href={entry.href}
                                className='group flex flex-col justify-between gap-6 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-ink/30'
                            >
                                <span className='eyebrow text-brand'>
                                    {entry.situation}
                                </span>

                                <div className='flex items-end justify-between gap-4'>
                                    <div className='flex flex-col gap-1.5'>
                                        <span className='heading-lg text-[17px] text-ink'>
                                            {entry.title}
                                        </span>
                                        <span className='text-[13.5px] leading-relaxed text-muted-foreground'>
                                            {entry.text}
                                        </span>
                                    </div>

                                    <ArrowRight
                                        className='size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1'
                                        strokeWidth={1.6}
                                        aria-hidden='true'
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className='bg-sand/60 py-20 lg:py-28'>
                <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                    <div className='flex flex-wrap items-end justify-between gap-6'>
                        <div className='flex flex-col gap-5'>
                            <Eyebrow label='Places you will meet' />
                            <h2 className='heading-lg max-w-[20ch] text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                                Popular places across our tours
                            </h2>
                        </div>

                        <p className='max-w-sm text-[15px] leading-relaxed text-muted-foreground'>
                            The stops most itineraries share. Check each tour page for its exact route and inclusions before you plan.
                        </p>
                    </div>

                    <div className='mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                        {popularPlaces.map((place, index) => (
                            <Link
                                key={place.name}
                                href={place.href}
                                className='group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-ink/30'
                            >
                                <div className='relative aspect-[4/3] overflow-hidden bg-sand'>
                                    <Image
                                        src={place.image}
                                        alt={place.imageAlt}
                                        fill
                                        sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
                                        className='object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]'
                                    />

                                    <span className='absolute left-4 top-4 rounded-full bg-ink/55 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.13em] text-white backdrop-blur-sm'>
                                        {place.tag}
                                    </span>
                                </div>

                                <div className='flex flex-1 flex-col gap-1.5 border-t border-border p-5 sm:p-6'>
                                    <div className='flex items-center justify-between gap-3'>
                                        <span className='heading-lg text-[17px] text-ink'>
                                            {place.name}
                                        </span>
                                        <span className='eyebrow text-muted-foreground'>
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>

                                    <span className='text-[13.5px] leading-relaxed text-muted-foreground'>
                                        {place.text}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

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

export default QatarTours
