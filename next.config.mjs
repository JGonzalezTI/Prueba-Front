import path from 'path';
import { fileURLToPath } from 'url';

// Obtén la ruta del directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://pm3uf3zsxf.us-east-1.awsapprunner.com/:path*',
      },
    ];
  },
  webpack: (config) => {
    config.resolve.alias['@cart'] = path.resolve(__dirname, 'src/app/(shop)/cart');
    return config;
  },
};

export default nextConfig;
