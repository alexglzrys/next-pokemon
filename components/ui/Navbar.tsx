import { Spacer, Text, useTheme, Link } from "@nextui-org/react";
import Image from "next/image";
// Estamos forzados a importar el Link con otro nombre dado que usamos una librería de UI que tiene un componente con el mismo nombre
import NextLink from "next/link";

export const Navbar = () => {
  // Usar el tema cargado en NextUI
  const { theme, isDark } = useTheme();

  /**
   * style    - Para estilos en elementos de React
   * css      - Para estilos en elementos de NextUI
   */

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0 20px",
        backgroundColor: theme?.colors.gray300.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="Logotipo"
        width={70}
        height={70}
      />

      {/* No hay necesidad de hacer toda esta vaina
      Con CSS podemos dejar el contenido del enlace en linea
      Pero NextUI nos ayuda con eso */}
      <Link href="/" as={NextLink}>
        <Text color="white" h2>
          P
        </Text>
        <Text color="white" h3>
          okemon
        </Text>
      </Link>

      <Spacer css={{ flex: 1 }} />

      <NextLink href="/favorites">
        <Text color="white">Favoritos</Text>
      </NextLink>
    </div>
  );
};
