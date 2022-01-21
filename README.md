# api-colors
Consumir API de colores para tareas de community manager.

## Technologies
- nodejs
- express
- pm2

## File .env
Crea el archivo .env a partir del archivo .env.example

## Deployment
```bash
// Enviroment local
npm run watch

// Enviroment development server
pm2 start ecosystem.config.js --env development

// Enviroment production server
pm2 start ecosystem.config.js --env production
```
