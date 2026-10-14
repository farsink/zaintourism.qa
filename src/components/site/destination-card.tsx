import type { FC, ReactNode } from 'react'
import type { Destination, IconName } from '@/types'

import Link from 'next/link'
import Image from 'next/image'
import { Star, ArrowUpRight } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Icon } from '@/components/site/icon'

const tagIcons: Record<string, IconName> = {
    Beach: 'waves',
    Surf: 'waves',
    Coast: 'anchor',
    Culture: 'landmark',
    History: 'book',
    Trekking: 'walk',
    Hiking: 'walk',
    Wildlife: 'bird',
    Nature: 'forest',
    'Unique stays': 'tent',
    'Local life': 'users',
    Food: 'food',
    'Slow travel': 'clock',
    Desert: 'sun',
    'Northern lights': 'sparkles',
    Wellness: 'flower'
}

export const tagIcon = (tag: string): IconName => tagIcons[tag] ?? 'compass'

interface DestinationCardProps {
    destination: Destination
    size?: 'default' | 'tall' | 'wide'
    priority?: boolean
    className?: string
}

const ratios: Record<'default' | 'tall' | 'wide', string> = {
    default: 'aspect-[5/4]',
    tall: 'aspect-[4/5]',
    wide: 'aspect-[16/10]'
}

export const DestinationCard: FC<DestinationCardProps> = ({
    destination,
    size = 'default',
    priority = false,
    className
}): ReactNode => {
    return (
        <Link
            href={`/destinations/${destination.slug}`}
            className={cn(
                'group relative block overflow-hidden rounded-2xl bg-ink',
                'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink',
                ratios[size],
                className
            )}
        >
            <Image
                src={destination.image}
                alt={`${destination.name}, ${destination.country}`}
                fill
                priority={priority}
                sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                className='object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]'
            />

            <div className='absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-ink/10' />

            <div className='absolute inset-x-4 top-4 flex items-start justify-between gap-3'>
                <span className='inline-flex items-center gap-1.5 rounded-full bg-ink/45 px-3 py-1.5 text-[12px] font-medium text-white backdrop-blur-sm'>
                    <Star className='size-3.5 fill-white text-white' strokeWidth={0} />
                    {destination.rating}

                    <span className='text-white/60'>
                        ({destination.reviews})
                    </span>
                </span>

                <span className='grid size-8 place-items-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100'>
                    <ArrowUpRight className='size-4' strokeWidth={1.75} />
                </span>
            </div>

            <div className='absolute inset-x-0 bottom-0 flex flex-col gap-3 p-5'>
                <div className='flex flex-col gap-1'>
                    <h3 className='heading-lg text-[21px] text-white'>
                        {destination.name}
                    </h3>

                    <p className='text-[13px] text-white/65'>
                        {destination.country}
                    </p>
                </div>

                <div className='flex flex-wrap items-center gap-1.5'>
                    {destination.tags.map((tag) => (
                        <span
                            key={tag}
                            className='inline-flex items-center gap-1.5 rounded-full bg-white/12 px-2.5 py-1 text-[11px] text-white/85 backdrop-blur-sm'
                        >
                            <Icon name={tagIcon(tag)} className='size-3' />
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    )
}
