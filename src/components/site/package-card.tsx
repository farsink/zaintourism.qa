import type { FC, ReactNode } from 'react'
import type { TravelPackage } from '@/types'

import Link from 'next/link'
import Image from 'next/image'
import { Star, MapPin, Clock } from 'lucide-react'

import { cn } from '@/lib/utils'
import { PillLink } from '@/components/site/pill'

interface PackageCardProps {
    item: TravelPackage
    className?: string
}

export const PackageCard: FC<PackageCardProps> = ({ item, className }): ReactNode => {
    return (
        <article
            id={item.slug}
            className={cn(
                'group flex scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-border bg-card p-2.5 transition-colors duration-300 hover:border-ink/25',
                className
            )}
        >
            <Link
                href={`/destinations/${item.destinationSlug}`}
                className='relative block aspect-[16/11] overflow-hidden rounded-xl bg-ink'
                tabIndex={-1}
                aria-hidden='true'
            >
                <Image
                    src={item.image}
                    alt={item.destinationLabel}
                    fill
                    sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                    className='object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]'
                />

                <span className='absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-ink/45 px-3 py-1.5 text-[12px] font-medium text-white backdrop-blur-sm'>
                    <Star className='size-3.5 fill-white text-white' strokeWidth={0} />
                    {item.rating}
                </span>

                <span className='absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink'>
                    {item.category}
                </span>
            </Link>

            <div className='flex flex-1 flex-col gap-4 p-4 pt-5'>
                <div className='flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-muted-foreground'>
                    <span className='inline-flex items-center gap-1.5'>
                        <MapPin className='size-3.5' strokeWidth={1.6} />
                        {item.destinationLabel}
                    </span>

                    <span className='inline-flex items-center gap-1.5'>
                        <Clock className='size-3.5' strokeWidth={1.6} />
                        {item.duration}
                    </span>
                </div>

                <h3 className='heading-lg text-[22px] text-ink'>
                    <Link href={`/destinations/${item.destinationSlug}`} className='transition-opacity hover:opacity-70'>
                        {item.name}
                    </Link>
                </h3>

                <p className='line-clamp-3 text-[14px] leading-relaxed text-muted-foreground'>
                    {item.description}
                </p>

                <div className='flex flex-wrap gap-1.5'>
                    {item.activities.slice(0, 3).map((activity) => (
                        <span
                            key={activity}
                            className='rounded-full bg-sand px-2.5 py-1 text-[11px] text-ink/70'
                        >
                            {activity}
                        </span>
                    ))}
                </div>

                <div className='mt-auto flex items-end justify-between gap-4 border-t border-border pt-4'>
                    <div className='flex flex-col'>
                        <span className='text-[12px] text-muted-foreground'>
                            From
                        </span>

                        <span className='heading-lg text-[20px] text-ink'>
                            ${item.priceFrom.toLocaleString('en-US')}
                        </span>
                    </div>

                    <PillLink href={`/destinations/${item.destinationSlug}`} variant='outline' size='sm'>
                        View trip
                    </PillLink>
                </div>
            </div>
        </article>
    )
}
