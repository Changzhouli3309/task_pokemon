import React, { useEffect, useState } from "react";
import PokemonList from './PokemonList';
import PokemonData from './PokemonData';

function App() {
  const [switchView, setSwitchView] = useState(false);
  const [dataLink, setDataLink] = useState("");
  const [pngList, setPngList] = useState([]);

  useEffect(() => {
    const list = [];
    for (let index = 0; index < 100; index++) {
      list.push("#");
    }
    setPngList(list);
  }, [])

  function viewSwitch() {
    setSwitchView(!switchView)
  }

  return (
    <>
      <h1>Pokemon</h1>
      {switchView ?
        <PokemonData viewSwitch={viewSwitch} dataLink={dataLink} pngList={pngList} /> :
        <PokemonList viewSwitch={viewSwitch} getDateUrl={(url) => setDataLink(url)} pngList={pngList} />}
    </>
  );
}

export default App;
