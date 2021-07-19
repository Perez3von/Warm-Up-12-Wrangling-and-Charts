// import functions and grab DOM elements
import rawPokeData from './pokemon.js';
import { capturePokemon, encounterPokemon } from './local-storage-utils.js';

const button = document.querySelector('#catch');
const radio1 = document.querySelector('#poke-1');
const radio2 = document.querySelector('#poke-2');
const radio3 = document.querySelector('#poke-3');
const img1 = document.querySelector('#poke-img-1');
const img2 = document.querySelector('#poke-img-2');
const img3 = document.querySelector('#poke-img-3');

renderThreePokemon();

button.addEventListener('click', () => {
    // On clicking "capture" button
    const selectedRadio = document.querySelector(':checked');
    const selectedPokemonId = selectedRadio.value;

    capturePokemon(selectedPokemonId);
    // - call `renderThreePokemon`
    renderThreePokemon();
});

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * rawPokeData.length);

    const randomPokemon = rawPokeData[randomIndex];

    return randomPokemon;
}

function renderThreePokemon() {
    //   - Generate three new random pokemon
    let poke1 = getRandomPokemon();
    let poke2 = getRandomPokemon();
    let poke3 = getRandomPokemon();

    // we need to check to see if any of our random pokemon are the same
    //   - Q: How do we prevent repeats? (A: use a `while` loop)
    while (
        poke1.id === poke2.id ||
        poke1.id === poke3.id ||
        poke2.id === poke3.id
    ) {
        // generate three new pokemon
        poke1 = getRandomPokemon();
        poke2 = getRandomPokemon();
        poke3 = getRandomPokemon();
    }

    // - Look at these new three pokemon and increment their `encountered` properties
    encounterPokemon(poke1.id);
    encounterPokemon(poke2.id);
    encounterPokemon(poke3.id);

    // Rerender the pokemon images
    img1.src = poke1.url_image;
    img2.src = poke2.url_image;
    img3.src = poke3.url_image;
    // add values to the radio buttons
    radio1.value = poke1.id;
    radio2.value = poke2.id;
    radio3.value = poke3.id;
}
