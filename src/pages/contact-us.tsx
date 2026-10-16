import type { FC, FormEvent, ReactNode } from 'react'

import { useState } from 'react'
import { Check, Loader2, MessageCircle, Phone } from 'lucide-react'

import { Seo } from '@/components/generals/seo'
import { PageHeader } from '@/components/site/page-header'
import { Eyebrow } from '@/components/site/eyebrow'
import { PillButton, PillLink } from '@/components/site/pill'
import { QatarPreviewLayout } from '@/components/sites/qatar-preview/qatar-preview-layout'

import { qatarPreviewBasePath } from '@/constants/qatar-preview'

const fieldClasses = 'h-12 w-full rounded-xl border border-border bg-card px-4 text-[16px] text-ink outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ink/40 focus-visible:ring-2 focus-visible:ring-ink/15'
const selectClasses = `${fieldClasses} cursor-pointer appearance-none pr-10`
const labelClasses = 'mb-2 block text-[13px] font-medium text-ink'

type Status = 'idle' | 'loading' | 'success' | 'error'

const initialForm = {
    fullName: '',
    email: '',
    phone: '',
    travelWindow: '',
    pickup: '',
    guests: '2',
    service: '',
    notes: ''
}

const serviceLabels: Record<string, string> = {
    city: 'Doha city experience',
    desert: 'Desert & Inland Sea',
    layover: 'Layover route',
    culture: 'Culture & museums',
    waterfront: 'Dhow & waterfront',
    transport: 'Private transport',
    unsure: 'Not sure yet'
}

