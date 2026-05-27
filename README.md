# Module 5 - React Pokédex

Pokédex développé avec React et Vite.

## Programme
React et Vite - SPA réactive

## Prérequis
- Git (pour cloner le dépôt)
- Docker (pour la version conteneurisée)
- Node.js et npm (pour la version locale)

## Installation & Configuration

### En local
```bash
npm install
npm run dev
```
Ouvrir http://localhost:5173

### Avec Docker
```bash
docker build -t react-pokedex .
docker run -p 8088:80 --name react-pokedex react-pokedex
```
Ouvrir http://localhost:8088

## Port
| Hôte | Conteneur |
|------|-----------|
| 8088 | 80        |