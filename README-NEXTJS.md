# Migration vers Next.js - Guide d'installation

Votre Pokédex a été migré vers **Next.js 14** avec **React**, **TypeScript** et **Tailwind CSS**.

## 🚀 Installation

1. **Installer les dépendances** :
```bash
npm install
```

2. **Lancer le serveur de développement** :
```bash
npm run dev
```

3. **Ouvrir dans le navigateur** :
```
http://localhost:3000/pokedex
```

## 📁 Structure du projet

```
sitemelo/
├── app/
│   ├── globals.css          # Styles globaux Tailwind
│   ├── layout.tsx           # Layout principal
│   └── pokedex/
│       └── page.tsx         # Page Pokédex (composant principal)
├── components/
│   ├── PokemonCard.tsx      # Composant carte Pokémon (réutilisable)
│   └── PokemonModal.tsx     # Composant modal de détails
├── types/
│   └── pokemon.ts           # Types TypeScript pour les Pokémon
├── package.json             # Dépendances npm
├── tsconfig.json            # Configuration TypeScript
├── tailwind.config.js       # Configuration Tailwind
└── next.config.js           # Configuration Next.js
```

## ✨ Avantages de cette architecture

### 1. **Typage TypeScript**
- Plus d'erreurs de typage à l'exécution
- Autocomplétion intelligente dans votre IDE
- Documentation automatique des types

### 2. **Composants réutilisables**
- `<PokemonCard />` peut être utilisé partout
- Modification en un seul endroit = mise à jour partout
- Code plus maintenable

### 3. **État réactif**
- Plus besoin de `document.getElementById`
- React met à jour automatiquement l'UI
- Performance optimale (seuls les éléments changés sont mis à jour)

### 4. **Performance**
- Next.js optimise automatiquement les images
- Code splitting automatique
- Chargement rapide

## 🔄 Différences avec l'ancienne version

| Aspect | Ancienne (HTML/JS) | Nouvelle (Next.js/React) |
|--------|-------------------|--------------------------|
| Mise à jour UI | `innerHTML = ''` puis recréation | Automatique via React |
| Gestion données | Variables globales | `useState` (encapsulé) |
| Erreurs | Détectées à l'exécution | Détectées à la compilation |
| Maintenabilité | Code monolithique | Composants modulaires |

## 📝 Prochaines étapes

1. **Ajouter plus de Pokémon** : Modifier `mockPokemonData` dans `app/pokedex/page.tsx`
2. **Créer une API route** : Créer `app/api/pokemon/route.ts` pour charger les données
3. **Ajouter les cartes TCG** : Intégrer l'API Pokémon TCG dans un composant séparé
4. **Optimiser les images** : Utiliser le composant `Image` de Next.js

## 🛠️ Commandes disponibles

- `npm run dev` : Serveur de développement
- `npm run build` : Build de production
- `npm run start` : Serveur de production
- `npm run lint` : Vérification du code

## 📚 Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation React](https://react.dev)
- [Documentation TypeScript](https://www.typescriptlang.org/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)

