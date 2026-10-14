import type { FC, ReactNode } from 'react'
import type { QatarFaq, QatarSampleReview, QatarTourDetail } from '@/constants/qatar-preview'

import Image from 'next/image'
import { Check, Info, Star, X } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Eyebrow } from '@/components/site/eyebrow'
import { QatarFaqAccordion } from '@/components/sites/qatar-preview/qatar-faq-accordion'
import { QatarTourCard } from '@/components/sites/qatar-preview/qatar-tour-card'
import { featuredQatarTours } from '@/constants/qatar-preview'

interface QatarTourStatsStripProps {
    stats: { value: string, label: string }[]
}

export const QatarTourStatsStrip: FC<QatarTourStatsStripProps> = ({ stats }): ReactNode => {
    return (
        <section className='border-y border-border bg-background'>
            <div className='mx-auto grid w-full max-w-[1440px] grid-cols-2 gap-x-6 gap-y-8 px-5 py-12 sm:px-8 lg:grid-cols-4 lg:px-12'>
                {stats.map((stat, index) => (
                    <div key={stat.value} className='flex flex-col gap-1.5 border-l border-border pl-5'>
                        <span className='eyebrow text-brand'>
                            {String(index + 1).padStart(2, '0')}
                        </span>
                        <p className='heading-lg text-[clamp(1.3rem,2vw,1.55rem)] text-ink'>
                            {stat.value}
                        </p>
                        <p className='text-[13px] leading-relaxed text-muted-foreground'>
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

interface QatarTourExtrasProps {
    detail: QatarTourDetail
}

const ReviewCard: FC<{ review: QatarSampleReview }> = ({ review }): ReactNode => (
    <figure className='flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6'>
        <div className='flex items-center justify-between gap-4'>
            <div className='flex items-center gap-3'>
                <span
                    aria-hidden='true'
                    className='grid size-10 place-items-center rounded-full bg-brand/10 text-[14px] font-semibold text-brand'
                >
                    {review.name.charAt(0)}
                </span>
                <figcaption className='flex flex-col'>
                    <span className='text-[14px] font-semibold text-ink'>
                        {review.name}
                    </span>
                    <span className='text-[12.5px] text-muted-foreground'>
                        {`${review.country} · ${review.month}`}
                    </span>
                </figcaption>
            </div>

            <div className='flex gap-0.5' aria-label='5 out of 5 stars'>
                {[...Array(5)].map((_, index) => (
                    <Star key={index} className='size-3.5 fill-brand text-brand' strokeWidth={0} aria-hidden='true' />
                ))}
            </div>
        </div>

        <blockquote className='flex-1'>
            <p className='heading-lg text-[16px] text-ink'>
                {review.title}
            </p>
            <p className='mt-2 text-[14px] leading-relaxed text-muted-foreground'>
                {review.text}
            </p>
        </blockquote>

        <span className='eyebrow text-muted-foreground'>
            Sample review (preview)
        </span>
    </figure>
)

export const QatarTourExtras: FC<QatarTourExtrasProps> = ({ detail }): ReactNode => {
    const related = detail.relatedSlugs
        ? featuredQatarTours.filter((tour) => detail.relatedSlugs?.includes(tour.slug))
        : []

    return (
        <>
            {detail.gallery && detail.gallery.length > 0 && (
                <section className='bg-background py-20 lg:py-28'>
                    <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                        <div className='flex flex-wrap items-end justify-between gap-6'>
                            <div className='flex flex-col gap-5'>
                                <Eyebrow label='The route in pictures' />
                                <h2 className='heading-lg max-w-[18ch] text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                                    Dunes, camels and the Inland Sea
                                </h2>
                            </div>
                        </div>

                        <div className='mt-12 grid gap-4 sm:grid-cols-2'>
                            {detail.gallery.map((photo) => (
                                <div
                                    key={photo.image}
                                    className='relative aspect-[16/10] overflow-hidden rounded-2xl bg-sand'
                                >
                                    <Image
                                        src={photo.image}
                                        alt={photo.imageAlt}
                                        fill
                                        sizes='(max-width: 640px) 100vw, 50vw'
                                        className='object-cover'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {(detail.included || detail.excluded) && (
                <section className='bg-background py-20 lg:py-28'>
                    <div className='mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12'>
                        <div className='flex flex-col gap-5 lg:col-span-4'>
                            <Eyebrow label='What your booking covers' number='03' />
                            <h2 className='heading-lg max-w-[16ch] text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                                Included, and what sits outside the fare
                            </h2>
                        </div>

                        <div className='grid gap-4 lg:col-span-8 sm:grid-cols-2'>
                            {detail.included && (
                                <div className='rounded-2xl border border-border bg-card p-6 sm:p-8'>
                                    <p className='eyebrow text-emerald-700'>
                                        Included
                                    </p>
                                    <ul className='mt-5 flex flex-col gap-3'>
                                        {detail.included.map((item) => (
                                            <li key={item} className='flex items-start gap-3 text-[14px] leading-relaxed text-ink'>
                                                <span className='mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-emerald-600/10'>
                                                    <Check className='size-3 text-emerald-700' strokeWidth={2.4} aria-hidden='true' />
                                                </span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {detail.excluded && (
                                <div className='rounded-2xl border border-border bg-card p-6 sm:p-8'>
                                    <p className='eyebrow text-red-700'>
                                        Not included
                                    </p>
                                    <ul className='mt-5 flex flex-col gap-3'>
                                        {detail.excluded.map((item) => (
                                            <li key={item} className='flex items-start gap-3 text-[14px] leading-relaxed text-muted-foreground'>
                                                <span className='mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-red-600/10'>
                                                    <X className='size-3 text-red-700' strokeWidth={2.4} aria-hidden='true' />
                                                </span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {detail.notes && detail.notes.length > 0 && (
                <section className='bg-sand/60 py-20 lg:py-28'>
                    <div className='mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12'>
                        <div className='flex flex-col gap-5 lg:col-span-4'>
                            <Eyebrow label='Good to know' number='03' />
                            <h2 className='heading-lg max-w-[16ch] text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                                A few honest notes before the dunes
                            </h2>
                        </div>

                        <ul className='flex flex-col lg:col-span-8'>
                            {detail.notes.map((note, index) => (
                                <li key={note} className='flex gap-4 border-t border-ink/15 py-5 first:border-0 first:pt-0'>
                                    <span className='eyebrow pt-0.5 text-brand'>
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <p className='text-[14.5px] leading-relaxed text-muted-foreground'>
                                        {note}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            )}

            {detail.faqs && detail.faqs.length > 0 && (
                <section className='bg-background py-20 lg:py-28'>
                    <div className='mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12'>
                        <div className='flex flex-col gap-5 lg:col-span-4'>
                            <Eyebrow label='Questions, answered' number='04' />
                            <h2 className='heading-lg max-w-[16ch] text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                                Desert safari questions
                            </h2>
                            <p className='text-[15px] leading-relaxed text-muted-foreground'>
                                Times, rates and terrain — the details people usually ask about before this route.
                            </p>
                        </div>

                        <QatarFaqAccordion items={detail.faqs} className='lg:col-span-8' />
                    </div>
                </section>
            )}

            {detail.sampleReviews && detail.sampleReviews.length > 0 && (
                <section className='bg-sand/60 py-20 lg:py-28'>
                    <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                        <div className='flex flex-wrap items-end justify-between gap-6'>
                            <div className='flex flex-col gap-5'>
                                <Eyebrow label='Guest feedback' number='05' />
                                <h2 className='heading-lg max-w-[20ch] text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                                    What guests say about this route
                                </h2>
                            </div>

                            <div className='flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4'>
                                <span className='heading-lg text-[2rem] text-ink'>
                                    {typeof detail.rating === 'number' ? detail.rating.toFixed(1) : '5.0'}
                                </span>
                                <span className='text-[13px] text-muted-foreground'>
                                    {typeof detail.reviews === 'number' ? `${detail.reviews} reviews` : ''}
                                </span>
                            </div>
                        </div>

                        <div className='mt-10 grid gap-4 md:grid-cols-3'>
                            {detail.sampleReviews.map((review) => (
                                <ReviewCard key={review.name} review={review} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {related.length > 0 && (
                <section className='bg-background py-20 lg:py-28'>
                    <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                        <div className='flex flex-col gap-5'>
                            <Eyebrow label='You might also like' />
                            <h2 className='heading-lg max-w-[22ch] text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                                Pair, extend or slow the day down
                            </h2>
                        </div>

                        <div className={cn('mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3')}>
                            {related.map((tour) => (
                                <QatarTourCard key={tour.slug} tour={tour} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}


