import type { FC, ReactNode, ButtonHTMLAttributes } from 'react'

import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export type PillVariant = 'dark' | 'light' | 'outline' | 'outlineLight'
export type PillSize = 'sm' | 'md' | 'lg'

const variants: Record<PillVariant, string> = {
    dark: 'bg-ink text-background hover:bg-ink/85',
    light: 'bg-white text-ink hover:bg-white/90',
    outline: 'border border-ink/20 text-ink hover:border-ink/50 hover:bg-ink/5',
    outlineLight: 'border border-white/35 text-white hover:bg-white/10 hover:border-white/60'
}

const sizes: Record<PillSize, string> = {
    sm: 'h-9 px-4 text-[13px] gap-1.5',
    md: 'h-11 px-5 text-[14px] gap-2',
    lg: 'h-12 px-6 text-[15px] gap-2.5'
}

export const pillClasses = (variant: PillVariant = 'dark', size: PillSize = 'md'): string => {
    return cn(
        'group inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full font-medium tracking-[-0.01em] transition-colors duration-300',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current',
        'disabled:pointer-events-none disabled:opacity-60',
        variants[variant],
        sizes[size]
    )
}

const PillArrow: FC = (): ReactNode => {
    return (
        <ArrowRight
            aria-hidden='true'
            strokeWidth={1.75}
            className='size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5'
        />
    )
}

interface PillLinkProps {
    href: string
    children: ReactNode
    variant?: PillVariant
    size?: PillSize
    className?: string
    external?: boolean
    withArrow?: boolean
}

export const PillLink: FC<PillLinkProps> = ({
    href,
    children,
    variant = 'dark',
    size = 'md',
    className,
    external = false,
    withArrow = true
}): ReactNode => {
    const content = (
        <>
            <span className='inline-flex items-center gap-2 whitespace-nowrap'>
                {children}
            </span>

            {withArrow && <PillArrow />}
        </>
    )

    if (external) {
        return (
            <a
                href={href}
                target='_blank'
                rel='noreferrer'
                className={cn(pillClasses(variant, size), className)}
            >
                {content}
            </a>
        )
    }

    return (
        <Link href={href} className={cn(pillClasses(variant, size), className)}>
            {content}
        </Link>
    )
}

interface PillButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    variant?: PillVariant
    size?: PillSize
    withArrow?: boolean
}

export const PillButton: FC<PillButtonProps> = ({
    children,
    variant = 'dark',
    size = 'md',
    className,
    withArrow = true,
    ...props
}): ReactNode => {
    return (
        <button className={cn(pillClasses(variant, size), className)} {...props}>
            <span className='inline-flex items-center gap-2 whitespace-nowrap'>
                {children}
            </span>

            {withArrow && <PillArrow />}
        </button>
    )
}

interface TextLinkProps {
    href: string
    children: ReactNode
    className?: string
    tone?: 'dark' | 'light'
}

export const TextLink: FC<TextLinkProps> = ({
    href,
    children,
    className,
    tone = 'dark'
}): ReactNode => {
    return (
        <Link
            href={href}
            className={cn(
                'group inline-flex items-center gap-2 border-b pb-1 text-[14px] font-medium tracking-[-0.01em] transition-colors',
                tone === 'dark' ? 'border-ink/25 text-ink hover:border-ink' : 'border-white/30 text-white hover:border-white',
                className
            )}
        >
            <span>
                {children}
            </span>

            <ArrowUpRight className='size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' strokeWidth={1.75} />
        </Link>
    )
}
