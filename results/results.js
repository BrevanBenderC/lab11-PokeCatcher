import { pokemonArr } from '../array1.js';
import { getResults, findById } from '../JSONFunctions.js';

const results = getResults();

const main = document.getElementById('main');

for (let item of results){
    const pokemon = findById(pokemonArr, item.id);
    console.log(pokemon);
    const container = document.createElement('div');
    container.classList.add('results-container');
    const img = document.createElement('img');
    img.src = pokemon.image;
    const header = document.createElement('h3');
    header.textContent = pokemon.pokemon;
    const div = document.createElement('div');
    div.classList.add('results-body');
    const p = document.createElement('p');
    const resultsSpan1 = document.createElement('span');
    resultsSpan1.textContent = `Shown: ${item.shown}`;
    const resultsSpan2 = document.createElement('span');
    resultsSpan2.textContent = `Picked: ${item.picked}`;
    p.append(resultsSpan1, resultsSpan2);
    p.classList.add('results-text');
    div.append(img, p);
    container.append(header, div);
    main.append(container);
}

const names = results.map((item)=>{
    const pokemon = findById(pokemonArr, item.id);
    return pokemon.name;
});

const picked = results.map(item=>item.picked);

var ctx = document.getElementById('resultsChart').getContext('2d');
// eslint-disable-next-line no-undef
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: '# of Times Picked',
            data: picked,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});