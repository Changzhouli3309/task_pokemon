import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";

function PokemonList(props) {
  const { viewSwitch, getDateUrl , pngList} = props;
  const [pokemonItems, setPokemos] = useState([]);


  useEffect(function () {
    const getList = async () => {
      const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
      const obj = await resp.json();
      const pokeList = obj.results;
      setPokemos(pokeList);
    }
    getList()
  }, [])

  return (
    <>
      {pokemonItems.map((item, index) =>
        (<div key={index} ><ListItem viewSwitch={viewSwitch} getDateUrl={getDateUrl} item={item} index={index} /><img alt="1" src={pngList[index]}/></div>)
      )}
    </>
  );
}

export default PokemonList;