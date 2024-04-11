/*
    == ---- igual ----a==b ---- verdadeiro se a for iguaç a b

    === ---- identico ---- a===b ---- veidadeiro se a for identico a b

    !== ----não indeticos ---- a !== b ---- verdadeiro se o A não for identico B

    != --- diferente ---- a!=b ---- verdadeiro se A for diferente de B

    < ---- menor que ---- a < b ---- veridadeiro quando A for menor que B

    <= menor ou igual a ---- a <= b ---- verdadeiro quando a é menor ou iguala b

    > ---- maior que ---- a > b ---- verdadeiro quando a é maior que b

    >= ---- maior ou igual ---- verdadeiro quando a é maior ou igual a b

    */

    const a = 3
    const b = 3

//     console.log(a === b && a <= b)
// // V e V = V

// console.log(a === b && a < b)
// // V e F = F

// console.log(a > b && a === b)
// // F e V = F

// console.log(a > b && a < b)
// F e F = F

//OR

// console.log( a === b || a <= b )
// // V ou V = V

// console.log( a === b || a < b )
// // V ou F = V

// console.log( a > b || a === b )
// // F ou V = V

// console.log( a > b || a < b )
// // F ou F = F


// NOT

console.log( !(a === b)) // False
console.log(a === b) // True

console.log (a < b) // False
console.log (!(a < b)) // True