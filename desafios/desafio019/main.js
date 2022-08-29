let idade1 = prompt("Digite idade 1: ")
let idade2 = prompt("Digite idade 2: ")
let idade3 = prompt("Digite idade 3: ")
let idade4 = prompt("Digite idade 4: ")
let idade5 = prompt("Digite idade 5: ")
let idade6 = prompt("Digite idade 6: ")
let idade7 = prompt("Digite idade 7: ")
let idade8 = prompt("Digite idade 8: ")
let idade9 = prompt("Digite idade 9: ")
let idade10 = prompt("Digite idade 10: ")
const idades = [
	idade1,
	idade2,
	idade3,
	idade4,
	idade5,
	idade6,
	idade7,
	idade8,
	idade9,
	idade10,
]

for (let i = 1; idades[i] <= 18; i++) {
    console.log(`${i} são menores de idade`)
}

for (let i = 1; idades[i] >= 18; i++) {
    console.log(`${i} são maiores de idade`)
}
