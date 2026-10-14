import type { FC, ReactNode, FormEvent } from 'react'

import { useState } from 'react'
import Image from 'next/image'

import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Check,
    Plus,
    Minus,
    Loader2,
    ChevronDown,
    ArrowRight
} from 'lucide-react'

import { Seo } from '@/components/generals/seo'
import { Layout } from '@/components/generals/layout'
import { Eyebrow } from '@/components/site/eyebrow'
import { PageHeader } from '@/components/site/page-header'
import { PillLink } from '@/components/site/pill'
import { CtaBand } from '@/components/site/cta-band'
import { cn } from '@/lib/utils'
import { contactDetails } from '@/constants/site'
import { destinations } from '@/constants/destinations'
import { faqs, travellerCountOptions, budgetRanges } from '@/constants/content'

type Status = 'idle' | 'loading' | 'success' | 'error'

const fieldClasses = 'h-12 w-full rounded-xl border border-border bg-card px-4 text-[14px] text-ink outline-none transition-colors placeholder:text-muted-foreground focus:border-ink/40'
const selectClasses = `${fieldClasses} cursor-pointer appearance-none truncate pr-10`
const chevronClasses = 'pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground'
const labelClasses = 'mb-2 block text-[13px] font-medium text-ink'

const initialForm = {
    fullName: '',
    email: '',
    phone: '',
    destination: '',
    travelWindow: '',
    travellers: '2',
    budget: '2000-3500',
    message: ''
}

