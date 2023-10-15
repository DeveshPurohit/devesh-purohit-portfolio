/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        disableStaticImages: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
        ],
    },
}

module.exports = nextConfig