const QatarContact: FC = (): ReactNode => {
    const [form, setForm] = useState(initialForm)
    const [status, setStatus] = useState<Status>('idle')
    const [feedback, setFeedback] = useState('')

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
                body: JSON.stringify({
                    fullName: form.fullName,
                    email: form.email,
                    phone: form.phone,
                    destination: form.pickup,
                    travelWindow: form.travelWindow,
                    travellers: form.guests,
                    budget: 'not-specified',
                    message: [
                        form.service ? `Service: ${serviceLabels[form.service] ?? form.service}` : '',
                        form.notes
                    ].filter(Boolean).join(' — ')
                })
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
        <QatarPreviewLayout>
            <Seo
                title='Contact'
                siteName='Zain Tourism'
                description='Tell Zain Tourism where you want to go in Qatar. Share your date, pickup point, group and the kind of help you need.'
                ogImage='/images/contact-coast.jpg'
            />

            <PageHeader
                eyebrow='Contact'
                title={(
                    <>
                        Tell us the shape
                        <br />
                        of your Qatar visit
                    </>
                )}
                description='A rough idea is enough to start. Send your date, pickup point and group and we will come back with a real plan.'
                aside={(
                    <div className='flex flex-col gap-3 text-[14px] text-muted-foreground'>
                        <span className='inline-flex items-center gap-2'>
                            <MessageCircle className='size-4 text-ink' strokeWidth={1.6} aria-hidden='true' />
                            WhatsApp enquiries
                        </span>
                        <span className='inline-flex items-center gap-2'>
                            <Phone className='size-4 text-ink' strokeWidth={1.6} aria-hidden='true' />
                            Call the team
                        </span>
                    </div>
                )}
                className='pt-12 pb-10 sm:pt-16 sm:pb-16 lg:pt-24 lg:pb-20'
            />

            <section id='enquiry' className='bg-background pb-16 sm:pb-20 lg:pb-28'>
                <div className='mx-auto grid w-full max-w-[1440px] gap-8 px-5 sm:gap-10 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12'>
                    <div className='lg:col-span-7'>
                        <div className='rounded-[1.5rem] border border-border bg-card p-6 sm:p-9'>
                            {status === 'success' ? (
                                <div className='flex flex-col items-start gap-6 py-8 sm:py-10' role='status' aria-live='polite'>
                                    <span className='grid size-14 place-items-center rounded-full bg-ink text-background'>
                                        <Check className='size-6' strokeWidth={1.75} aria-hidden='true' />
                                    </span>
                                    <h2 className='heading-lg text-[28px] text-ink'>
                                        Your enquiry is with us
                                    </h2>
                                    <p className='max-w-md text-[15px] leading-relaxed text-muted-foreground'>
                                        One of the planners will read it properly and reply shortly. If it is urgent, call the team on the number on this page.
                                    </p>
                                    <div className='flex flex-wrap gap-3 pt-2'>
                                        <PillLink href={`${qatarPreviewBasePath}/tours`} variant='outline'>
                                            Keep browsing
                                        </PillLink>
                                        <button
                                            type='button'
                                            onClick={() => {
                                                setForm(initialForm)
                                                setStatus('idle')
                                            }}
                                            className='text-[14px] text-muted-foreground underline underline-offset-4 transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink'
                                        >
                                            Send another enquiry
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                                    <div className='flex flex-col gap-2'>
                                        <h2 className='heading-lg text-[26px] text-ink'>
                                            Start with the essentials
                                        </h2>
                                        <p className='text-[14px] leading-relaxed text-muted-foreground'>
                                            A useful travel enquiry starts with your date, pickup point, group and the kind of help you need.
                                        </p>
                                    </div>

                                    <div className='grid gap-5 sm:grid-cols-2'>
                                        <div>
                                            <label htmlFor='contact-name' className={labelClasses}>Your name</label>
                                            <input id='contact-name' name='fullName' type='text' autoComplete='name' required value={form.fullName} onChange={(event) => update('fullName', event.target.value)} placeholder='Your name' className={fieldClasses} />
                                        </div>
                                        <div>
                                            <label htmlFor='contact-email' className={labelClasses}>Email address</label>
                                            <input id='contact-email' name='email' type='email' autoComplete='email' required value={form.email} onChange={(event) => update('email', event.target.value)} placeholder='name@example.com' className={fieldClasses} />
                                        </div>
                                        <div>
                                            <label htmlFor='contact-phone' className={labelClasses}>
                                                Phone
                                                <span className='ml-1.5 font-normal text-muted-foreground'>
                                                    optional
                                                </span>
                                            </label>
                                            <input id='contact-phone' name='phone' type='tel' autoComplete='tel' value={form.phone} onChange={(event) => update('phone', event.target.value)} placeholder='+974 0000 000' className={fieldClasses} />
                                        </div>
                                        <div>
                                            <label htmlFor='contact-date' className={labelClasses}>Travel date</label>
                                            <input id='contact-date' name='travelWindow' type='date' required value={form.travelWindow} onChange={(event) => update('travelWindow', event.target.value)} className={fieldClasses} />
                                        </div>
                                        <div>
                                            <label htmlFor='contact-guests' className={labelClasses}>Number of guests</label>
                                            <select id='contact-guests' name='guests' value={form.guests} onChange={(event) => update('guests', event.target.value)} className={selectClasses}>
                                                <option value='1'>1 guest</option>
                                                <option value='2'>2 guests</option>
                                                <option value='3-5'>3–5 guests</option>
                                                <option value='6-10'>6–10 guests</option>
                                                <option value='10+'>More than 10 guests</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor='contact-pickup' className={labelClasses}>Pickup point</label>
                                            <input id='contact-pickup' name='pickup' type='text' required value={form.pickup} onChange={(event) => update('pickup', event.target.value)} placeholder='Airport, hotel or area' className={fieldClasses} />
                                        </div>
                                        <div className='sm:col-span-2'>
                                            <label htmlFor='contact-service' className={labelClasses}>What do you need?</label>
                                            <select id='contact-service' name='service' required value={form.service} onChange={(event) => update('service', event.target.value)} className={selectClasses}>
                                                <option value='' disabled>Select a service</option>
                                                <option value='city'>Doha city experience</option>
                                                <option value='desert'>Desert & Inland Sea</option>
                                                <option value='layover'>Layover route</option>
                                                <option value='culture'>Culture & museums</option>
                                                <option value='waterfront'>Dhow & waterfront</option>
                                                <option value='transport'>Private transport</option>
                                                <option value='unsure'>Not sure yet</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor='contact-notes' className={labelClasses}>Anything else we should know?</label>
                                        <textarea id='contact-notes' name='notes' value={form.notes} onChange={(event) => update('notes', event.target.value)} placeholder='Tell us about timing, interests, luggage or accessibility needs.' rows={5} className='w-full resize-y rounded-xl border border-border bg-card px-4 py-3 text-[16px] text-ink outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ink/40 focus-visible:ring-2 focus-visible:ring-ink/15' />
                                    </div>

                                    {status === 'error' && (
                                        <p role='alert' className='text-[14px] text-destructive'>
                                            {feedback}
                                        </p>
                                    )}

                                    <div className='flex flex-col gap-3 border-t border-border pt-6'>
                                        <PillButton type='submit' size='lg' className='self-start' disabled={status === 'loading'}>
                                            {status === 'loading' ? <Loader2 className='size-4 animate-spin' aria-hidden='true' /> : null}
                                            {status === 'loading' ? 'Sending…' : 'Send enquiry'}
                                        </PillButton>
                                        <p className='text-[13px] leading-relaxed text-muted-foreground'>
                                            We reply to every enquiry, usually within one working day.
                                        </p>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>

                    <aside className='flex flex-col gap-7 rounded-[1.5rem] bg-sand/60 p-6 sm:p-8 lg:col-span-5'>
                        <div className='flex flex-col gap-4'>
                            <Eyebrow label='What to prepare' withDot />
                            <h2 className='heading-lg text-[26px] text-ink'>
                                Four details make the first response more useful
                            </h2>
                        </div>
                        <ol className='flex flex-col divide-y divide-ink/10'>
                            {[
                                'Your travel date or connection window',
                                'Your pickup point and onward destination',
                                'Number of guests and luggage needs',
                                'Whether you want a tour, transport or both'
                            ].map((item, index) => (
                                <li key={item} className='flex gap-4 py-4 first:pt-0 last:pb-0'>
                                    <span className='eyebrow pt-1 text-brand'>{String(index + 1).padStart(2, '0')}</span>
                                    <p className='text-[14px] leading-relaxed text-ink'>{item}</p>
                                </li>
                            ))}
                        </ol>
                    </aside>
                </div>
            </section>
        </QatarPreviewLayout>
    )
}

export default QatarContact
