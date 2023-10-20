//This program does simpe bitwise comparations. Example from: https://edabit.com/challenge/vvuAkYEAArrZvmp6X
const bitwiseAND = (a,b) =>{
    return a&b
}

const bitwiseOR = function (a,b){
    return a|b
}

const bitwiseXOR = (a,b) => a^b

console.log(bitwiseAND(7, 12))

console.log(bitwiseOR(7, 12))

console.log(bitwiseXOR(7, 12))