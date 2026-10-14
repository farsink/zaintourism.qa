import type { FC, ReactNode } from 'react'
import type { FilterState } from '@/components/site/filter-bar'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Star, ArrowUpRight, RotateCcw } from 'lucide-react'

import { Seo } from '@/components/generals/seo'
import { Layout } from '@/components/generals/layout'
import { PageHeader } from '@/components/site/page-header'
import { Eyebrow } from '@/components/site/eyebrow'
import { PillButton, PillLink } from '@/components/site/pill'
import { FilterBar, defaultFilters } from '@/components/site/filter-bar'
import { DestinationCard } from '@/components/site/destination-card'
import { CtaBand } from '@/components/site/cta-band'
import { destinations, matchesBudget } from '@/constants/destinations'

const PAGE_SIZE = 6

const Destinations: FC = (): ReactNode => {
    const router = useRouter()
    const [filters, setFilters] = useState<FilterState>(defaultFilters)
    const [visible, setVisible] = useState(PAGE_SIZE)

    useEffect(() => {
        if (!router.isReady) return

        const { region, category, budget, season } = router.query

        setFilters({
            region: typeof region === 'string' ? region : 'all',
            category: typeof category === 'string' ? category : 'all',
            budget: typeof budget === 'string' ? budget : 'all',
            season: typeof season === 'string' ? season : 'all'
        })

        setVisible(PAGE_SIZE)
    }, [router.isReady, router.query])

    const featured = useMemo(() => destinations.filter((item) => item.featured), [])

    const results = useMemo(() => {
        return destinations.filter((destination) => {
            if (filters.region !== 'all' && destination.region !== filters.region) return false
            if (filters.category !== 'all' && destination.category !== filters.category) return false
            if (filters.season !== 'all' && !destination.seasons.includes(filters.season)) return false
            if (!matchesBudget(destination.priceFrom, filters.budget)) return false

            return true
        })
    }, [filters])

    const isFiltered = filters.region !== 'all'
        || filters.category !== 'all'
        || filters.budget !== 'all'
        || filters.season !== 'all'

    const handleChange = (next: FilterState) => {
        setFilters(next)
        setVisible(PAGE_SIZE)
    }

    const handleReset = () => {
        setFilters(defaultFilters)
        setVisible(PAGE_SIZE)
        router.replace('/destinations', undefined, { shallow: true })
    }

    const shown = results.slice(0, visible)
    const remaining = results.length - shown.length

    return (
        <Layout>
            <Seo
                title='Destinations'
                description='Browse every place Wayfare Travels plans in, from Bali and Song-Kül to Patagonia and the Faroes. Filter by region, landscape, budget and season.'
                ogImage='/images/dest/bali.jpg'
            />

            <PageHeader
                eyebrow='All destinations'
                title={(
                    <>
                        Nine places,
                        <br />
                        known properly
                    </>
                )}
                description='We would rather plan nine destinations well than ninety badly. Everything on this list has been walked, slept in and eaten through by somebody in the studio.'
                aside={(
                    <div className='flex flex-wrap gap-x-10 gap-y-4'>
                        <div className='flex flex-col'>
                            <span className='heading-lg text-[26px] text-ink'>
                                {destinations.length}
                            </span>

                            <span className='text-[13px] text-muted-foreground'>
                                Destinations
                            </span>
                        </div>

                        <div className='flex flex-col'>
                            <span className='heading-lg text-[26px] text-ink'>4.8</span>

                            <span className='text-[13px] text-muted-foreground'>
                                Average rating
                            </span>
                        </div>

                        <div className='flex flex-col'>
                            <span className='heading-lg text-[26px] text-ink'>6 to 10</span>

                            <span className='text-[13px] text-muted-foreground'>
                                Travellers per trip
                            </span>
                        </div>
                    </div>
                )}
            />

            <section id='featured' className='bg-background py-20 lg:py-24'>
                <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                    <div className='flex flex-wrap items-end justify-between gap-6'>
                        <div className='flex flex-col gap-5'>
                            <Eyebrow label='Featured right now' number='01' />

                            <h2 className='heading-lg text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                                Where our travellers are going this season
                            </h2>
                        </div>

                        <p className='max-w-sm text-[14px] leading-relaxed text-muted-foreground'>
                            Three trips with space left on the next departures, chosen because the
                            timing is right rather than because we need to sell them.
                        </p>
                    </div>

                    <div className='mt-12 grid gap-4 lg:grid-cols-12'>
                        <Link
                            href={`/destinations/${featured[0].slug}`}
                            className='group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-ink lg:col-span-7 lg:aspect-auto lg:min-h-[480px]'
                        >
                            <Image
                                src={featured[0].image}
                                alt={`${featured[0].name}, ${featured[0].country}`}
                                fill
                                priority
                                sizes='(max-width: 1024px) 100vw, 58vw'
                                className='object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]'
                            />

                            <div className='absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-ink/10' />

                            <span className='absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-ink/45 px-3 py-1.5 text-[12px] font-medium text-white backdrop-blur-sm'>
                                <Star className='size-3.5 fill-white text-white' strokeWidth={0} />
                                {featured[0].rating}

                                <span className='text-white/60'>
                                    ({featured[0].reviews})
                                </span>
                            </span>

                            <div className='absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 sm:p-8'>
                                <p className='eyebrow text-white/60'>
                                    {`${featured[0].region} · from $${featured[0].priceFrom.toLocaleString('en-US')}`}
                                </p>

                                <h3 className='heading-lg text-[clamp(1.75rem,3vw,2.5rem)] text-white'>
                                    {`${featured[0].name}, ${featured[0].country}`}
                                </h3>

                                <p className='max-w-md text-[14px] leading-relaxed text-white/70'>
                                    {featured[0].tagline}
                                </p>
                            </div>

                            <span className='absolute right-5 top-5 grid size-9 place-items-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100'>
                                <ArrowUpRight className='size-4' strokeWidth={1.75} />
                            </span>
                        </Link>

                        <div className='grid gap-4 lg:col-span-5'>
                            {featured.slice(1, 3).map((destination) => (
                                <DestinationCard
                                    key={destination.slug}
                                    destination={destination}
                                    size='wide'
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id='browse' className='bg-background pb-20 lg:pb-28'>
                <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                    <div className='flex flex-col gap-5'>
                        <Eyebrow label='Browse everything' number='02' />

                        <h2 className='heading-lg text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                            Find the one that fits
                        </h2>
                    </div>

                    <div className='mt-10'>
                        <FilterBar
                            value={filters}
                            onChange={handleChange}
                            onAction={() => setVisible(PAGE_SIZE)}
                            actionLabel='Apply'
                            idPrefix='browse'
                        />
                    </div>

                    <div className='mt-6 flex flex-wrap items-center justify-between gap-4'>
                        <p className='text-[14px] text-muted-foreground'>
                            <span className='text-ink'>
                                {results.length}
                            </span>
                            {results.length === 1 ? ' destination matches' : ' destinations match'}
                        </p>

                        {isFiltered && (
                            <button
                                type='button'
                                onClick={handleReset}
                                className='inline-flex items-center gap-2 text-[14px] text-muted-foreground transition-colors hover:text-ink'
                            >
                                <RotateCcw className='size-4' strokeWidth={1.6} />
                                Reset filters
                            </button>
                        )}
                    </div>

                    {results.length > 0 ? (
                        <>
                            <div className='mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                                {shown.map((destination) => (
                                    <DestinationCard key={destination.slug} destination={destination} />
                                ))}
                            </div>

                            {remaining > 0 && (
                                <div className='mt-12 flex flex-col items-center gap-4'>
                                    <PillButton
                                        type='button'
                                        variant='outline'
                                        size='lg'
                                        withArrow={false}
                                        onClick={() => setVisible((current) => current + 3)}
                                        className='px-8'
                                    >
                                        {`Load ${Math.min(remaining, 3)} more`}
                                    </PillButton>

                                    <p className='text-[13px] text-muted-foreground'>
                                        {`Showing ${shown.length} of ${results.length}`}
                                    </p>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className='mt-8 rounded-2xl border border-dashed border-border bg-card px-6 py-20 text-center'>
                            <h3 className='heading-lg text-[24px] text-ink'>
                                No destination matches those filters
                            </h3>

                            <p className='mx-auto mt-3 max-w-sm text-[14px] leading-relaxed text-muted-foreground'>
                                Loosen one of them and try again, or tell us what you are after and
                                we will build something that is not on the list.
                            </p>

                            <div className='mt-8 flex flex-wrap justify-center gap-3'>
                                <PillButton type='button' onClick={handleReset} withArrow={false} className='px-7'>
                                    Clear filters
                                </PillButton>

                                <PillLink href='/contact' variant='outline'>
                                    Ask us instead
                                </PillLink>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <CtaBand
                title='Not sure which one is right for you?'
                description='Tell us roughly when you are free and what you want a day to feel like. We will come back with two or three honest options, and say so if none of them fit.'
                primaryLabel='Start planning'
                secondaryLabel='See our packages'
                secondaryHref='/packages'
                image='/images/dest/song-kul.jpg'
            />
        </Layout>
    )
}

export default Destinations
