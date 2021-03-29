import React, { useEffect, useState } from 'react';

function PokemonData(props) {
  const { viewSwitch, dataLink } = props;
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
  }

  return (
    <>
      <div>{pokeData.id}. {pokeData.name}</div>
      <div>height:{pokeData.height}</div>
      <div>moves:</div>
      
      <button onClick={goToList}>go Back</button>
    </>
  );
}

export default PokemonData;