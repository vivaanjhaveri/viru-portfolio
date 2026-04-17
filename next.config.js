/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	eslint: {
		ignoreDuringBuilds: true,
	},
	devIndicators: false,
	images: { unoptimized: true },
	webpack: (config, { isServer }) => {
		// Disable cache for both client and server builds
		config.cache = false;
		return config;
	},
	// Add experimental features to handle client pages properly
	experimental: {
		appDir: true,
		serverActions: true
	}
};

module.exports = nextConfig;