export function findById(items, id){
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
    localStorage.setItem('RESULTS', JSON.stringify(results));
}

export function pickPokemon(id){
    let results = getResults(); 
    console.log(results);
    let pick = findById(results, id);
    console.log(pick);
    pick.picked++;
    localStorage.setItem('RESULTS', JSON.stringify(results));
}