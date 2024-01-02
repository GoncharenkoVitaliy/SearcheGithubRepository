import { Route, Routes } from "react-router-dom";
import HomePages from "./pages/HomePages";
import FavouritesPage from "./pages/FavouritesPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePages />} />
        <Route path='/favourites' element={<FavouritesPage />} />
      </Routes>
    </>
  );
}

export default App;
