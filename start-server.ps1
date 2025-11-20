# Script PowerShell pour lancer le serveur HTTP
Set-Location "c:\Users\chady\OneDrive\Documents\sitemelo"
Write-Host "Démarrage du serveur HTTP sur http://localhost:8000" -ForegroundColor Green
Write-Host "Ouvrez votre navigateur et allez sur: http://localhost:8000/pokedex.html" -ForegroundColor Yellow
Write-Host "Appuyez sur Ctrl+C pour arrêter le serveur" -ForegroundColor Cyan
python -m http.server 8000