const Contact: FC = (): ReactNode => {
    const [form, setForm] = useState(initialForm)
    const [status, setStatus] = useState<Status>('idle')
    const [feedback, setFeedback] = useState('')
    const [openFaq, setOpenFaq] = useState<number | null>(0)

    const update = (key: keyof typeof initialForm, value: string) => {
        setForm((current) => ({ ...current, [key]: value }))
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (status === 'loading') return

        setStatus('loading')
        setFeedback('')

        try {
            const response = await fetch('/api/inquiries', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            })

            const data = await response.json()

            if (!response.ok) {
                setStatus('error')
                setFeedback(data?.message ?? 'Something went wrong. Please try again.')

                return
            }

            setStatus('success')
            setForm(initialForm)
        } catch {
            setStatus('error')
            setFeedback('We could not reach the server. Please try again in a moment.')
        }
    }

    return (
        <Layout>
            <Seo
                title='Contact'
                description='Tell Wayfare Travels where you want to go. We reply to every enquiry within one working day, with honest advice and a realistic price.'
                ogImage='/images/contact-coast.jpg'
            />

            <PageHeader
                eyebrow='Contact'
                title={(
                    <>
                        Tell us where
                        <br />
                        you want to go
                    </>
                )}
                description='A rough idea is enough to start. Send us a month, a feeling or a place name and we will come back with something real, usually within a working day.'
                aside={(
                    <div className='flex flex-col gap-2'>
                        <a
                            href={`mailto:${contactDetails.email}`}
                            className='heading-lg text-[20px] text-ink underline-offset-4 transition-opacity hover:opacity-70 hover:underline'
                        >
                            {contactDetails.email}
                        </a>

                        <a
                            href={`tel:${contactDetails.phone.replace(/[^+\d]/g, '')}`}
                            className='text-[15px] text-muted-foreground transition-colors hover:text-ink'
                        >
                            {contactDetails.phone}
                        </a>
                    </div>
                )}
                className='pb-16 lg:pb-20'
            />

            <section id='enquiry' className='bg-background pb-20 lg:pb-28'>
                <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                    <div className='grid gap-10 lg:grid-cols-12 lg:gap-8'>
                        <div className='lg:col-span-7'>
                            <div className='rounded-[1.5rem] border border-border bg-card p-6 sm:p-9'>
                                {status === 'success' ? (
                                    <div className='flex flex-col items-start gap-6 py-10'>
                                        <span className='grid size-14 place-items-center rounded-full bg-ink text-background'>
                                            <Check className='size-6' strokeWidth={1.75} />
                                        </span>

                                        <h2 className='heading-lg text-[28px] text-ink'>
                                            Your enquiry is with us
                                        </h2>

                                        <p className='max-w-md text-[15px] leading-relaxed text-muted-foreground'>
                                            One of the planners will read it properly and reply within
                                            one working day, usually sooner. If it is urgent, call the
                                            studio on the number on this page.
                                        </p>

                                        <div className='flex flex-wrap gap-3 pt-2'>
                                            <PillLink href='/destinations' variant='outline'>
                                                Keep browsing
                                            </PillLink>

                                            <button
                                                type='button'
                                                onClick={() => setStatus('idle')}
                                                className='text-[14px] text-muted-foreground underline underline-offset-4 transition-colors hover:text-ink'
                                            >
                                                Send another enquiry
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} noValidate={false} className='flex flex-col gap-6'>
                                        <div className='flex flex-col gap-2'>
                                            <h2 className='heading-lg text-[26px] text-ink'>
                                                Start your enquiry
                                            </h2>

                                            <p className='text-[14px] leading-relaxed text-muted-foreground'>
                                                Nothing here is binding, and we never pass your details
                                                to anybody else.
                                            </p>
                                        </div>

                                        <div className='grid gap-5 sm:grid-cols-2'>
                                            <div>
                                                <label htmlFor='fullName' className={labelClasses}>
                                                    Your name
                                                </label>

                                                <input
                                                    id='fullName'
                                                    name='fullName'
                                                    type='text'
                                                    required
                                                    autoComplete='name'
                                                    value={form.fullName}
                                                    onChange={(event) => update('fullName', event.target.value)}
                                                    placeholder='Ana Ferreira'
                                                    className={fieldClasses}
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor='email' className={labelClasses}>
                                                    Email
                                                </label>

                                                <input
                                                    id='email'
                                                    name='email'
                                                    type='email'
                                                    required
                                                    autoComplete='email'
                                                    value={form.email}
                                                    onChange={(event) => update('email', event.target.value)}
                                                    placeholder='you@example.com'
                                                    className={fieldClasses}
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor='phone' className={labelClasses}>
                                                    Phone
                                                    <span className='ml-1.5 font-normal text-muted-foreground'>
                                                        optional
                                                    </span>
                                                </label>

                                                <input
                                                    id='phone'
                                                    name='phone'
                                                    type='tel'
                                                    autoComplete='tel'
                                                    value={form.phone}
                                                    onChange={(event) => update('phone', event.target.value)}
                                                    placeholder='+351 000 000 000'
                                                    className={fieldClasses}
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor='destination' className={labelClasses}>
                                                    Where are you thinking
                                                </label>

                                                <div className='relative'>
                                                    <select
                                                        id='destination'
                                                        name='destination'
                                                        value={form.destination}
                                                        onChange={(event) => update('destination', event.target.value)}
                                                        className={selectClasses}
                                                    >
                                                        <option value=''>
                                                            Not sure yet
                                                        </option>

                                                        {destinations.map((destination) => (
                                                            <option key={destination.slug} value={`${destination.name}, ${destination.country}`}>
                                                                {`${destination.name}, ${destination.country}`}
                                                            </option>
                                                        ))}

                                                        <option value='Somewhere else'>
                                                            Somewhere else entirely
                                                        </option>
                                                    </select>

                                                    <ChevronDown className={chevronClasses} strokeWidth={1.6} aria-hidden='true' />
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor='travelWindow' className={labelClasses}>
                                                    When
                                                </label>

                                                <input
                                                    id='travelWindow'
                                                    name='travelWindow'
                                                    type='text'
                                                    value={form.travelWindow}
                                                    onChange={(event) => update('travelWindow', event.target.value)}
                                                    placeholder='May 2026, or flexible'
                                                    className={fieldClasses}
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor='travellers' className={labelClasses}>
                                                    How many of you
                                                </label>

                                                <div className='relative'>
                                                    <select
                                                        id='travellers'
                                                        name='travellers'
                                                        value={form.travellers}
                                                        onChange={(event) => update('travellers', event.target.value)}
                                                        className={selectClasses}
                                                    >
                                                        {travellerCountOptions.map((option) => (
                                                            <option key={option.value} value={option.value}>
                                                                {option.label}
                                                            </option>
                                                        ))}
                                                    </select>

                                                    <ChevronDown className={chevronClasses} strokeWidth={1.6} aria-hidden='true' />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor='budget' className={labelClasses}>
                                                Rough budget
                                            </label>

                                            <div className='relative'>
                                                <select
                                                    id='budget'
                                                    name='budget'
                                                    value={form.budget}
                                                    onChange={(event) => update('budget', event.target.value)}
                                                    className={selectClasses}
                                                >
                                                    {budgetRanges.map((option) => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                    ))}
                                                </select>

                                                <ChevronDown className={chevronClasses} strokeWidth={1.6} aria-hidden='true' />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor='message' className={labelClasses}>
                                                What are you after
                                            </label>

                                            <textarea
                                                id='message'
                                                name='message'
                                                required
                                                rows={5}
                                                value={form.message}
                                                onChange={(event) => update('message', event.target.value)}
                                                placeholder='Two weeks somewhere quiet, a lot of walking, and nothing booked before ten in the morning.'
                                                className='w-full resize-y rounded-xl border border-border bg-card px-4 py-3.5 text-[14px] leading-relaxed text-ink outline-none transition-colors placeholder:text-muted-foreground focus:border-ink/40'
                                            />
                                        </div>

                                        {status === 'error' && feedback && (
                                            <p role='alert' className='rounded-xl bg-destructive/10 px-4 py-3 text-[14px] text-destructive'>
                                                {feedback}
                                            </p>
                                        )}

                                        <div className='flex flex-wrap items-center gap-5 border-t border-border pt-6'>
                                            <button
                                                type='submit'
                                                disabled={status === 'loading'}
                                                className='group inline-flex h-12 items-center gap-2.5 rounded-full bg-ink px-6 text-[15px] font-medium text-background transition-colors hover:bg-ink/85 disabled:opacity-70'
                                            >
                                                {status === 'loading' ? 'Sending' : 'Send enquiry'}

                                                {status === 'loading' ? (
                                                    <Loader2 className='size-4 animate-spin' strokeWidth={1.75} />
                                                ) : (
                                                    <ArrowRight className='size-4 transition-transform duration-300 group-hover:translate-x-0.5' strokeWidth={1.75} />
                                                )}
                                            </button>

                                            <p className='max-w-[260px] text-[13px] leading-relaxed text-muted-foreground'>
                                                {contactDetails.response}
                                            </p>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>

                        <aside className='flex flex-col gap-4 lg:col-span-5'>
                            <div className='rounded-[1.5rem] border border-border bg-card p-6 sm:p-8'>
                                <p className='eyebrow text-muted-foreground'>
                                    The studio
                                </p>

                                <ul className='mt-6 flex flex-col divide-y divide-border'>
                                    <li className='flex items-start gap-4 pb-5'>
                                        <span className='grid size-10 shrink-0 place-items-center rounded-lg bg-sand text-ink'>
                                            <Mail className='size-[18px]' strokeWidth={1.6} />
                                        </span>

                                        <div className='flex flex-col gap-0.5'>
                                            <span className='text-[13px] text-muted-foreground'>
                                                Email
                                            </span>

                                            <a
                                                href={`mailto:${contactDetails.email}`}
                                                className='text-[15px] text-ink underline-offset-4 hover:underline'
                                            >
                                                {contactDetails.email}
                                            </a>
                                        </div>
                                    </li>

                                    <li className='flex items-start gap-4 py-5'>
                                        <span className='grid size-10 shrink-0 place-items-center rounded-lg bg-sand text-ink'>
                                            <Phone className='size-[18px]' strokeWidth={1.6} />
                                        </span>

                                        <div className='flex flex-col gap-0.5'>
                                            <span className='text-[13px] text-muted-foreground'>
                                                Phone
                                            </span>

                                            <a
                                                href={`tel:${contactDetails.phone.replace(/[^+\d]/g, '')}`}
                                                className='text-[15px] text-ink underline-offset-4 hover:underline'
                                            >
                                                {contactDetails.phone}
                                            </a>
                                        </div>
                                    </li>

                                    <li className='flex items-start gap-4 py-5'>
                                        <span className='grid size-10 shrink-0 place-items-center rounded-lg bg-sand text-ink'>
                                            <MapPin className='size-[18px]' strokeWidth={1.6} />
                                        </span>

                                        <div className='flex flex-col gap-0.5'>
                                            <span className='text-[13px] text-muted-foreground'>
                                                Studio
                                            </span>

                                            <span className='text-[15px] text-ink'>
                                                {contactDetails.address}
                                            </span>

                                            <span className='text-[15px] text-ink'>
                                                {contactDetails.city}
                                            </span>
                                        </div>
                                    </li>

                                    <li className='flex items-start gap-4 pt-5'>
                                        <span className='grid size-10 shrink-0 place-items-center rounded-lg bg-sand text-ink'>
                                            <Clock className='size-[18px]' strokeWidth={1.6} />
                                        </span>

                                        <div className='flex flex-col gap-0.5'>
                                            <span className='text-[13px] text-muted-foreground'>
                                                Opening hours
                                            </span>

                                            <span className='text-[15px] text-ink'>
                                                {contactDetails.hours}
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className='relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-ink'>
                                <Image
                                    src='/images/contact-coast.jpg'
                                    alt='Three surfers walking along a beach at sunset'
                                    fill
                                    sizes='(max-width: 1024px) 100vw, 40vw'
                                    className='object-cover'
                                />

                                <div className='absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent' />

                                <p className='absolute inset-x-6 bottom-6 text-[15px] leading-relaxed text-white'>
                                    Every enquiry is read by a planner, not a form robot. If we are
                                    not the right studio for your trip, we will say so and point you
                                    somewhere better.
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <section id='faq' className='scroll-mt-24 bg-sand/60 py-20 lg:py-28'>
                <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                    <div className='grid gap-12 lg:grid-cols-12 lg:gap-16'>
                        <div className='flex flex-col gap-5 lg:col-span-4'>
                            <Eyebrow label='Good to know' number='01' />

                            <h2 className='heading-lg text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink'>
                                Questions we get every week
                            </h2>

                            <p className='max-w-sm text-[15px] leading-relaxed text-muted-foreground'>
                                If yours is not here, write to us. We answer properly, and we have
                                never once sent a brochure.
                            </p>
                        </div>

                        <div className='lg:col-span-8'>
                            <ul className='flex flex-col divide-y divide-ink/10 border-t border-ink/10'>
                                {faqs.map((faq, index) => {
                                    const open = openFaq === index

                                    return (
                                        <li key={faq.question}>
                                            <h3>
                                                <button
                                                    type='button'
                                                    onClick={() => setOpenFaq(open ? null : index)}
                                                    aria-expanded={open}
                                                    aria-controls={`faq-panel-${index}`}
                                                    className='flex w-full items-start justify-between gap-6 py-6 text-left'
                                                >
                                                    <span className='heading-lg text-[19px] text-ink'>
                                                        {faq.question}
                                                    </span>

                                                    <span
                                                        className={cn(
                                                            'mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border transition-colors',
                                                            open ? 'border-ink bg-ink text-background' : 'border-ink/20 text-ink'
                                                        )}
                                                    >
                                                        {open ? (
                                                            <Minus className='size-4' strokeWidth={1.75} />
                                                        ) : (
                                                            <Plus className='size-4' strokeWidth={1.75} />
                                                        )}
                                                    </span>
                                                </button>
                                            </h3>

                                            {open && (
                                                <div id={`faq-panel-${index}`} className='pb-7 pr-14'>
                                                    <p className='max-w-2xl text-[15px] leading-relaxed text-muted-foreground'>
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            )}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className='bg-background pt-20 lg:pt-28'>
                <CtaBand
                    eyebrow='Or just start looking'
                    title='Read the routes before you write to us'
                    description='Every destination page has the real itinerary, the daily distances, the stays we book and the honest best time to go. It is the fastest way to work out what you actually want.'
                    primaryLabel='Browse destinations'
                    primaryHref='/destinations'
                    secondaryLabel='See the packages'
                    secondaryHref='/packages'
                    image='/images/dest/kyoto.jpg'
                />
            </div>
        </Layout>
    )
}

export default Contact
