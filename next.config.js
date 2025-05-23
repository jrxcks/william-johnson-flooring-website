/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [],
    dangerouslyAllowSVG: true,
  },
//   experimental: {
//     forceSwcTransforms: true,
//   },
}

module.exports = nextConfig 