import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/landingPage";
import Movies from "./components/content/movies/movies";
import Series from "./components/content/series/series";
import DetailCaller from "./components/content/detailCaller";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchPage from "./components/landingPage/search/search";
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/detailCaller/:id" element={<DetailCaller />} />
            <Route path="/movies/:id" element={<Movies />} />
            <Route path="/series/:id" element={<Series />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
