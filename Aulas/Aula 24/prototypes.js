// Para o JavaScript conseguir se orientar ao meio de tantos objetos, ele constroí uma cadeia de protótipos de Objetos para
// Ou seja, todo objeto que criamos, por padrão, tem um 'objeto protótipo/prototype' para ser disponível todos os métodos com obj
// Podemos manipular o prototype dos obejtos, assim setando-os afim que ele possa herdar características e métodos de seu prototype

var carro = {nome: 'Celta', ano: 2012, fabricante: 'Honda', andar: andar = () => console.log('Andou!')};
var carro2 = {nome: 'Fusion', ano: 2016, fabricante: 'Ford'};

//para linkar objetos

Object.setPrototypeOf(carro2, carro);
carro2.andar();

// Prototype Chain
// O Js sempre tem uma cadeia de protótipos, e quando ele não acha um método requisitado, procura na prototype chain até achar
//um objeto que tenha, se não achar, retornará null
// Nas entre-linhas do Js, sempre haverá um objeto prototype 'default' que disponibiliza métodos, mesmo se o obj estiver vazio

