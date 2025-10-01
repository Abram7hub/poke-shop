import React from "react";
import { useCart } from "../store/cart";

export default function PokemonCard({ pokemon }) {
  const add = useCart((s) => s.add);
  return (
    <div className="card">
      <img className="thumb" src={pokemon.image} alt={pokemon.name} loading="lazy" />
      <div className="card-body">
        <div className="title">{pokemon.name}</div>
        <div className="row" style={{justifyContent:'space-between'}}>
          <span className="price">{pokemon.price.toFixed(2)} zł</span>
          <button className="btn" onClick={() => add(pokemon)}>Dodaj</button>
        </div>
      </div>
    </div>
  );
}