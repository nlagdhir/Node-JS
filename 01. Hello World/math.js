// 1 way of creating functions and exports

const add = (a, b) => {
    return a + b;
}

const sub = (a,b) => {
    return a - b;
}

module.exports = {add, sub};


// 2nd way of creating functions and exports with ANONYMOUS functions


// exports.add = (a, b) => a + b;
// exports.sub = (a, b) => a - b;

