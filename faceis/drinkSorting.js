/*This program takes objects and sort them in ascending order
based on price.
Original problem here: https://edabit.com/challenge/nuXdWHAoHv9y38sn7
*/
function sortByPrice(drinks){
    let prices = []
    for(let x in drinks){
        prices.push(drinks[x].price)
    }
    return prices.sort()
}

drinks = [{name: 'lemonade', price: 50}, {name: 'lime', price: 10},
{name: 'grape', price: 20}]

console.log(sortByPrice(drinks))