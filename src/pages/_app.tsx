import '@/styles/globals.css'

import type { FC, ReactNode } from 'react'
import type { AppProps } from 'next/app'

import Head from 'next/head'
import { DM_Sans, Geist_Mono, Caveat } from 'next/font/google'

const sans = DM_Sans({
    subsets: ['latin'],
    display: 'swap'
})

const mono = Geist_Mono({
    subsets: ['latin'],
    display: 'swap'
})

const script = Caveat({
    subsets: ['latin'],
    display: 'swap'
})

const fontVariables = `:root{--font-app-sans:${sans.style.fontFamily};--font-app-mono:${mono.style.fontFamily};--font-app-heading:${sans.style.fontFamily};--font-app-script:${script.style.fontFamily}}`

const App: FC<AppProps> = ({ Component, pageProps }): ReactNode => {
    return (
        <div className='h-full font-sans'>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <style dangerouslySetInnerHTML={{ __html: fontVariables }} />
            </Head>

            <Component {...pageProps} />
        </div>
    )
}

export default App
