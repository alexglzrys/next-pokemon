import { Layout } from '@/components/layouts'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { pokemonApi } from '@/api'
import { Pokemon } from '@/interfaces'

interface Props {
    pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({pokemon}) => {

  return (
    <Layout title="Algún pokemon">
        <h3>Información del Pokemon {pokemon.name}</h3>
    </Layout>
  )
}


/**
 * getStaticPaths
 * 
 * Se debe usar cuando estamos pre-redenderizando páginas estáticas que usan rutas dinámicas
 * Esto sucede en tiempo de construcción (del lado del servidor)
 * 
 * NextJS se tiene que anticipar a las futuras consultas para saber que información mostrar en esta página
 * 
 */

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    // Generar el listado de paths con los parámetros de busqueda admitidos por la aplicacón
    // Se tienen 151 pokemon, no habrá más

    // Generar un arreglo de 151 posiciones, cuyos elementos van del 1 al 151 (string)
    const pokemonList = [...Array(151)].map((value, index) => `${index + 1}`);
  
    return {
        paths: pokemonList.map(id => ({
            params: {id}
        })),
        fallback: false     // Si el id no aparece en los registros, mostrar 404
    }
}



export const getStaticProps: GetStaticProps = async (ctx) => {
    // Recuperar del conexto los parámetros admitidos por la aplicación para mostrar esta página
    const { id } = ctx.params as {id: string}

    // Hacer la petición HTTP en tiempo de construcción
    // Para cachear los resultados y servirlos de forma estática en futuras peticiones
    const {data} = await pokemonApi.get<Pokemon>(`/pokemon/${id}`);

    // Pasar los resultados como Props a la página de Next
    return {
        props: {
            pokemon: data
        }
    }
}

export default PokemonPage;