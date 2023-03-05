import { Layout } from '@/components/layouts'
import { Inter } from 'next/font/google'
import { GetStaticProps } from 'next'
import { pokemonApi } from '@/api'
import { PokemonListResponse, SmallPokemon } from '../interfaces';

const inter = Inter({ subsets: ['latin'] })

export default function HomePage(props: any) {
  return (
    <Layout title="Listado de Pokemons">
      <ul>
        {props.pokemons.map((pokemon: SmallPokemon, index: number) => <li key={pokemon.url}>{pokemon.name}</li>)}
      </ul>
    </Layout>
  )
}


/**
 * Cuando usar getStaticProps
 * 
 * snippet - nextGetStaticProps
 * 
 * - La logica declarada en la función solo se ejecuta del lado del servidor
 * - Solo se ejecuta una sola vez, en tiempo de construcción de la aplicación (npm run build)
 * - En desarrollo, solo se ejecuta cuando se realiza cualquier cambio, (cuando se compila la aplicación al vuelo)
 * - Sirve para cachear información recuperada desde una API, sin embargo, si esta cambia en un futuro los datos no se verán reflejados
 * 
 * - Lo anterior significa que, esta técnica no sirve si deseamos consultar la información en tiempo real (precio actual de un producto)
 */

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const {data} = await pokemonApi.get<PokemonListResponse>('/pokemon?limit=151');

  // Lo unico que se le pasa al cliente (la página) es el siguiente objeto a través de sus props
  return {
    props: {
      pokemons: data.results
    }
  }
}