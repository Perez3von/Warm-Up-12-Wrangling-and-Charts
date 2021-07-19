// IMPORT MODULES under test here:
import { mungeCaptured, mungeNames } from '../data-utils.js';

const test = QUnit.test;
const pokeScore = [
    {
        captured: 4,
        id: 5,
    },
    {
        captured: 2,
        id: 10,
    },
    {
        captured: 0,
        id: 21,
    },
];

test('test mungeCaptured', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = [4, 2, 0];

    //Act
    // Call the function you're testing and set the result to a const
    const actual = mungeCaptured(pokeScore);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('test mungeNames', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = ['charmander', 'squirtle', 'pidgey'];

    //Act
    // Call the function you're testing and set the result to a const
    const actual = mungeNames(pokeScore);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
