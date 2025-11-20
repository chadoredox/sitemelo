# 🚀 Déploiement sur GitHub Pages - Guide Complet

## ⚠️ Réponse à votre question

**Oui, npm est nécessaire**, mais **vous n'avez pas besoin de l'installer sur votre ordinateur** ! 

GitHub Actions va **automatiquement** :
1. Installer Node.js et npm sur leurs serveurs
2. Compiler votre application Next.js
3. Déployer le résultat sur GitHub Pages

**Vous n'avez qu'à pousser votre code sur GitHub** via l'interface web !

## 📋 Étapes de déploiement (100% via interface web GitHub)

### 1. Créer le dépôt sur GitHub
1. Allez sur [github.com](https://github.com)
2. Cliquez sur "New repository"
3. Nommez-le (ex: `sitemelo`)
4. Créez le dépôt

### 2. Uploader vos fichiers
**Option A - Via l'interface web (recommandé)** :
1. Dans votre dépôt GitHub, cliquez sur "uploading an existing file"
2. Glissez-déposez tous vos fichiers :
   - `app/`
   - `components/`
   - `types/`
   - `package.json`
   - `tsconfig.json`
   - `next.config.js`
   - `tailwind.config.js`
   - `postcss.config.js`
   - `.github/` (dossier avec le workflow)
   - `public/`
   - Tous les autres fichiers

**Option B - Via Git (si vous avez Git installé)** :
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/VOTRE-USERNAME/sitemelo.git
git push -u origin main
```

### 3. Activer GitHub Pages
1. Allez dans **Settings** de votre dépôt
2. Dans le menu de gauche, cliquez sur **Pages**
3. Sous **Source**, sélectionnez **GitHub Actions**
4. Sauvegardez

### 4. Le déploiement se fait automatiquement !
- GitHub Actions va détecter le fichier `.github/workflows/deploy.yml`
- Il va automatiquement :
  - Installer Node.js et npm
  - Exécuter `npm install`
  - Exécuter `npm run build`
  - Déployer sur GitHub Pages

### 5. Vérifier le déploiement
1. Allez dans l'onglet **Actions** de votre dépôt
2. Vous verrez le workflow en cours d'exécution
3. Une fois terminé (coche verte), votre site sera disponible à :
   ```
   https://VOTRE-USERNAME.github.io/sitemelo/pokedex
   ```

## 🔧 Configuration importante

### Base Path
Si votre dépôt s'appelle `sitemelo`, l'URL sera :
```
https://VOTRE-USERNAME.github.io/sitemelo/pokedex
```

Si vous voulez que ce soit à la racine (`https://VOTRE-USERNAME.github.io/pokedex`), vous devez :
1. Renommer votre dépôt en `VOTRE-USERNAME.github.io`
2. Modifier `next.config.js` pour enlever le `basePath`

## 📁 Fichiers créés pour vous

✅ `.github/workflows/deploy.yml` - Workflow GitHub Actions automatique
✅ `public/.nojekyll` - Empêche Jekyll d'interférer
✅ `next.config.js` - Configuré pour GitHub Pages

## ⏱️ Temps de déploiement

- **Premier déploiement** : ~3-5 minutes
- **Déploiements suivants** : ~2-3 minutes

## 🐛 En cas de problème

1. **Vérifiez l'onglet Actions** : Regardez les logs d'erreur
2. **Vérifiez que tous les fichiers sont uploadés** : Surtout `package.json` et `.github/workflows/deploy.yml`
3. **Vérifiez les Settings > Pages** : Source doit être "GitHub Actions"

## ✨ Avantages de cette méthode

- ✅ Pas besoin d'installer npm sur votre ordinateur
- ✅ Pas besoin de Git en ligne de commande
- ✅ Tout se fait automatiquement à chaque push
- ✅ Build optimisé sur les serveurs GitHub
- ✅ Gratuit et illimité

## 📝 Résumé

**Vous n'avez qu'à** :
1. Uploader vos fichiers sur GitHub (via l'interface web)
2. Activer GitHub Pages dans les Settings
3. Attendre que GitHub Actions fasse le reste automatiquement !

**GitHub Actions va** :
- Installer npm automatiquement
- Compiler votre application
- Déployer sur GitHub Pages

C'est tout ! 🎉

