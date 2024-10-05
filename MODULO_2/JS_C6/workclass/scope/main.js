// SCOPE

// En programacion scope (ó ambito) se refiere al contexto dentro del cual se puede acceder a variables (const y let) o funcion

// scope global: Puede ser accedida desde cualquier parte del codigo

// const name = 'Daniel'; // esta variable tiene un scope global
// document.write(name, '<br>') // Daniel

// if(true){
//     // const age = 35;
//     document.write(`Hola ${name}, tu edad es ${age}`) // Hola Daniel, tu edad es 35
// }

// scope Local: Cuando solo puede ser accedida en una parte del codigo

// if(true){
//     const name2 = 'Daniel'; // Scope Local: solamente existe en este caso dentro del if
//     const age = 35;
//     console.log(`Hola ${name}, tu edad es ${age}`) // Hola Daniel, tu edad es 35
// }

// console.log(`Hola ${name}, tu edad es ${age}`) // age y name is not defined -> No existen afuera del if

// for(let i = 1; i <= 5; i++){
    // const name3 = 'Daniel' // scope local: Solamente existe dentro del for
    // console.log(name3)
// }

// console.log(name3); //  name3 is not defined

// const age = 35; // scope global.
// document.write(age); // 35

// if(true){
//     const age = 40; // scope local.
//     document.write('<br>', age); // 40
// }



// scope block:

// {
    // let y = 20 // scope local.
    // console.log(y)
// }

// console.log(y) // y is not defined