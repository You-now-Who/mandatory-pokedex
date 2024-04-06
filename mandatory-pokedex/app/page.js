// import Image from "next/image";
import Navbar from '../components/navbar';
import PokemonService from "../services/pokemonService";



export default function Home() {
  // you could use the service like this :)
  
/*     const pokemonService = new PokemonService();

    pokemonService.get("pokemon", 10).then((data) => {
      console.log(data)
  }); */

  return (
    <Navbar/>
  );
}
