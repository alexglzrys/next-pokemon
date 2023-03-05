import { Layout } from "@/components/layouts";
import { Inter } from "next/font/google";
import { GetStaticProps } from "next";
import { pokemonApi } from "@/api";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import { Grid } from "@nextui-org/react";
import { PokemonCard } from "@/components/pokemon";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  pokemons: SmallPokemon[];
}

export default function HomePage({ pokemons }: Props) {
  return (
    <Layout title="Listado de Pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <Grid key={pokemon.id} xs={6} sm={3} md={2} lg={1}>
            <PokemonCard pokemon={pokemon}/>
          </Grid>
        ))}
      </Grid.Container>
    </Layout>
  );
}

/**
 * Cuando usar getStaticProps
 *
 * snippet - nextGetStaticProps
 *
 * - La logica declarada en la función solo se ejecuta del lado del servidor
 * - Solo se ejecuta una sola vez, en tiempo de construcción de la aplicación (npm run build)
 *    ** Para peticiones HTTP, NextJS generará un archivo JSON con toda la respuesta emitida por el server
 *       De lo anterior se entiende que siempre se consume información estatica. 
 * 
 * - En desarrollo, solo se ejecuta cuando se realiza cualquier cambio, (cuando se compila la aplicación al vuelo)
 * - Sirve para cachear información recuperada desde una API, sin embargo, si esta cambia en un futuro los datos no se verán reflejados
 *
 * - Lo anterior significa que, esta técnica no sirve si deseamos consultar la información en tiempo real (precio actual de un producto)
 */

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokemonApi.get<PokemonListResponse>(
    "/pokemon?limit=151"
  );

  // Mapear el arreglo de resultados para inyectar más información a cada pokemon
  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
  }));

  // Lo unico que se le pasa al cliente (la página) es el siguiente objeto a través de sus props
  return {
    props: {
      pokemons,
    },
  };
};
