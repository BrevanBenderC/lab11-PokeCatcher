import { pokemonArr } from '../array1.js';
import { getResults, findById } from '../JSONFunctions.js';
//console.log(pokemonArr);
const results = getResults();

const main = document.getElementById('main');

for (let item of results){
    const pokemonZ = findById(results, item.id);
    
    console.log(pokemonZ);
    
    const container = document.createElement('div');
   
    container.classList.add('results-container');
    
   // const img = document.createElement('img');
    
    img.src = pokemonZ.image;
    
    const header = document.createElement('h3');
    
    header.textContent = pokemonZ.pokemon;
    
    const div = document.createElement('div');
    
    div.classList.add('results-body');
    
    const p = document.createElement('p');
    
    const resultsSpan1 = document.createElement('span');
    
    resultsSpan1.textContent = `Encountered: ${item.shown} `;
    
    const resultsSpan2 = document.createElement('span');
   
    resultsSpan2.textContent = `Caught: ${item.picked}`;
    
    p.append(resultsSpan1, resultsSpan2);
    
    p.classList.add('results-text');
    
    div.append(img, p);
    
    container.append(header, div);
    
    main.append(container);
}

