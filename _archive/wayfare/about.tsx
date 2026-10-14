import type { FC, ReactNode } from 'react'

import Image from 'next/image'

import { Seo } from '@/components/generals/seo'
import { Layout } from '@/components/generals/layout'
import { Icon } from '@/components/site/icon'
import { Eyebrow } from '@/components/site/eyebrow'
import { PageHeader } from '@/components/site/page-header'
import { PillLink } from '@/components/site/pill'
import { CtaBand } from '@/components/site/cta-band'

import {
    aboutStats,
    aboutValues,
    approachSteps,
    teamMembers,
    testimonials
} from '@/constants/content'

const About: FC = (): ReactNode => {
    return (
        <Layout>
            <Seo
                title='About us'
                description='Wayfare Travels is a nine person studio in Lisbon planning slow, small group journeys in 48 countries, with guides who live where they work.'
                ogImage='/images/about-team.jpg'
            />

            <PageHeader
                eyebrow='About the studio'
                title={(
                    <>
                        We plan fewer trips,
                        <br />
                        and we plan them properly
                    </>
                )}
                description='Wayfare Travels started in 2014 with one route, one guide and a stubborn idea: that the best trips are the ones with the fewest things in them.'
                aside={(
                    <PillLink href='#approach' size='lg'>
                        How we work
                    </PillLink>
                )}
                image='/images/about-team.jpg'
                imageAlt='Four walkers crossing a snowy mountain landscape together'
            />

            <section id='philosophy' className='bg-background py-20 lg:py-28'>
                <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                    <div className='grid gap-14 lg:grid-cols-12 lg:gap-16'>
                        <div className='flex flex-col gap-7 lg:col-span-7'>
                            <Eyebrow label='Our philosophy' number='01' />

                            <h2 className='heading-lg text-[clamp(1.9rem,3.8vw,3rem)] text-ink'>
                                Most itineraries are too full. We spend our time taking things out.
                            </h2>

                            <div className='flex max-w-2xl flex-col gap-5 text-[15px] leading-relaxed text-muted-foreground'>
                                <p>
                                    The first version of every trip we write is too long. Somebody in
                                    the studio reads it, crosses out a day, and asks what you would
                                    actually miss. Usually the answer is nothing, and what you gain is
                                    an afternoon with no plan in it, which is where most of the good
                                    parts of travelling happen.
                                </p>

                                <p>
                                    We are nine people in a studio in Lisbon, and between us we have
                                    guided, cooked, driven and photographed in most of the places on
                                    this site. Nothing goes on the list until one of us has walked it,
                                    slept in it and eaten there. That is why the list is short and why
                                    it stays short.
                                </p>

                                <p>
                                    We also say no. If February is the wrong month for the thing you
                                    want to do, we will tell you and suggest you wait, even when it
                                    costs us the booking. We have built the whole business on being
                                    the people you believe.
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-4 lg:col-span-5'>
                            <div className='relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand'>
                                <Image
                                    src='/images/about-editorial.jpg'
                                    alt='A small wooden boat on clear turquoise water'
                                    fill
                                    sizes='(max-width: 1024px) 100vw, 40vw'
                                    className='object-cover'
                                />
                            </div>

                            <div className='grid grid-cols-2 gap-4'>
                                <div className='relative aspect-square overflow-hidden rounded-2xl bg-sand'>
                                    <Image
                                        src='/images/about-detail.jpg'
                                        alt='A hand holding a stack of printed travel photographs'
                                        fill
                                        sizes='(max-width: 1024px) 50vw, 20vw'
                                        className='object-cover'
                                    />
                                </div>

                                <div className='relative aspect-square overflow-hidden rounded-2xl bg-sand'>
                                    <Image
                                        src='/images/about-studio.jpg'
                                        alt='A camera resting on a map beside travel photographs'
                                        fill
                                        sizes='(max-width: 1024px) 50vw, 20vw'
                                        className='object-cover'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section aria-label='Studio in numbers' className='bg-ink py-16 text-white lg:py-20'>
                <div className='mx-auto grid w-full max-w-[1440px] gap-10 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12'>
                    {aboutStats.map((stat) => (
                        <div key={stat.label} className='flex flex-col gap-2'>
                            <span className='heading-xl text-[clamp(2.5rem,4.5vw,3.75rem)] text-white'>
                                {stat.value}
                            </span>

                            <span className='max-w-[22ch] text-[14px] leading-snug text-white/55'>
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            <section id='values' className='bg-background py-20 lg:py-28'>
                <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                    <div className='flex flex-wrap items-end justify-between gap-6'>
                        <div className='flex flex-col gap-5'>
                            <Eyebrow label='What we hold to' number='02' />

                            <h2 className='heading-lg max-w-[16ch] text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                                Four rules we have never broken
                            </h2>
                        </div>

                        <p className='max-w-sm text-[14px] leading-relaxed text-muted-foreground'>
                            These are not marketing lines. Each one has cost us money at some point,
                            and each one is the reason people come back.
                        </p>
                    </div>

                    <div className='mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2'>
                        {aboutValues.map((value, index) => (
                            <div key={value.title} className='flex flex-col gap-5 border-t border-border pt-7'>
                                <div className='flex items-center justify-between gap-4'>
                                    <span className='grid size-12 place-items-center rounded-full border border-ink/15 text-ink'>
                                        <Icon name={value.icon} className='size-5' />
                                    </span>

                                    <span className='eyebrow text-brand'>
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>

                                <h3 className='heading-lg text-[21px] text-ink'>
                                    {value.title}
                                </h3>

                                <p className='max-w-md text-[15px] leading-relaxed text-muted-foreground'>
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id='approach' className='scroll-mt-24 bg-sand/60 py-20 lg:py-28'>
                <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                    <div className='grid gap-14 lg:grid-cols-12 lg:gap-16'>
                        <div className='flex flex-col gap-8 lg:col-span-7'>
                            <Eyebrow label='How we work' number='03' />

                            <h2 className='heading-lg text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                                Four steps, and one person who owns the whole thing
                            </h2>

                            <ol className='flex flex-col divide-y divide-ink/10'>
                                {approachSteps.map((step) => (
                                    <li key={step.number} className='flex items-start gap-6 py-7 first:pt-0 last:pb-0'>
                                        <span className='eyebrow w-8 shrink-0 pt-1.5 text-brand'>
                                            {step.number}
                                        </span>

                                        <div className='flex flex-col gap-2'>
                                            <h3 className='heading-lg text-[20px] text-ink'>
                                                {step.title}
                                            </h3>

                                            <p className='max-w-xl text-[14px] leading-relaxed text-muted-foreground'>
                                                {step.description}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ol>

                            <PillLink href='/contact' size='lg' className='self-start'>
                                Start a conversation
                            </PillLink>
                        </div>

                        <div className='relative aspect-[3/4] overflow-hidden rounded-2xl bg-sand lg:col-span-5'>
                            <Image
                                src='/images/people/quote-secondary.jpg'
                                alt='A traveller in a blue jacket walking in a snowy landscape'
                                fill
                                sizes='(max-width: 1024px) 100vw, 40vw'
                                className='object-cover'
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section id='team' className='bg-background py-20 lg:py-28'>
                <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                    <div className='flex flex-wrap items-end justify-between gap-6'>
                        <div className='flex flex-col gap-5'>
                            <Eyebrow label='The studio' number='04' />

                            <h2 className='heading-lg text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                                The people who answer your email
                            </h2>
                        </div>

                        <p className='max-w-sm text-[14px] leading-relaxed text-muted-foreground'>
                            Four of the nine. The rest are guides, drivers and fixers who work with
                            us season after season in the places they were born in.
                        </p>
                    </div>

                    <div className='mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4'>
                        {teamMembers.map((member) => (
                            <article key={member.name} className='flex flex-col gap-5'>
                                <div className='relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand'>
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 23vw'
                                        className='object-cover'
                                    />
                                </div>

                                <div className='flex flex-col gap-1.5'>
                                    <h3 className='heading-lg text-[19px] text-ink'>
                                        {member.name}
                                    </h3>

                                    <p className='text-[13px] text-brand'>
                                        {member.role}
                                    </p>

                                    <p className='mt-1 text-[14px] leading-relaxed text-muted-foreground'>
                                        {member.bio}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id='words' className='bg-background pb-20 lg:pb-28'>
                <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                    <div className='flex flex-col gap-5'>
                        <Eyebrow label='In their words' number='05' />

                        <h2 className='heading-lg text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                            What travellers say afterwards
                        </h2>
                    </div>

                    <div className='mt-12 grid gap-4 lg:grid-cols-3'>
                        {testimonials.map((item) => (
                            <figure
                                key={item.name}
                                className='flex flex-col gap-7 rounded-2xl border border-border bg-card p-7'
                            >
                                <blockquote className='text-[17px] leading-relaxed text-ink'>
                                    {`“${item.quote}”`}
                                </blockquote>

                                <figcaption className='mt-auto flex items-center gap-3.5'>
                                    <span className='relative size-11 overflow-hidden rounded-full bg-sand'>
                                        <Image
                                            src={item.avatar}
                                            alt=''
                                            fill
                                            sizes='44px'
                                            className='object-cover'
                                        />
                                    </span>

                                    <div className='flex flex-col'>
                                        <span className='text-[14px] font-medium text-ink'>
                                            {item.name}
                                        </span>

                                        <span className='text-[13px] text-muted-foreground'>
                                            {item.detail}
                                        </span>
                                    </div>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            <CtaBand
                eyebrow='Come and talk to us'
                title='The best trips start with a bad first email'
                description='Nobody knows exactly what they want at the beginning. Send us a rough idea, a month, a feeling, and we will turn it into something real.'
                primaryLabel='Get in touch'
                secondaryLabel='See the destinations'
                image='/images/about-team.jpg'
            />
        </Layout>
    )
}

export default About
