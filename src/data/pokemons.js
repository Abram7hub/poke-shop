const artwork = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

const priceFor = (id) => Number(((id % 10) + 1) * 2.5);

export const POKEMONS = [
  { id: 1, name: "bulbasaur", image: artwork(1), price: priceFor(1) },
  { id: 2, name: "ivysaur", image: artwork(2), price: priceFor(2) },
  { id: 3, name: "venusaur", image: artwork(3), price: priceFor(3) },
  { id: 4, name: "charmander", image: artwork(4), price: priceFor(4) },
  { id: 5, name: "charmeleon", image: artwork(5), price: priceFor(5) },
  { id: 6, name: "charizard", image: artwork(6), price: priceFor(6) },
  { id: 7, name: "squirtle", image: artwork(7), price: priceFor(7) },
  { id: 8, name: "wartortle", image: artwork(8), price: priceFor(8) },
  { id: 9, name: "blastoise", image: artwork(9), price: priceFor(9) },
  { id: 10, name: "caterpie", image: artwork(10), price: priceFor(10) },
];
