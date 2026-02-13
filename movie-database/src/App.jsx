import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/landingPage";
import Movies from "./components/items/movies/movies";
import Series from "./components/items/series/series";
import DetailCaller from "./components/items/detailCaller";
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
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
