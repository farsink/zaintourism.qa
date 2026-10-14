import type { FC, ReactNode } from 'react'

import Image from 'next/image'

import { cn } from '@/lib/utils'
import { Eyebrow } from '@/components/site/eyebrow'
import { PillLink } from '@/components/site/pill'

interface CtaBandProps {
    eyebrow?: string
    title: ReactNode
    description: string
    primaryLabel?: string
    primaryHref?: string
    secondaryLabel?: string
    secondaryHref?: string
    image?: string
    imageAlt?: string
    imageClassName?: string
    className?: string
}

export const CtaBand: FC<CtaBandProps> = ({
    eyebrow = 'Ready when you are',
    title,
    description,
    primaryLabel = 'Plan your trip',
    primaryHref = '/contact',
    secondaryLabel = 'Browse destinations',
    secondaryHref = '/destinations',
    image = '/images/footer-explore.jpg',
    imageAlt = '',
    imageClassName,
    className
}): ReactNode => {
    return (
        <section className={cn('bg-background pb-20 lg:pb-28', className)}>
            <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                <div className='relative overflow-hidden rounded-[1.75rem] bg-ink'>
                    <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        sizes='100vw'
                        className={cn('object-cover opacity-80', imageClassName)}
                    />

                    <div className='absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/45 to-transparent' />

                    <div className='relative flex flex-col gap-8 px-6 py-16 sm:px-10 lg:px-16 lg:py-24'>
                        <Eyebrow label={eyebrow} tone='light' withDot />

                        <h2 className='heading-lg max-w-[16ch] text-[clamp(2.1rem,4.6vw,3.6rem)] text-white'>
                            {title}
                        </h2>

                        <p className='max-w-lg text-[15px] leading-relaxed text-white/70'>
                            {description}
                        </p>

                        <div className='flex flex-wrap items-center gap-3 pt-2'>
                            <PillLink href={primaryHref} variant='light' size='lg'>
                                {primaryLabel}
                            </PillLink>

                            <PillLink href={secondaryHref} variant='outlineLight' size='lg'>
                                {secondaryLabel}
                            </PillLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
