/*This program takes step as "houses of matchsticks" and returns how many matchsticks
will be used assuming it takes six per house.
Original problem here: https://edabit.com/challenge/tYHkTdFrEmWfxpPKF
*/
const matchHouses = (step) =>{
    if (step == 0){
        return 0
    }

    const answer = (6*step) - (step-1)
    return answer
}

console.log(matchHouses(87))