const numbers = [1, 2, 4, 10];

let summedNums = numbers.reduce((accumulator, currentValue) => { // Cambiado a 'let' para reasignar mas tarde
  return accumulator + currentValue
})

console.log(summedNums) // Output: 17

summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()

console.log(summedNums); // Output: 117


const newNumbers = [1, 3, 5, 7];

// Tarea 1, 2, 3, 4 y 5
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10); // Tarea 5: Segundo argumento de 10

console.log(newSum);
