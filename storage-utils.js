export function findById(id, pokemons){
    for (let pokemon of pokemons) {
        if (pokemon.id === id) {
            return pokemon;
        }
    }
}

export function getPokedex(){
    const pokeString = localStorage.getItem('POKEDEX') || '[]';
    const pokedex = JSON.parse(pokeString);
    return pokedex;
}

export function encounterPokemon(id){
    let pokedex = getPokedex();
    let shownPokemon = findById(id, pokedex);
    if (shownPokemon) {
        shownPokemon.encountered++;
    } else {
        const newPokemon = { id: id, encountered: 1, caught: 0 };
        pokedex.push(newPokemon);
    }
    const stringPokedex = JSON.stringify(pokedex);
    localStorage.setItem('POKEDEX', stringPokedex);
}

export function caughtPokemon(id){
    let pokedex = getPokedex();
    let caughtPoke = findById(id, pokedex);
    caughtPoke.caught++;
    localStorage.setItem('POKEDEX', JSON.stringify(pokedex));
}