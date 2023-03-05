/**
 * Intefaces para informar a TS como luce la información
 */

export interface PokemonListResponse {
  count: number;
  next: string;
  previous?: any;
  results: SmallPokemon[];
}

export interface SmallPokemon {
  name: string;
  url: string;
  id: number;
  img: string;
}