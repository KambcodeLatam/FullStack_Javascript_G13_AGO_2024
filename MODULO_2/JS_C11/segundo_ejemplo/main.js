const participantes = document.getElementById("list-1");

const addToList = () => {
    const name = 'Daniel'
    participantes.innerHTML += "<li>"+ name + "</li>"
    // participantes.innerHTML = participantes.innerHTML + "<li>"+ name + "</li>"
}