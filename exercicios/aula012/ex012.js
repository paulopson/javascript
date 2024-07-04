var agora = new Date()
var hora = agora.getHours()//pra mostrar a hora do pc
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log(`Bom dia, o sol ja amanheceu na fazendinha`)
} else 
    if (hora >=12 || hora <=18) {
        console.log(`Boa tarde `)
} else { 
console.log(`Boa noite `)
}