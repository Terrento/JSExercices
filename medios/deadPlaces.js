/*
This program makes an array with names based on their preferences
Original problem here: https://www.codewars.com/kata/6646c0c08b97085ca216d346/python
*/

const the_dead = ['Yojne', 'Xenna', 'Verap', 'Ebyam', 'Teseb', 'Ycuag', 'Onets', 'Skcaw', 'Yrovi', 'Tpets', 'Lizuf', 'Girnu']
let seating = ['_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____']


const organizeDead = () =>{
    const earthenware = 'QUTHCRDMZ'
    const waterfall = 'WEVOXING'
    const fireplace = 'JFABKPLY'

    if (!seating.includes('_____')){
        return seating
    }

    the_dead.forEach(name => {
        if (earthenware.includes(name.charAt(0))) {
            organizeEarthen(name)
        } else if (waterfall.includes(name.charAt(0))) {
            organizeWater(name)
        } else if (fireplace.includes(name.charAt(0))) {
            organizeFire(name)
        } else{
            organizeWindow(name)
        }
    });
    return seating
}
const organizeEarthen = (name) =>{
    if (seating[0] == '_____') {
        seating.splice(0, 1, name)
    } else{
        for (let i = 0; i < 7; i++) {
            if (seating[11-i] == '_____') {
                seating.splice(11-i, 1, name)
                break
            } else if (seating[1+i] == '_____'){
                seating.splice(1+i, 1, name)
                break
            }
        }
    }
}
const organizeWater = (name) =>{
    if (seating[3] == '_____') {
        seating.splice(3, 1, name)
    } else{
        for (let i = 0; i < 7; i++) {
            if (seating[6-4-i] == '_____') {
                seating.splice(6-4-i, 1, name)
                break
            } else if (seating[6-2+i] == '_____'){
                seating.splice(6-2+i, 1, name)
                break
            }
        }
    }
}
const organizeFire = (name) =>{
    if (seating[6] == '_____') {
        seating.splice(6, 1, name)
    } else{
        for (let i = 0; i < 7; i++) {
            if (seating[6-i] == '_____') {
                seating.splice(6-i, 1, name)
                break
            } else if (seating[6+i] == '_____'){
                seating.splice(6+i, 1, name)
                break
            }
        }
    }
}
const organizeWindow = (name) =>{
    if (seating[9] == '_____') {
        seating.splice(9, 1, name)
    } else{
        for (let i = 0; i < 7; i++) {
            if (seating[6+4+i] == '_____') {
                seating.splice(6+4-i, 1, name)
                break
            } else if (seating[6+2-i] == '_____'){
                seating.splice(6+2+i, 1, name)
                break
            }
        }
    }
}
console.log(organizeDead())