/*This program checks if the first array can be nested in the second
Original problem here: https://edabit.com/challenge/Gpy2qSFnfhGJnWMMj
*/
const canNest = (list1, list2) =>{
    if (Math.min(...list1) > Math.min(...list2) &&
    Math.max(...list1) < Math.max(...list2)){
        return true
    } else{
        return false
    }
}

console.log(canNest([1, 2, 3, 4], [0, 6]))