/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    additionalData: `
      @use "@/styles/variables.scss" as *;
    `,
  },
};

export default nextConfig;
