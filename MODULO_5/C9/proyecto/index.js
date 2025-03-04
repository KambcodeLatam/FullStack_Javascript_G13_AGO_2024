import express from 'express'
import { 
    getProductos, 
    getProductoById, 
    getProductoByCategory, 
    postProducto, 
    putProducto, 
    deleteProducto
} from './apiFunctions/productos.js'
import { middlewareAuth, middlewareLogs } from './apiFunctions/middlewares.js'
import { createUser, login } from './apiFunctions/usuarios.js'

const server = express()

server.use(express.json())
server.use(middlewareLogs)

server.get('/', (req, res) => {
    res.send('Hello World')
})
// productos
server.get('/productos', getProductos)

server.get('/productos/buscarId/:id', getProductoById)

server.get('/productos/buscarCategoria/:categoria', getProductoByCategory)

server.post('/productos', middlewareAuth, postProducto)

server.put('/productos/:id', middlewareAuth, putProducto)

server.delete('/productos/:id', middlewareAuth, deleteProducto)

// Usuarios

server.post('/usuarios', createUser)
server.post('/usuarios/login', login)
server.listen(3000, () => console.log('Server running on port 3000'))
