# 🚀 Installation de Next.js - Pokédex

## Étapes d'installation

### 1. Installer Node.js
Assurez-vous d'avoir Node.js 18+ installé :
```bash
node --version
```

Si ce n'est pas le cas, téléchargez-le sur [nodejs.org](https://nodejs.org/)

### 2. Installer les dépendances
```bash
npm install
```

Cette commande installera :
- Next.js 14
- React 18
- TypeScript 5
- Tailwind CSS 3

### 3. Lancer le serveur de développement
```bash
npm run dev
```

### 4. Ouvrir dans le navigateur
```
http://localhost:3000/pokedex
```

## 📁 Structure créée

```
sitemelo/
├── app/
│   ├── globals.css          ✅ Styles globaux
│   ├── layout.tsx           ✅ Layout principal
│   └── pokedex/
│       └── page.tsx          ✅ Page Pokédex (React/TypeScript)
├── components/
│   ├── PokemonCard.tsx      ✅ Composant carte Pokémon
│   └── PokemonModal.tsx     ✅ Composant modal de détails
├── types/
│   └── pokemon.ts           ✅ Types TypeScript
├── package.json             ✅ Dépendances
├── tsconfig.json            ✅ Configuration TypeScript
└── tailwind.config.js       ✅ Configuration Tailwind
```

## ⚠️ Note importante

Les erreurs TypeScript que vous voyez actuellement sont **normales** et disparaîtront une fois que vous aurez exécuté `npm install`.

## 🎯 Prochaines étapes

1. **Installer les dépendances** : `npm install`
2. **Lancer le serveur** : `npm run dev`
3. **Tester** : Ouvrir `http://localhost:3000/pokedex`

## 📚 Documentation

Consultez `README-NEXTJS.md` pour plus de détails sur l'architecture.

