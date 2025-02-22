import http from 'http';
import url from 'url';
import fs from 'fs/promises'





// request, response
const server = http.createServer( async (req, res) => {
    const parseUrl = url.parse(req.url);
    const method = req.method;
    console.log(method)
    if(parseUrl.path === '/productos' && method === 'GET'){
        const productos = await fs.readFile('./productos.json', 'utf-8')
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(productos);
    }else if(parseUrl.path === '/productos' && method === 'POST'){
        const productos = await fs.readFile('./productos.json', 'utf-8')
        const productosJson = JSON.parse(productos)
        
        let body = '';

        req.on('data', (chunk) => body += chunk)
        req.on('end', async () => {
            const nuevoProducto = JSON.parse(body)
            const notUnique = productosJson.some((producto) => producto.nombre === nuevoProducto.nombre) 
            if(notUnique){
                res.writeHead(409, {'Content-Type': 'text/plain'});
                res.end('El nombre del producto ya existe');
            }else{
                productosJson.push(JSON.parse(body))
                await fs.writeFile('./productos.json', JSON.stringify(productosJson), 'utf-8')
                res.writeHead(201, {'Content-Type': 'text/plain'});
                res.end('Guardamos tu producto');
            }
            
        })

        
    }else if(parseUrl.path === '/productos' && method === 'PUT'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Actualizamos tu producto');
    }else if(parseUrl.path === '/productos' && method === 'DELETE'){
        res.writeHead(204, {'Content-Type': 'text/plain'});
        res.end('Eliminamos tu producto');
    }

    
    else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('El endpoint solicitado no exoste');
    }
    
})
server.listen(3000, () => console.log('Servidor escuchando en el puerto 3000'))
