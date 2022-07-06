// Promises são usadas em operações Assícronas no Js afim de executar processos que geralmente
// iriam  travar uma linha de um código sícrono


// Declaração padrão da Promise => Vale lembrar que é um objeto, inclusive com prototype especial

// Declaração Promise: 
const soma = new Promise((resolve, reject) => {
    let s = 1 + 2

    if (s == 3) {
        resolve('Sucess')
    } else {
        reject('Failed')
    }
});


// Execução Promises: 
soma
    .then((result) => console.log(result))
    .catch((err) => console.log(`Have a error in promise soma, ${err}`));

console.log('After Promise')
//---------------------------------------------------------------------------------------------
// Tem como fazer Promises resolvidas para 'testes'
/*
Promise.resolve('Sucess').then((value) => console.log(value))
Promise.reject('error').then((motivoError) => console.log(motivoError))
*/
//-------------------------------------------------------------------------
// Temos como armazenar os resultados das Promises dentro de uma array com isso: 
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
    let = 'Alex');

Promise.all([promise1, promise2]).then((values) => {
    console.log(values)
});
//Sem ter que esperar, podemos mostrar apenas a primeira Promise que terminar: 
const promise3 = new Promise((resolve, reject) => {
    setTimeout((resolve) => {
        'Este valor não irá logar'
    }, 2500);
});
const promise4 = new Promise((resolve, reject) => {
    setTimeout((resolve) => {
        'Este valor irá logar (é mais rápido)'
    }, 1000);
});

Promise.race([promise3, promise4]).then(function mostarValores(values) {
    console.log(`${values}`)
});
