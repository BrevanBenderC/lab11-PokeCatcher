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

export function pickPokemon(){
    let results = getResults(); 
    let item = findById(results, id);
    console.log(item);
    item.picked++;
    localStorage.setItem('RESULTS', JSON.stringify(results));
}