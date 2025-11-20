// Types TypeScript pour les Pokémon
// Plus besoin de deviner quelles propriétés existent !

export interface PokemonStats {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

export interface Pokemon {
  id: number;
  nameFR: string;
  nameEN: string;
  types: string[];
  sprite: string;
  stats: PokemonStats;
  height: number; // en mètres
  weight: number; // en kg
  generation: number;
  anecdotes?: string[];
  lore?: string;
  evolutionChain?: number[]; // IDs des Pokémon dans la chaîne d'évolution
}

export interface TCGCard {
  id: string;
  name: string;
  image: string;
  imageLarge: string;
  set: string;
  rarity: string;
  number: string;
}

