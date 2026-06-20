const carteles = document.querySelectorAll(".cartel");
const siguiente = document.querySelector(".next");
const anterior = document.querySelector(".prev");

let indice = 0;

function mostrarCartel(index){

    carteles.forEach(cartel => {
        cartel.classList.remove("active");
    });

    carteles[index].classList.add("active");
}

siguiente.addEventListener("click", () => {

    indice++;

    if(indice >= carteles.length){
        indice = 0;
    }

    mostrarCartel(indice);

});

anterior.addEventListener("click", () => {

    indice--;

    if(indice < 0){
        indice = carteles.length - 1;
    }

    mostrarCartel(indice);

});