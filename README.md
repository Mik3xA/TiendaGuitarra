# GuitarLA - Tienda de Guitarras con React

Este proyecto es una tienda en línea básica desarrollada con React. Su propósito es demostrar los fundamentos de la librería, el manejo del estado y la interacción entre componentes.

## Que es React

React es una librería de JavaScript de código abierto creada por Facebook en 2013 para construir interfaces de usuario interactivas y dinámicas. Hoy en día, React es utilizado por millones de desarrolladores y empresas como Netflix, Instagram, Airbnb y WhatsApp Web.

### Ventajas Principales de React

1. Virtual DOM
Actualiza solo los elementos que cambian, optimizando el rendimiento y haciendo las aplicaciones más rápidas y fluidas.

2. Componentes Reutilizables
Crea una vez, usa en todas partes. Los componentes son bloques independientes que facilitan el mantenimiento y escalabilidad del código.

3. Comunidad activa
Millones de desarrolladores, abundante documentación, librerías de terceros y soluciones a cualquier problema que encuentres.

## Metodos de Creacion de Proyectos

### 1. Create React App (Herramienta Oficial)
Es la herramienta oficial que configura todo automáticamente: Webpack, Babel, ESLint y servidor de desarrollo.

Comando estándar:
npx create-react-app mi-proyecto

Opción template en blanco:
npm create-react-app mi-proyecto -- --template react

Para iniciar el servidor:
cd mi-proyecto
npm start

### 2. Vite (Metodo Moderno)
Vite es más rápido y ligero. Ideal para proyectos nuevos con mejor rendimiento en desarrollo y construcción optimizada.

Comandos:
npm create vite@latest mi-proyecto
cd mi-proyecto
npm install
npm run dev

## Conceptos Aprendidos en este Proyecto

### 1. Componentes
Son los bloques principales de la aplicación. En este proyecto, la interfaz se divide en:
- App (Componente principal)
- Header (Encabezado y carrito)
- Card (Cada guitarra individual)
- Footer (Pie de página)

### 2. Props (Propiedades)
Es el mecanismo para pasar información de un componente padre a un componente hijo.
Ejemplo: El componente App le pasa la información de cada guitarra al componente Card.

### 3. useState (Estado)
Es un Hook que permite a los componentes tener "memoria".
En este proyecto usamos:
- data: Para guardar la lista de guitarras.
- cart: Para guardar los elementos del carrito.
- set[Nombre]: Funciones para modificar esos valores.

### 4. Manejo de Eventos
Es la forma de responder a las acciones del usuario, como el evento "onClick" para agregar productos.

### 5. Listas y Keys
Usamos .map() para iterar listas. Cada elemento debe tener una propiedad única "key" (el ID) para optimizar el rendimiento.

---

## Instrucciones para correr este proyecto

1. Abre la terminal en la carpeta del proyecto.
2. Instala las dependencias necesarias:
   npm install
3. Ejecuta el servidor de desarrollo:
   npm run dev
