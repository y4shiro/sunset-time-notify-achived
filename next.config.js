/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ['src/components/', 'src/lib/', 'src/pages/'],
    ignoreDuringBuilds: true,
  },
};
