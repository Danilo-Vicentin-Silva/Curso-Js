// Construtores são, disfarçadamnete, functions que constroem objects apartir da digitação de seus parâmetros
// Muito útil para construir perfis não-fixos

function Car (nome, modelo, ano, lugares, preço) {
    this.nome = nome; this.modelo = modelo; this.ano = ano; this.lugares = lugares; this.preço = preço
} // Letras maiúsculas para definir um constructor

var Fusion = new Car('Fusion', 'Balck', 2016, '5 lugares', 10000);
console.log(Fusion.preço);

// Ou ainda é possível abreviar a declaração

var house = new Object
house.price = 10000
console.log(house)

