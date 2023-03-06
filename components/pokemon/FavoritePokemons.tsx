import { Grid } from "@nextui-org/react";
import { FC } from "react";
import { FavoriteCardProkemon } from "./FavoriteCardProkemon";

interface Props {
  pokemons: number[];
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <Grid key={id} xs={6} md={3} lg={4} xl={2}>
          <FavoriteCardProkemon pokemonId={id} />
        </Grid>
      ))}
    </Grid.Container>
  );
};
