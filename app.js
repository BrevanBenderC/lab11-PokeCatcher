import pokemons from './pokemon.js';
import { encounterPokemon, caughtPokemon } from './storage-utils.js';
const captureButton = document.getElementById('capture-button');
const pokeImg1 = document.getElementById('poke-img-1');
const pokeImg2 = document.getElementById('poke-img-2');
const pokeImg3 = document.getElementById('poke-img-3');
const pokeRadio1 = document.getElementById('pokemon-1');
const pokeRadio2 = document.getElementById('pokemon-2');
const pokeRadio3 = document.getElementById('pokemon-3');
const countSpan = document.getElementById('total-encounters');



const generatePokemon = () => {

    let randPoke1 = Math.floor(Math.random() * pokemons.length);
    let randPoke2 = Math.floor(Math.random() * pokemons.length);
    let randPoke3 = Math.floor(Math.random() * pokemons.length);
  
    while (
        randPoke1 === randPoke2 || randPoke2 === randPoke3 ||
      randPoke1 === randPoke3
    ) {

        randPoke1 = Math.floor(Math.random() * pokemons.length);
        randPoke2 = Math.floor(Math.random() * pokemons.length);
        randPoke3 = Math.floor(Math.random() * pokemons.length); 
    }

    let poke1 = pokemons[randPoke1];
    console.log(poke1);
    encounterPokemon(poke1.id);
    pokeImg1.src = poke1.url_image;
    pokeRadio1.value = poke1.id;

    let poke2 = pokemons[randPoke2];
    console.log(poke2);
    encounterPokemon(poke2.id);
    pokeImg2.src = poke2.url_image;
    pokeRadio2.value = poke2.id;

    let poke3 = pokemons[randPoke3];
    console.log(poke3);
    encounterPokemon(poke3.id);
    pokeImg3.src = poke3.url_image;
    pokeRadio3.value = poke3.id;
};
generatePokemon();

let totalEncounters = 0;

captureButton.addEventListener('click', ()=>{ 
    const chosenPokemon = document.querySelector('input[type=radio]:checked');
    
    if (chosenPokemon){
        const chosenId = Number(chosenPokemon.value);
        caughtPokemon(chosenId);

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
