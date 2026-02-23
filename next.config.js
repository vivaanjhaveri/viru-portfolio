/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	devIndicators: false,
	images: { unoptimized: true },
	turbopack: {},
};

module.exports = nextConfig;