# Async/await

### Pasos para la tarea

- NOTA: usar async-await con las promesas (fetch)

- utilizando fetch, obtener la informacion de los primeros 20 pokemons

```javascript
fetch("https://pokeapi.co/api/v2/pokemon");
```

- guardar esa informacion en una variable

```javascript
const pokemons = [{ name: "bulbasaur" }, { name: "picachu" }];
```

- utilizando el nombre de cada pokemon, traer la informacion por cada uno (individualmente) para actualizar la informacion de cada pokemon

```javascript
fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");

const pokemons = [{ name: "bulbasaur", ...response.data }];
```
