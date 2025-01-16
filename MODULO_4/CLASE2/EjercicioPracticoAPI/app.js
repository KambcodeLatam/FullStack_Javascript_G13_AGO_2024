let img = document.getElementById('card-img')
let nombre = document.getElementById('card-name')
let boton = document.getElementById('btn')

// function cambiarUsuario() {
//     const url = 'https://randomuser.me/api/';

//     fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data.results[0],'data'); 
//         console.log(data.results[0].name.first + ' ' + data.results[0].name.last ,'nombre'); 
//         nombre.innerHTML = `<h1>${data.results[0].name.first + ' ' + data.results[0].name.last}</h1>`
//         img.innerHTML = `<img src='${data.results[0].picture.large}'></img>`
//     })
// }

async function cambiarUsuarioAsync() {
    const url = 'https://randomuser.me/api/';
    const response = await fetch(url);
    const data = await response.json();

    nombre.innerHTML = `<h1>${data.results[0].name.first + ' ' + data.results[0].name.last}</h1>`
    img.innerHTML = `<img src='${data.results[0].picture.large}'></img>`


}

boton.addEventListener('click', cambiarUsuarioAsync)

// boton.addEventListener('click', cambiarUsuario)