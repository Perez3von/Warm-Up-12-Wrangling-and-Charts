# Warm Up 12: Wrangling and Charts

## Setup

1. Launch the test index.html in LiveServer -- this warmup has your tests written for you
1. Write your function(s) in the supplied `data/data-utils.js` file.
1. Develop against those tests until they pass.

## Challenge

As developers, most of what we do is manage lists of things, turning them from one shape into another all the live long day.

For example, lets say we have this data:

```js
[
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
```

However, `chart.js` for whatever reason likes data to be in these form:

```js
[3, 5, 6, 7, 2][('charmander', 'squirtle', 'pidgey')];
```

This transformation is called 'munging' or 'data wrangling'. And it's fun!

TDD two functions `mungeCaptured` and `mungeNames`. Both functions take in data as shown above. `mungeCaptured` returns an array of numbers corresponding to the values of the `captured` properties. `mungeNames` returns an array of strings corresponding to the values of the `name` properties. NOTE: names are not included in this data -- you'll need to get the corresponding name from the pokemon data provided!
