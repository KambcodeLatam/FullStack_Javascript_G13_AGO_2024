let divUno = document.getElementById('contenedor1');
let divPersonaje = document.getElementById('personaje');
let boton = document.getElementById('btn2');

boton.addEventListener('click', texto)

function texto() {
    console.log('entro a la funcion');
    divUno.innerHTML = 'Mi primer texto';
    divUno.style.color = 'green';
    divUno.style.margin = '10px';
}

function personaje(){
    console.log('entro a personajes');
    divPersonaje.innerHTML = 'Juan, 20, Estudiante'
    divPersonaje.style.color = 'black';
    divPersonaje.style.backgroundColor = 'gray'
    divPersonaje.style.margin = '20px';
}
