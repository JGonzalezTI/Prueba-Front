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
};

export default nextConfig;
