/* This program receives an array of booleans and outputs how many
trues it found.
Original problem here: https://edabit.com/challenge/GLbuMfTtDWwDv2F73
*/

const countTrue = list =>{
    let amount = 0
    for (let i = 0; i < list.length; i++){
        list[i] ? amount++ : amount
    }
    return amount
}

console.log(countTrue([true, false, false, true, false]))
console.log(countTrue([false, false, false, false]))
console.log(countTrue([]))

//Another way of doing it
const list2 = [true, false, false, true, false]

console.log(list2.filter(Boolean).length)