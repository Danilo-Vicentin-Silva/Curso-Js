function gerar(params) {
    var n1 = document.querySelector('input#n1')
    var tab = document.querySelector('select#lista')
    if (n1.value == 0) {
        window.alert('[ERRO] Digite algum número!')
    } else {
        var n = Number(n1.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}