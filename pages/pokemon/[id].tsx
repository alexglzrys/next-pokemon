import { Layout } from "@/components/layouts";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { pokemonApi } from "@/api";
import { Pokemon } from "@/interfaces";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { localFavorites } from "@/utils";

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

  // ! NextJS puede ejecutar el código en el server y en cliente, por tanto, algunas cosas no podrían estar presentes
  // * Por ejemplo localStorage solo está en el cliente, pero no en el server
  // ? typeof window - es una comprobación para verificar si se está en el navegador o en el cliente

  const handleToggleFavorite = () => {
    // Guardar o eliminar de LocalStorage
    localFavorites.toggleFavorites(pokemon.id);
  }

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              {/* NextUI obliga a usar onPress sobre el clasico onClick */}
              <Button color="gradient" ghost onPress={handleToggleFavorite}>
                Guardar en Favoritos
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction="row" display="flex" gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

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
    paths: pokemonList.map((id) => ({
      params: { id },
    })),
    fallback: false, // Si el id no aparece en los registros, mostrar 404
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  // Recuperar del conexto los parámetros admitidos por la aplicación para mostrar esta página
  const { id } = ctx.params as { id: string };

  // Hacer la petición HTTP en tiempo de construcción
  // Para cachear los resultados y servirlos de forma estática en futuras peticiones
  const { data } = await pokemonApi.get<Pokemon>(`/pokemon/${id}`);

  // Pasar los resultados como Props a la página de Next
  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;
