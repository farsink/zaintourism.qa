import type { NextApiRequest, NextApiResponse } from 'next'

import { query } from '@/lib/db'

type ResponseBody = {
    ok: boolean
    message: string
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const handler = async (
    request: NextApiRequest,
    response: NextApiResponse<ResponseBody>
): Promise<void> => {
    if (request.method !== 'POST') {
        response.setHeader('Allow', 'POST')
        response.status(405).json({ ok: false, message: 'Method not allowed.' })

        return
    }

    const rawEmail = typeof request.body?.email === 'string' ? request.body.email.trim() : ''
    const rawSource = typeof request.body?.source === 'string' ? request.body.source.trim() : 'newsletter'
    const email = rawEmail.slice(0, 180).toLowerCase()
    const source = rawSource.slice(0, 60) || 'newsletter'

    if (!emailPattern.test(email)) {
        response.status(400).json({
            ok: false,
            message: 'Please enter a valid email address.'
        })

        return
    }

    try {
        await query(
            `INSERT INTO subscribers (email, source)
             VALUES ($1, $2)
             ON CONFLICT (email) DO NOTHING`,
            [email, source]
        )

        response.status(200).json({
            ok: true,
            message: 'You are on the list.'
        })
    } catch {
        response.status(500).json({
            ok: false,
            message: 'We could not sign you up just now. Please try again shortly.'
        })
    }
}

export default handler
