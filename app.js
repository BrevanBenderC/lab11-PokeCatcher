import { pokemonArr } from './array1.js';
import { pickPokemon, showPokemon } from './fun-functions.js';

const pokemon1Img = document.getElementById('poke-1-img');
const pokemon2Img = document.getElementById('poke-2-img');
const pokemon1Radio = document.getElementById('pokemon-1-radio');
const pokemon2Radio = document.getElementById('pokemon-2-radio');
const pokemon3Radio = document.getElementById('pokemon-3-radio');
const pokemon3Img = document.getElementById('poke-3-img');

const button = document.getElementById('choose');

const generatePokemon = () =>{
    let randNum1 = Math.floor(Math.random() * pokemonArr.length);
    let randNum2 = Math.floor(Math.random() * pokemonArr.length);
    let randNum3 = Math.floor(Math.random() * pokemonArr.length);
    while (
        randNum1 === randNum2 || 
      randNum1 === randNum3 || 
      randNum2 === randNum3
    ) {
        randNum1 = Math.floor(Math.random() * pokemonArr.length);
        randNum2 = Math.floor(Math.random() * pokemonArr.length);
        randNum3 = Math.floor(Math.random() * pokemonArr.length);
    }
    
    let pokemon1 = pokemonArr[randNum1];
    showPokemon(pokemon1.pokemon);
    pokemon1Img.src = `${pokemon1.image}`;
    pokemon1Radio.value = pokemon1.id;
    
    let pokemon2 = pokemonArr[randNum2];
    showPokemon(pokemon2.pokemon);
    pokemon2Img.src = `${pokemon2.image}`;
    pokemon2Radio.value = pokemon2.id;

    let pokemon3 = pokemonArr[randNum3];
    showPokemon(pokemon2.pokemon);
    pokemon3Img.src = `${pokemon3.image}`;
    pokemon3Radio.value = pokemon3.id;

};

let totalPlays = 0;
generatePokemon();

button.addEventListener('click', ()=>{
    const chosenRadio = document.querySelector('input[type=radio]:checked');
 
    if (chosenRadio){
        const chosenId = chosenRadio.value;
        totalPlays++;
        pickPokemon(chosenId);
        if (totalPlays >= 2){
            window.location = './results/index.html';
        } else {
            generatePokemon();
        }
    }

});