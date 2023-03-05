import { Layout } from '@/components/layouts'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

const PokemonPage: FC = () => {

    const router = useRouter();
    
    // Recuperar el parametro de consulta enviado a esta ruta
    const id = router.query.id;

  return (
    <Layout title="Algún pokemon">
        <h3>Información del Pokemon {id}</h3>
    </Layout>
  )
}

export default PokemonPage;