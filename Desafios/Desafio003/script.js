function botão1(params) {
    var n = window.prompt('Digite um número')
    Number(n)
    var s1 = Number(n + 1)
    var s2 = Number(n - 1)

    window.alert(`O sucessor do número ${n}: ${s1}
E o antecesor é: ${s2}`)

}