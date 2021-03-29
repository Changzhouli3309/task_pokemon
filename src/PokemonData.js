import React, { useEffect, useState } from 'react';

function PokemonData(props) {
  const { viewSwitch, dataLink, pngList } = props;
  const [pokeData, setPokData] = useState(JSON);

  useEffect(function () {
    const getData = async () => {
      const resp = await fetch(dataLink);
      const obj = await resp.json();
      setPokData(obj);
    }
    getData()
  }, [dataLink]);

  function goToList() {
    viewSwitch();
    pngList[pokeData.id - 1] = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokeData.id + ".png";
  }

  return (
    <>
      <div>{pokeData.id}. {pokeData.name}</div>
      <div>height:{pokeData.height}</div>
      <div>weight:{pokeData.weight}</div>

      <button onClick={goToList}>go Back</button>
    </>
  );
}

export default PokemonData;