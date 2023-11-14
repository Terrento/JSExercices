/* This program creates a function that takes 
an integer n and returns the nth tetrahedral number.
Original problem here: https://edabit.com/challenge/zRCyxKBBmr4F2x4Bv
*/

const tetra = n =>{
    let number = (n*((n+1)*(n+2)))/6
    return number
}

console.log(tetra(2))
console.log(tetra(5))
console.log(tetra(6))