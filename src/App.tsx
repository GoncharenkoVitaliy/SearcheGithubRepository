import { Route, Routes } from "react-router-dom";
import SearchPages from "./pages/SearchPages";
import FavouritesPage from "./pages/FavouritesPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="flex flex-col mx-0 px-0 w-full  bg-gray-300">
      <Navigation />
      <Routes>
        <Route path="/" element={<SearchPages />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
