import type { FC, ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface EyebrowProps {
    label: string
    number?: string
    tone?: 'dark' | 'light'
    withDot?: boolean
    className?: string
}

export const Eyebrow: FC<EyebrowProps> = ({
    label,
    number,
    tone = 'dark',
    withDot = false,
    className
}): ReactNode => {
    return (
        <p
            className={cn(
                'eyebrow flex items-center gap-2.5',
                tone === 'light' ? 'text-white/75' : 'text-muted-foreground',
                className
            )}
        >
            {withDot && (
                <span
                    aria-hidden='true'
                    className={cn(
                        'size-1.5 rounded-full',
                        tone === 'light' ? 'bg-white' : 'bg-brand'
                    )}
                />
            )}

            {number && (
                <span className={tone === 'light' ? 'text-white' : 'text-brand'}>
                    {number}
                </span>
            )}

            <span>
                {label}
            </span>
        </p>
    )
}
