const form = document.getElementById("form");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const imageContainer = document.getElementById("image-container");

const pokemonURL = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
let pokemonData = {};

form.addEventListener("submit", searchPokemon);

async function searchPokemon(e) {

  e.preventDefault();
  const pokemonIdOrName = getPokemonIdOrName();
  await getPokemonData(pokemonIdOrName);
  updateUI();
}

function getPokemonIdOrName() {
  const value = searchInput.value;
  let pokemonIdOrName;
  if (Number(value)) {
    pokemonIdOrName = Number(value);
  } else {
    const lowercaseValue = value.toLowerCase();
    const regex = /[a-z\s]/g;
    pokemonIdOrName = lowercaseValue.match(regex).join("").replace(/\s/g, "-");
  }
  return pokemonIdOrName;
}

async function getPokemonData(pokemonIdOrName) {
  try {
    const res = await fetch(`${pokemonURL}/${pokemonIdOrName}`);
    const data = await res.json();
    pokemonData = data;
  } catch (err) {
    alert("Pokémon not found");
    return;
  }
}

function updateUI() {
  if (pokemonData) {
    imageContainer.innerHTML = `<img id="sprite" src="${pokemonData.sprites.front_default}"/>`;
    pokemonName.textContent = "Name: " + `${pokemonData.name.toUpperCase()}`;
    pokemonId.textContent ="Id: " + pokemonData.id;
    weight.textContent = "Weight: " + pokemonData.weight;
    height.textContent ="Height: " + pokemonData.height;
    hp.textContent = "Hp: " + getStatsPokemonData("hp");
    attack.textContent ="Attack: " + getStatsPokemonData("attack");
    defense.textContent ="Defence: " +  getStatsPokemonData("defense");
    specialAttack.textContent ="Special Attack: " +  getStatsPokemonData("special-attack");
    specialDefense.textContent ="Special Defence: " +  getStatsPokemonData("special-defense");
    speed.textContent ="Speed: " +  getStatsPokemonData("speed");
    types.innerHTML ="Types: " +  `${getTypesPokemonData(pokemonData.types)}`;
  }
}

function getStatsPokemonData(str) {
  const stats = pokemonData.stats;
  if (stats) {
    const stat = stats.find((stat) => stat.stat.name === str);
    return stat.base_stat;
  }
}

function getTypesPokemonData(arr) {
  return arr
    .map((type) => {
      return `<span>${type.type.name}</span>`;
    })
    .join("");
}
