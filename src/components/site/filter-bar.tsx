import type { FC, ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { SelectField } from '@/components/site/select-field'
import { PillLink, PillButton } from '@/components/site/pill'

import {
    regionOptions,
    categoryOptions,
    budgetOptions,
    seasonOptions
} from '@/constants/destinations'

export type FilterState = {
    region: string
    category: string
    budget: string
    season: string
}

export const defaultFilters: FilterState = {
    region: 'all',
    category: 'all',
    budget: 'all',
    season: 'all'
}

interface FilterBarProps {
    value: FilterState
    onChange: (next: FilterState) => void
    actionLabel?: string
    actionHref?: string
    onAction?: () => void
    idPrefix?: string
    className?: string
}

export const FilterBar: FC<FilterBarProps> = ({
    value,
    onChange,
    actionLabel = 'Discover',
    actionHref,
    onAction,
    idPrefix = 'filter',
    className
}): ReactNode => {
    const update = (key: keyof FilterState) => (next: string) => {
        onChange({ ...value, [key]: next })
    }

    return (
        <div
            className={cn(
                'flex flex-col gap-2 rounded-2xl border border-border bg-card p-2 lg:flex-row lg:items-center lg:rounded-full lg:p-2.5',
                className
            )}
        >
            <div className='grid flex-1 grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x'>
                <SelectField
                    id={`${idPrefix}-region`}
                    label='Destination'
                    value={value.region}
                    options={regionOptions}
                    onChange={update('region')}
                />

                <SelectField
                    id={`${idPrefix}-category`}
                    label='Category'
                    value={value.category}
                    options={categoryOptions}
                    onChange={update('category')}
                />

                <SelectField
                    id={`${idPrefix}-budget`}
                    label='Price'
                    value={value.budget}
                    options={budgetOptions}
                    onChange={update('budget')}
                />

                <SelectField
                    id={`${idPrefix}-season`}
                    label='Season'
                    value={value.season}
                    options={seasonOptions}
                    onChange={update('season')}
                />
            </div>

            <div className='px-2 pb-1 lg:px-0 lg:pb-0'>
                {actionHref ? (
                    <PillLink href={actionHref} variant='dark' size='lg' className='w-full lg:w-auto'>
                        {actionLabel}
                    </PillLink>
                ) : (
                    <PillButton type='button' onClick={onAction} variant='dark' size='lg' className='w-full lg:w-auto'>
                        {actionLabel}
                    </PillButton>
                )}
            </div>
        </div>
    )
}
