import type { FC, ReactNode } from 'react'
import type { QatarTour } from '@/constants/qatar-preview'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Clock, Star } from 'lucide-react'

interface QatarTourCardProps {
    tour: QatarTour
    basePath?: string
    priority?: boolean
}

export const QatarTourCard: FC<QatarTourCardProps> = ({
    tour,
    basePath = '',
    priority = false
}): ReactNode => {
    const href = `${basePath}/tours/${tour.href}`

    return (
        <Link
            href={href}
            className='group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink'
        >
            <div className='relative aspect-[4/3] overflow-hidden bg-sand'>
                <Image
                    src={tour.image}
                    alt={tour.imageAlt}
                    fill
                    priority={priority}
                    sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                    className='object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]'
                />

                <span className='absolute left-4 top-4 rounded-full bg-ink/55 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.13em] text-white backdrop-blur-sm'>
                    {tour.category}
                </span>

                {tour.badge && (
                    <span className='absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-ink'>
                        {tour.badge}
                    </span>
                )}
            </div>

            <div className='flex flex-1 flex-col gap-4 p-5 sm:p-6'>
                <div className='flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[13px] text-muted-foreground'>
                    <span className='inline-flex items-center gap-1.5'>
                        <Clock className='size-3.5 text-ink' strokeWidth={1.6} aria-hidden='true' />
                        {tour.duration}
                    </span>

                    {tour.rating && (
                        <span className='inline-flex items-center gap-1.5 text-ink'>
                            <Star className='size-3.5 fill-ink text-ink' strokeWidth={0} aria-hidden='true' />
                            {tour.rating.toFixed(1)}

                            <span className='text-muted-foreground'>
                                {`(${tour.reviews})`}
                            </span>
                        </span>
                    )}

                    {tour.pickupIncluded && (
                        <span className='inline-flex items-center gap-1.5'>
                            Pickup included
                        </span>
                    )}
                </div>

                <h3 className='heading-lg text-[20px] text-ink'>
                    {tour.title}
                </h3>

                <p className='text-[14px] leading-relaxed text-muted-foreground'>
                    {tour.description}
                </p>

                <div className='mt-auto flex items-center justify-between gap-4 border-t border-border pt-4'>
                    <span className='inline-flex items-center gap-1 text-[14px] font-medium text-ink'>
                        View

                        <ArrowUpRight className='size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' strokeWidth={1.75} aria-hidden='true' />
                    </span>

                    <span className='inline-flex h-9 items-center rounded-full bg-ink px-4 text-[13px] font-medium text-background transition-colors duration-300 group-hover:bg-ink/85'>
                        Book now
                    </span>
                </div>
            </div>
        </Link>
    )
}
