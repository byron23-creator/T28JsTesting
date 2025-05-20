/* El mÃ©todo .reduce()

Otro mÃ©todo de iteraciÃ³n ampliamente utilizado es 
.reduce(). El mÃ©todo .reduce() devuelve un Ãºnico valor
tras iterar por los elementos de un array.
*/
const numbers = [1, 2, 4, 10];

let summedNums = numbers.reduce((accumulator, currentValue) => { // Cambiado a 'let' para reasignar mÃ¡s tarde
  return accumulator + currentValue
})

console.log(summedNums) // Output: 17

/*AquÃ­ estan los valores del acumulador y currentValue
a medida que iteramos a travÃ©s de la matriz numbers

IteraciÃ³n    accumulator    currentValue  Valor de retorno
Primera       1              2              3
Segunda       3              4              7
Tercera       7             10             17 

Ahora repasemos el uso de .reduce() del ejemplo anterior:

* numbers es una matriz que contiene nÃºmeros.
* summedNums es una variable que almacena el valor
  devuelto al invocar a .reduce() en numbers.
* numbers.reduce() al al mÃ©todo .reduce() en la matriz
  numbers y toma una funciÃ³n de devoluciÃ³n de llamada
  como argumento.
* La funciÃ³n de devoluciÃ³n de llamada tiene dos parÃ¡metros,
  accumulator y currentValue.  El valor de accumulator
  comienza como el valor del primer elemento del array, y
  el de currenteValue comienza como el del segundo 
  elemento.  Para ver el valor del cambio de 
  accumulator y currentValue.
* A medida que .reduce() se itera a travÃ©s de la matriz, el
  valor de retorno de la funciÃ³n de devoluciÃ³n de llamada
  se convierte en el valor del accumulator para la siguiente
  iteraciÃ³n y currentValue toma el valor del elemento
  actual en el proceso de bucle.
   
El mÃ©todo .reduce() tambiÃ©n puede tomar un segundo parÃ¡metro
opcional para establecer un valor inicial accumulator
(recuerde, el primer argumento es la funciÃ³n de devoluciÃ³n
de llamada).  Si no se proporciona un valor inicial,
el primer elemento de la matriz se convierte en el  valor
inicial de accumulator y el segundo elemento se convierte en
el valor inicial de currentValue.

Por ejemplo:    */
// numbers = [1, 2, 4, 10]; // No es necesario redeclarar, ya estÃ¡ declarado arriba

summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()

console.log(summedNums); // Output: 117

/*A continuaciÃ³n se muestra un grÃ¡fico actualizado
que tiene en cuenta el segundo argumento de 100

IteraciÃ³n    accumulator    currentValue  Valor de retorno
Primera       100             1            101
Segunda       101             2            103
Tercera       103             4            107 
Cuarta        107            10            117*/


/*Ejercicio:
Tarea 1:
Pratiquemos la llamada .reduce() y el uso de console.log()
para verificar los valores a medida que .reduce()
itera a travÃ©s de la matriz.

Para comenzar, declara una nueva variable llamada newSum
con la palabra clave const. Asignale a newSum el valor
de la llamada .reduce() a newNumbers. No necesitas
proporcionar agumentos a  .reduce() todavÃ­a.

TambiÃ©n verÃ¡s un TypeError:  undefined is not a function
pero lo solucionaremos despuÃ©s de agregar nuestra
funciÃ³n de devoluciÃ³n de llamada en el siguiente paso.
*/
const newNumbers = [1, 3, 5, 7];

/*
Tarea 2:
Proporciona a .reduce() un argumento de una 
funciÃ³n de devoluciÃ³n de llamada.  La funciÃ³n de 
devoluciÃ³n de llamada tiene dos parÃ¡metros.  El 
primero es accumulator y el segundo es currentCalue.
Utiliza una expesiÃ³n de funciÃ³n o una funciÃ³n de
flecha. 

Tarea 3:
Para comprobar el valor que se utiliza a medida que iteramos
a travÃ©s de la matriz, agrega tres declaraciones
al cuerpo de la funciÃ³n de devoluciÃ³n de llamada:

*console.log('The value of accumulator: ', accumulator);
*console.log('The value of currentValue: ', currentValue);
*Una declaraciÃ³n de retorno que devuelve la suma de accumulator y
 currentValue.

 Tarea 4:
 Registre el valor de newSum en la consola para ver el
 valor de retorno de llamar .reduce() a newNumbers.

 Tarea 5:
 Ya que tenemos este cÃ³digo configurado, veamos quÃ©
 sucede si se agrega un segundo argumento a .reduce().
 Este segundo argumento actÃºa como valor inicial
 para accumulator.
 AÃ±ade un segundo argumento de 10 a .reduce().
*/

// Tarea 1, 2, 3, 4 y 5
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10); // Tarea 5: Segundo argumento de 10

console.log(newSum);