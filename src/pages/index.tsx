import type { FC, ReactNode } from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, CarFront, Clock, Landmark, Mail, MapPin, Mountain, Phone, UsersRound, Waves } from 'lucide-react'
import { PillButton, PillLink } from '@/components/site/pill'
import { cn } from '@/lib/utils'

import { Seo } from '@/components/generals/seo'
import { Eyebrow } from '@/components/site/eyebrow'
import { CtaBand } from '@/components/site/cta-band'
import { Icon } from '@/components/site/icon'
import { WhatsAppBrandIcon } from '@/components/sites/qatar-preview/whatsapp-brand-icon'
import { QatarTourCard } from '@/components/sites/qatar-preview/qatar-tour-card'
import { QatarPreviewLayout } from '@/components/sites/qatar-preview/qatar-preview-layout'
import { QatarVehicleCard } from '@/components/sites/qatar-preview/qatar-vehicle-card'
import { QatarFaqAccordion } from '@/components/sites/qatar-preview/qatar-faq-accordion'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

import {
    featuredQatarTours,
    qatarFaqs,
    qatarPreviewBasePath,
    qatarServicePillars,
    qatarTrustPillars,
    qatarVehicles,
    remainingQatarTours
} from '@/constants/qatar-preview'

const getServiceCards = (basePath: string, detailBasePath: string) => [
    {
        label: 'Tours',
        title: 'Doha city tours',
        description: 'Private city, heritage and waterfront experiences across Doha.',
        image: '/images/experiences/doha-city-tour.jpg',
        imageAlt: 'Doha city skyline and waterfront promenade',
        href: `${detailBasePath}/tours/doha-city-discovery`,
        icon: Landmark
    },
    {
        label: 'Desert',
        title: 'Desert safari & Inland Sea',
        description: 'Private 4×4 journeys into the dunes and the Khor Al Adaid landscape.',
        image: '/images/experiences/desert-safari.jpg',
        imageAlt: 'Desert safari vehicle crossing Qatar dunes',
        href: `${detailBasePath}/tours/desert-and-inland-sea`,
        icon: Mountain
    },
    {
        label: 'Layover',
        title: 'Layover & transit tours',
        description: 'Time-aware Doha routes for passengers between flights.',
        image: '/images/experiences/doha-layover.jpg',
        imageAlt: 'Doha skyline viewed during a layover tour',
        href: `${detailBasePath}/tours/layover-doha`,
        icon: Clock
    },
    {
        label: 'Culture',
        title: 'Culture & dhow evenings',
        description: 'Museums, heritage areas and waterfront experiences after dark.',
        image: '/images/experiences/museum-souq-waqif.jpg',
        imageAlt: 'Traditional architecture and culture in Souq Waqif',
        href: `${detailBasePath}/tours/dhow-and-waterfront`,
        icon: Waves
    },
    {
        label: 'Transport',
        title: 'Airport transfers & chauffeur',
        description: 'Private point-to-point movements for arrivals, hotels and meetings.',
        image: '/images/experiences/doha-desert-combo.jpg',
        imageAlt: 'Private vehicle ready for a Doha and desert journey',
        href: `${detailBasePath}/tours/private-transfers`,
        icon: CarFront
    },
    {
        label: 'Groups',
        title: 'Group transportation',
        description: 'Coordinated vehicles and schedules for larger parties and crews.',
        image: '/images/contact-coast.jpg',
        imageAlt: 'Qatar coastline used as a backdrop for group travel planning',
        href: `${detailBasePath}/services`,
        icon: UsersRound
    }
]

interface QatarPreviewHomeProps {
    basePath?: string
}

