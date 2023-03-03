import React from "react";
import { Route, Routes } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import AddIngridients from "./pages/addingridients/AddIngridients";
import AddRecipe from "./pages/addrecipe/AddRecipe";
import Home from "./pages/home/Home";
import Ingridients from "./pages/ingridients/Ingridients";
import Recipes from "./pages/recipes/Recipes";
function App() {
  return (
    <div className="container-fluid">
    <TopBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/recipe" element={<Recipes/>}/>
      <Route path="/addrecipes" element={<AddRecipe/>}/>
      <Route path="/ingridients" element={<Ingridients/>}/>
      <Route path="/addingridients" element={<AddIngridients/>}/>
    </Routes>
    </div>

  );
}

export default App;
