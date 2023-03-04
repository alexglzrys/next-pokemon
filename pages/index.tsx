import { Layout } from '@/components/layouts'
import { Button } from '@nextui-org/react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <Layout title="Listado de Pokemons">
      <h1>Hola Mundo desde NextJS</h1>
      <Button color="gradient">Aceptar</Button>
    </Layout>
  )
}
