/* This program takes an object and converts it to an array
of keys and values
Original problem here: https://edabit.com/challenge/pPNAs5PvB3WvnDwDM
*/

const toArray = obj =>{
    return Object.entries(obj)
}

console.log(toArray({shrimp: 15, tots: 12}))
console.log(toArray({ a: 1, b: 2 }))
console.log({})