// Arquivos JSON são strings em formato de objetos ou arrays que guardam informações de algo
// Os arquivos.json foram criados para transportarem informações entre servidor-client
// Tem compatibilidade com outras linguagens de programação, por isso é tão útil
// Todas as propriedades/valores devem estar entre aspas duplas ""
// O JavaScript entende JSON como uma String

let json = {
    "nome":"Danilo",
    "idade": "16",
    "formacao":"programacao"
};

//Isso não é um obj, é JSON ^

// Podemos converter esse objeto para formato json
let json2 = JSON.stringify(json);

// Ou converter uma string JSON para um objeto
// Usando o método require para peagr um Json no servidor local/pc
let json3 = require('./json3.json')



//log de testes
console.log(json3)