// EM JAVASCRIPT NÃO EXISTEM CLASSES (são uma 'syntax sugar')
// Em Js, existe uma espécie de 'templante de objetos' que emita o comportamento de classes de outras linguagens como C#
// De certa forma, as class diminuem a ultilidade da prototype chain

class Funcionários {
    constructor(nome, profissão, salário, idade){
        this.nome = nome; this.idade = idade;
        this.profissão = profissão; this.salário = salário;
    }
};

var danilo = new Funcionários('Danilo', 'programador', 1500, 16);

// ultilizando uma prática não-recomendada, podemos usar os métodos Getters e Setter para alterar ou pegar valores e propriedades de obj de classes
////////////////////////////////

// Podemos ainda extender classes ulitlizando a palavra-chave 'extends' como se fosse setar um prototype para uma classe herdar outras característica

class Carro {
    constructor(nome, modelo, ano){
        this.nome = nome; this.modelo = modelo; this.ano = ano;
    }
};

class Motor extends Carro {
    constructor(nome, motor, pneus, tração){
        super(nome)
        this.motor = motor; this.pneus = pneus; this.tração = tração;
        motor = 'v6'
    }
};

let mustang = new Carro('Mustang', 'gt40', 2012);
console.log(mustang.nome)