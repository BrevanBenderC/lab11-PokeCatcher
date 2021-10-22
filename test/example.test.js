import pokes from '../pokemon.js';
import { findById, getPokedex, encounterPokemon, caughtPokemon } from '../storage-utils.js';

const test = QUnit.test;

test('findById function returns matching ID', (expect) => {
    const expected = { 
        '_id':'5cef3501ef6005a77cd4fd17',
        'pokemon':'bulbasaur',
        'id':1,
        'species_id':1,
        'height':7,
        'weight':69,
        'base_experience':64,
        'type_1':'grass',
        'type_2':'poison',
        'attack':49,
        'defense':49,
        'hp':45,
        'special_attack':65,
        'special_defense':65,
        'speed':45,
        'ability_1':'overgrow',
        'ability_2':'NA',
        'ability_hidden':'chlorophyll',
        'color_1':'#78C850',
        'color_2':'#A040A0',
        'color_f':'#81A763',
        'egg_group_1':'monster',
        'egg_group_2':'plant',
        'url_image':'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        'generation_id':1,
        'evolves_from_species_id':'NA',
        'evolution_chain_id':1,
        'shape_id':8,
        'shape':'quadruped',
        'pokebase':'bulbasaur',
        'pokedex':'http://www.pokemon.com/us/pokedex/bulbasaur'
    };
    const actual = findById(1, pokes);
    expect.deepEqual(actual, expected);
});

test('getPokedex function will return correct captured pokemon if it exists', (expect) => {
    const testPokedex = [
        { 'id':1, 'pokemon':'bulbasaur', encountered: 0, caught: 0 }
    ];
    localStorage.setItem('POKEDEX', JSON.stringify(testPokedex));
    const pokedex = getPokedex();
    expect.deepEqual(pokedex, testPokedex);
});

test('encounterPokemon will increase encountered pokemon by one', (expect) => {
    localStorage.removeItem('POKEDEX');
    const testPokedex = [
        { 'id':1, 'pokemon':'bulbasaur', encountered: 1, caught: 0 },
        { 'id':2, 'pokemon':'ivysaur', encountered: 0, caught: 0 }
    ];
    localStorage.setItem('POKEDEX', JSON.stringify(testPokedex));
    encounterPokemon(1);
    const pokedex = getPokedex();
    const expected = [
        { 'id':1, 'pokemon':'bulbasaur', encountered: 2, caught: 0 },
        { 'id':2, 'pokemon':'ivysaur', encountered: 0, caught: 0 }
    ];
    expect.deepEqual(pokedex, expected);
});

test('encounterPokemon will add new pokemon if not in pokedex', (expect) => {
    localStorage.removeItem('POKEDEX');
    const testPokedex = [];
    localStorage.setItem('POKEDEX', JSON.stringify(testPokedex));
    encounterPokemon(1);
    const pokedex = getPokedex();
    const expected = [
        { 'id':1, encountered: 1, caught: 0 }
    ];
    expect.deepEqual(pokedex, expected);
});

test('caughtPokemon will increase captured pokemon by one', (expect) => {
    localStorage.removeItem('POKEDEX');
    const testPokedex = [
        { 'id':1, 'pokemon':'bulbasaur', encountered: 0, caught: 1 },
        { 'id':2, 'pokemon':'ivysaur', encountered: 0, caught: 0 }
    ];
    localStorage.setItem('POKEDEX', JSON.stringify(testPokedex));
    caughtPokemon(1);
    const pokedex = getPokedex();
    const expected = [
        { 'id':1, 'pokemon':'bulbasaur', encountered: 0, caught: 2 },
        { 'id':2, 'pokemon':'ivysaur', encountered: 0, caught: 0 }
    ];
    expect.deepEqual(pokedex, expected);
});