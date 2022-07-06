let n1 = document.querySelector('input#numero')
let res = document.querySelector('div#res')
let tab = document.querySelector('select#list')
let valores = []

//verificações dos numeros dentro dos parametros
function IsNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function InLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
//---------------------------------------------

function adicionar(params) {
    if (IsNumero(n1.value) && !InLista(n1.value, valores)) {
        valores.push(Number(n1.value))
        let item = document.createElement('option')
        item.text = `Valor ${n1.value} adicionado!`
        tab.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    n1.value = ''
    n1.focus()
}

function finalizar(params) {
    if (valores.lenght == 0) {
        alert('adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        //verificação de valor maior/menor
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        //resultados
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${total} de números cadastrados; </p>`
        res.innerHTML += `<p>O maior valor informado foi o ${maior};</p>`
        res.innerHTML += `<p>O menor valor informado foi o ${menor};</p>`
        res.innerHTML += `<p>A soma dos valores resulta em ${soma};</p>`
        res.innerHTML += `<p>A média do valores é ${media};</p>`
    }
}

function limpar(params) {
    valores = []
    tab.innerHTML = ''
    res.innerHTML = ''
    n1.focus()
}
