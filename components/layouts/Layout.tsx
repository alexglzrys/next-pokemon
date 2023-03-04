import Head from "next/head"
import React, { FC } from "react"
import { Navbar } from '../ui/Navbar';

interface Props {
    children: React.ReactNode,
    title?: String
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{ title || 'Pokemon App'}</title>
            <meta name="author" content="Alejandro González" />
            <meta name="description" content="Información sobre el pokemón XXX" />
            <meta name="keywords" content="XXX, pokemón, pokedex" />
        </Head>
        <Navbar />
        <main style={{ padding: '20px'}}>
            { children }
        </main>
    </>
  )
}
