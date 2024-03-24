function media(nota1, nota2){
    var media = (nota1 + nota2)/2
    console.log(media)
    
    if(media >= 7) {
        console.log("O aluno foi aprovado")
    }else{
        console.log("O aluno foi reprovado")
    }
}
media(10, 7)
