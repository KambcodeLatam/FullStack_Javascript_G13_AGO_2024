
// Ciclo for y while

const array = ['U','N','I','V','E','R','S','O']
// console.log(array[3])
for(letter of array){
    console.log(letter)
}

// for(let index = 0; index < array.length; index++){
    
//     const element = array[index]
//     console.log(element)
// }
// let position = 0
// while(position < array.length){
//     const element = array[position]
//     console.log(element)
//     position += 1
// }



// string = text, number = numero, boolean = true/false | 0/1 
// object = objeto, array = arreglo | lista

// const spiderMan = {
//     name: 'peter parker',
//     superHeroName: 'Spider-Man',
//     age: 25,
//     isAlive: false
// }
// const ironMan = {
//     name: 'tony stark',
//     superHeroName: 'Iron Man',
//     age: 40,
//     isAlive: false
// }

// const hulk = {
//     name: 'bruce banner',
//     superHeroName: 'Hulk',
//     isAlive: true,
//     age: 35
// }
// const captainAmerica = {
//     name: 'steve rogers',
//     superHeroName: 'Captain America',
//     age: 100,
//     isAlive: true
// }



// const characters = ['Spider-Man', 'Iron Man', 'Hulk', ];
// const superHeroes = [spiderMan, ironMan, hulk];

// const findSuperHeroe = superHeroes.find((superHeroe) => {
//     return superHeroe.age === 40
// })
// ! = negacion || = o && = y !! = true/false



// const findSuperHeroe = superHeroes.some((superHeroe) => {
//     return  !superHeroe.age
// })
// console.log(superHeroes)
// superHeroes.pop()
// console.log(superHeroes)
// superHeroes.push(captainAmerica)
// console.log(superHeroes)






// const levelUser = 3

// switch (levelUser){
//     case 1: 
//        console.log('No tenemos casi descuentos')
//        break;
//     case 3: 
//        console.log('Tenemos muchos descuentos')
//        break;
//     case 43:
//         console.log('Tenemos algunos descuentos')
//         break;
//     default:
//         console.log('no tenemos descuentos')
// }

// if( levelUser === 1 ){
//     console.log('No tenemos casi descuentos')
// }else if(levelUser === 2){
//     console.log('tenemos algunos descuentos')
// }else{
//     console.log('no tenemos descuentos')
// }
