// Closure: Una función puede acceder a las variables de su entorno externo incluso despúes de que la función externa haya finalizado la ejecución

// Definir una función dentro de otra función
// La función interna va a acceder a variables del ámbito de la función externa
// Retornamos o usamos la función interna, Lo cual le permite 'recordar' las variables


function externa () {
    let variableExterna = " Estoy en el closure";

    function interna(){
        console.log(variableExterna)
    }

    return interna
}

// Crear closure
const closure = externa()
closure();


// Contador

function crearContador() {
    let contador = 0 ;
    
    return function(){
        contador++;
        return contador;
    }
}

const contador1 = crearContador();

console.log(contador1());
console.log(contador1());

const contador2 = crearContador();
console.log(contador2())


//Saludar

function saludar(nombre){
    return function(saludo){
        console.log(`${saludo}, ${nombre}`)
    }
}

const saludarLuis = saludar('Luis');

saludarLuis('Hola')
saludarLuis('Buenos días');

// Simular variables privadas

function Persona(name){
    let privateName = name;

    return {
        getNombre: function() {
            return privateName;
        },
        setName:function(newName){
            privateName = newName
        }
    }
}

const person1 = Persona('Eliana');
console.log(person1.getNombre());

person1.setName("Claudia");
console.log(person1.getNombre())


// Variables privadas. 

function crearCuenta() {
    let saldo = 0;

    return {
        depositar: function(cantidad){
            saldo+= cantidad
            console.log(`Depositaste ${cantidad}.`)
        },
        retirar: function(cantidad){
            if(cantidad > saldo){
                console.log(`Saldo insuficiente.`)
            }else{
                saldo -= cantidad;
                console.log(`Retiraste ${cantidad}.`)
            }
        },
        verSaldo: function(){
            console.log(`Su saldo es: `, saldo)
            // return saldo;
        }
    }
}

const cuenta = crearCuenta();
cuenta.depositar(100);
cuenta.retirar(50);
cuenta.verSaldo();
// console.log(cuenta.verSaldo())

function multiplicar(numero) {
    return function(numero2){
        return numero * numero2 
    }
}

const operacion1 = multiplicar(2);
console.log(operacion1(5));

const operacion2 = multiplicar(7);
console.log(operacion2(5));
console.log(operacion2(8));


//SetTimeOut

function createTimer(){
    let start = Date.now();

    return function(){
        let elapsed = Date.now() - start;
        console.log(`Ha pasado, ${elapsed}ms`);
    }

}

const timer = createTimer();
setTimeout(timer, 1000)



//Crear funcion Paciente(name,edad)
//Obtener el nombre del paciente
//Cambiar nombre del paciente
// Obtener edad
//Cambiar edad