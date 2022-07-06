    function carregar(params) {
        var nome = window.prompt('Qual é o seu nome?')
        var name = window.document.getElementById('nome')
        var msg = window.document.getElementById('msg')
        var img = window.document.getElementById('imagem')
        var data = new Date()
        var hora = data.getHours()
        name.innerHTML = `Bem vindo! ${nome}`
        msg.innerHTML = `Agora são ${hora} horas`


        if (hora >= 0 && hora < 12) {
            //Bom dia!
            img.src = 'manha.png'
            document.body.style.background = '#a49b82'
        } else if (hora >= 12 && hora <= 18) {
            //Boa tarde!
            img.src = 'tarde.png'
            document.body.style.background = '#c8c2b6'
        } else {
            //Boa noite!
            img.src = 'noite.png'
            document.body.style.background = '#0f3f5e'
        }
    }