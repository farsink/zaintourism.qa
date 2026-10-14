import type { FC, ReactNode, ChangeEvent } from 'react'
import type { FilterOption, IconName } from '@/types'

import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Icon } from '@/components/site/icon'

interface SelectFieldProps {
    id: string
    label: string
    value: string
    options: FilterOption[]
    onChange: (value: string) => void
    icon?: IconName
    tone?: 'dark' | 'light'
    className?: string
}

export const SelectField: FC<SelectFieldProps> = ({
    id,
    label,
    value,
    options,
    onChange,
    icon,
    tone = 'light',
    className
}): ReactNode => {
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value)
    }

    return (
        <div className={cn('flex min-w-0 items-center gap-3 px-4 py-3 sm:px-5', className)}>
            {icon && (
                <span
                    className={cn(
                        'grid size-9 shrink-0 place-items-center rounded-lg',
                        tone === 'dark' ? 'bg-white/10 text-white' : 'bg-sand text-ink'
                    )}
                >
                    <Icon name={icon} className='size-[18px]' />
                </span>
            )}

            <div className='relative min-w-0 flex-1'>
                <label
                    htmlFor={id}
                    className={cn(
                        'block text-[12px] font-medium tracking-[-0.01em]',
                        tone === 'dark' ? 'text-white' : 'text-ink'
                    )}
                >
                    {label}
                </label>

                <select
                    id={id}
                    value={value}
                    onChange={handleChange}
                    className={cn(
                        'peer w-full cursor-pointer appearance-none truncate bg-transparent pr-6 text-[13px] outline-none',
                        '[&>option]:bg-white [&>option]:text-ink',
                        tone === 'dark' ? 'text-white/60' : 'text-muted-foreground'
                    )}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

                <ChevronDown
                    aria-hidden='true'
                    className={cn(
                        'pointer-events-none absolute bottom-1 right-0 size-4',
                        tone === 'dark' ? 'text-white/50' : 'text-muted-foreground'
                    )}
                    strokeWidth={1.6}
                />
            </div>
        </div>
    )
}
