import type { QueryResultRow } from 'pg'

import { Pool } from 'pg'

declare global {
    // eslint-disable-next-line no-var
    var wayfarePool: Pool | undefined
}

const createPool = (): Pool => {
    const connectionString = process.env.DATABASE_URL

    if (!connectionString) {
        throw new Error(
            'DATABASE_URL is not set. Add it to .env.local to enable database-backed pages.'
        )
    }

    return new Pool({
        connectionString,
        max: 3,
        idleTimeoutMillis: 30_000,
        connectionTimeoutMillis: 10_000
    })
}

const pool = globalThis.wayfarePool ?? createPool()

if (process.env.NODE_ENV !== 'production') {
    globalThis.wayfarePool = pool
}

export const query = async <T extends QueryResultRow>(
    text: string,
    params: unknown[] = []
): Promise<T[]> => {
    const result = await pool.query<T>(text, params)

    return result.rows
}
