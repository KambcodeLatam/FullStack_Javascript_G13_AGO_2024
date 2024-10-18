const counterElement = document.getElementById("counter");

let count = 0; // 24
counterElement.innerHTML = count;

const incrementar = () => {
    count = count + 1 // 1
    counterElement.innerHTML = count // 1
}

const decrementar = () => {
    count = count - 1 // 5
    if(count <= 0){
        count = 0
    }
    counterElement.innerHTML = count
}



