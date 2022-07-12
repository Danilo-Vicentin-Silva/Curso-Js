// Criando uma Array

// 1-
const avaregeTemp = []
avaregeTemp[0] = 31.9
avaregeTemp[1] = 30.3
avaregeTemp[2] = 29.5
avaregeTemp[3] = 31.2
avaregeTemp[4] = 30.5

// 2-
let daysOfWeek = new Array() // inicializando Array
daysOfWeek = new Array(7) // Especificando seu tamanho, '7 empyt slots' é retornado pelo console
daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednestday', 'Thursday', 'Friday', 'Saturday') // Já dando os valores de uma Array

// 3-
let daysOfWeek2 = []
// Ou
let daysOfWeek3 = ['Sunday', 'Monday', 'Tuesday', 'Wednestday', 'Thursday', 'Friday', 'Saturday'] // Console retorna 7, pois é o tamanho da Array

// Logando/mostrando os valores
// for (let i = 0; i < daysOfWeek.length; i++) {
//     console.log(daysOfWeek[i])
// }
// Ou

// Fazendo iterações com Arrays

const fibonacci = []
fibonacci[1] = 1
fibonacci[2] = 1
for (let i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}
for (let i = 1; i < fibonacci.length; i++) {} // Console retorna a sequência de Fibonacci 

// Acrescentando elementos

// Na última posição
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers[numbers.length] = 10; /* Ou */ numbers.push(11, 12, 13)
// Na primeira posição
Array.prototype.insertFirstPosition = function (value) {
    for (let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1]
    }
    this[0] = value
}
numbers.insertFirstPosition(-1); /*Ou*/ numbers.unshift(-4, -3, -2)

// Removendo elementos

// Na primeira posição
numbers.pop()
// Na última posição
