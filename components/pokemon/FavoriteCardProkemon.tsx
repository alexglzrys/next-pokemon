import { Card } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
  pokemonId: number;
}
export const FavoriteCardProkemon: FC<Props> = ({ pokemonId }) => {
  const router = useRouter();

  const handleClick = () => {
    // Navegar a la página de este pokemon
    router.push(`/pokemon/${pokemonId}`);
  };
  
  return (
    <Card isHoverable isPressable css={{ padding: 10 }} onPress={handleClick}>
      <Card.Body>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          alt="Pokemon"
          width="100%"
          height={250}
        />
      </Card.Body>
    </Card>
  );
};
