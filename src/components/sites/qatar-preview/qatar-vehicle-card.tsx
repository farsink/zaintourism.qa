import type { FC, ReactNode } from 'react'
import type { QatarVehicle } from '@/constants/qatar-preview'

import Image from 'next/image'

interface QatarVehicleCardProps {
    vehicle: QatarVehicle
    priority?: boolean
}

export const QatarVehicleCard: FC<QatarVehicleCardProps> = ({ vehicle, priority = false }): ReactNode => {
    return (
        <div className='group flex flex-col overflow-hidden rounded-2xl border border-border bg-card'>
            <div className='flex h-44 items-center justify-center overflow-hidden bg-sand/60 p-5 sm:h-52'>
                <Image
                    src={vehicle.image}
                    alt={vehicle.imageAlt}
                    width={900}
                    height={560}
                    priority={priority}
                    sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
                    className='max-h-full w-auto max-w-full object-contain transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]'
                />
            </div>

            <div className='flex flex-col gap-2 border-t border-border px-5 py-5'>
                <span className='eyebrow text-brand'>
                    {vehicle.label}
                </span>

                <h3 className='heading-lg text-[19px] text-ink'>
                    {vehicle.title}
                </h3>

                <p className='text-[13.5px] leading-relaxed text-muted-foreground'>
                    {vehicle.description}
                </p>
            </div>
        </div>
    )
}
