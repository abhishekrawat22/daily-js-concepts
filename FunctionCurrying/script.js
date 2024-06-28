let multiply = function(x, y) {
  console.log(x * y)
}

//  Using bind method
let multiplyOne = multiply.bind(this, 2) // here 2 is x
multiplyOne(3)
// or
// let multiplyOne = multiply.bind(this, )
// multiplyOne(2,3) output: 6(if any of the args is missing including this then output will be NaN)
// let multiplyOne = multiply.bind(this, 2, 3)
// multiplyOne(5) output: 6

let multiplyTwo = multiply.bind(this, 3)
multiplyTwo(4)

// using closure
let multi = function(x) {
  return function(y) {
    console.log(x*y)
  }
}

let multiOne = multi(3)
multiOne(4)