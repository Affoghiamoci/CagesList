# CagesList

A Stremio Add-on to create personalized catalogs for your favorite actors, directors, and movie sagas.
Based on the architecture and design of Multiboxd.

## Features

- **Custom Actors & Directors**: Add any actor or director using TMDB search.
- **Custom Sagas**: Add entire movie collections (e.g. Star Wars, Marvel).
- **Sorting Options**: Sort catalogs by newest, oldest, popularity, or a daily random mix.
- **Lightweight**: Uses only TMDB standard IDs to prevent conflicts with your existing Stremio metadata add-ons (like Cineta).
- **Serverless or Docker**: Ready to be deployed as a standard Next.js application or via Docker (Coolify/Portainer).

## Installation

To run the add-on locally:

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) to access the configurator and install it into Stremio.

## Docker Deployment

You can deploy this add-on to your own VPS using Docker.

```bash
docker-compose up -d --build
```

Enjoy!
