import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'standalone',
    poweredByHeader: false,
    devIndicators: false,
    typescript: {
        ignoreBuildErrors: true
    },
    productionBrowserSourceMaps: false,
    experimental: {
        optimizePackageImports: ['lucide-react'],
        cpus: 1,
        workerThreads: false
    },
    async redirects() {
        return [
            {
                source: '/about-us',
                destination: '/about',
                permanent: true
            }
        ]
    }
}

export default nextConfig