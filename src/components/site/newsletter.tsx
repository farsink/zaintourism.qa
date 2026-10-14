import type { FC, ReactNode, FormEvent } from 'react'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Check, Loader2 } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Eyebrow } from '@/components/site/eyebrow'
import { polaroids } from '@/constants/content'

type Status = 'idle' | 'loading' | 'success' | 'error'

const frames = [
    'rotate-[-9deg] left-0 top-8 z-10',
    'rotate-[4deg] left-[22%] top-0 z-20',
    'rotate-[-3deg] left-[46%] top-10 z-30'
]

export const Newsletter: FC = (): ReactNode => {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<Status>('idle')
    const [message, setMessage] = useState('')

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (status === 'loading') return

        setStatus('loading')
        setMessage('')

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, source: 'newsletter' })
            })

            const data = await response.json()

            if (!response.ok) {
                setStatus('error')
                setMessage(data?.message ?? "That did not go through. Please try again.")

                return
            }

            setStatus('success')
            setMessage("You are on the list. The first letter lands next Thursday.")
            setEmail('')
        } catch {
            setStatus('error')
            setMessage("We could not reach the server. Please try again in a moment.")
        }
    }

    return (
        <section id='newsletter' className='bg-background py-20 lg:py-28'>
            <div className='mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12'>
                <div className='grid items-center gap-14 lg:grid-cols-12 lg:gap-10'>
                    <div className='flex flex-col gap-7 lg:col-span-6'>
                        <Eyebrow label='Stay inspired' withDot />

                        <h2 className='heading-lg max-w-[14ch] text-[clamp(2.15rem,4.6vw,3.5rem)] text-ink'>
                            Get travel ideas in your inbox
                        </h2>

                        <form onSubmit={handleSubmit} className='w-full max-w-md'>
                            <div
                                className={cn(
                                    'flex items-center gap-2 rounded-full border bg-card p-1.5 transition-colors',
                                    status === 'error' ? 'border-destructive/60' : 'border-border focus-within:border-ink/40'
                                )}
                            >
                                <label htmlFor='newsletter-email' className='sr-only'>
                                    Email address
                                </label>

                                <input
                                    id='newsletter-email'
                                    type='email'
                                    required
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    placeholder='Your email address'
                                    autoComplete='email'
                                    className='min-w-0 flex-1 bg-transparent px-4 text-[14px] text-ink outline-none placeholder:text-muted-foreground'
                                />

                                <button
                                    type='submit'
                                    disabled={status === 'loading'}
                                    className='group inline-flex h-11 shrink-0 items-center gap-2.5 rounded-full bg-ink pl-5 pr-4 text-[14px] font-medium text-background transition-colors hover:bg-ink/85 disabled:opacity-70'
                                >
                                    {status === 'loading' ? 'Sending' : status === 'success' ? 'Subscribed' : 'Subscribe'}

                                    {status === 'loading' ? (
                                        <Loader2 className='size-4 animate-spin' strokeWidth={1.75} />
                                    ) : status === 'success' ? (
                                        <Check className='size-4' strokeWidth={1.75} />
                                    ) : (
                                        <ArrowRight className='size-4 transition-transform duration-300 group-hover:translate-x-0.5' strokeWidth={1.75} />
                                    )}
                                </button>
                            </div>

                            <p
                                aria-live='polite'
                                className={cn(
                                    'mt-3 min-h-[20px] px-2 text-[13px]',
                                    status === 'error' ? 'text-destructive' : 'text-muted-foreground'
                                )}
                            >
                                {message}
                            </p>
                        </form>
                    </div>

                    <div className='flex flex-col gap-10 lg:col-span-6'>
                        <p className='max-w-sm text-[15px] leading-relaxed text-muted-foreground'>
                            One letter a month. New routes we have just walked, the stays worth
                            booking early, and quiet windows in places that are usually busy.
                        </p>

                        <div className='relative h-[240px] w-full sm:h-[280px]'>
                            <p className='font-script absolute right-2 top-0 z-40 max-w-[140px] text-right text-[26px] leading-[1.1] text-ink/80 sm:right-8'>
                                Good places, better people
                            </p>

                            {polaroids.map((src, index) => (
                                <div
                                    key={src}
                                    className={cn(
                                        'absolute w-[38%] max-w-[190px] rounded-[4px] bg-white p-2 pb-7 shadow-[0_18px_40px_-18px_rgba(20,18,14,0.45)]',
                                        'transition-[translate,rotate,scale,box-shadow] duration-500 ease-out',
                                        'hover:z-40 hover:-translate-y-4 hover:rotate-0 hover:scale-[1.05] hover:shadow-[0_34px_70px_-24px_rgba(20,18,14,0.55)]',
                                        frames[index]
                                    )}
                                >
                                    <div className='relative aspect-[4/5] overflow-hidden rounded-[2px] bg-sand'>
                                        <Image
                                            src={src}
                                            alt=''
                                            fill
                                            sizes='190px'
                                            className='object-cover'
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
