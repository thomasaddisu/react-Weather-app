# weather-app

Small React-based weather app (Vite-friendly). Provides current weather information for a searched location and uses a simple static icon in `public/cloudy.png`.

## Features
- Search weather by city
- Responsive UI
- Built with modern React (JSX entry at `src/main.jsx`)
- Static favicon at `public/cloudy.png`

## Prerequisites
- Node.js 14+ and npm (or Yarn)
- A weather API key (OpenWeatherMap or similar)

## Quick Start

1. Clone the repo
    ```bash
    git clone <repo-url>
    cd react-weather-app
    ```

2. Install dependencies
    ```bash
    npm install
    ```

3. Provide your API key (example for Vite)
    - Create a `.env` file in project root:
      ```
      VITE_WEATHER_API_KEY=your_api_key_here
      ```

4. Run in development
    ```bash
    npm run dev
    ```
    Open http://localhost:5173 (or the URL shown in the terminal).

5. Build for production
    ```bash
    npm run build
    npm run preview   # optional: preview the production build locally
    ```

## Project layout (typical)
```
/public
  └─ cloudy.png
index.html
/src
  └─ main.jsx
  └─ App.jsx
  └─ components/
README.md
```

Adjust paths if your setup differs.

## Notes & Troubleshooting
- index.html mounts React at `<div id="root"></div>` and loads `src/main.jsx`.
- Ensure your API key is valid and CORS is allowed by the weather API.
- If using a different bundler, adapt env variable names and scripts accordingly.

## Contributing
Pull requests and issues welcome. Keep changes small and focused.

## License
MIT