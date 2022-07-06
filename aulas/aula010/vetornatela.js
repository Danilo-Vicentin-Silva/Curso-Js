let valores = [1, 2, 3, 4, 5]

/*formas burras de fazer
console.log(valores)

console.log(valores[0])
console.log(valores[1])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

forma esperta
for(pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}