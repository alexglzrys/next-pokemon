/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Establecer los dominios permitidos para mostrar imagenes dentro de la aplicación
  images: {
    domains: [
      "raw.githubusercontent.com"
    ]
  }
}

module.exports = nextConfig
