import type { FC, ReactNode } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronRight } from 'lucide-react'

import { Seo } from '@/components/generals/seo'
import { Eyebrow } from '@/components/site/eyebrow'
import { CtaBand } from '@/components/site/cta-band'
import { PillLink } from '@/components/site/pill'
import { QatarTourStatsStrip } from '@/components/sites/qatar-preview/qatar-tour-extras'
import { QatarFaqAccordion } from '@/components/sites/qatar-preview/qatar-faq-accordion'
import { QatarVehicleCard } from '@/components/sites/qatar-preview/qatar-vehicle-card'
import { QatarPreviewLayout } from '@/components/sites/qatar-preview/qatar-preview-layout'

import { qatarServiceFaqs, qatarServicePillars, qatarVehicles } from '@/constants/qatar-preview'

const transferServices = [
    {
        tag: 'Arrivals & departures',
        title: 'Doha airport transfers',
        description: 'Private transfers between Hamad International Airport and your hotel, residence or office — with an arrivals meet and greet, flight monitoring on the way in and a vehicle sized for your luggage.',
        image: '/images/services/hamad-concourse.jpg',
        imageAlt: 'Calm departures concourse inside Hamad International Airport, Doha',
        annotation: 'The signature service'
    },
    {
        tag: 'Business & VIP travel',
        title: 'Luxury chauffeur service',
        description: 'A premium chauffeur-driven car for executives, visiting guests and days when presentation matters as much as the destination.',
        image: '/images/services/chauffeur-maybach-v-class.jpg',
        imageAlt: 'A black luxury chauffeur van standing ready for a private transfer',
        annotation: 'Executive class'
    },
    {
        tag: 'Flexible driver hire',
        title: 'Hourly chauffeur service',
        description: 'Keep a vehicle and driver available across a full programme — meetings, showrooms, shopping and a self-paced route around Doha — without booking each leg separately.',
        image: '/images/tours/doha-city-tour/doha-corniche-skyline.jpg',
        imageAlt: 'The West Bay skyline seen from the Doha Corniche',
        annotation: 'One car, all day'
    },
    {
        tag: 'Families & groups',
        title: 'Group transportation',
        description: 'Families, agency groups, teams and delegations moved together in the right vehicle class — from spacious vans and minibuses up to touring coaches.',
        image: '/images/services/hia-passenger-bus.jpg',
        imageAlt: 'A coach waiting for passengers outside Hamad International Airport',
        annotation: 'Vans to coaches'
    },
    {
        tag: 'Events & delegations',
        title: 'Event transportation',
        description: 'Planned movements for conferences, exhibitions and private functions — airport runs, hotel shuttles and venue transfers on one confirmed movement plan.',
        image: '/images/tours/doha-desert-combo/doha-west-bay-skyline.jpg',
        imageAlt: 'The West Bay towers of Doha where corporate events and conferences take place',
        annotation: 'Planned movements'
    },
    {
        tag: 'Selected road routes',
        title: 'Cross-border & intercity',
        description: 'Point-to-point routes across Qatar on request, plus selected road transfers toward the GCC border — each reviewed for route, date, border requirements and availability before confirming.',
        image: '/images/tours/overnight-desert-safari/desert-road-al-utouriya.jpg',
        imageAlt: 'A long road heading through the desert toward the horizon',
        annotation: 'Reviewed per route'
    }
]

const serviceChooser = [
    {
        situation: 'A simple arrival',
        title: 'Book the airport transfer',
        text: 'One pickup, one drop-off, driver waiting at arrivals with a name board.',
        href: '#airport-transfers'
    },
    {
        situation: 'A day of meetings or shopping',
        title: 'Keep a chauffeur by the hour',
        text: 'The vehicle stays with you between stops so the schedule flexes as the day does.',
        href: '#vehicle-options'
    },
    {
        situation: 'A group arriving together',
        title: 'Travel in one movement',
        text: 'Vans to coaches, matched to your passenger count and luggage before you land.',
        href: '#vehicle-options'
    },
    {
        situation: 'A conference or exhibition',
        title: 'Plan the movements',
        text: 'Multi-vehicle coordination around your programme, from airport runs to venue transfers.',
        href: '#event-movements'
    }
]

