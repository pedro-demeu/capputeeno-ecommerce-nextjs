/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "picsum.photos",
          pathname: "/**", // Adiciona essa linha para permitir todas as rotas do domínio
        },
      ],
    },
  };
  
  export default nextConfig;
  