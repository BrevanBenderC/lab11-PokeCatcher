import { pokemonArr } from './array1.js';
import { pickPokemon, showPokemon } from './fun-functions.js';

const captureButton = document.getElementById('choose');
const pokeImg1 = document.getElementById('poke-1-img');
const pokeImg2 = document.getElementById('poke-2-img');
const pokeImg3 = document.getElementById('poke-3-img');
const pokeRadio1 = document.getElementById('pokemon-1-radio');
const pokeRadio2 = document.getElementById('pokemon-2-radio');
const pokeRadio3 = document.getElementById('pokemon-3-radio');
const countSpan = document.getElementById('allencounter');


// create generatePokemon()
const generatePokemon = () => {
  // generate 3 random pokemon using math.floor(math.random() * pokemon.length)
    // generate 3 random from pokemon array on pokemon.js, set it equal to mutable variable
    let randPoke1 = Math.floor(Math.random() * pokemonArr.length);
    let randPoke2 = Math.floor(Math.random() * pokemonArr.length);
    let randPoke3 = Math.floor(Math.random() * pokemonArr.length);
  // regenerate the number of any of them match
    while (
        randPoke1 === randPoke2 || randPoke2 === randPoke3 ||
      randPoke1 === randPoke3
    ) {
      // continue to regenerate random numbers to generate randPoke to encounter 
        randPoke1 = Math.floor(Math.random() * pokemonArr.length);
        randPoke2 = Math.floor(Math.random() * pokemonArr.length);
        randPoke3 = Math.floor(Math.random() * pokemonArr.length); 
    }

    let poke1 = pokemonArr[randPoke1];
    showPokemon(poke1.id);
    pokeImg1.src = poke1.url_image;
    pokeRadio1.value = poke1.id;

    let poke2 = pokemonArr[randPoke2];
    showPokemon(poke2.id);
    pokeImg2.src = poke2.url_image;
    pokeRadio2.value = poke2.id;

    let poke3 = pokemonArr[randPoke3];
    showPokemon(poke3.id);
    pokeImg3.src = poke3.url_image;
    pokeRadio3.value = poke3.id;
};


let totalEncounters = 0;
showPokemon();

captureButton.addEventListener('click', ()=>{ 
    const chosenPokemon = document.querySelector('input[type=radio]:checked');
    
    if (chosenPokemon){
        const chosenId = Number(chosenPokemon.value);
        pickPokemon(chosenId);

        totalEncounters++;
        if (totalEncounters >= 10){
            window.location.href = './results/index.html';
        }
        else {
            generatePokemon();
        }
    }
    countSpan.textContent = totalEncounters;
});