/*This program takes a list and returns the sum of all of it's components
Example from: https://edabit.com/challenge/JDkyQJqNfJNhvjmRW
*/
function sumOfNumbers(list){
    let result = 0

    for (let i = 0; i < list.length; i++){
        result += list[i]
    }
    console.log(result + ' is the sum')
}

sumOfNumbers([10, 5, 3])