const airportGuarantees = [
    {
        title: 'Meet & greet at arrivals',
        text: 'Your driver waits past baggage claim with a name board and walks you straight to the vehicle.'
    },
    {
        title: 'Flight monitored',
        text: 'The pickup follows the actual landing time, so delays on the inbound flight never cost you the driver.'
    },
    {
        title: 'Waiting time on arrival',
        text: 'Immigration, baggage and a slow gate are all accounted for — a generous waiting window is built into every arrival.'
    },
    {
        title: 'Vehicle planned before the day',
        text: 'Passenger count, luggage pieces and child seats are reviewed first, then the right class is confirmed.'
    }
]

const howItWorks = [
    {
        title: 'Share your requirement',
        text: 'Route, date, timing, passengers, luggage and any special preferences in one message.'
    },
    {
        title: 'Get the plan and vehicle',
        text: 'We respond with the suggested vehicle class and a clear movement plan for the price you agreed to shape together.'
    },
    {
        title: 'Confirm the arrangement',
        text: 'Once the details are settled, the driver, vehicle and pickup point are locked in before travel.'
    },
    {
        title: 'Meet and travel',
        text: 'Your driver appears at the confirmed pickup spot on time, and the journey follows the plan.'
    }
]

const QatarServices: FC = (): ReactNode => {
    return (
        <QatarPreviewLayout headerVariant='overlay'>
            <Seo
                title='Transfer services'
                siteName='Zain Tourism'
                description='Private airport transfers, chauffeur service, hourly driver hire, group transportation and event movements in Doha — planned around your arrival and your programmes.'
                ogImage='/images/services/hamad-arrivals.jpg'
            />

            <section className='bg-ink relative isolate min-h-[88svh] overflow-hidden'>
                <Image
                    src='/images/services/hamad-arrivals.jpg'
                    alt='The bright arrivals hall of Hamad International Airport in Doha'
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
                                <Link href="/" className='transition-colors hover:text-white'>
                                    Home
                                </Link>
                            </li>
                            <ChevronRight className='size-3.5' strokeWidth={1.6} aria-hidden='true' />
                            <li className='text-white' aria-current='page'>
                                Services
                            </li>
                        </ol>
                    </nav>

                    <div className='flex flex-col gap-6 pt-12 sm:gap-7 sm:pt-16'>
                        <Eyebrow label='Private transfers in Doha & Qatar' tone='light' withDot />

                        <h1 className='heading-xl max-w-[14ch] text-[clamp(2.6rem,7vw,5.5rem)] text-white'>
                            Transportation planned around your arrival and your day
                        </h1>

                        <p className='max-w-xl text-[15px] leading-relaxed text-white/75'>
                            Hamad International airport transfers, chauffeur journeys, group and event movements — one Doha-based team plans the vehicle, the pickup point and the timing together, then confirms everything before travel.
                        </p>

                        <div className='flex flex-wrap gap-3 pt-2'>
                            <PillLink href='/contact-us#enquiry' variant='light' size='lg'>
                                Request a transfer
                            </PillLink>
                            <PillLink href='/tours' variant='outlineLight' size='lg'>
                                Explore tours
                            </PillLink>
                        </div>
                    </div>
                </div>
            </section>

            <QatarTourStatsStrip
                stats={[
                    { value: 'Hamad Intl.', label: 'Arrivals & departures, meet & greet' },
                    { value: '1 to 50', label: 'Guests, from sedans to touring coaches' },
                    { value: 'Hourly', label: 'Chauffeur keeps a car with you all day' },
                    { value: 'One team', label: 'Transfers and tours in the same plan' }
                ]}
            />

            <section id='services' className='bg-background py-20 scroll-mt-[4.5rem] lg:py-28'>
                <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                    <div className='flex flex-wrap items-end justify-between gap-6'>
                        <div className='flex flex-col gap-5'>
                            <Eyebrow label='Transfer services' number='01' />
                            <h2 className='heading-lg max-w-[20ch] text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                                A service for every kind of movement
                            </h2>
                        </div>

                        <p className='max-w-sm text-[15px] leading-relaxed text-muted-foreground'>
                            From a single airport run to a full delegation programme — each service begins with your route, your group and your luggage, not with whatever car happens to be free.
                        </p>
                    </div>

                    <div className='mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                        {transferServices.map((service) => (
                            <Link
                                key={service.title}
                                href='/contact-us#enquiry'
                                className='group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink'
                            >
                                <div className='relative aspect-[4/3] bg-sand'>
                                    <Image
                                        src={service.image}
                                        alt={service.imageAlt}
                                        fill
                                        sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                                        className='object-cover transition-transform duration-[900ms] group-hover:scale-[1.03]'
                                    />
                                </div>

                                <div className='flex flex-1 flex-col gap-3 px-5 py-5'>
                                    <span className='eyebrow text-brand'>
                                        {service.tag}
                                    </span>
                                    <h3 className='heading-lg text-[19px] text-ink'>
                                        {service.title}
                                    </h3>
                                    <p className='text-[13.5px] leading-relaxed text-muted-foreground'>
                                        {service.description}
                                    </p>

                                    <span className='mt-auto flex items-center gap-2 pt-2 text-[13px] text-ink'>
                                        {service.annotation}
                                        <ArrowRight className='size-4 transition-transform duration-300 group-hover:translate-x-1' strokeWidth={1.75} aria-hidden='true' />
                                    </span>
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
                            <Eyebrow label='Find the right service' number='02' />
                            <h2 className='heading-lg max-w-[22ch] text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                                Which service fits the journey?
                            </h2>
                        </div>

                        <p className='max-w-sm text-[15px] leading-relaxed text-muted-foreground'>
                            A direct transfer, a chauffeur on standby, a group movement and an event programme solve different problems — start with the one that matches the day.
                        </p>
                    </div>

                    <div className='mt-10 grid gap-4 sm:grid-cols-2'>
                        {serviceChooser.map((entry) => (
                            <Link
                                key={entry.title}
                                href={entry.href}
                                className='group flex items-start justify-between gap-4 rounded-2xl border border-border bg-card px-4 py-5 transition-colors hover:border-ink/30 sm:px-6 sm:py-6'
                            >
                                <div className='flex flex-col gap-2'>
                                    <span className='eyebrow text-brand'>
                                        {entry.situation}
                                    </span>
                                    <span className='heading-lg text-[17px] text-ink'>
                                        {entry.title}
                                    </span>
                                    <span className='text-[13.5px] leading-relaxed text-muted-foreground'>
                                        {entry.text}
                                    </span>
                                </div>

                                <ArrowRight
                                    className='mt-1 size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1'
                                    strokeWidth={1.6}
                                    aria-hidden='true'
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section id='vehicle-options' className='bg-background py-20 scroll-mt-[4.5rem] lg:py-28'>
                <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                    <div className='flex flex-wrap items-end justify-between gap-6'>
                        <div className='flex flex-col gap-5'>
                            <Eyebrow label='Vehicle options' number='03' />
                            <h2 className='heading-lg max-w-[22ch] text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                                Sized for passengers, luggage and occasion
                            </h2>
                        </div>

                        <p className='max-w-sm text-[15px] leading-relaxed text-muted-foreground'>
                            Passenger count, luggage and the type of journey decide the vehicle class — the exact model is confirmed once your request is on the table.
                        </p>
                    </div>

                    <div className='mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
                        {qatarVehicles.map((vehicle, index) => (
                            <QatarVehicleCard key={vehicle.title} vehicle={vehicle} priority={index < 2} />
                        ))}
                    </div>
                </div>
            </section>

            <section id='airport-transfers' className='bg-sand/60 py-20 scroll-mt-[4.5rem] lg:py-28'>
                <div className='mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12'>
                    <div className='flex flex-col gap-5 lg:col-span-4'>
                        <Eyebrow label='Featured — arrivals & departures' number='04' />
                        <h2 className='heading-lg max-w-[18ch] text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                            Airport transfers handled from the arrivals hall out
                        </h2>
                        <p className='text-[15px] leading-relaxed text-muted-foreground'>
                            The Doha airport transfer is our most requested service. Everything on this list is standard on every arrival booking — the same four answers we give whenever a guest lands tired and asks what happens now.
                        </p>

                        <PillLink href='/contact-us#enquiry' className='mt-2 self-start' size='md'>
                            Request an arrival pickup
                        </PillLink>
                    </div>

                    <div className='grid gap-5 sm:grid-cols-2 lg:col-span-8'>
                        {airportGuarantees.map((item) => (
                            <div key={item.title} className='rounded-[1.5rem] border border-border bg-card p-6'>
                                <h3 className='heading-lg text-[18px] text-ink'>
                                    {item.title}
                                </h3>
                                <p className='mt-3 text-[13.5px] leading-relaxed text-muted-foreground'>
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='bg-background py-20 lg:py-28'>
                <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                    <div className='flex flex-wrap items-end justify-between gap-6'>
                        <div className='flex flex-col gap-5'>
                            <Eyebrow label='Why guests book transport with us' number='05' />
                            <h2 className='heading-lg max-w-[20ch] text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                                Planned around the actual journey
                            </h2>
                        </div>

                        <p className='max-w-sm text-[15px] leading-relaxed text-muted-foreground'>
                            The requirement comes first and the vehicle follows — the same order of thinking we apply to every arrival, hourly booking and group movement.
                        </p>
                    </div>

                    <div className='mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-4'>
                        {qatarServicePillars.map((pillar, index) => (
                            <div key={pillar.title} className='border-t border-ink/15 pt-6'>
                                <span className='eyebrow text-brand'>
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <h3 className='heading-lg mt-3 text-[19px] text-ink'>
                                    {pillar.title}
                                </h3>
                                <p className='mt-3 text-[13.5px] leading-relaxed text-muted-foreground'>
                                    {pillar.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='bg-sand/60 py-20 lg:py-28'>
                <div className='mx-auto grid w-full max-w-[1440px] gap-12 px-5 lg:grid-cols-12 sm:px-8 lg:gap-16 lg:px-12'>
                    <div className='flex flex-col gap-5 lg:col-span-4'>
                        <Eyebrow label='How it works' number='06' />
                        <h2 className='heading-lg max-w-[18ch] text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                            Four steps, from message to driver at the door
                        </h2>
                        <p className='text-[15px] leading-relaxed text-muted-foreground'>
                            Each service has its own details, but every booking starts the same way — with the requirement, not the car.
                        </p>
                    </div>

                    <div className='flex flex-col gap-5 lg:col-span-8'>
                        {howItWorks.map((step, index) => (
                            <div key={step.title} className='flex items-start gap-5 rounded-2xl border border-border bg-card px-6 py-5'>
                                <span className='eyebrow shrink-0 pt-1 text-brand'>
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <div className='flex flex-col gap-2'>
                                    <h3 className='heading-lg text-[17px] text-ink'>
                                        {step.title}
                                    </h3>
                                    <p className='text-[13.5px] leading-relaxed text-muted-foreground'>
                                        {step.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id='transport-faqs' className='bg-background py-20 scroll-mt-[4.5rem] lg:py-28'>
                <div className='mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12'>
                    <div className='flex flex-col gap-5 lg:col-span-4'>
                        <Eyebrow label='Transfer questions' number='07' />
                        <h2 className='heading-lg max-w-[18ch] text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                            What guests usually ask about transport
                        </h2>
                        <p className='text-[15px] leading-relaxed text-muted-foreground'>
                            The essentials about pickups, delays, luggage and group bookings — the specific details of your journey are confirmed in the plan we send before travel.
                        </p>
                    </div>

                    <div className='lg:col-span-8'>
                        <QatarFaqAccordion items={qatarServiceFaqs} />
                    </div>
                </div>
            </section>

            <CtaBand
                eyebrow='Start with the essentials'
                title='A unique experience for memorable sensations'
                description='Share the essentials needed to match an experience or transfer to your visit.'
                primaryLabel='Plan your visit'
                primaryHref='/contact-us#enquiry'
                secondaryLabel='Explore tours'
                secondaryHref='/tours'
                image='/images/doha-bay-sunset.jpg'
                imageAlt='Sunset over Doha Bay with the West Bay skyline across the water'
                imageClassName='opacity-90'
            />
        </QatarPreviewLayout>
    )
}

export default QatarServices