const QatarPreviewHome: FC<QatarPreviewHomeProps> = ({ basePath = qatarPreviewBasePath }): ReactNode => {
    const router = useRouter()
    const [catalogOpen, setCatalogOpen] = useState(false)
    const isRootHomepage = basePath === ''
    const detailBasePath = isRootHomepage ? qatarPreviewBasePath : basePath
    const contactHref = `${detailBasePath}/contact#enquiry`
    const serviceCards = getServiceCards(basePath, detailBasePath)

    return (
        <QatarPreviewLayout headerVariant='overlay' basePath={basePath} contactHref={contactHref}>
            <Seo
                title='Qatar tours, desert experiences & transfers'
                siteName='Zain Tourism'
                description='Private Doha experiences, desert journeys, layover routes and transportation planning shaped around your visit.'
                ogImage='/images/zain-tourism-hero.png'
            />

            <section className='relative isolate min-h-[100svh] overflow-hidden bg-ink'>
                <Image
                    src='/images/zain-tourism-hero.png'
                    alt='A luxury chauffeur van in front of the Lusail towers at sunset in Qatar'
                    fill
                    priority
                    sizes='100vw'
                    className='slow-pan object-cover'
                />

                <div className='absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/10 to-ink/55' />

                <div className='relative mx-auto flex min-h-[100svh] w-full max-w-[1440px] flex-col px-5 pb-8 pt-24 sm:px-8 sm:pt-28 lg:px-12 lg:pt-32'>
                    <div className='flex flex-1 flex-col justify-center gap-6 py-8 sm:gap-8 sm:py-12'>
                        <Eyebrow label='Zain Tourism · Qatar' tone='light' withDot className='rise-in' />

                        <h1 className='heading-xl rise-in max-w-[14ch] text-[clamp(2.75rem,7.2vw,5.75rem)] text-white [animation-delay:120ms]'>
                            Experience Qatar Beyond the Ordinary
                        </h1>

                        <p className='rise-in max-w-xl text-[15px] leading-relaxed text-white/75 [animation-delay:260ms]'>
                            Premium chauffeur journeys across Qatar.
                        </p>

                        <div className='rise-in flex flex-wrap items-center gap-3 pt-2 [animation-delay:380ms]'>
                            <PillLink href={`${basePath}/tours`} variant='light' size='lg'>
                                Explore experiences
                            </PillLink>

                            <PillLink href={contactHref} variant='outlineLight' size='lg'>
                                Book now
                            </PillLink>
                        </div>
                    </div>

                    <div className='rise-in grid max-w-[1150px] grid-cols-2 gap-x-4 gap-y-5 border-t border-white/15 pt-6 [animation-delay:500ms] sm:grid-cols-2 sm:gap-6 sm:pt-7 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/15'>
                        <a
                            href={contactHref}
                            className='group flex items-center gap-3 sm:gap-4 lg:pr-8'
                        >
                            <WhatsAppBrandIcon className='size-5 shrink-0 sm:size-6' />

                            <span className='flex flex-col gap-0.5'>
                                <span className='text-[15px] font-medium text-white'>WhatsApp</span>
                                <span className='text-[12.5px] text-white/60'>Booking & enquiries</span>
                            </span>
                        </a>

                        <a
                            href={contactHref}
                            className='group flex items-center gap-3 sm:gap-4 lg:px-8'
                        >
                            <Phone className='size-5 shrink-0 text-white sm:size-6' strokeWidth={1.6} aria-hidden='true' />

                            <span className='flex flex-col gap-0.5'>
                                <span className='text-[15px] font-medium text-white'>Direct contact</span>
                                <span className='text-[12.5px] text-white/60'>+974 0000 000</span>
                            </span>
                        </a>

                        <a
                            href={contactHref}
                            className='group flex items-center gap-3 sm:gap-4 lg:px-8'
                        >
                            <Mail className='size-5 shrink-0 text-white sm:size-6' strokeWidth={1.6} aria-hidden='true' />

                            <span className='flex flex-col gap-0.5'>
                                <span className='text-[15px] font-medium text-white'>Email</span>
                                <span className='text-[12.5px] text-white/60'>General & B2B enquiries</span>
                            </span>
                        </a>

                        <a
                            href={contactHref}
                            className='group flex items-center gap-3 sm:gap-4 lg:pl-8'
                        >
                            <MapPin className='size-5 shrink-0 text-white sm:size-6' strokeWidth={1.6} aria-hidden='true' />

                            <span className='flex flex-col gap-0.5'>
                                <span className='text-[15px] font-medium text-white'>Based in Doha</span>
                                <span className='text-[12.5px] text-white/60'>Serving all Qatar</span>
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            <section aria-label='Our services' className='bg-background py-16 lg:py-24'>
                <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                    <div className='flex flex-wrap items-end justify-between gap-6'>
                        <div className='flex flex-col gap-5'>
                            <Eyebrow label='Our services' number='01' />
                            <h2 className='heading-lg max-w-[19ch] text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                                Find the service you need
                            </h2>
                        </div>

                        <p className='max-w-sm text-[15px] leading-relaxed text-muted-foreground'>
                            Tours, desert journeys, layover routes and private transportation, planned by one local team.
                        </p>
                    </div>

                    <div className='mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                        {serviceCards.map((service) => {
                            const ServiceIcon = service.icon

                            return (
                                <Link
                                    key={service.title}
                                    href={service.href}
                                    className='group relative flex min-h-56 flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-card p-6 transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink'
                                >
                                    <div className='pointer-events-none absolute inset-x-0 bottom-0 h-40 overflow-hidden rounded-t-[2.5rem] opacity-50 sm:h-48' aria-hidden='true'>
                                        <Image
                                            src={service.image}
                                            alt=''
                                            fill
                                            sizes='(max-width: 640px) 100vw, 33vw'
                                            className='object-cover object-bottom transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]'
                                        />
                                        <div className='absolute inset-0 bg-gradient-to-br from-card via-card/80 to-transparent' />
                                    </div>

                                    <div className='relative z-10 flex flex-1 flex-col gap-4'>
                                        <ServiceIcon className='mt-1 size-7 text-brand' strokeWidth={1.6} aria-hidden='true' />

                                        <div className='flex flex-col gap-2'>
                                            <span className='eyebrow text-muted-foreground'>
                                                {service.label}
                                            </span>

                                            <h3 className='heading-lg text-[20px] text-ink'>
                                                {service.title}
                                            </h3>

                                            <p className='text-[14px] leading-relaxed text-muted-foreground'>
                                                {service.description}
                                            </p>
                                        </div>

                                        <span className='mt-auto inline-flex items-center gap-2 self-start pb-1 text-[14px] font-medium tracking-[-0.01em] text-ink'>
                                            Explore
                                            <ArrowUpRight
                                                aria-hidden='true'
                                                className='size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                                                strokeWidth={1.75}
                                            />
                                        </span>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section aria-label='Our vehicles' className='bg-background pb-20 lg:pb-28'>
                <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                    <div className='mx-auto flex max-w-3xl flex-col items-center gap-4 text-center'>
                        <Eyebrow label='Our vehicles' withDot />

                        <h2 className='heading-lg text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                            Vehicle options for different journeys
                        </h2>

                        <p className='text-[15px] leading-relaxed text-muted-foreground'>
                            Explore vehicle categories used for private transfers, chauffeur travel, sightseeing and group transportation.
                        </p>
                    </div>

                    <div className='mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                        {qatarVehicles.map((vehicle, index) => (
                            <QatarVehicleCard key={vehicle.title} vehicle={vehicle} priority={index < 2} />
                        ))}
                    </div>

                    <div className='mt-10 flex justify-center'>
                        <PillLink href={`${detailBasePath}/services`} variant='dark' size='md'>
                            Explore our fleet
                        </PillLink>
                    </div>
                </div>
            </section>

            <section className='bg-sand/60 py-20 lg:py-28'>
                <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                    <div className='flex flex-wrap items-end justify-between gap-6'>
                        <div className='flex flex-col gap-5'>
                            <Eyebrow label='Featured experiences' number='02' />
                            <h2 className='heading-lg max-w-[19ch] text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                                Top things to do in Qatar, booked in minutes
                            </h2>
                        </div>

                        <div className='flex flex-col items-start gap-3'>
                            <p className='text-[14px] font-medium text-ink'>
                                Free cancellation up to 24 hours before.
                            </p>

                            <PillLink href={`${basePath}/tours`} variant='outline'>
                                All tours & prices
                            </PillLink>
                        </div>
                    </div>

                    <div className='mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
                        {featuredQatarTours.map((tour, index) => (
                            <QatarTourCard key={tour.slug} tour={tour} basePath={detailBasePath} priority={index < 2} />
                        ))}
                    </div>

                    <div className='mt-16 flex flex-col items-center gap-8'>
                        <button
                            type='button'
                            onClick={() => setCatalogOpen((open) => !open)}
                            aria-expanded={catalogOpen}
                            aria-controls='explore-all-panel'
                            className={cn(
                                'inline-flex h-12 items-center gap-2.5 rounded-full px-7 text-[15px] font-medium tracking-[-0.01em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink',
                                catalogOpen
                                    ? 'bg-ink text-background'
                                    : 'border border-ink/20 bg-card text-ink hover:border-ink/50 hover:bg-ink/5'
                            )}
                        >
                            Explore all destinations

                            <ChevronDown
                                aria-hidden='true'
                                className={cn('size-4 transition-transform duration-300', catalogOpen && 'rotate-180')}
                                strokeWidth={1.75}
                            />
                        </button>

                        <div
                            id='explore-all-panel'
                            role='region'
                            aria-label='All remaining destinations'
                            className={cn(
                                'grid w-full transition-[grid-template-rows] duration-500 ease-out',
                                catalogOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                            )}
                        >
                            <div className='overflow-hidden'>
                                <div className='mt-2 flex flex-col gap-8 overflow-hidden rounded-[1.5rem] border border-border bg-card px-4 py-6 sm:px-8 sm:py-10'>
                                    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
                                        {remainingQatarTours.map((tour) => (
                                            <QatarTourCard key={tour.slug} tour={tour} basePath={detailBasePath} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-background py-20 lg:py-28'>
                <div className='mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12'>
                    <div className='flex flex-col gap-5 lg:col-span-4'>
                        <Eyebrow label='A clearer service model' number='04' />
                        <h2 className='heading-lg text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                            Tours and transport should plan together
                        </h2>
                        <p className='text-[15px] leading-relaxed text-muted-foreground'>
                            Rather than treating transfers as a footer detail, this site makes them a route people can understand and enquire about directly.
                        </p>
                    </div>

                    <div className='grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:col-span-8'>
                        {qatarServicePillars.map((pillar) => (
                            <div key={pillar.title} className='flex flex-col gap-4 border-t border-border pt-6'>
                                <span className='grid size-11 place-items-center rounded-full border border-ink/15 text-ink'>
                                    <Icon name={pillar.icon} className='size-5' />
                                </span>
                                <h3 className='heading-lg text-[20px] text-ink'>
                                    {pillar.title}
                                </h3>
                                <p className='text-[14px] leading-relaxed text-muted-foreground'>
                                    {pillar.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='bg-sand/60 py-20 lg:py-24'>
                <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                    <div className='mx-auto flex max-w-3xl flex-col items-center gap-4 text-center'>
                        <Eyebrow label='Why travel with us' number='05' />
                        <h2 className='heading-lg text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                            Why Choose Zain Tourism
                        </h2>
                    </div>

                    <div className='mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                        {qatarTrustPillars.map((pillar) => (
                            <div
                                key={pillar.title}
                                className='group flex min-h-40 flex-col items-center justify-center gap-4 rounded-2xl border border-brand/20 bg-background px-5 py-7 text-center transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-brand/45'
                            >
                                <span className='grid size-12 place-items-center rounded-full bg-brand/10 text-brand transition-transform duration-300 group-hover:scale-105'>
                                    <Icon name={pillar.icon} className='size-5' />
                                </span>

                                <div className='flex flex-col gap-1.5'>
                                    <h3 className='heading-lg text-[18px] text-ink'>
                                        {pillar.title}
                                    </h3>
                                    <p className='text-[13px] leading-relaxed text-muted-foreground'>
                                        {pillar.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section aria-label='Frequently asked questions' className='bg-sand/60 py-20 lg:py-28'>
                <div className='mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12'>
                    <div className='flex flex-col gap-5 lg:col-span-5'>
                        <Eyebrow label='Before you book' withDot />

                        <h2 className='heading-lg text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                            Questions travellers ask <span className='text-brand'>before visiting Qatar</span>
                        </h2>

                        <p className='text-[15px] leading-relaxed text-muted-foreground'>
                            Visas, safety, seasons, what to wear and what a desert safari really costs — the essentials, answered plainly.
                        </p>

                        <div className='mt-4 flex flex-col gap-4 rounded-2xl border border-border bg-card p-6'>
                            <div className='flex flex-col gap-1'>
                                <h3 className='heading-lg text-[16px] text-ink'>
                                    Still unsure? Talk to a person.
                                </h3>

                                <p className='text-[13.5px] leading-relaxed text-muted-foreground'>
                                    We answer on WhatsApp within minutes, seven days a week, in English, Arabic, Hindi and Urdu.
                                </p>
                            </div>

                            <div className='flex flex-wrap items-center gap-3'>
                                <PillLink href={contactHref} variant='dark' size='md'>
                                    WhatsApp us
                                </PillLink>

                                <PillLink href={contactHref} variant='outline' size='md'>
                                    Contact page
                                </PillLink>
                            </div>
                        </div>
                    </div>

                    <div className='lg:col-span-7'>
                        <QatarFaqAccordion items={qatarFaqs} />
                    </div>
                </div>
            </section>

            <CtaBand
                eyebrow='Start with the essentials'
                title='A unique experience for memorable sensations'
                description='Share the essentials needed to match an experience or transfer to your visit.'
                primaryLabel='Plan your visit'
                primaryHref={contactHref}
                secondaryLabel='Explore services'
                secondaryHref={`${basePath}/services`}
                image='/images/doha-bay-sunset.jpg'
                imageAlt='Sunset over Doha Bay with the West Bay skyline across the water'
                imageClassName='opacity-90'
            />
        </QatarPreviewLayout>
    )
}

export default QatarPreviewHome
