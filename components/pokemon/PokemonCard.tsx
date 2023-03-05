import { SmallPokemon } from "@/interfaces";
import { Card, Row, Text } from "@nextui-org/react";
import { FC } from "react";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  return (
    <Card isHoverable isPressable>
      <Card.Body css={{ p: 1 }}>
        <Card.Image src={pokemon.img} width="100%" height={140} />
      </Card.Body>
      <Card.Footer>
        <Row justify="space-between">
          <Text transform="capitalize">{pokemon.name}</Text>
          <Text>#{pokemon.id}</Text>
        </Row>
      </Card.Footer>
    </Card>
  );
};
