import type { FC, ReactNode } from 'react'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/constants/site'

interface LogoProps {
    tone?: 'light' | 'dark'
    className?: string
    href?: string
    name?: string
}

export const Logo: FC<LogoProps> = ({
    tone = 'dark',
    className,
    href = '/',
    name = siteConfig.name
}): ReactNode => {
    return (
        <Link
            href={href}
            aria-label={`${name}, back to home`}
            className={cn(
                'group inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap transition-opacity hover:opacity-80',
                tone === 'light' ? 'text-white' : 'text-ink',
                className
            )}
        >
            <svg
                viewBox='0 0 32 32'
                className='size-7 shrink-0'
                fill='none'
                aria-hidden='true'
            >
                <path
                    d='M16 5.5 L28 25.5 H4 Z'
                    stroke='currentColor'
                    strokeWidth='2.2'
                    strokeLinejoin='round'
                />
                <path
                    d='M11 16.5 L16 21.5 L21 16.5'
                    stroke='currentColor'
                    strokeWidth='2.2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </svg>

            <span className='heading-lg text-[17px] leading-none whitespace-nowrap'>
                {name}
            </span>
        </Link>
    )
}
