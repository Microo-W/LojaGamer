// Array de imagens
let imagens=[
    "/src/assets/Carro1.jpeg",
    "/src/assets/Carro2.jpeg",
    "/src/assets/Carro3.jpeg"
];
// Posição que vai iniciar as imagens
let index=0;
// Tempo para trocar as imagens
let tempo = 3000; // 3 segundos

// Função do slideshow
function SlideShow(){
    // Dom pego o ID e passa os caminhos das imagens
    document.getElementById("imgBanner").src=imagens[index];
    // Incremento das imagens
    index++;
    // Estrutura condicional IF
    if (index == imagens.length){
        // Inicia na posição 0 ( ou seja sempre volta para o 0 )
        index=0;
    }

// Metodo setimeout para executar a função(callback) e
// chamar o tempo
setTimeout("SlideShow()", tempo)
}
//executar a função
SlideShow();






















const menuIcone = document.getElementById("menu-icone");
const navMenu = document.getElementById("nav-menu");

menuIcone.addEventListener("click",()=>{
    navMenu.classList.toggle("active");
    menuIcone.classList.toggle("open")
})
