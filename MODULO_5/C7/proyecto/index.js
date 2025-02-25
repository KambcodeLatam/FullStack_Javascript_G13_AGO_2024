import express from 'express'
import { readFile, writeFile } from 'fs/promises'

const server = express()
server.use(express.json())

server.get('/', (req, res) => {
    res.send('Hello World')
})

server.get('/productos', async (req, res) => {
    const productos = await readFile('./productos.json', 'utf-8')
    res.json(JSON.parse(productos))
})

server.get('/productos/buscarId/:id', async (req, res)=> {
    const id = req.params.id
    const productos = await readFile('./productos.json', 'utf-8')
    const listaProductos = JSON.parse(productos)

    const productoEncontrado = listaProductos.find((producto) => producto.id === parseFloat(id))
    if(!productoEncontrado){
        return res.status(404).json({error: 'Producto no encontrado'})
    }
    res.json(productoEncontrado)
})
server.get('/productos/buscarCategoria/:categoria', async (req, res) => {
    const categoria = req.params.categoria
    const productos = await readFile('./productos.json', 'utf-8')
    const listaProductos = JSON.parse(productos)
    const productosEncontrados = listaProductos.filter((producto) => {
        return producto.categoria.toUpperCase() === categoria.toUpperCase()
    })
    if(productosEncontrados.length === 0){
        return res.status(404).json({error: 'No se encontraron productos con esa categoría'})
    }
    res.json(productosEncontrados)
})
// crud = Create. Read, Update, Delete

server.post('/productos', async (req, res) => {
    const nuevoProducto = req.body
    const productos = await readFile('./productos.json', 'utf-8')
    const listaProductos = JSON.parse(productos)
    const noEsUnico = listaProductos.some((producto) => producto.id === nuevoProducto.id)
    if(noEsUnico){
        return res.status(409).json({error: 'El producto ya existe, prueba otro id'})
    }

    listaProductos.push(nuevoProducto)
    writeFile('./productos.json', JSON.stringify(listaProductos), 'utf-8')
    res.status(201).json(listaProductos)
})

server.put('/productos/:id', async (req, res) => {
    const id = req.params.id
    const nuevoProducto = req.body
    const productos = await readFile('./productos.json', 'utf-8')
    const listaProductos = JSON.parse(productos)

    const productoExistente = listaProductos.findIndex(producto => producto.id === parseFloat(id))
    if(productoExistente === -1){
        return res.status(404).json({error: 'El producto no existe'})
    }
    listaProductos[productoExistente] = nuevoProducto
    writeFile('./productos.json', JSON.stringify(listaProductos), 'utf-8')
    res.send({message: 'Producto actualizado', producto: nuevoProducto})
})

server.delete('/productos/:id', async (req, res)=> {
    const id = req.params.id

    const productos = await readFile('./productos.json', 'utf-8')
    const listaProductos = JSON.parse(productos)

    const productoExistente = listaProductos.findIndex(producto => producto.id === parseFloat(id))
    if(productoExistente === -1){
        return res.status(404).json({error: 'El producto no existe'})
    }
    listaProductos.splice(productoExistente, 1)
    writeFile('./productos.json', JSON.stringify(listaProductos), 'utf-8')
    res.send({message: 'Producto eliminado'})
})


server.listen(3002, () => console.log('Server running on port 3000'))
