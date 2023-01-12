import { FiltersProvider } from "hooks/useFilters";
import React from "react";
import { AuthorsProvider } from "./hooks/useAuthors";
import { LocationsProvider } from "./hooks/useLocations";
import { PaintingsProvider } from "./hooks/usePaintings";
import Home from "./pages/home";

function App() {
  return (
    <PaintingsProvider>
      <AuthorsProvider>
        <LocationsProvider>
          <FiltersProvider>
            <Home />
          </FiltersProvider>
        </LocationsProvider>
      </AuthorsProvider>
    </PaintingsProvider>
  );
}

export default App;
