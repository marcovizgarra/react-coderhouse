# 🎧 E-commerce JBL Experience

> Proyecto desarrollado como trabajo integrador del bootcamp de React.js en Coderhouse. Esta versión del README está orientada a presentar mi trabajo a potenciales empleadores.

## 👨‍💻 Sobre mi aporte
- Diseño e implementación de una **Single Page Application** en React para una tienda oficial de productos JBL.
- Configuración del proyecto con **Vite** y estructuración modular de componentes reutilizables.
- Desarrollo de un **carrito de compras con contexto global**, control de stock dinámico y notificaciones de interacción.
- Integración completa con **Firebase Firestore** para obtener el catálogo en tiempo real y centralizar la data del proyecto.
- Creación de **experiencias visuales atractivas**: carruseles de productos, banners promocionales y navegación responsive con Bootstrap.
- Automatización de utilidades (helpers, hooks personalizados) para optimizar la gestión del catálogo y el checkout.

## 🌟 Highlights del producto
- Catálogo dinámico segmentado por categorías y fichas de detalle individuales.
- Flujo de compra con actualización de totales, manejo de stock y feedback visual inmediato.
- Navegación por rutas protegidas con React Router y preservación del estado con Context API.
- Animaciones y microinteracciones con librerías externas para mejorar la experiencia del usuario.

<img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbm5ram5rZGt4bzlnaW1hMW5ibzQzdjhmaG5nMXhoMDB1ZjBsMDh1bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nWtGe0qZSldEFOvjwk/giphy.gif" width="100%"/>

<img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTQ4bXlpdWptdHAwbGR0ZDNoOTczM2pncmY1Znp2cGliM2dhMjMxbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ueb8towaXhulw7PB33/giphy.gif" width="100%"/>



## 🛠️ Tecnologías principales
<div align="center">
    <table>
        <tr>
            <td align="center"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width="60"/><br/>React</td>
            <td align="center"><img src="https://vitejs.dev/logo.svg" alt="Vite" width="60"/><br/>Vite</td>
            <td align="center"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="60"/><br/>JavaScript</td>
            <td align="center"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" width="60"/><br/>HTML5</td>
            <td align="center"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3" width="60"/><br/>CSS3</td>
        </tr>
        <tr>
            <td align="center"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="Sass" width="60"/><br/>Sass</td>
            <td align="center"><img src="https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg" alt="Bootstrap" width="60"/><br/>Bootstrap 5</td>
            <td align="center"><img src="
            https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="Firebase" width="60"/><br/>Firebase</td>
            <td align="center"><img src="public/img/readme/splide-js.png" alt="Splide" width="60"/><br/>Splide.js</td>
            <td align="center"><img src="https://www.vectorlogo.zone/logos/npmjs/npmjs-icon.svg" alt="npm" width="60"/><br/>npm</td>
        </tr>
        <tr>
            <td align="center"><img src="./public/img/readme/git.png" alt="Git" width="60"/><br/>Git</td>
            <td align="center"><img src="https://avatars.githubusercontent.com/u/27804?s=200&v=4" alt="React Router" width="60"/><br/>React Router</td>
            <td align="center"><img src="./public/img/readme/github-icon-2.svg" alt="GitHub" width="60"/><br/>GitHub</td>
            <td align="center"><img src="./public/img/readme/animate-css.svg" alt="Animate.css" width="60"/><br/>Animate.css</td>
            <td align="center"><img src="./public/img/readme/toast.svg" alt="toastify" width="60"><br/>Toastify</td>
        </tr>
    </table>
</div>

## 🧩 Arquitectura y organización
- **Componentes atómicos** en `src/components` para secciones clave como Home, Catálogo, Cart y CheckOut.
- **Contexto global** en `src/context/CartContext.jsx` que centraliza catálogo, stock, carrito y totales.
- **Hooks y utilidades personalizadas** en `src/hooks` y `src/js/functions.js` para encapsular lógica compartida.
- **Estilos modulares** con `Sass` y `CSS` para mantener coherencia visual y facilitar el mantenimiento.
- **Configuración de Firebase** en `src/main.jsx` para inicializar el SDK y habilitar la conexión con Firestore.

## 🚀 Cómo ejecutarlo
```bash
npm install
npm run dev
```

## 📸 Vistas destacadas
- Hero principal con carrusel promocional y CTA.
- Listados por categoría con Splide.js y filtros dedicados.
- Checkout con resumen dinámico del pedido y formulario de contacto.

## 📬 Contacto
Si te interesa conocer más sobre este proyecto o mis próximas colaboraciones, podemos hablar en [LinkedIn](https://www.linkedin.com/in/marco-vizgarra-777a7a255/).