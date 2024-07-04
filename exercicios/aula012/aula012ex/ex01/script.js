function carregar() {
    var mens = document.getElementById(`msg`)
    var imag = document.getElementById(`imagem`)
    var data = new Date()
    var hora = data.getHours()
    mens.innerHTML = `Agora são ${hora}:00 horas `

    if (hora >= 0 && hora < 12) {
        //bom dia
        imag.src = 'imagens/dia.png' //chama a imagem do dia
        document.body.style.backgroundColor = '#fee58c'

    } else if(hora >= 12 && hora <= 18) {
        //boa tarde
        imag.src = 'imagens/tarde.png'
        document.body.style.backgroundColor = '#b3423c'
    } else {
        //boa noite
        imag.src = 'imagens/noite.png'
        document.body.style.backgroundColor = '#001648'
    }
    


}