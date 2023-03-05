import { SmallPokemon } from "@/interfaces";
import { Card, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {

  const navigate = useRouter();

  const handleClick = () => {
    // Navegar a otra ruta de la aplicación
    navigate.push(`/pokemon/${pokemon.id}`);
  }

  return (
    <Card isHoverable isPressable onClick={handleClick}>
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
