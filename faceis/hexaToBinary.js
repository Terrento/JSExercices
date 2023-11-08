function toBinary(number){
    let decimal = parseInt(number, 10)
    return decimal.toString(2)
}

console.log(toBinary(0xff))