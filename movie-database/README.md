# Movie Database - Capstone Project

A modern, responsive movie and TV series database application built with React and Vite. This project integrates with The Movie Database (TMDB) API to provide users with comprehensive information about movies, TV series, and trending content.

## 🚀 Features

### ✅ Implemented Features

#### **Landing Page**

- **Hero Section**: Trending content carousel with featured movies/series
- **Trending Movies Section**: Displays daily trending movies
- **Trending Series Section**: Shows trending TV series
- **Trending People Section**: Highlights popular actors and directors
- **Movies Section**: Browse and explore movie catalog
- **Series Section**: Browse and explore TV series catalog
- **Header Navigation**: Smooth navigation with anchor links
- **Footer**: Site information and links

#### **Search Functionality**

- **Search Bar**: Real-time search interface
- **Search Results Page**: Grid layout displaying search results
- **Pagination**: Navigate through multiple pages of results
- **Filtering & Sorting**: Sort results by popularity and other criteria
- **Result Cards**: Display movies and series with ratings, duration, and metadata

#### **Movie Details Page**

- **Hero Section**: Large background image with movie information overlay
- **Metadata Display**: Release date, runtime, rating, budget, genres
- **Description**: Full synopsis and plot details
- **Recommendations**: Similar movies/series suggestions
- **Action Buttons**: Add to favorites, watchlist, and view details
- **Production Companies**: Display production studio information

#### **Series Details Page**

- **Season Selector**: Dropdown to switch between seasons
- **Episode List**: Detailed episode cards with:
  - Episode number and title
  - Release date
  - Duration
  - Description
  - Progress tracking (watched/unwatched)
  - Episode thumbnails
- **Series Metadata**: Release date, rating, language, genres, certificate
- **Statistics**: Duration, total episodes, content rating

#### **Dark Mode**

- **Theme Toggle**: Beautiful animated toggle switch
- **Persistent Theme**: Saves user preference in localStorage
- **Smooth Transitions**: Seamless theme switching with animations
- **Custom Dark Theme**: Optimized color scheme for dark mode

#### **State Management**

- **Zustand Store**: Global state management for:
  - Authentication state (`authStore.js`)
  - Current detail view (`currentDetailStore.js`)
- **React Query**: Server state management and caching
- **Custom Hooks**: Reusable data fetching hooks (`useTrending.js`)

#### **API Integration**

- **TMDB API**: Integration with The Movie Database API
- **Axios Configuration**: Centralized API client setup
- **Service Layer**: Organized API service functions
- **Error Handling**: Comprehensive error handling for API calls

## 🛠️ Tech Stack

### Core Technologies

- **React 19.2.0**: Modern React with latest features
- **Vite 7.2.4**: Fast build tool and dev server
- **React Router DOM 7.13.0**: Client-side routing

### Styling

- **TailwindCSS 4.1.18**: Utility-first CSS framework
- **Custom Theme**: Dark mode support with custom color palette
- **Responsive Design**: Mobile-first approach

### State Management & Data Fetching

- **Zustand 5.0.11**: Lightweight state management
- **TanStack Query 5.90.20**: Powerful data synchronization
- **Axios 1.13.5**: HTTP client for API requests

### UI Components & Icons

- **Lucide React 0.563.0**: Beautiful icon library

## 📁 Project Structure

```
movie-database/
├── src/
│   ├── components/
│   │   ├── items/
│   │   │   ├── detail.jsx          # Movie/Series detail page
│   │   │   ├── metaData.jsx        # Metadata display component
│   │   │   ├── recommendations.jsx # Recommendations carousel
│   │   │   ├── TopBar.jsx          # Top navigation bar
│   │   │   ├── movies/
│   │   │   │   └── movies.jsx      # Movies listing page
│   │   │   └── series/
│   │   │       ├── series.jsx      # Series listing page
│   │   │       └── epsoides.jsx   # Episode cards component
│   │   └── landingPage/
│   │       ├── landingPage.jsx     # Main landing page
│   │       ├── header.jsx         # Site header
│   │       ├── footer.jsx         # Site footer
│   │       ├── themeToggle.jsx    # Dark mode toggle
│   │       ├── trending.jsx       # Trending carousel
│   │       ├── trendingmovies.jsx # Trending movies section
│   │       ├── trendingSeries.jsx # Trending series section
│   │       ├── trendingPeople.jsx # Trending people section
│   │       ├── moviesSection.jsx  # Movies catalog section
│   │       ├── seriesSection.jsx  # Series catalog section
│   │       └── search/
│   │           ├── search.jsx     # Search results page
│   │           ├── searchBar.jsx  # Search input component
│   │           ├── result.jsx     # Search result card
│   │           └── pagination.jsx # Pagination component
│   ├── hooks/
│   │   └── useTrending.js         # Custom hook for trending data
│   ├── service/
│   │   ├── apis/
│   │   │   └── landingApi.js      # Axios API client configuration
│   │   └── landingPage.js         # API service functions
│   ├── stores/
│   │   ├── authStore.js           # Authentication state store
│   │   └── currentDetailStore.js  # Current detail view store
│   ├── App.jsx                    # Main app component with routes
│   └── main.jsx                   # Application entry point
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Design Features

- **Modern UI**: Clean, minimalist design with focus on content
- **Responsive Layout**: Works seamlessly on mobile, tablet, and desktop
- **Smooth Animations**: Transitions and hover effects throughout
- **Accessibility**: Semantic HTML and ARIA labels
- **Custom Scrollbars**: Hidden scrollbars for cleaner look
- **Gradient Overlays**: Beautiful gradient effects on hero sections

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd movie-database
```

2. Install dependencies:

```bash
npm install
```

3. Set up API Key:
   - Get your TMDB API key from [themoviedb.org](https://www.themoviedb.org/settings/api)
   - Update the API key in `src/service/apis/landingApi.js`

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔄 Routes

- `/` - Landing page with trending content
- `/movies` - Movies catalog page
- `/series` - TV series catalog page
- `/detail/:id` - Movie/Series detail page
- `/search` - Search results page

## 🎯 Current Progress

### ✅ Completed

- [x] Project setup with Vite and React
- [x] TailwindCSS configuration with dark mode
- [x] Landing page with all sections
- [x] Dark mode toggle functionality
- [x] Search page UI and components
- [x] Movie detail page layout
- [x] Series detail page with episodes
- [x] API integration setup
- [x] State management with Zustand
- [x] React Query integration
- [x] Custom hooks for data fetching
- [x] Responsive design implementation
- [x] Navigation and routing

### 🚧 In Progress / TODO

- [ ] Complete API integration for all pages
- [ ] Implement search functionality with real API calls
- [ ] Add user authentication
- [ ] Implement favorites and watchlist functionality
- [ ] Add loading states and error handling UI
- [ ] Implement pagination with API
- [ ] Add filtering and sorting functionality
- [ ] Optimize images and performance
- [ ] Add unit tests
- [ ] Add E2E tests
- [ ] Deploy to production

## 📚 API Integration Status

### ✅ Integrated

- Trending content (all/day)
- Trending movies (day)

### 🚧 To Be Integrated

- Movie details
- Series details
- Episode information
- Search functionality
- People/actors information
- Recommendations
- Production companies

## 🤝 Contributing

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
