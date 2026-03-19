## Movie Database – Capstone Project

**Movie Database** is a modern, responsive web application that lets users explore movies, TV series, people, and trending content using data from **The Movie Database (TMDB)**.  
It is built as a full front‑end capstone project to demonstrate **React**, **Vite**, **TailwindCSS**, and modern state‑management and data‑fetching patterns.

### 🎬 What the app does

- **Discover trending content**
  - Full‑screen hero carousel highlighting trending movies and series (auto‑rotating, with rich metadata).
  - Daily **Trending Movies**, **Trending Series**, and **Trending People** sections.
- **Browse catalogs**
  - Dedicated **Movies** and **Series** sections on the landing page.
  - Catalog cards show posters, title, rating, release year, and key metadata.
- **View rich details**
  - **Movie details** page with:
    - Large hero banner, poster, and tagline.
    - Full overview/synopsis.
    - Release date, runtime, budget, revenue, ratings, genres, languages, countries.
    - Production companies with logos.
    - “Watch trailer” entry point.
  - **Series details** page with:
    - Seasons and episodes (episode card list with title, number, air date, runtime, overview, and thumbnail).
    - Series metadata (rating, genres, language, content stats).
    - Recommendations and related content.
- **Search experience**
  - Dedicated search page with:
    - Search bar component.
    - Results grid/card layout.
    - Pagination and planned filtering/sorting (popularity, etc.).
- **User‑friendly interactions**
  - Buttons for “Add to Favorites”, “Add to Watchlist”, and “More Info”/“View Detail”.
  - Smooth scrolling sections and carousels for recommendations and production companies.

### 🌓 UX & design

- **Modern, cinematic UI** with focus on big imagery and bold typography.
- **Dark mode support**:
  - Animated theme toggle component.
  - Theme preference persisted to `localStorage`.
  - Carefully tuned light/dark gradients on hero sections so text stays readable.
- **Mobile‑first, responsive layout**:
  - Works across phones, tablets, and large desktop screens.
  - Scrollbars visually hidden in carousels for a cleaner look.
- **Accessibility‑minded structure**:
  - Semantic sections, ARIA‑friendly controls, and clear focus on contrast.

### 🧩 Architecture overview

- **Routing & pages**
  - `/` – landing page with hero, trending sections, and catalogs.
  - `/movies` – movies listing context.
  - `/series` – series listing context.
  - `/detail/:id` – generic detail wrapper used together with type to show movie/series detail.
  - `/search` – search results page.
- **Core components (examples)**
  - `landingPage/landingPage.jsx` – main landing layout; stitches together header, hero, trending, and catalog sections.
  - `landingPage/trending.jsx` – hero carousel that consumes trending “all” data and auto‑rotates slides.
  - `items/detail.jsx` – shared high‑end detail layout (hero, metadata, description, credits avatars, recommendations slider).
  - `items/movies/movies.jsx` – movie‑specific detail implementation (extra metadata such as budget, revenue, runtime, etc.).
  - `items/series/epsoides.jsx` – episode cards for series seasons.
- **State management**
  - **Zustand** stores:
    - `authStore.js` – holds authentication‑related state (planned for future login/favorites).
    - `currentDetailStore.js` – manages the currently selected detail item/type for smooth navigation.
  - **TanStack Query (React Query)** for server state:
    - Handles loading, caching, and refetching of TMDB data.
    - Central place for API loading/error states (`Loader`, `Error`, `FullScreenLoader`, `FullScreenError` components).
- **Data fetching / services**
  - `hooks/useTrending.js` – hook to fetch and normalize trending data for the landing hero and sections.
  - `service/apis/landingApi.js` – Axios client configuration (base URL, headers, API key).
  - `service/landingPage.js` – higher‑level functions that map TMDB endpoints into UI‑friendly data.
