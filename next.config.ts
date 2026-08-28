import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow access to remote image placeholders and curated photography.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/getaways',
        destination: '/packages',
        permanent: true,
      },
      {
        source: '/getaways/:slug*',
        destination: '/packages/:slug*',
        permanent: true,
      },
      {
        source: '/experiences',
        destination: '/packages',
        permanent: true,
      },
      {
        source: '/why-luxe-fantasy',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/certifications',
        destination: '/about#certifications',
        permanent: true,
      },
      {
        source: '/plan-your-trip',
        destination: '/travel-inquiry',
        permanent: true,
      },
    ];
  },
  output: 'standalone',
  transpilePackages: ['motion'],
  webpack: (config, {dev}) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
