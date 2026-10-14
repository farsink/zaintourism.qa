import type { FC, ReactNode } from 'react'
import type { QatarFaq } from '@/constants/qatar-preview'

import { useState } from 'react'
import { Plus, X } from 'lucide-react'

import { cn } from '@/lib/utils'

interface QatarFaqAccordionProps {
    items: QatarFaq[]
    defaultOpenIndex?: number
    className?: string
}

export const QatarFaqAccordion: FC<QatarFaqAccordionProps> = ({
    items,
    defaultOpenIndex = 0,
    className
}): ReactNode => {
    const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex)

    return (
        <div className={cn('flex flex-col gap-3', className)}>
            {items.map((item, index) => {
                const isOpen = openIndex === index

                return (
                    <div
                        key={item.question}
                        className={cn(
                            'overflow-hidden rounded-2xl border bg-card transition-colors duration-300',
                            isOpen ? 'border-ink/30' : 'border-border'
                        )}
                    >
                        <button
                            type='button'
                            onClick={() => setOpenIndex(isOpen ? null : index)}
                            aria-expanded={isOpen}
                            aria-controls={`faq-panel-${index}`}
                            id={`faq-button-${index}`}
                            className='flex w-full items-center justify-between gap-4 px-5 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink'
                        >
                            <h3 className='heading-lg text-[16.5px] text-ink'>
                                {item.question}
                            </h3>

                            <span
                                aria-hidden='true'
                                className={cn(
                                    'grid size-7 shrink-0 place-items-center rounded-full border transition-colors duration-300',
                                    isOpen ? 'bg-ink text-background' : 'border-border text-ink'
                                )}
                            >
                                {isOpen
                                    ? <X className='size-3.5' strokeWidth={2} />
                                    : <Plus className='size-3.5' strokeWidth={2} />}
                            </span>
                        </button>

                        <div
                            id={`faq-panel-${index}`}
                            role='region'
                            aria-labelledby={`faq-button-${index}`}
                            className={cn(
                                'grid transition-[grid-template-rows] duration-300 ease-out',
                                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                            )}
                        >
                            <div className='overflow-hidden'>
                                <p className='px-5 pb-5 text-[14px] leading-relaxed text-muted-foreground'>
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
