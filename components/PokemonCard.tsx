'use client';

import { Pokemon } from '@/types/pokemon';

interface PokemonCardProps {
  pokemon: Pokemon;
  onClick: () => void;
}

const PokemonCard = ({ pokemon, onClick }: PokemonCardProps) => {
  // Mapping des couleurs par type
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

  const bgGradient = typeColors[pokemon.types[0]] || 'from-slate-600 to-slate-700';

  return (
    <div 
      onClick={onClick}
      className="group relative bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-4 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
    >
      <div className={`w-24 h-24 mx-auto mb-3 rounded-full bg-gradient-to-br ${bgGradient} flex items-center justify-center`}>
        <img 
          src={pokemon.sprite} 
          alt={pokemon.nameFR} 
          className="w-20 h-20 object-contain drop-shadow-lg group-hover:scale-110 transition-transform"
          loading="lazy"
        />
      </div>
      <div className="text-center">
        <span className="text-slate-500 text-xs font-mono">#{String(pokemon.id).padStart(3, '0')}</span>
        <h3 className="text-white font-bold text-lg mt-1">{pokemon.nameFR}</h3>
        <div className="flex justify-center gap-1 mt-2 flex-wrap">
          {pokemon.types.map((type) => (
            <span 
              key={type} 
              className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-white/10 text-slate-200"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;

