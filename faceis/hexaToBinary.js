/*This function takes an 8-bit hexadecimal number and converts to binary.
Original problem here: https://edabit.com/challenge/mHrFjP4K5BfAKEugN
 */
function toBinary(number){
    let decimal = parseInt(number, 10)
    return decimal.toString(2)
}

console.log(toBinary(0xff))