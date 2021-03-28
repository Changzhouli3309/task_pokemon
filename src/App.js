import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // const [pokemons, setPokemos] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(function () {
    const getList = async () => {
      // const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
      // const obj = await resp.json();
      // const pokeList = obj.results;
      // console.log(pokeList)
      // setPokemos(pokeList)

      const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
      const todos = await resp.json();
      console.log(todos);
      setTodos(todos);
    }
    getList()
  },[])

  return (
    <>
      <header>
        123
      </header>
    </>
  );
}

export default App;
