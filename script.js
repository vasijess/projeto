function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    //Pegar a tag img
    const img = document.querySelector("#profile img")
    
    //Substituir a img
    if(html.classList.contains('light')) {

    //Se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-dark.png")
    } else {

    //Se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar-light.png")
//    html.classList.add('light')
}
}