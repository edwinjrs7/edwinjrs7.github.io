//menubar

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const swith = document.querySelector(".switch");


swith.addEventListener("click", e =>{
    swith.classList.toggle("active");
    document.body.classList.toggle("active");
})

abrir.addEventListener("click", () =>{
    nav.classList.add("visible");
})

cerrar.addEventListener("click", ()=>{
    nav.classList.remove("visible");
})

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 0)
})


//selector de idiomas
const bandera = document.querySelector("#bandera");
const banderaColombia = "images/svg/colombia.svg";
const banderaUSA = "images/svg/USA.svg";
const textToChange = document.querySelectorAll("[data-section]")

let esbanderaColombia = true;

function cambiarBandera(){

    let idioma = "es";

    if(esbanderaColombia){
        bandera.src = banderaUSA;
        bandera.alt = "bandera de USA";
        idioma = "en";
    }else{
        bandera.src = banderaColombia;
        bandera.alt = "bandera de Colombia";
        idioma = "es";
    }

    esbanderaColombia = !esbanderaColombia
    
    cambiarIdioma(idioma)
}

function cambiarIdioma(idioma){
    fetch(`../Languages/${idioma}.json`)
    .then(res => res.json())
    .then(data => {
        textToChange.forEach((el) =>{
            const section = el.dataset.section;
            const value = el.dataset.value;

            if(data[section] && data[section][value]){
                el.innerHTML = data[section][value];
            }
        });
    })
    // .catch(error => console.error("Error al cargar el archivo de idioma:", error));
}

bandera.addEventListener("click", cambiarBandera);
