/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  output: 'standalone',
  images: {
    unoptimized: true
  },

  // External packages to exclude from server component bundling
  serverExternalPackages: ['@supabase/supabase-js']
}

module.exports = nextConfig