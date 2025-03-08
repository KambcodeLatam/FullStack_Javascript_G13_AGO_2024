# 🚀 Desplegar Express con ES Modules en Vercel

Este tutorial te guiará paso a paso para desplegar una aplicación **Express** en **Vercel** usando **ES Modules** (`import/export`).

---

## 🔧 1. Configurar el Proyecto Express con ESM
Si aún no tienes un proyecto de Express, créalo con:

```sh
mkdir mi-app-express
cd mi-app-express
npm init -y
```

Edita `package.json` y agrega `"type": "module"` para habilitar **ES Modules**:

```json
{
  "name": "mi-app-express",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

Instala Express:

```sh
npm install express
```

---

## 📂 2. Crear el Servidor Express con ESM
Crea un archivo `index.js` y usa `import` en lugar de `require`:

```js
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("¡Hola desde Express en Vercel con ESM!");
});

// Exportar el handler para que Vercel lo use
export default app;
```

---

## 📄 3. Configurar `vercel.json`
Vercel no ejecuta `listen()`, sino que espera un **handler exportado**.  
Crea un archivo `vercel.json` en la raíz:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "index.js"
    }
  ]
}
```

---

## 🚀 4. Instalar Vercel CLI y Desplegar
Instala Vercel CLI (si no lo tienes):

```sh
npm install -g vercel
```

Inicia sesión en Vercel:

```sh
vercel login
```

Despliega la aplicación:

```sh
vercel
```

Sigue las instrucciones y elige las opciones por defecto.

---

## ✅ 5. Probar la App
Una vez desplegado, Vercel te dará una URL donde tu aplicación Express estará corriendo.  
Prueba la URL en el navegador o con `curl`:

```sh
curl https://tu-app.vercel.app
```

---

🎉 **¡Listo!** Ahora tienes Express en Vercel con **ES Modules** (`import/export`).
