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
numbers.splice(5, 3) // Remove 3 elementos apartir do índice 5
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
// Iterando com elas, podemos representar essa 'matriz'
function printMatriz(myMatriz) {
    for (let i = 0; i < myMatriz.length; i++) {
        for (let j = 0; j < myMatriz[i].length; j++) {
            console.log(myMatriz[i][j])
        }
    }
}
// Ou ultilizar o console.table, que tem uma representação mais elegante (e mesmo comportamento que a function printMatriz)

// Arrays multidimensionais
const matriz3x3x3 = []
for (let i = 0; i < 3; i++) {
    matriz3x3x3[i] = []
    for (let j = 0; j < 3; j++) {
        matriz3x3x3[i][j] = []
        for (let z = 0; z < 3; z++) {
            matriz3x3x3[i][j][z] = i + j + z
        }
    }
}
// A representação seria em forma de cubo:
// for (let i = 0; i < matriz3x3x3.length; i++) {
//     for (let j = 0; j < matriz3x3x3[i].length; j++) {
//         for (let z = 0; z < matriz3x3x3[i][j].length; z++) {
//             console.log(matriz3x3x3[i][j][z])
//         }
//     }    
// }



// Outros métodos de Arrays em JavaScript

// Juntando Arrays
// Concat
const zero = 0
const positiveNumbers = [1, 2, 3]
const negativeNumbers = [-3, -2, -1]
let numbers1 = negativeNumbers.concat(zero, positiveNumbers)

// Iterando Arrays
const numeroPar = x => x % 2 === 0 // Um laço também é usual na iteração de Arrays

// Every => itera pela Array até ser devolvido 'false', usando a função passada como parâmetro
numbers1.every(numeroPar)
// Some => mesma coisa que Every, só que o oposto 'true'
numbers1.some(numeroPar)
// Verificação geral usando forEach
numbers1.forEach(x => x % 2 === 0)

// Map e Filter
const myMap = numbers1.map(numeroPar) // Retorna um Array com os Bollemans resultado
const filterNumbers = numbers1.filter(numeroPar) // Retorna os elemento que testaram 'true'

// Reduce
let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers3.reduce((previus, current) => previus + current) // Reduz a Array à um elemento, usando uma function passada como parâmetro
// previousValue > currentValue, Index e array são os parãmetros (só os 2 primeiros são obrigatórios)

// Join => converte TODOS os elementos em strings, se não for undefined ou null
let myStrings = ['Oi', 1, '', 'Hello']
let newString = myStrings.join() // Parãmetro para especificar o separador entre os elementos string

// Sort => Organiza Array com function ou em ordem Unicode
let listaChamada = ['Danilo', 'Alex', 'Carter', 'Barry', 1, 20, 1010]
let novaLista = listaChamada.sort()

// toString => retorna uma nova array em forma de string
let myArray1 = [1, 'Olá', false, {}, 'teste']
let newMyArray = myArray1.toString() // Armazena '1, Olá, false, {}, teste' em String

// Slice => devolve um novo Array apartir do indice especificado
let array1 = [0, 1, 2, 3, 4, 5]
let copiaArray = array1.slice(0, 4) // Copia a array1 do indice[0]até o[4]

// lastIndexOf => procura elementos com críterio de pesquisa (de traz pra frente)
let array2 = [0, 1, 2, 3, 4]
array2.lastIndexOf(3)

// Reverse => inverte um array, fazendo o último item se tornar o primeiro e por aí vai
let array3 = [5, 4, 3, 2, 1, 0]
array3.reverse()

// Iterando com o laço for...of => itera sob todos os elementos da Array
for (const n of numbers) {
    n % 2 === 0 ? 'even' : 'odd'
} // Retorna even para valores pares, e odd para impares

// Iterator
let iterator = numbers[Symbol.iterator]()
for (const n of iterator) {
    newN = []
} // Obtém todos os valores do array percorrendo em um laço, aqui ele armazena em newN
// Por baixo dos panos, isso ocorre:
iterator.next().value
iterator.next().value
// Iterator executará next até receber 'undefined'

// Entries => devolve iterator contendo o par chave-valor
let aEntries = numbers.entries()
for (const n of aEntries) {
    //console.log(n) // Exibe no esquema [chave, valor]
} // Por baixo dos panos:
//console.log(aEntries.next().value) // Exibe [0, -1] (indice-valor)
//console.log(aEntries.next().value) // Exibe [1, 1] (indice-valor)
// Executa até receber undefined

