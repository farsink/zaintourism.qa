import type { FC, ReactNode } from 'react'
import type { LayoutProps } from '@/types'

import { Header } from '@/components/site/header'
import { Footer } from '@/components/site/footer'

export const Layout: FC<LayoutProps> = ({ children, headerVariant = 'solid' }): ReactNode => {
    return (
        <div className='flex min-h-screen flex-col bg-background'>
            <Header variant={headerVariant} />

            <main className={headerVariant === 'solid' ? 'flex-1 pt-[4.5rem]' : 'flex-1'}>
                {children}
            </main>

            <Footer />
        </div>
    )
}
