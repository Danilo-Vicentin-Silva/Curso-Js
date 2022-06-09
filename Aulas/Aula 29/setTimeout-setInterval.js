//setTimouts são usados para definir um tempo 'delay' na execução de um bloco de código
//são funções assícronas que esperam toda a main treadh terminar, ainda tendo um delay a mais
//recebe o tempo em milisegundos e pode ser atribuida a uma variável assim como qualquer function 
//Sintaxe

setTimeout((param) => {
    //algun código/function
}, timeout);


//Também é possível cancelar timeouts
clearTimeout(param) //recebe o timeout que desaja cancelar como argumento


//setInterval
//esta função executa eternamente um codigo até o clearInterval pará-lo
//também é uma funcao assicrona

setInterval((param) => {
    //alguma função
}, interval);


//setTimout incursivo
//é recomendado nas situações que você acha que um código vai demorar mais que o esperado
//o intervalo entre os códigos é o mesmo, difente em intervals

const i = 1;

setTimeout(function run () {
    console.log(i);
    i++;
    setTimeout(run, 100)
}, 100);


//SEMPRE usar os clear para evitar futuros erros no código
