export function findById(id, items){
    for (const item of items){
        if (item.id === id) {
            return item;
        }
    }
}

export function getResults(){              
    const resultsString = localStorage.getItem('RESULTS') || '[]';  
    const results = JSON.parse(resultsString);
    return results;


}

export function showPokemon(id){
    let results = getResults();
    let item = findById(results, id);
    if (item){
        item.shown++;
    } else {
        const newItem = { id: id, shown: 1, picked: 0 };
        results.push(newItem);
    }
    const stringPokedex = JSON.stringify(results);
    localStorage.setItem('RESULTS', stringPokedex);
}

export function pickPokemon(id){
    
    let results = getResults(); 
    let pokePick = findById(id, results);
    pokePick.picked++;
    localStorage.setItem('RESULTS', JSON.stringify(results));
}