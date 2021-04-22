import random from "@/utils/random";

/**
 * Máximo de pokemon a seleccionar
 */
const MAX_POKEMON = 152;

/**
 * Tipo de objeto
 */
type Pokemons = {
  name: string;
  url: string;
};

/**
 * Función que devuelve la cantidad de elementos al azar
 * @param array Array con los pokemon a seleccionar
 * @param limit limite a escoger
 * @returns Array con objeto pokemon
 */
const arrayRandom = (array: Array<Pokemons>, limit: number) => {
  let data: Array<Pokemons> = [];

  while (data.length < limit) {
    let aux: Pokemons = array[random(MAX_POKEMON, 1)];
    if (!data.some((v: Pokemons) => v.name === aux.name)) {
      data.push(aux);
    }
  }
  return data;
};

/**
 * Obtiene los pokemons al azar
 * @param quantity Limite de pokemon a obtener
 * @returns Array con los pokemon seleccionados
 */
async function getPokemons(quantity: number) {
  let pokemons: Array<Object> = [];
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=" + MAX_POKEMON;
  const response = await fetch(URL);
  const data = await response.json();

  const responseAll: Array<Response> = await Promise.all(
    arrayRandom(data.results, quantity).map((value: Pokemons) =>
      fetch(value.url)
    )
  );
  const dataAll = await Promise.all(responseAll.map(value => value.json()));

  dataAll.map(pokemon =>
    pokemons.push({
      name: pokemon.name,
      img: pokemon.sprites.other["official-artwork"]["front_default"]
    })
  );
  return pokemons;
}

export default getPokemons;
