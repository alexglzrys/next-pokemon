import { NotFavorites } from "@/components/pokemon";
import { localFavorites } from "@/utils";
import { Card, Grid } from "@nextui-org/react";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts/Layout";

export const FavoritesPage: NextPage = () => {
  // Estado interno del componente
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  // Efecto secundario para localizar todos los pokemons agregados como favoritos
  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons);
  }, []);

  return (
    <Layout title="Mis Favoritos">
      {favoritePokemons.length === 0 ? (
        <NotFavorites />
      ) : (
        <Grid.Container gap={2} direction="row" justify="flex-start">
          {favoritePokemons.map((id) => (
            <Grid key={id} xs={6} md={3} lg={4} xl={2}>
              <Card isHoverable isPressable css={{padding: 10}}>
                <Card.Body>
                  <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    alt="Pokemon"
                    width="100%"
                    height={250}
                  />
                </Card.Body>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      )}
    </Layout>
  );
};

export default FavoritesPage;
