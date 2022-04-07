import { Routes, Route } from "react-router-dom";
import Pokemon from "../../pages/Pokemon";

import Pokemons from "../../pages/Pokemons";
import Welcome from "../../pages/Welcome";

import Template from "../Template";

const Router = () => {
  return (
    <Template>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
      </Routes>
    </Template>
  )
}

export default Router