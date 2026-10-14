import type { FC, ReactNode } from 'react'

import { useState } from 'react'
import { useRouter } from 'next/router'

import { PillButton } from '@/components/site/pill'
import { SelectField } from '@/components/site/select-field'
import { activityOptions, durationOptions } from '@/constants/content'
import { regionOptions, budgetOptions } from '@/constants/destinations'

export const HeroSearch: FC = (): ReactNode => {
    const router = useRouter()
    const [activity, setActivity] = useState('all')
    const [region, setRegion] = useState('all')
    const [season, setSeason] = useState('all')
    const [budget, setBudget] = useState('all')

    const handleExplore = () => {
        const query: Record<string, string> = {}

        if (region !== 'all') query.region = region
        if (season !== 'all') query.season = season
        if (budget !== 'all') query.budget = budget
        if (activity !== 'all') query.category = activity

        router.push({ pathname: '/destinations', query })
    }

    return (
        <div className='rounded-2xl border border-white/10 bg-ink/65 p-2 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl lg:rounded-full lg:p-2'>
            <div className='flex flex-col gap-2 lg:flex-row lg:items-center'>
                <div className='grid flex-1 grid-cols-1 divide-y divide-white/12 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x'>
                    <SelectField
                        id='hero-activity'
                        label='Activity / Goal'
                        icon='compass'
                        tone='dark'
                        value={activity}
                        options={activityOptions}
                        onChange={setActivity}
                    />

                    <SelectField
                        id='hero-region'
                        label='Location'
                        icon='pin'
                        tone='dark'
                        value={region}
                        options={regionOptions}
                        onChange={setRegion}
                    />

                    <SelectField
                        id='hero-season'
                        label='Date / Duration'
                        icon='calendar'
                        tone='dark'
                        value={season}
                        options={durationOptions}
                        onChange={setSeason}
                    />

                    <SelectField
                        id='hero-budget'
                        label='Budget'
                        icon='wallet'
                        tone='dark'
                        value={budget}
                        options={budgetOptions}
                        onChange={setBudget}
                    />
                </div>

                <div className='px-2 pb-1 lg:px-0 lg:pb-0'>
                    <PillButton
                        type='button'
                        onClick={handleExplore}
                        variant='light'
                        size='lg'
                        className='w-full lg:w-auto'
                    >
                        Explore
                    </PillButton>
                </div>
            </div>
        </div>
    )
}
