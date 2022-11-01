//Recursividade fazem parte do paradgma de programação funcional, como tal, funções recursivas
//chamam a si mesmas e só param quando 'resolvem' um grande problema, que foi divido em várias
//partes pela mesma

function entenderRecursao(euEntendoRecursao) {
	const resposta = confirm("Agora você entende a Recursividade?")
	if (resposta === true) {
		return true
	}
	entenderRecursao(resposta)
}
function recursaoInfinita(numero) {
    numero++
    recursaoInfinita()
}
//


function fatorialIterativo(number) {
	if (number < 0) return undefined
	let total = 1
	for (let n = number; n > 1; n--) total = total * n
	return total
}
function fatorialRecursivo(numero) {
    if (numero === 1 || numero === 0) return 1
    return numero * fatorialRecursivo(numero - 1)
}
//

function fibonacciIterativo(numero) {    
    if (numero < 1) return 0
    if (numero <= 2) return 1
    let numero0 = 0
    let numero1 = 1
    let numero2 = numero
    for (let i = 2; i <= numero; i++) {
        numero2 = numero0 + numero1
        numero0 = numero1
        numero1 = numero2
    }
    return numero2
}
function fibonacciRecursivo(numero) {
    if (numero < 1) return 0
    if (numero <= 2) return 1
    return fibonacciRecursivo(n - 1) + fibonacciRecursivo(numero - 2)

}
function fibonacciMemoizado(numero) {
    const memoria = [0, 1]   
    const fibonacci = (numero) => {
        if (memoria[numero] != null) return memoria[numero]
        return memoria[numero] = fibonacci(numero - 1, memoria) + fibonacci(numero - 2, memoria)
    }
    return fibonacci
}