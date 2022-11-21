var lista_img = ["img1.png", "img2.png"];
var indice = 0;
function trocar_img(){
    document.getElementById("HQ").src = lista_img[indice];
    indice+=1;
}