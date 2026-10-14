import type { FC, ReactNode } from 'react'

import Image from 'next/image'
import { BadgeCheck, Languages, MessageCircle, ReceiptText } from 'lucide-react'

import { Seo } from '@/components/generals/seo'
import { CtaBand } from '@/components/site/cta-band'
import { Eyebrow } from '@/components/site/eyebrow'
import { PageHeader } from '@/components/site/page-header'
import { PillLink, TextLink } from '@/components/site/pill'
import { QatarPreviewLayout } from '@/components/sites/qatar-preview/qatar-preview-layout'

const values = [
    {
        icon: BadgeCheck,
        title: 'Local knowledge, professionally run',
        description: 'Our routes are shaped by people who know Doha, the coast and the desert first-hand—not by a generic checklist.'
    },
    {
        icon: MessageCircle,
        title: 'A real person, always',
        description: 'Start with a direct question and keep the same clear point of contact while your day comes together.'
    },
    {
        icon: Languages,
        title: 'Travel in your language',
        description: 'We keep the planning conversation simple and welcoming for international visitors, families and groups.'
    },
    {
        icon: ReceiptText,
        title: 'Priced upfront',
        description: 'The route, pickup and vehicle plan should be understandable before you commit—not explained after the fact.'
    }
]

const journeySteps = [
    {
        number: '01',
        title: 'Start with the essentials',
        description: 'Tell us your dates, pickup point, group size and the kind of day you want to have.'
    },
    {
        number: '02',
        title: 'Shape the route around you',
        description: 'Balance city landmarks, heritage, desert landscapes and transfer time around your real schedule.'
    },
    {
        number: '03',
        title: 'Keep the whole day connected',
        description: 'One local team can coordinate the experience, the vehicle and the practical movements in between.'
    }
]

