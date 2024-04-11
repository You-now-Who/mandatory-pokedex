"use client"
// import Image from "next/image";
import pokemonService from "@/services/pokemonService";
import Pokemon from "@/components/Pokemon";



export default function Home() {
  // you could use the service like this :)
  

  // pokemonService.get("pokemon", 10).then((data) => {
  //   console.log(data)
  // })

  return (
    <>
    <Pokemon/>
    </>
  );
}
