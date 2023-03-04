import { Button } from '@nextui-org/react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <>
      <h1>Hola Mundo desde NextJS</h1>
      <Button color="gradient">Aceptar</Button>
    </>
  )
}
