// Con axios consumir el servicio de JsonPlaceholder:  https://jsonplaceholder.typicode.com/users para crear un array de usuarios.
// Añadir un nuevo usuario a la lista.
// Eliminar un usuario de la lista
// Actualizar datos de un usuario
// Buscar usuario por id 
// Buscar usuario por nombre

const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com/users';

let users = [];
const dataActualizada = {
    name: 'Ana',
}

const getUsers = async () => {
    try {
        const response = await axios.get(`${API}`);
        users = response.data;

        deleteUser(1);
        updateUser(2, dataActualizada);

        console.log({ users });



    } catch (error) {
        console.error('Error', error)
    }
}


const createUser = async (datos) => {
    try {
        // const response = await axios.post(`${API}`, data);
        // if(response.status === 200) {
        //     getUsers()
        // }   
        // users.push(datos)

    } catch (error) {
        console.error('Error', error)
    }

}

const deleteUser = async (id) => {
    try {
        // const response = await axios.delete(`${API}/1`);
        //  if(response.status === '200'){
        //     const newArray = users.filter((usuario) => usuario.id !== id);
        // users = newArray
        //  }
        const newArray = users.filter((usuario) => usuario.id !== id);
        users = newArray
    } catch (error) {
        console.error('Error', error)
    }

}


const updateUser = async (id, dataActualizada) => {
    //Buscar el usuario para remplazar
    //actualizar el arreglo.
    //.map
    // users.forEach(usuario => {
    //     if(usuario.id === id){
    //         return { ...usuario, ...dataActualizada }
    //     }else{
    //         return usuario
    //     }
    // });
    try {
        // const response = await axios.update(`${API}/${id}`, data);

        users = users.map((usuario) => usuario.id === id ? { ...usuario, ...dataActualizada } : usuario)

    } catch (error) {
        
    }
    
   

}

const getUserById = async(id) =>{
    try {
        // const response = await axios.get(`${API}/${id}`,);
        const user = users.find((usuario)=> usuario.id === id)
        return user
    } catch (error) {
        console.error('Error', error)
    }
}

getUsers()
createUser({

    "id": 100,
    "name": "Jessica",
    "username": "Jess",
    "email": "jess@example.com",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1249816",
    "website": "jess.org",
    "company": {
        "name": "test",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }

})



// console.log(users)