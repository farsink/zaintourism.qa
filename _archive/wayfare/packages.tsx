import type { FC, ReactNode } from 'react'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { Star, Check } from 'lucide-react'

import { Seo } from '@/components/generals/seo'
import { Layout } from '@/components/generals/layout'
import { Icon } from '@/components/site/icon'
import { Eyebrow } from '@/components/site/eyebrow'
import { PageHeader } from '@/components/site/page-header'
import { PillLink } from '@/components/site/pill'
import { PackageCard } from '@/components/site/package-card'
import { CtaBand } from '@/components/site/cta-band'
import { cn } from '@/lib/utils'
import { inclusionHighlights } from '@/constants/content'

import {
    travelPackages,
    packageCategories,
    getFeaturedPackage
} from '@/constants/packages'

const Packages: FC = (): ReactNode => {
    const [category, setCategory] = useState('all')
    const featured = getFeaturedPackage()

    const results = useMemo(() => {
        if (category === 'all') return travelPackages

        return travelPackages.filter((item) => item.category === category)
    }, [category])

    return (
        <Layout>
            <Seo
                title='Packages'
                description='Complete trips planned end to end, from a nine day slow coast in Bali to eleven days working the weather in Patagonia. Small groups, private departures and expeditions.'
                ogImage='/images/packages-feature.jpg'
            />

            <PageHeader
                eyebrow='Curated packages'
                title={(
                    <>
                        Complete trips,
                        <br />
                        planned end to end
                    </>
                )}
                description='Flights in, flights out, and everything in between already handled. Each trip below runs as a small group departure, or privately on your own dates.'
                aside={(
                    <div className='flex flex-wrap gap-3'>
                        <PillLink href='#all-trips'>See all trips</PillLink>

                        <PillLink href='/contact' variant='outline'>
                            Ask a question
                        </PillLink>
                    </div>
                )}
                className='pb-16 lg:pb-20'
            />

            <section id='featured' className='bg-background pb-20 lg:pb-24'>
                <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                    <article className='grid overflow-hidden rounded-[1.75rem] border border-border bg-card lg:grid-cols-12'>
                        <div className='relative aspect-[4/3] bg-ink lg:col-span-6 lg:aspect-auto lg:min-h-[560px]'>
                            <Image
                                src={featured.image}
                                alt={featured.destinationLabel}
                                fill
                                priority
                                sizes='(max-width: 1024px) 100vw, 50vw'
                                className='object-cover'
                            />

                            <span className='absolute left-5 top-5 rounded-full bg-white/90 px-3.5 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-ink'>
                                Featured trip
                            </span>
                        </div>

                        <div className='flex flex-col gap-7 p-7 sm:p-10 lg:col-span-6 lg:justify-center lg:p-14'>
                            <div className='flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-muted-foreground'>
                                <span className='inline-flex items-center gap-1.5 text-ink'>
                                    <Star className='size-3.5 fill-ink text-ink' strokeWidth={0} />
                                    {featured.rating}

                                    <span className='text-muted-foreground'>
                                        {`(${featured.reviews})`}
                                    </span>
                                </span>

                                <span>
                                    {featured.destinationLabel}
                                </span>

                                <span>
                                    {`${featured.duration} · ${featured.groupSize}`}
                                </span>
                            </div>

                            <h2 className='heading-lg text-[clamp(2rem,3.8vw,3rem)] text-ink'>
                                {featured.name}
                            </h2>

                            <p className='max-w-xl text-[15px] leading-relaxed text-muted-foreground'>
                                {featured.description}
                            </p>

                            <ul className='grid gap-2.5 sm:grid-cols-2'>
                                {featured.includes.map((item) => (
                                    <li key={item} className='flex items-start gap-2.5 text-[14px] text-ink'>
                                        <Check className='mt-0.5 size-4 shrink-0 text-brand' strokeWidth={1.75} />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className='flex flex-wrap items-end justify-between gap-6 border-t border-border pt-7'>
                                <div className='flex flex-col'>
                                    <span className='text-[12px] text-muted-foreground'>
                                        From
                                    </span>

                                    <span className='heading-lg text-[28px] text-ink'>
                                        {`$${featured.priceFrom.toLocaleString('en-US')}`}
                                    </span>

                                    <span className='text-[12px] text-muted-foreground'>
                                        per person
                                    </span>
                                </div>

                                <div className='flex flex-wrap gap-3'>
                                    <PillLink href='/contact' size='lg'>
                                        Enquire about this trip
                                    </PillLink>

                                    <PillLink
                                        href={`/destinations/${featured.destinationSlug}`}
                                        variant='outline'
                                        size='lg'
                                    >
                                        See the destination
                                    </PillLink>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <section id='all-trips' className='bg-background pb-20 lg:pb-28'>
                <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                    <div className='flex flex-wrap items-end justify-between gap-6'>
                        <div className='flex flex-col gap-5'>
                            <Eyebrow label='Every trip' number='01' />

                            <h2 className='heading-lg text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                                Nine complete journeys
                            </h2>
                        </div>

                        <p className='max-w-sm text-[14px] leading-relaxed text-muted-foreground'>
                            Every one of these can run privately on your own dates, and every one
                            can be lengthened, shortened or rerouted before you book.
                        </p>
                    </div>

                    <div className='mt-10 flex flex-wrap gap-2'>
                        {packageCategories.map((option) => (
                            <button
                                key={option.value}
                                type='button'
                                onClick={() => setCategory(option.value)}
                                aria-pressed={category === option.value}
                                className={cn(
                                    'h-10 rounded-full px-5 text-[14px] font-medium transition-colors',
                                    category === option.value
                                        ? 'bg-ink text-background'
                                        : 'border border-border bg-card text-muted-foreground hover:border-ink/30 hover:text-ink'
                                )}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>

                    <p className='mt-6 text-[14px] text-muted-foreground'>
                        <span className='text-ink'>
                            {results.length}
                        </span>
                        {results.length === 1 ? ' trip' : ' trips'}
                        {category === 'all' ? ' in total' : ` in ${category.toLowerCase()}`}
                    </p>

                    <div className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                        {results.map((item) => (
                            <PackageCard key={item.slug} item={item} />
                        ))}
                    </div>
                </div>
            </section>

            <section id='included' className='bg-sand/60 py-20 lg:py-24'>
                <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                    <div className='grid gap-12 lg:grid-cols-12 lg:gap-16'>
                        <div className='flex flex-col gap-5 lg:col-span-4'>
                            <Eyebrow label='What is included' number='02' />

                            <h2 className='heading-lg text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                                The same four things, on every trip
                            </h2>

                            <p className='max-w-sm text-[15px] leading-relaxed text-muted-foreground'>
                                International flights are the one thing we leave out, because we
                                have never managed to beat what you can book yourself.
                            </p>
                        </div>

                        <div className='grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-8'>
                            {inclusionHighlights.map((item) => (
                                <div key={item.title} className='flex flex-col gap-4'>
                                    <span className='grid size-12 place-items-center rounded-full border border-ink/15 bg-background text-ink'>
                                        <Icon name={item.icon} className='size-5' />
                                    </span>

                                    <h3 className='heading-lg text-[19px] text-ink'>
                                        {item.title}
                                    </h3>

                                    <p className='text-[14px] leading-relaxed text-muted-foreground'>
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className='bg-background pt-20 lg:pt-24'>
                <CtaBand
                    eyebrow='Build your own'
                    title='None of these quite right?'
                    description='Most of our work is private trips that started as a rough idea in an email. Tell us the shape of what you want and we will price it honestly, including the parts that will not work.'
                    primaryLabel='Tell us your idea'
                    secondaryLabel='Browse destinations'
                    image='/images/dest/lofoten.jpg'
                />
            </div>
        </Layout>
    )
}

export default Packages
