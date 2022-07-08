console.log ("me lees?");
let edad= 17;
/* 
variables (cambia) constantes (no cambia)
*/
// Defino o declaro constante
const mensaje = document.getElementById("mensaje");

//seleccionar boton
const boton = document.getElementById("boton")

//escuchar un evento particular
boton.addEventListener("click",mostarFondo)

//crear la funcion mostrarFondo
function mostarFondo() {
    console.log("click");
    mensaje.classList.add("bg-success")
}
// Seleccionamos mensaje y le agregamos o cambiamos el contenido
mensaje.textContent = "Desde Javascript"

// eliminar clases
mensaje.classList.remove ("bg-primary");

//agregar una clase de css
//mensaje.classList.add ("text-center","bg-warning");

//fincion 
function mostrarTexto(e) {
    console.log(e)
}

//invocacion de la funcion
mostrarTexto()