// This é usado como palavra referencial em JavaScript, apareceu nas novas versões do EcmanScript
// Ele ajuda a deixar o código mais limpo e organizado quando não precisaos 'repetir' referencias no código
// Normalmente usado em classes e functions constructors para

function costructorPerson(name, age, habilits) {
    this.name = name
    this.age = age
    this.habilits = habilits

    console.log(`Olá, meu nome é ${name}, tenho ${age} anos e trabalho em ${habilits}`)
}

costructorPerson('Danilo', 16, 'programação');
