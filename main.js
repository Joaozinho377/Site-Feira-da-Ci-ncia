//Modo Escuro//
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}


//Menu para android e tablets//
const layers = document.querySelector(".layers")
const pontinhos = document.querySelector(".pontinhos")
const fecharpontinhos = document.querySelector(".fechar")


layers.addEventListener("click", function(){
    pontinhos.style.transform= "translate(0%)";
})

fecharpontinhos.addEventListener("click", function(){
    pontinhos.style.transform= "translate(-100%)";
})
