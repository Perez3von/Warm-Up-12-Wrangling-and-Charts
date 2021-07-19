
export function mungeCaptured(pokemonArray) {
    // YOUR CODE HERE
    let captured = [];
    for (let poke of pokemonArray){

        captured.push(poke.captured);
    }
    return captured;
}

export function mungeNames(pokemonArray) {
    // YOUR CODE HERE

    let ids = extractIds(pokemonArray);
    let myPokemon = [];
    for (let id of ids){

        myPokemon.push(searchPokemon(id));
        
    }
}

export function extractIds(pokemonArray){

    let myIDs = [];

    for (let i of pokemonArray){
        myIDs.push(i.id);
    }
}

export function searchPokemon(id){

    for (let poke of pokemon){
        if (poke.id === id){
            return poke['pokemon'];
        }
    }

}
