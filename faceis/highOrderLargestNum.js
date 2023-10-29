/*This functions takes two others and compare their returns for which is larger
Original problem here: https://edabit.com/challenge/o7TwicAHWuMkjbDqQ
*/
let whichIsLarger = (f,g) =>{
    if (f.toString() == g.toString()) return 'neither'

    return (f > g) ? 'f' : 'g'
}

console.log(whichIsLarger(() => 5, () => 5))