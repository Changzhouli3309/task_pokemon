import { useEffect, useState } from "react";
import ListItem from "./ListItem"

function PokemonList() {
    const [pokemonItem, setPokemos] = useState([]);

    useEffect(function () {
      const getList = async () => {
        const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
        const obj = await resp.json();
        const pokeList = obj.results;
        console.log(pokeList)
        setPokemos(pokeList)
      }
      getList()
    },[])

    return (
        <>
            <h2>Pokemon List</h2>

            {pokemonItem.map((item,index) =>
                (<div key={index}><label>{index+1}. </label><ListItem ItemData={item} /></div>)
            )}
        </>
    );
}

export default PokemonList;