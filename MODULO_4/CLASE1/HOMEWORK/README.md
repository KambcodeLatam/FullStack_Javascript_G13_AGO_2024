## Tarea para casa: Introducción al DOM y Métodos HTTP

### Tarea: Practicar con el DOM:

- Objetivo: Familiarizarte con la manipulación del DOM utilizando JavaScript.

- Pasos a seguir:

1. Abre el navegador web:

    - Accede a la consola del desarrollador (generalmente se accede con F12 o clic derecho y seleccionando "Inspeccionar").

2. Crea un archivo HTML:

    - Crea un archivo index.html con la siguiente estructura básica:

```html

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Práctica DOM</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
    </style>
</head>
<body>
    <script src="script.js"></script>
</body>
</html>

```

3. Crea un archivo JavaScript:

Crea un archivo script.js en la misma carpeta y agrega el siguiente código:

```javascript

// Crear un elemento 'div'
const div = document.createElement('div');

// Agregar un atributo 'id' al elemento div que acabo de crear


// Agregar texto al 'div'


// Cambiar el color de fondo del 'div'


// Agregar el 'div' al cuerpo del documento
document.body.appendChild(div);


### Realizar solicitudes HTTP:

Utiliza herramientas como Postman o cURL para realizar solicitudes HTTP GET y POST a una API pública o local.
Realiza una solicitud GET para obtener datos de una API FREE de prueba.
El profesor debe de hace un ejemplo en clase, con postman y una API publica free.

Utilizar esta API publica https://jsonplaceholder.typicode.com/users
Para los muchachos que no tiene todavia el postman de este link lo pueden descargar https://www.postman.com/downloads/
Probarla en postman con el metodo GET

Tomar pantallazo de lo que nos esta devolviendo el JSON



### Investigar sobre la comunicación entre BackEnd y FrontEnd:

Lee artículos o tutoriales que expliquen cómo funciona la comunicación entre el BackEnd y el FrontEnd en una aplicación web.
Buscar ejemplos de implementación de esta comunicación utilizando diferentes tecnologías y protocolos, como REST, GraphQL o WebSockets.

