
let g = 10
let gasto = 120
let comprador = {nome: 'Alex', empresa: 'Quel', fundos: 100, gastou(g=0){
    
    if(g=0){
    console.log('Manteve o saldo')
    } else {
        console.log(`Ele gastou ${gasto}`)
        let res = this.fundos - gasto
        console.log(`Então ele(a) ficou com ${res}`)
    }
} } 
comprador.fundos.toLocaleString('en-US', {style: 'currency', currency: 'USD' })
g.toLocaleString('en-US', {style: 'currency', currency: 'USD' })
comprador.gastou(g=1)  