- **Utilities & formatting**
  - `utils/DataFormater` – helpers like:
    - `FullDateDisplay` – converts `YYYY-MM-DD` to human‑readable dates.
    - `YearDisplay` – extracts year from dates.
    - `FormatNumberWithComma` – currency and big numbers (budget, revenue).
    - `FormatMinutesToTime` – converts minutes to `Hh Mm` style.
    - `RoundToOneDecimal` – user‑friendly rating display.
  - **UI helpers** such as `WatchTrailerButton`, `Loader`, `Error`, and recommendation cards.

### 🛠️ Tech stack

- **Core**
  - **React** – component‑based UI.
  - **Vite** – dev server and bundler.
  - **React Router DOM** – client‑side routing.
- **Styling**
  - **TailwindCSS** for utility‑first styling and responsive design.
  - Custom dark theme with gradients and overlays tailored for movie posters.
- **State & data**
  - **Zustand** for app/global UI state.
  - **TanStack Query (React Query)** for async data and caching.
  - **Axios** as the HTTP client.
- **Icons & visuals**
  - **Lucide React** for crisp UI icons (play, info, chevrons, etc.).
  - TMDB image CDN for backdrops, posters, logos, and people photos.

### 📁 Project structure (high level)

```text
movie-database/
├── src/
│   ├── components/
│   │   ├── items/                 # Detail layouts and shared content components
│   │   │   ├── detail.jsx
│   │   │   ├── metaData.jsx
│   │   │   ├── recommendations.jsx
│   │   │   ├── TopBar.jsx
│   │   │   ├── movies/
│   │   │   │   └── movies.jsx
│   │   │   └── series/
│   │   │       ├── series.jsx
│   │   │       └── epsoides.jsx
│   │   └── landingPage/           # Home/landing experience
│   │       ├── landingPage.jsx
│   │       ├── header.jsx
│   │       ├── footer.jsx
│   │       ├── themeToggle.jsx
│   │       ├── trending.jsx
│   │       ├── trendingmovies.jsx
│   │       ├── trendingSeries.jsx
│   │       ├── trendingPeople.jsx
│   │       ├── moviesSection.jsx
│   │       ├── seriesSection.jsx
│   │       └── search/
│   │           ├── search.jsx
│   │           ├── searchBar.jsx
│   │           ├── result.jsx
│   │           └── pagination.jsx
│   ├── hooks/
│   │   └── useTrending.js
│   ├── service/
│   │   ├── apis/
│   │   │   └── landingApi.js
│   │   └── landingPage.js
│   ├── stores/
│   │   ├── authStore.js
│   │   └── currentDetailStore.js
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── tailwind.config.js
└── vite.config.js
```

### 🚦 Getting started

#### Prerequisites

- Node.js (v16 or higher).
- `npm` or `yarn`.
- A TMDB account and API key.

#### Install and run locally

```bash
git clone <your-repository-url>
cd movie-database
npm install
```

Create a `.env` file in the project root and add your **TMDB API key**:

```bash
VITE_TMDB_API_KEY=your_tmdb_v3_api_key_here
```

You can copy the format from `.env.example`.

Then start the dev server:

```bash
npm run dev
```

By default Vite runs on `http://localhost:5173`.

#### Production build

```bash
npm run build
npm run preview   # optional, to preview the built app
```

### 🎯 Project status

**Completed / implemented**

- Landing page layout (hero, trending sections, catalogs).
- Dark mode theming and toggle.
- Detail layouts for movies and series (including recommendations and production companies).
- Trending API integration and data fetching via React Query.
- Global state stores with Zustand.
- Core responsive design and navigation.

**Planned / in progress**

- Full API wiring for all detail views (series, episodes, people).
- Search wired to live TMDB search endpoints with filters and sorting.
- Authentication layer and real favorites/watchlist persistence.
- Improved loading skeletons and dedicated error UI in all routes.
- Pagination connected to API responses.
- Performance/image optimizations and basic testing.

### 📌 Notes

- This project is a **learning and portfolio** capstone, focused on clean UI, modern React patterns, and API‑driven design.
- You are free to fork and extend it (for example, by adding authentication, recommendations, or your own rating system).
