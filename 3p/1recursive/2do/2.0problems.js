//
// SERIES
// recursively
//

// 1. fibonacci
// -> n 
// <- 1,1,2,...,n
//
// call
// fibonacci(5) returns the 5 first numbers of the series

// 2. power
// -> b base
// -> p power
// <- b*b*...b (p times)
//
// call
// power(2,3) returns 8

// 3. factorial
// -> n
// <- 2*3*...*n
//
// call
// factorial(3) returns 6

function fibonacci(n){
/*
    if (n < 2){ return n 
    }
  return fibonacci(n - 1) + fibonacci(n - 2)
*/
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}
function power(b,p) {
  /*
  if(p === 1) {
    return p
  } else b * power(b, p - 1) 
    */
  /* MEJORANDO LA FORMA DE ESCRIBIR MI CODIGO */
  return p === 1 ? b : b * power(b, p - 1) //UN IF MEJORADO
}
function factorial(number) {
   return number === 1 ? number : number * factorial(number-1)
}
// 0 1 1 2 3 5 8 13 21 34 55 89 ...

console.log("fibonacci begins here")
console.log(fibonacci(0))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))


console.log("power begins here")
console.log(power (2,3))

console.log("factorial begins here")
console.log(factorial(7))