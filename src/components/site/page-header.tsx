import type { FC, ReactNode } from 'react'

import Image from 'next/image'

import { cn } from '@/lib/utils'
import { Eyebrow } from '@/components/site/eyebrow'

interface PageHeaderProps {
    eyebrow: string
    title: ReactNode
    description: string
    aside?: ReactNode
    image?: string
    imageAlt?: string
    className?: string
}

export const PageHeader: FC<PageHeaderProps> = ({
    eyebrow,
    title,
    description,
    aside,
    image,
    imageAlt = '',
    className
}): ReactNode => {
    return (
        <section className={cn('bg-background pt-16 lg:pt-24', className)}>
            <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                <div className='flex flex-col gap-8'>
                    <Eyebrow label={eyebrow} withDot />

                    <div className='grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12'>
                        <h1 className='heading-xl text-[clamp(2.6rem,6.4vw,5.25rem)] text-ink lg:col-span-7'>
                            {title}
                        </h1>

                        <div className='flex flex-col items-start gap-6 lg:col-span-5 lg:pb-3'>
                            <p className='max-w-md text-[15px] leading-relaxed text-muted-foreground'>
                                {description}
                            </p>

                            {aside}
                        </div>
                    </div>
                </div>

                {image && (
                    <div className='relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-ink sm:aspect-[21/9] lg:mt-16'>
                        <Image
                            src={image}
                            alt={imageAlt}
                            fill
                            priority
                            sizes='100vw'
                            className='object-cover'
                        />
                    </div>
                )}
            </div>
        </section>
    )
}
