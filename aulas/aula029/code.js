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
numbers[numbers.length] = 10; /* Ou */
numbers.push(11, 12, 13)
// Na primeira posição
Array.prototype.insertFirstPosition = function (value) {
    for (let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1]
    }
    this[0] = value
}
numbers.insertFirstPosition(-1); /*Ou*/
numbers.unshift(-4, -3, -2)



// Removendo elementos

// Na ultima posição 
numbers.pop()
// Na primeira posição
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i + 1]
} // Mas deixa o valor undefined não última posição
Array.prototype.reIndex = function (myArray) {
    const newArray = []
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] !== undefined) {
            newArray.push(myArray[i])
        }
    }
    return newArray
}
Array.prototype.removeFirstPosition = function () {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = numbers[i + 1]
    }
    return this.reIndex(this)
}
numbers = numbers.removeFirstPosition() // Remove o primeiro elemento usando as functions
numbers.shift() // Essa função faz tudo isso apresentado acima



// Adicionando/removendo elementos de uma posição específica
numbers.splice(5,3) // Remove 3 elementos apartir do índice 5
numbers.splice(4, 0, 4, 5, 6) // Adiciona 4,5 e 6 apartir do índice 4
// Syntax do método splice:
// 1 argumento - Apartir de que índice queremos remover ou adicionar elementos
// 2 argumento - Quantidade de elementos que queremos remover (se quisermos)
// Apartir do 3 argumento - Valores que queremos inserir



// Arrays bidimensionais ou multidimensionais
let avaregeTemp1 = [] // Matriz
avaregeTemp1[0] = [72, 75, 79, 81, 81] // Linha 0
avaregeTemp1[1] = [81, 79, 75, 75, 73, 73] // Linha 1
// Cada linha é um dia e as colunas são as temp da cada hora dos dias (só um exemplo de aplicação)


