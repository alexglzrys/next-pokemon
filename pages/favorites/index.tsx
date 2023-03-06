import { FavoritePokemons, NotFavorites } from "@/components/pokemon";
import { localFavorites } from "@/utils";
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
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
