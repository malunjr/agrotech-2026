let tamanho = 16;

function aumentarFonte(){
    tamanho += 2;
    document.body.style.fontSize = tamanho + "px";
}

function diminuirFonte(){
    tamanho -= 2;
    document.body.style.fontSize = tamanho + "px";
}

function alternarContraste(){
    document.body.classList.toggle("alto-contraste");
}