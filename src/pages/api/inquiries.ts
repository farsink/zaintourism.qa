import type { NextApiRequest, NextApiResponse } from 'next'

import { query } from '@/lib/db'

type ResponseBody = {
    ok: boolean
    message: string
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const clean = (value: unknown, limit: number): string => {
    if (typeof value !== 'string') return ''

    return value.trim().slice(0, limit)
}

const handler = async (
    request: NextApiRequest,
    response: NextApiResponse<ResponseBody>
): Promise<void> => {
    if (request.method !== 'POST') {
        response.setHeader('Allow', 'POST')
        response.status(405).json({ ok: false, message: 'Method not allowed.' })

        return
    }

    const body = request.body ?? {}

    const fullName = clean(body.fullName, 120)
    const email = clean(body.email, 180)
    const phone = clean(body.phone, 60)
    const destination = clean(body.destination, 120)
    const travelWindow = clean(body.travelWindow, 120)
    const travellers = clean(body.travellers, 40)
    const budget = clean(body.budget, 60)
    const message = clean(body.message, 4000)

    if (!fullName || !email || !message) {
        response.status(400).json({
            ok: false,
            message: 'Please add your name, your email and a short message.'
        })

        return
    }

    if (!emailPattern.test(email)) {
        response.status(400).json({
            ok: false,
            message: 'That email address does not look right. Please check it.'
        })

        return
    }

    try {
        await query(
            `INSERT INTO inquiries (full_name, email, phone, destination, travel_window, travellers, budget, message)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
            [
                fullName,
                email,
                phone || null,
                destination || null,
                travelWindow || null,
                travellers || null,
                budget || null,
                message
            ]
        )

        response.status(201).json({
            ok: true,
            message: 'Thank you. Your enquiry is with us.'
        })
    } catch {
        response.status(500).json({
            ok: false,
            message: 'We could not save that just now. Please try again, or email us directly.'
        })
    }
}

export default handler
