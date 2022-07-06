function contar(params) {
    let ini = document.querySelector('input#inicio')
    let fm = document.querySelector('input#fim')
    let int = document.querySelector('input#intervalo')
    let res = document.querySelector('div#res')
    let i = Number(ini.value)
    let f = Number(fm.value)
    let t = Number(int.value)

    if (ini.value == 0 || fm.value == 0 || int.value == 0) {
        window.alert('[ERRO] preencha TODOS os dados!')
    } else {
        res.innerHTML = ('Contando:  ')
    } else if (p <= 0) {
            window.alert('Passo inválido! Considerando passo 1')
            i = 1
    } else if (i < f) {
            //Contagem progressiva
            for (let c = i; c <= f; c += t) {
                res.innerHTML += (`${c} \u{1F449}`)
            }
    } else if(ini.value == 0 || fm.value == 0 || int.value == 0) {
        window.alert('[ERRO] preencha TODOS os dados!')
    } else if {
        //Contagem regressiva
        for (let c = i; c >= f; c -= t) {
            res.innerHTML += (`${c} \u{1F449} `)
        }
    }
    res.innerHTML += (`\uD83C\uDFC1`)
}
