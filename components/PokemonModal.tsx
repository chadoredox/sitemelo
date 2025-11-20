'use client';

import { Pokemon } from '@/types/pokemon';

interface PokemonModalProps {
  pokemon: Pokemon;
  onClose: () => void;
}

const PokemonModal = ({ pokemon, onClose }: PokemonModalProps) => {
  const statLabels: Record<keyof Pokemon['stats'], string> = {
    hp: 'PV',
    attack: 'Attaque',
    defense: 'Défense',
    specialAttack: 'Att. Spé.',
    specialDefense: 'Déf. Spé.',
    speed: 'Vitesse',
  };

  const maxStat = Math.max(...Object.values(pokemon.stats));

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-slate-800 border border-white/10 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* En-tête */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">{pokemon.nameFR}</h2>
            <p className="text-slate-400 text-lg">{pokemon.nameEN}</p>
            <div className="flex gap-2 mt-2">
              {pokemon.types.map((type) => (
                <span 
                  key={type}
                  className="px-3 py-1 rounded-full bg-white/10 text-white text-sm font-semibold"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="Fermer"
          >
            <i className="fas fa-times text-2xl"></i>
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center mb-6">
          <img 
            src={pokemon.sprite} 
            alt={pokemon.nameFR} 
            className="w-48 h-48 object-contain"
          />
        </div>

        {/* Informations générales */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-700/50 rounded-lg p-4">
            <p className="text-slate-400 text-sm mb-1">Taille</p>
            <p className="text-white font-bold text-lg">{pokemon.height}m</p>
          </div>
          <div className="bg-slate-700/50 rounded-lg p-4">
            <p className="text-slate-400 text-sm mb-1">Poids</p>
            <p className="text-white font-bold text-lg">{pokemon.weight}kg</p>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-4">Statistiques</h3>
          <div className="space-y-3">
            {Object.entries(pokemon.stats).map(([stat, value]) => (
              <div key={stat} className="flex items-center gap-4">
                <span className="text-slate-400 w-24 capitalize text-sm">
                  {statLabels[stat as keyof Pokemon['stats']]}
                </span>
                <div className="flex-1 h-3 bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500" 
                    style={{ width: `${(value / maxStat) * 100}%` }}
                  ></div>
                </div>
                <span className="text-white font-bold w-12 text-right">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Anecdotes */}
        {pokemon.anecdotes && pokemon.anecdotes.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-4">Anecdotes</h3>
            <ul className="space-y-2">
              {pokemon.anecdotes.map((anecdote, index) => (
                <li key={index} className="text-slate-300 text-sm flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>{anecdote}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Bouton de fermeture */}
        <button
          onClick={onClose}
          className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-3 rounded-lg transition-all"
        >
          Fermer
        </button>
      </div>
    </div>
  );
};

export default PokemonModal;

