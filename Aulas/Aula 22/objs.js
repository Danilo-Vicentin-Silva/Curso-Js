// Tudo é objeto em JavaScript, o que nos leva a afirmação que Js é uma linguagem orientada a objetos
// Sabendo disso, podemos fazer diversas coisas ulitilizando métodos com objs
// Mesmo assim, exite uma maneira certa de se declarar objetos específicos:

let person = {name: 'Danilo', age: 16, profi: 'programador', speake:  speake = () => console.log(person)};
let obj2 = {carro: 'Fusion', salario: 1000};

person.speake()

// Métodos com objetos com
console.log(person.name);
person.novaPropriedade = 'novaPropriedade';
console.log(person);

//Unindo e copiando objetos
var newObject = Object.assign(person,obj2)
console.log(newObject);

var copyObject = Object.assign({}, person);
console.log(copyObject);

//pegando propriedas ou valores
var keysObject = Object.keys(obj2); //ou Object.values
console.log(keysObject);