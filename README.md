# GuitarLA 

Este proyecto consiste en una aplicación web de comercio electrónico desarrollada con la librería React y el entorno de desarrollo Vite. La aplicación simula una tienda de instrumentos musicales que permite a los usuarios visualizar un catálogo de productos, gestionar un carrito de compras y mantener la persistencia de datos entre sesiones.

## Tecnologías Principales

* **React JS:** Librería de JavaScript para la construcción de interfaces de usuario.
* **Vite:** Herramienta de construcción (build tool) para un entorno de desarrollo optimizado.
* **Bootstrap:** Framework de diseño para la estructuración y estilos responsivos.

## Implementación Técnica y Conceptos Clave

El desarrollo de esta aplicación se centró en la implementación de los siguientes conceptos fundamentales de React y JavaScript moderno:

### 1. Renderizado Dinámico (Mapping)
Para optimizar la escritura de código y facilitar la escalabilidad del catálogo, se utilizó el método **.map()** de JavaScript. En lugar de declarar cada producto manualmente en el código, la aplicación itera sobre un arreglo de objetos (base de datos local) y genera dinámicamente un componente "Card" por cada elemento. Esto permite que el catálogo se actualice automáticamente si se añaden más productos a la base de datos.

### 2. Gestión de Estado (useState)
La interactividad de la aplicación se gestiona mediante el Hook **useState**. Se definieron estados principales para:
* **Base de datos:** Almacena la lista completa de guitarras disponibles.
* **Carrito de compras:** Un arreglo que almacena los productos seleccionados por el usuario, sus cantidades y precios, actualizándose en tiempo real ante cualquier interacción (agregar, eliminar o modificar cantidad).

### 3. Manejo de Efectos Secundarios (useEffect)
Se implementó el Hook **useEffect** para manejar los efectos secundarios de la aplicación, específicamente la sincronización del estado con el almacenamiento local. Este Hook está configurado para ejecutarse automáticamente cada vez que se detecta un cambio en la variable de estado del carrito (`cart`), asegurando que la información guardada esté siempre actualizada.

### 4. Persistencia de Datos (LocalStorage)
Para garantizar que el usuario no pierda su selección al recargar la página, se integró la API del navegador **LocalStorage**:
* **Lectura Inicial:** Al cargar la aplicación, se ejecuta una función que verifica si existe un historial de compra previo en el almacenamiento local. Si existe, se utiliza para inicializar el estado del carrito.
* **Escritura Continua:** Gracias a la integración con `useEffect`, cualquier modificación en el carrito se escribe inmediatamente en el LocalStorage, convirtiendo el arreglo de datos a una cadena de texto JSON.

### 5. Lógica de Negocio en el Carrito
Se desarrollaron algoritmos específicos para controlar el comportamiento del carrito:
* **Inmutabilidad:** Se utilizaron métodos como `.filter()` y `.map()` para actualizar el estado devolviendo nuevos arreglos, respetando el principio de inmutabilidad de React.
* **Validaciones:** Se implementó lógica para evitar productos duplicados (incrementando la cantidad en su lugar) y para restringir las cantidades mínimas y máximas permitidas por artículo.

## Enlaces del Proyecto
* **Despliegue en Producción (Vercel):** [https://vercel.com/michaels-projects-c64ccd66/tienda-guitarra]
