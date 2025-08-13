/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    unoptimized: true
  },
  // Remove static export for Cloudflare Workers
  // output: 'export', 
  
  // Add experimental features for better Cloudflare compatibility
  experimental: {
    serverComponentsExternalPackages: ['@supabase/supabase-js']
  }
}

module.exports = nextConfig