const AboutPage: FC = (): ReactNode => {
    return (
        <QatarPreviewLayout>
            <Seo
                title='About us'
                siteName='Zain Tourism'
                description='Meet the Doha-based team behind clear, private Qatar experiences, desert journeys and travel transfers.'
                ogImage='/images/about/story-landscape.jpg'
            />

            <PageHeader
                eyebrow='About us'
                title={<>Turning your Qatar visit into memories that last a lifetime</>}
                description='From your first message to your final drop-off, our Doha team plans city experiences, desert days and transfers around one thing: making your time in Qatar unforgettable.'
                aside={(
                    <PillLink href='/contact-us#enquiry' size='lg'>
                        Talk to the team
                    </PillLink>
                )}
            />

            <section className='bg-background py-20 lg:py-28'>
                <div className='mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-16 lg:px-12'>
                    <div className='flex flex-col gap-6 lg:col-span-6'>
                        <Eyebrow label='Our story' number='01' />
                        <h2 className='heading-lg max-w-[15ch] text-[clamp(2rem,4vw,3.4rem)] text-ink'>
                            Local knowledge, professionally run
                        </h2>
                        <div className='flex max-w-xl flex-col gap-5 text-[15px] leading-relaxed text-muted-foreground'>
                            <p>
                                Zain Tourism is a Doha-based travel team built around a simple promise: make Qatar easier to experience well. We own the planning conversation, listen to the practical details and shape the day around your pace.
                            </p>
                            <p>
                                Most guests find us through a desert safari, a Doha city route or an airport transfer. Behind each of those services is the same local team—ready to connect the stops, the vehicle and the timing into one comfortable plan.
                            </p>
                            <p>
                                Whether you are here for a long weekend, a layover or a group programme, the best itinerary is the one that feels considered from pickup to drop-off.
                            </p>
                        </div>
                        <TextLink href='/services'>Explore our services</TextLink>
                    </div>

                    <div className='relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted lg:col-span-6'>
                        <Image
                            src='/images/about/story-landscape.jpg'
                            alt='A white 4x4 descending a large desert dune under a clear sky'
                            fill
                            sizes='(max-width: 1024px) 100vw, 50vw'
                            className='object-cover'
                        />
                    </div>
                </div>
            </section>

            <section className='bg-ink py-16 text-white lg:py-20'>
                <div className='mx-auto grid w-full max-w-[1440px] gap-10 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/15 lg:px-12'>
                    <div className='flex flex-col gap-3 lg:px-8 lg:first:pl-0'>
                        <p className='heading-lg text-[2.2rem]'>One team</p>
                        <p className='text-[14px] leading-relaxed text-white/60'>
                            Tours, transfers and trip planning in one conversation.
                        </p>
                    </div>
                    <div className='flex flex-col gap-3 lg:px-8'>
                        <p className='heading-lg text-[2.2rem]'>Your pace</p>
                        <p className='text-[14px] leading-relaxed text-white/60'>
                            Routes that leave room for the moments worth keeping.
                        </p>
                    </div>
                    <div className='flex flex-col gap-3 lg:px-8'>
                        <p className='heading-lg text-[2.2rem]'>Clear plans</p>
                        <p className='text-[14px] leading-relaxed text-white/60'>
                            Pickup, timing and the next step made easy to understand.
                        </p>
                    </div>
                    <div className='flex flex-col gap-3 lg:px-8 lg:last:pr-0'>
                        <p className='heading-lg text-[2.2rem]'>Qatar-wide</p>
                        <p className='text-[14px] leading-relaxed text-white/60'>
                            Doha, the desert, the coast and the journeys between them.
                        </p>
                    </div>
                </div>
            </section>

            <section className='bg-muted py-20 lg:py-28'>
                <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                    <div className='flex flex-col gap-5'>
                        <Eyebrow label='What we stand for' number='02' />
                        <h2 className='heading-lg max-w-[17ch] text-[clamp(2rem,4vw,3.2rem)] text-ink'>
                            The details that make a day feel looked after
                        </h2>
                    </div>

                    <div className='mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                        {values.map((value) => {
                            const ValueIcon = value.icon

                            return (
                                <article key={value.title} className='flex min-h-[250px] flex-col rounded-2xl bg-background p-6 sm:p-7'>
                                    <ValueIcon className='size-6 text-brand' strokeWidth={1.6} aria-hidden='true' />
                                    <h3 className='mt-auto pt-12 heading-lg text-[22px] text-ink'>
                                        {value.title}
                                    </h3>
                                    <p className='mt-3 text-[14px] leading-relaxed text-muted-foreground'>
                                        {value.description}
                                    </p>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className='bg-background py-20 lg:py-28'>
                <div className='mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-16 lg:px-12'>
                    <div className='relative order-2 aspect-[16/10] overflow-hidden rounded-2xl bg-muted lg:order-1 lg:col-span-7'>
                        <Image
                            src='/images/about/city-architecture.jpg'
                            alt='The West Bay skyline of Doha seen across the water'
                            fill
                            sizes='(max-width: 1024px) 100vw, 58vw'
                            className='object-cover'
                        />
                    </div>

                    <div className='order-1 flex flex-col gap-6 lg:order-2 lg:col-span-5'>
                        <Eyebrow label='Our mission' number='03' />
                        <h2 className='heading-lg text-[clamp(2rem,3.8vw,3rem)] text-ink'>
                            Make the journey feel as considered as the destination
                        </h2>
                        <p className='text-[15px] leading-relaxed text-muted-foreground'>
                            A great Qatar experience should connect you with the place—not rush you through it. We pair local context with practical care, so the day feels comfortable, authentic and easy to follow.
                        </p>
                        <ul className='flex flex-col gap-4 border-t border-ink/15 pt-5'>
                            {['City and heritage routes with context', 'Desert journeys with room for wonder', 'Transfers planned as part of the itinerary'].map((item) => (
                                <li key={item} className='flex items-start gap-3 text-[14px] text-ink'>
                                    <span className='mt-1.5 size-1.5 shrink-0 rounded-full bg-brand' aria-hidden='true' />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className='bg-muted/70 py-20 lg:py-28'>
                <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                    <div className='grid gap-12 lg:grid-cols-12 lg:gap-16'>
                        <div className='lg:col-span-5'>
                            <Eyebrow label='How we work' number='04' />
                            <h2 className='mt-5 heading-lg max-w-[14ch] text-[clamp(2rem,3.8vw,3rem)] text-ink'>
                                Tell us your dates. We&apos;ll handle the shape of the day.
                            </h2>
                        </div>

                        <ol className='flex flex-col lg:col-span-7'>
                            {journeySteps.map((step) => (
                                <li key={step.number} className='grid gap-4 border-t border-ink/15 py-6 sm:grid-cols-[4rem_1fr] sm:gap-6'>
                                    <span className='eyebrow text-brand'>{step.number}</span>
                                    <div>
                                        <h3 className='heading-lg text-[24px] text-ink'>{step.title}</h3>
                                        <p className='mt-3 max-w-xl text-[14px] leading-relaxed text-muted-foreground'>{step.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            <CtaBand
                eyebrow='Plan your Qatar journey'
                title='One message, one local team, a clearer way to travel.'
                description='Share your dates, pickup point and group size. We will help shape the right experience or transfer for your visit.'
                primaryLabel='Plan your visit'
                primaryHref='/contact-us#enquiry'
                secondaryLabel='Explore services'
                secondaryHref='/services'
                image='/images/about/sunset-road.jpg'
                imageAlt='Traditional dhows on Doha Bay in front of the lit-up city skyline at night'
            />
        </QatarPreviewLayout>
    )
}

export default AboutPage
