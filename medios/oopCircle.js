/* This program has a constructor that takes new circles and
has methods that return the circumference and area
Original problem here: https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ
*/

function Circle(radius = 1){
    this.getArea = () =>{
        console.log(Math.PI*Math.pow(radius, 2))
    }

    this.getPerimeter = () =>{
        console.log(2*Math.PI*radius)
    }
}

let circy1 = new Circle(11)
circy1.getArea()

let circy2 = new Circle(4.44)
circy2.getPerimeter()