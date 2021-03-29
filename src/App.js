import React, { useState } from "react";
import PokemonList from './PokemonList';
import PokemonData from './PokemonData';

function App() {
  const [switchView, setSwitchView] = useState(false);
  const [dataLink, setDataLink] = useState("https://pokeapi.co/api/v2/pokemon/1/");

  return (
    <>
      <h1>Pokemon</h1>
      {switchView ?
        <PokemonData viewSwitch={() => setSwitchView(!switchView)} dataLink={dataLink} /> :
        <PokemonList viewSwitch={() => setSwitchView(!switchView)}
          getDateUrl={(url) => setDataLink(url)} />}
    </>
  );
}

export default App;
