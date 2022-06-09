//Async-Await são ultilizados para agilizar e simplicar a função das Promises e .then()
//Sua ultilização deve ser aplicada quando queremos, de forma sequencial, realizar uma operação
//muito grande
//Essa syntax sugar gera uma promise quando ultilizada, podemos até tratar erros usando o try...catch
//Sintaxe

/*
function primeiraFuncao() {

    return new Promise((resolve) => {

        setTimeout(() => {
            console.log('Esperou isso aqui')
            resolve()

        }, 1000)
    });

};

async function segundaFuncao() {

    console.log('Iniciou')
    await primeiraFuncao()
    console.log('Terminou')

};

segundaFuncao();

*/
//Prático OBS: Não funciona por conta do Fetch() == recurso API navegador
/*
function getUser(id) {

    return fetch(`https://reqres.in/api/user?=${id}`)
        .then(data => data.json())
        .catch(err => console.log(err))

};

async function showUserName(id) {

    try {
        const user = await getUser(id)
        console.log(`O nome do usuário é: ${user.data.first_name}`)
    } catch (error) {
        console.log(`erro: ${error}`)
    };

};

showUserName();
*/

