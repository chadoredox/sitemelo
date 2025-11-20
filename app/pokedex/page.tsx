'use client';

import { useState, useEffect } from 'react';
import PokemonCard from '@/components/PokemonCard';
import PokemonModal from '@/components/PokemonModal';
import { Pokemon } from '@/types/pokemon';

// Données Pokémon (à remplacer par une API route plus tard)
const mockPokemonData: Pokemon[] = [
  {
    id: 1,
    nameFR: 'Bulbizarre',
    nameEN: 'Bulbasaur',
    types: ['Plante', 'Poison'],
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    stats: { hp: 45, attack: 49, defense: 49, specialAttack: 65, specialDefense: 65, speed: 45 },
    height: 0.7,
    weight: 6.9,
    generation: 1,
    anecdotes: ['Premier Pokémon du Pokédex', 'Type double Plante/Poison']
  },
  {
    id: 4,
    nameFR: 'Salamèche',
    nameEN: 'Charmander',
    types: ['Feu'],
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
    stats: { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 },
    height: 0.6,
    weight: 8.5,
    generation: 1,
    anecdotes: ['Sa queue brûle même sous la pluie', 'Starter de type Feu']
  },
  {
    id: 7,
    nameFR: 'Carapuce',
    nameEN: 'Squirtle',
    types: ['Eau'],
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
    stats: { hp: 44, attack: 48, defense: 65, specialAttack: 50, specialDefense: 64, speed: 43 },
    height: 0.5,
    weight: 9.0,
    generation: 1,
    anecdotes: ['Starter de type Eau', 'Peut se cacher dans sa carapace']
  },
  {
    id: 25,
    nameFR: 'Pikachu',
    nameEN: 'Pikachu',
    types: ['Électrik'],
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    stats: { hp: 35, attack: 55, defense: 40, specialAttack: 50, specialDefense: 50, speed: 90 },
    height: 0.4,
    weight: 6.0,
    generation: 1,
    anecdotes: ['Mascotte officielle de Pokémon', 'Évolue en Raichu avec une Pierre Foudre']
  },
];

export default function PokedexPage() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState('');
  const [selectedGeneration, setSelectedGeneration] = useState<number>(1);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  // Chargement des données
  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      // TODO: Remplacer par un appel API réel
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulation délai
      setPokemons(mockPokemonData);
      setLoading(false);
    };

    fetchPokemons();
  }, []);

  // Filtrage automatique (réactif)
  const filteredPokemons = pokemons.filter(pokemon => {
    const matchesSearch = pokemon.nameFR.toLowerCase().includes(search.toLowerCase()) ||
                         pokemon.nameEN.toLowerCase().includes(search.toLowerCase());
    const matchesGeneration = selectedGeneration === 0 || pokemon.generation === selectedGeneration;
    const matchesType = selectedType === 'all' || pokemon.types.includes(selectedType);
    
    return matchesSearch && matchesGeneration && matchesType;
  });

  const typeColors: Record<string, string> = {
    'Feu': 'from-red-500 to-orange-600',
    'Eau': 'from-blue-500 to-cyan-600',
    'Plante': 'from-green-500 to-emerald-600',
    'Électrik': 'from-yellow-400 to-amber-500',
    'Poison': 'from-purple-500 to-pink-600',
    'Vol': 'from-sky-400 to-blue-500',
    'Combat': 'from-orange-600 to-red-700',
    'Roche': 'from-amber-600 to-yellow-700',
    'Sol': 'from-yellow-600 to-amber-700',
    'Insecte': 'from-lime-500 to-green-600',
    'Spectre': 'from-purple-600 to-indigo-700',
    'Acier': 'from-slate-400 to-gray-600',
    'Psy': 'from-pink-500 to-rose-600',
    'Glace': 'from-cyan-300 to-blue-400',
    'Dragon': 'from-indigo-600 to-purple-700',
    'Ténèbres': 'from-gray-700 to-slate-800',
    'Fée': 'from-pink-400 to-rose-500',
    'Normal': 'from-gray-400 to-slate-500',
  };

  const types = ['all', 'Feu', 'Eau', 'Plante', 'Électrik', 'Poison', 'Vol', 'Combat', 'Roche', 'Sol', 'Insecte', 'Spectre', 'Acier', 'Psy', 'Glace', 'Dragon', 'Ténèbres', 'Fée', 'Normal'];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24 px-4 sm:px-6 lg:px-8 pb-20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <i className="fas fa-bolt text-white text-sm"></i>
              </div>
              <span className="text-xl font-bold text-white">Pokémon Community</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-slate-300 hover:text-white font-medium transition-colors">Accueil</a>
              <a href="/pokedex" className="text-white font-medium">Pokédex</a>
              <a href="/dresseurs" className="text-slate-300 hover:text-white font-medium transition-colors">Dresseurs</a>
            </div>
          </div>
        </div>
      </nav>

      {/* En-tête */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          Pokédex Next Gen
        </h1>
        <p className="text-slate-400 text-lg">
          Architecture moderne avec React, TypeScript et Next.js
        </p>
        
        {/* Barre de recherche */}
        <div className="relative max-w-xl mx-auto mt-8">
          <input
            type="text"
            placeholder="Rechercher un Pokémon..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
          />
          <i className="fas fa-search absolute right-6 top-1/2 -translate-y-1/2 text-slate-500"></i>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {/* Filtre par génération */}
          <select
            value={selectedGeneration}
            onChange={(e) => setSelectedGeneration(Number(e.target.value))}
            className="bg-slate-800/50 border border-white/10 rounded-full px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value={0}>Toutes les générations</option>
            <option value={1}>Génération 1 - Kanto</option>
            <option value={2}>Génération 2 - Johto</option>
            <option value={3}>Génération 3 - Hoenn</option>
            <option value={4}>Génération 4 - Sinnoh</option>
            <option value={5}>Génération 5 - Unys</option>
            <option value={6}>Génération 6 - Kalos</option>
            <option value={7}>Génération 7 - Alola</option>
            <option value={8}>Génération 8 - Galar</option>
          </select>

          {/* Filtre par type */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="bg-slate-800/50 border border-white/10 rounded-full px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            {types.map(type => (
              <option key={type} value={type}>
                {type === 'all' ? 'Tous les types' : type}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grille de Pokémon */}
      {loading ? (
        <div className="text-center text-white py-20">
          <i className="fas fa-spinner fa-spin text-4xl mb-4"></i>
          <p className="text-slate-400">Chargement des Pokémon...</p>
        </div>
      ) : filteredPokemons.length === 0 ? (
        <div className="text-center text-slate-400 py-20">
          <i className="fas fa-search text-4xl mb-4 opacity-50"></i>
          <p className="text-lg">Aucun Pokémon trouvé</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {filteredPokemons.map((pokemon) => (
            <PokemonCard 
              key={pokemon.id} 
              pokemon={pokemon} 
              onClick={() => setSelectedPokemon(pokemon)}
            />
          ))}
        </div>
      )}

      {/* Modale de détails */}
      {selectedPokemon && (
        <PokemonModal 
          pokemon={selectedPokemon} 
          onClose={() => setSelectedPokemon(null)} 
        />
      )}
    </main>
  );
}

