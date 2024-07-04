function verificar() {
    var data = new Date()

    var ano = data.getFullYear() //aqui ele vai pegar o ano atual/ 4 digitos

    var fano = document.getElementById('txtano') //id do formulario, vai receber o ano do nascimento

    var res = document.getElementById('res') //vai pegar o resultado da segunda div

    if (fano.value.length == 0 || Number(fano.value) > ano ) { // SE NAO DIGITOU O ANO, OU ENTAO O ANO DIGITADO FOR MAIOR QUE O ANO ATUAL
        window.alert('[ERRO] ANO INCORRETO')
    } else {
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value) // calculando a idade      
            var genero = ''
            var img = document.createElement('img') // criando uma foto a partir do script
            img.setAttribute('id', 'foto') //criando um id para minha foto
            
            if (fsex[0].checked) { // se a opçao marcada for Masculino, entao vai receber o valor homem
                genero = 'Homem'
                if ( idade >= 0 && idade < 10) {
                    //criança 
                    img.setAttribute('src', 'crianca-m.png')  
                                  
                } else if ( idade >= 10 && idade < 21) {
                    //jovem
                    img.setAttribute('src', 'jovem-m.png')

                } else if (idade > 21 && idade < 59) {
                    //adulto
                    img.setAttribute('src', 'adulto-m.png')

                } else if (idade >= 60 && idade < 100) {
                    //idoso
                    img.setAttribute('src', 'idoso-m.png')

                } else {
                    //Mumia
                }

            } else if (fsex[1].checked) {
                genero = 'Mulher'
                if (idade >= 0 && idade < 10) {
                    //criança
                    img.setAttribute('src', 'crianca-f.png')

                } else if (idade >= 10 && idade < 21) {
                    //Jovem
                    img.setAttribute('src', 'jovem-f.png')

                } else if (idade  > 21 && idade <= 59) {
                    //adulta
                    img.setAttribute('src', 'adulto-f.png')

                } else if (idade > 59 && idade < 100) {
                    //idosa
                    img.setAttribute('src', 'idosa-f.png')
                } else {
                    //mumia
                }
            }
            res.style.textAlign = 'center' //centralizando por script
            res.innerHTML = `Detectamos ${genero} com ${idade} anos`
            res.appendChild(img) // para adicionar as imagens            
    }


}
