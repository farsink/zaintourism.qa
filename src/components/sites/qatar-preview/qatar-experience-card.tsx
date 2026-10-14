import type { FC, ReactNode } from 'react'
import type { QatarExperience } from '@/constants/qatar-preview'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Clock, MapPin } from 'lucide-react'

import { qatarPreviewBasePath } from '@/constants/qatar-preview'

interface QatarExperienceCardProps {
    experience: QatarExperience
    priority?: boolean
    basePath?: string
}

export const QatarExperienceCard: FC<QatarExperienceCardProps> = ({
    experience,
    priority = false,
    basePath = qatarPreviewBasePath
}): ReactNode => {
    return (
        <Link
            href={`${basePath}/tours/${experience.slug}`}
            className='group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink'
        >
            <div className='relative aspect-[4/3] overflow-hidden bg-sand'>
                <Image
                    src={experience.image}
                    alt={experience.imageAlt}
                    fill
                    priority={priority}
                    sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                    className='object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]'
                />

                <span className='absolute left-4 top-4 rounded-full bg-ink/60 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.13em] text-white backdrop-blur-sm'>
                    {experience.category}
                </span>

                <span className='absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100'>
                    <ArrowUpRight className='size-4' strokeWidth={1.75} aria-hidden='true' />
                </span>
            </div>

            <div className='flex flex-1 flex-col gap-4 p-5 sm:p-6'>
                <h3 className='heading-lg text-[22px] text-ink'>
                    {experience.title}
                </h3>

                <p className='text-[14px] leading-relaxed text-muted-foreground'>
                    {experience.summary}
                </p>

                <div className='mt-auto flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-4 text-[13px] text-muted-foreground'>
                    <span className='inline-flex items-center gap-1.5'>
                        <Clock className='size-3.5 text-ink' strokeWidth={1.6} aria-hidden='true' />
                        {experience.duration}
                    </span>

                    <span className='inline-flex items-center gap-1.5'>
                        <MapPin className='size-3.5 text-ink' strokeWidth={1.6} aria-hidden='true' />
                        {experience.pickup}
                    </span>
                </div>
            </div>
        </Link>
    )
}
