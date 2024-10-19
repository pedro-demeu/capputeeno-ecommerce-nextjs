/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "coffee.alexflipnote.dev",
          pathname: "/**", // Adiciona essa linha para permitir todas as rotas do domínio
        },
        {
          protocol: "https",
          hostname: "*",
          pathname: "/**", // Adiciona essa linha para permitir todas as rotas do domínio
        },
        
      ],
    },
  };
  
  export default nextConfig;
  