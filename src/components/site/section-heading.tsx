import type { FC, ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { Eyebrow } from '@/components/site/eyebrow'

interface SectionHeadingProps {
    number?: string
    eyebrow: string
    title: ReactNode
    description?: string
    action?: ReactNode
    tone?: 'dark' | 'light'
    className?: string
    titleClassName?: string
}

export const SectionHeading: FC<SectionHeadingProps> = ({
    number,
    eyebrow,
    title,
    description,
    action,
    tone = 'dark',
    className,
    titleClassName
}): ReactNode => {
    return (
        <div className={cn('flex flex-col gap-7', className)}>
            <Eyebrow label={eyebrow} number={number} tone={tone} withDot={!number} />

            <div className='grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12'>
                <h2
                    className={cn(
                        'heading-lg text-[clamp(2.15rem,4.6vw,3.75rem)] lg:col-span-7',
                        tone === 'light' ? 'text-white' : 'text-ink',
                        titleClassName
                    )}
                >
                    {title}
                </h2>

                {(description || action) && (
                    <div className='flex flex-col items-start gap-6 lg:col-span-5 lg:pb-2'>
                        {description && (
                            <p
                                className={cn(
                                    'max-w-md text-[15px] leading-relaxed',
                                    tone === 'light' ? 'text-white/70' : 'text-muted-foreground'
                                )}
                            >
                                {description}
                            </p>
                        )}

                        {action}
                    </div>
                )}
            </div>
        </div>
    )
}
