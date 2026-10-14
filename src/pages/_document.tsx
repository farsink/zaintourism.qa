import type { FC, ReactNode } from 'react'

import {
    Html,
    Head,
    Main,
    NextScript
} from 'next/document'

const Document: FC = (): ReactNode => {
    return (
        <Html lang='en'>
            <Head>
                <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
                <meta name='theme-color' content='#8A1538' />
            </Head>

            <body className='min-h-full flex flex-col bg-background text-foreground'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document
