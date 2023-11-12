/*
 This program takes two parameters and checks if the first value
 can be the same as the second based on a dice roll.
 Original problem here: https://edabit.com/challenge/NHfYRHg2tDtcZyykB
 */

const possibleBonus = (a, b) =>{
    for (let index = 1; index <= 6; index++) {
        if(a+index == b){
            return true
        }
    }
    return false
}

console.log(possibleBonus(3, 7))
console.log(possibleBonus(1, 9))
console.log(possibleBonus(5, 3))