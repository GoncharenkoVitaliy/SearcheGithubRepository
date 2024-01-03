import { Route, Routes } from "react-router-dom";
import SearchPages from "./pages/SearchPages";
import FavouritesPage from "./pages/FavouritesPage";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-full mx-0 px-0 w-full  bg-gray-300">
      <Navigation />
      <div  className="flex-[1_1_0%]">
        <Routes>
          <Route path="/" element={<SearchPages />} />
          <Route path="/favourites" element={<FavouritesPage />} />
        </Routes>
      </div>
      <div className="flex-[0_0_0%]"><Footer /></div>
    </div>
  );
}

export default App;
