/* Tbhis functions takes a string and returns another function that
outputs the string
Original problem here: https://edabit.com/challenge/hzxN9bAebBPNqdQto
*/
const redundant = (str) =>{
    return second = () => {return str}
}

const f1 = redundant('apple')
console.log(f1())
const f2 = redundant('pear')
console.log(f2())
const f3 = redundant('pineapple')
console.log(f3())