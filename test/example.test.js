import { getResults, pickPokemon, showPokemon } from '../storage-utils.js';

const test = QUnit.test;

test('getResults returns the key "RESULTS" from localStorage', (expect) => {

    const results = [
        { id: 'bulbasaur', shown: 2, picked: 2 },
        { id: 'ivysaur', shown: 2, picked: 1 },
        { id: 'charmander', shown: 2, picked: 1 }
    ];
    localStorage.setItem('RESULTS', JSON.stringify(results));
    const actual = getResults();
    expect.deepEqual(actual, results);
});

test('getResults returns an empty array if there is no RESULTS key in localStorage', (expect)=>{
    localStorage.removeItem('RESULTS');
    const actual = getResults();

    expect.deepEqual(actual, []);
});

test('showPokemon increments the shown key when the item exists in results', (expect)=>{

    const results = [
        { id: 'bulbasaur', shown: 2, picked: 2 },
    ];
    localStorage.setItem('RESULTS', JSON.stringify(results));
    const expected = [
        { id: 'bulbasaur', shown: 3, picked: 2 },
    ];

    showPokemon('bulbasaur');
    const actual = getResults();
    expect.deepEqual(actual, expected);

});

test('showPokemon adds a new item if its not in results', (expect)=>{
    localStorage.removeItem('RESULTS');
    const expected = [
        { id: 'bulbasaur', shown: 1, picked: 0 },
    ];

    showPokemon('bulbasaur');
    const actual = getResults();


    expect.deepEqual(actual, expected);
});

test('pickPokemon increments the picked key when the item exists in results', (expect)=>{
    const results = [
        { id: 'bulbasaur', shown: 2, picked: 2 },
    ];
    localStorage.setItem('RESULTS', JSON.stringify(results));
    const expected = [
        { id: 'bulbasaur', shown: 2, picked: 3 },
    ];

    pickPokemon('bulbasaur');

    const actual = getResults();

    expect.deepEqual(actual, expected);
});