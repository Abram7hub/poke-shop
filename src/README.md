# PokeShop (Static) – React + Zustand + Router, bez API

## Uruchomienie (Create React App)
1. npx create-react-app pokeshop-static
2. cd pokeshop-static
3. Podmień pliki projektem z tego ZIP-a (public/, src/, package.json)
4. npm i
5. npm start

## Co tu jest
- Statyczna lista 10 Pokemonów w `src/data/pokemons.js`
- Strona główna: siatka kart z przyciskiem „Dodaj”
- Koszyk na /cart (inkrementacja/dekrementacja, usuwanie, suma)
- Gotowe miejsce do przyszłej integracji z API (zastąpisz `POKEMONS` fetchem)