// Keys => devolve chaves obtidas do iterator
const aKeys = numbers.keys() // Associa iterator Keys à constante
for (const n of aKeys) {
    //console.log(n) // Exibe as chaves em um laço. Executa até 'done' resutar e true
}
// Mesmo comportamento de baixo dos panos

// Values => devolve os valores obtidas pelo iterator
const aValues = numbers.values()
for (const n of aValues) {
    //console.log(n) // Exibe apenas os valores
}
// Mesmo comportamento de baixo dos panos, também tem 'done? true : false'

// From => cria outro Array apartir de uma já existente
let numbers2 = Array.from(numbers) // Criando outro sem condição
let evens = Array.from(numbers, x => (x % 2 == 0)) // Criando outra com condição 

// Of => cria outra Array apartir dos argumentos
let numbers4 = Array.of(1, 2, 3) // Cria a Array [1,2,3]
let numbersCopy = Array.of(...numbers4) // Copia um array apartir de operador de espalhamento (...)

// Fill => preenche Array com um valor em posições específicas
let numbersCopy0 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbersCopy0.fill(0, 2, 5) // Preenche de 0 do index 2 até o 5
let ones = Array(6).fill(1) // Cria uma nova Array apenas com o valor 1 (lenght = 6)

// CopyWithin => copia sequência de valores para posição início
let copyArray = [1, 2, 3, 4, 5, 6]
copyArray.copyWithin(0, 3) // Resulta em [4,5,6,4,5,6]
copyArray.copyWithin(1, 3, 4) // Copia o 4,5,6 e cola apartir do index 1


// Ordenação e pesquisa
// Para algoritmos de organização e pesquisa, é importante saber usar bem os métodos estudados acima 
// Com eles podemos criar um algoritimo de ordenação bem eficiente ultilizando Arrays

// Ordenando elementos

let numbers5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
numbers5.reverse() // Bagunçando a ordem (revertendo-a)
numbers5.sort((a, b) => a - b) // Para organizar em ordem crescente
// Por baixo dos panos, esse sort funciona assim:
function compare(a, b) {
    if (a < b) {
        return -1
    }
    if (a > b) {
        return 1
    }
    return 0
}
numbers5.sort(compare) //  ou numbers5.sort((a,b) => a -b)

// Ordenação personalizada
// Por exemplo, organizando um array de objetos Person pela idade

const friends = [{
        name: 'John',
        age: 30
    },
    {
        name: 'Ana',
        age: 20
    },
    {
        name: 'Chris',
        age: 25
    }
]

function comparePerson(a, b) {
    if (a.age < b.age) {
        return -1
    }
    if (a.age > b.age) {
        return 1
    }
    return 0 // Se a == b
}

//console.log(friends.sort(comparePerson)) // Organiza os objetos em ordem cresente de idade

// Ordenando Strings
let names = ['Ana', 'ana', 'john', 'John']
names.sort((a, b) => a.localeCompare(b)) // Retorna ["ana","Ana","john","john"]
const names2 = ['Maève', 'Maeve']
names2.sort((a, b) => a.localeCompare(b)) // Também organiza com caracteres com acento

// Pesquisa => a seguir alguns métodos para algoritimos de pesquisa
let numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] // Array que será usada
// 1-

numbers.indexOf(10) // Retorna o índice do 1º que achar o valor 10
numbers.lastIndexOf(100) // Retorna -1 pois o valor 100 não existe no array Numbers

// 2-

function multiplo13(element, index, array) {
    return (element % 13 == 0)
}
numbers6.find(multiplo13) // Retorna o 1º valor que corresponde o critério da pesquisa
numbers6.findIndex(multiplo13) // Retorna o 1º indice que corresponde ao critério da pesquis
// Se nada for encontrado, ambos retornam undefined

// 3- 

numbers6.includes(15) // Devolve true
numbers6.includes(20) // Devolve false
let numbers7 = [7, 6, 5, 4, 3, 2, 1]
numbers7.includes(4, 5) // Devolve false, pois não existe o nº4 após o index 5

// 4- Existem muitos outros algoritmos possíveis para pesquisa...


// Classe TypedArray

const int16 = Int16Array(); // Só considerações finais, anotação mental