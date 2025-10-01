import React from "react";
import PokemonCard from "../components/PokemonCard";
import { POKEMONS } from "../data/pokemons";

export default function Home() {
  return (
    <div className="grid">
      {POKEMONS.map((p) => (<PokemonCard key={p.id} pokemon={p} />))}
    </div>
  );
}