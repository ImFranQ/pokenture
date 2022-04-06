import { Routes, Route } from "react-router-dom";

import Pokemons from "../../pages/Pokemons";
import Welcome from "../../pages/Welcome";
import PokemonDetail from "../PokemonDetail";

import Template from "../Template";

const Router = () => {
  return (
    <Template>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/pokemons" element={<Pokemons />} />
      </Routes>
    </Template>
  )
}

export default Router