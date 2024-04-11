import React, { useState, useEffect } from 'react';
import pokemonService from '@/services/pokemonService';

const Pokemon = () => {
    const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const typeColors = {
  bug: "bg-green-600 text-white",
  electric: "bg-yellow-500 text-black",
  fire: "bg-red-500 text-white",
  fairy: "bg-pink-500 text-white",
  ghost: "bg-purple-500 text-white",
  grass: "bg-green-400 text-black",
  ground: "bg-yellow-600 text-white",
  ice: "bg-blue-200 text-black",
  normal: "bg-gray-500 text-white",
  poison: "bg-indigo-900 text-white",
  psychic: "bg-pink-400 text-black",
  rock: "bg-yellow-800 text-white",
  water: "bg-blue-500 text-white",
  dragon: "bg-indigo-800 text-white",
  dark: "bg-gray-800 text-white",
  steel: "bg-gray-400 text-black",
  flying: "bg-blue-300 text-black",
  fighting: "bg-red-700 text-white",
};

  useEffect(() => {
    pokemonService.getAll().then(data => {
      const promises = data.map(pokemon => 
        fetch(pokemon.url).then(response => response.json())
      );
      Promise.all(promises).then(results => setPokemons(results));
    });
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pokemons.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(pokemons.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (<>
    <div className="flex flex-col items-center mt-10">
    <table className="table-auto w-3/4 text-white font-mono text-lg">
        <thead className="bg-indigo-900 text-white">
        <tr>
            <th className="px-4 py-2 font-bold text-xl text-shadow">Name</th>
            <th className="px-4 py-2 font-bold text-xl text-shadow">Type</th>
            <th className="px-4 py-2 font-bold text-xl text-shadow">Height</th>
            <th className="px-4 py-2 font-bold text-xl text-shadow">Weight</th>
            <th className="px-4 py-2 font-bold text-xl text-shadow">Ability</th>
        </tr>
        </thead>
        <tbody>
  {currentItems.map((pokemon, index) => (
    <tr key={pokemon.id} className={`text-center ${index % 2 === 0 ? 'bg-indigo-700' : 'bg-indigo-800'} hover:bg-indigo-600 transition-colors duration-200`}>
      <td className="border px-4 py-2 font-bold text-shadow">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} className="inline-block mr-2" />
    {pokemon.name}
  </td>
      <td className="border px-4 py-2 font-bold text-shadow">
        {pokemon.types.map((type, index) => (
            <span 
            key={index} 
            className={`inline-block px-2 py-1 mr-2 rounded ${typeColors[type.type.name]}`}
            >
            {type.type.name}
            </span>
        ))}
        </td>
        <td className="border px-4 py-2 font-bold text-shadow">{pokemon.height} ft</td>
        <td className="border px-4 py-2 font-bold text-shadow">{pokemon.weight/10} kg</td>
      <td className="border px-4 py-2 font-bold text-shadow">
        {pokemon.abilities.map((ability, index) => (
          <div key={index}>{index+1}: {ability.ability.name}</div>
        ))}
      </td>
    </tr>
  ))}
</tbody>
    </table>
    <div className="flex justify-center mt-5 space-x-2">
      {pageNumbers.map(number => (
        <button 
          key={number} 
          onClick={() => handlePageChange(number)}
          className={`px-3 py-2 mb-5 border border-indigo-500 rounded-full hover:bg-indigo-500 hover:text-white transition-colors duration-200 ${currentPage === number ? 'bg-indigo-500 text-white' : 'text-indigo-500'}`}
        >
          {number}
        </button>
      ))}
    </div>
    </div>
  </>
  );
};

export default Pokemon;