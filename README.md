[![Status][statuss-shield]][statuss-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<div align="center">
  <a href="https://github.com/hmfarias/NotreDame">
    <img src="https://github.com/hmfarias/NotreDame/blob/main/src/assets/logo2.png" alt="Logo" width="350" height="auto">
  </a>
  <h2 align="center">Descubre lo que necesites en cada click</h2>

  <p align="center">
    Polirubro online
    <br />
    <a href="https://hmfarias.github.io/NotreDame/" target="_blank" ><strong>Explora el sitio en Git Pages»</strong></a>
    <br />
    <br />
    <a href="https://github.com/hmfarias/NotreDame">Ver repositorio</a>
    ·
    <a href="https://github.com/hmfarias/NotreDame/issues">Reportar un error</a>
    ·
    <a href="https://github.com/hmfarias/NotreDame/issues">Solicitar función</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->

<a name="top"></a>

### Tabla de contenidos

1. [Introducción](#introduccion)
2. [Construido con](#consturido)
3. [Algunas Consideraciones](#consideraciones)
   * [Router](#router)
   * [Local Storage](#localstorage)
   * [Comentarios en el código](#comentarios)
5. [Esquema de la App](#esquema)
6. [Contribuyendo](#contribuyendo)
7. [Licencia](#licencia)
8. [Contacto](#contacto)

<hr>

<!-- ABOUT THE PROJECT -->

<a name="introduccion"></a>

## INTRODUCCION

Bienvenidos a **Notre Dame**, tu tienda polirubro online exclusiva. Aquí encontrarás una selección variada de artículos de gran calidad. Nuestro compromiso es ofrecer elementos de alta calidad, elaborados con los mejores materiales y un enfoque en la atención al detalle.

Este repositorio contiene el código fuente de nuestra plataforma, desarrollada para brindar una experiencia de compra fluida y segura, asegurando que nuestros clientes puedan explorar y adquirir sus artículos favoritas de manera sencilla y rápida. ¡Gracias por visitarnos!

[Volver al menú](#top)

<hr>

<a name="consturido"></a>

### CONSTRUIDO CON

<img alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/> (HyperText Markup Language) como lenguaje de marcación de hipertéxto estándar utilizado para crear y diseñar páginas web.

<img alt="CSS3" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/> (Cascading Style Sheets, Level 3) como lenguaje de diseño gráfico utilizado para controlar el aspecto visual de las páginas web, separando el contenido (HTML) de la presentación visual (CSS).

<img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> como lenguaje de programación interpretado, de alto nivel y dinámico. Se ejecuta en el navegador del cliente, lo que permite la creación de páginas web interactivas y dinámicas.

![Static Badge](https://img.shields.io/badge/React-green?style=for-the-badge) como una de las librerías más populares de JavaScript para el desarrollo de aplicaciones móviles y web. Creada por Facebook, React contiene una colección de fragmentos de código JavaScript reutilizables utilizados para crear interfaces de usuario (UI) llamadas componentes.

![Static Badge](https://img.shields.io/badge/CHAKRA-orange?style=for-the-badge) como una librería de componentes de interfaz de usuario para React que permite construir aplicaciones web modernas y accesibles de manera rápida, ofreciendo componentes personalizables y listos para usar, con un enfoque en simplicidad y diseño responsivo.

![Static Badge](https://img.shields.io/badge/Firestore-yellow?style=for-the-badge) como base de datos de documentos NoSQL de Google Cloud Platform que permite almacenar, sincronizar y consultar datos para aplicaciones web y móviles.

[Volver al menú](#top)

<hr>

<a name="consideraciones"></a>

## ALGUNAS CONSIDERACIONES

<a name="router"></a>

### ROUTER

Con la finalidad de utilizar GitHub Pages, se ha instalado gh-pages. Atento a ello, y para lograr la compatibilidad y automatización a la hora de realizar el deploy, fue necesario agregar en todos los paths "/NotreDame".

<a name="localstorage"></a>

### LOCAL STORAGE

La App guarda el estado del carrito de compras en el Local Storage del navegador y lo mantiene actualizado cada vez que el mismo tiene alguna modificación.

### REFRESH EN GITHUB PAGES

En una aplicación basada en rutas como en React, al recargar una página que no es la raíz (/), aún cuando la ruta sea válida (por ejemplo la ruta de un item), Github Pages devuelve una pagina 404 por defecto. 

Esto se debe a que GitHub Pages no sabe cómo manejar rutas dinámicas y espera encontrar un archivo físico para cada URL.
Para solucionar esto, se ha creado una página llamada 404.html, la cual actua como un fallback para rutas que hace que ante un refresh en una página que NO sea el home, se redirecciones siempre al directorio raiz.

<a name="comentarios"></a>

### COMENTARIOS EN EL CÓDIGO

Tratándose de una aplicación de índole DIDACTICO, se han dejado en el código comentarios útiles para su estudio. Pero se destaca que en un proyecto real, los mismos deben ser utilizados lo menos posible.

[Volver al menú](#top)


<hr>

<a name="esquema"></a>

## ESQUEMA DE LA APP

<div align="center">
  <a href="https://github.com/hmfarias/NotreDame/blob/main/src/assets/esquemaApp.png">
    <img src="https://github.com/hmfarias/NotreDame/blob/main/src/assets/esquemaApp.png" alt="Logo" width="900" height="auto">
  </a>
</div>

[Volver al menú](#top)

<hr>

<a name="contribuyendo"></a>

## CONTRIBUYENDO

Las contribuciones son lo que hace que la comunidad de código abierto sea un lugar increíble para aprender, inspirar y crear. Cualquier contribución que haga es **muy apreciada**.

Si tiene una sugerencia para mejorar este proyecto, por favor haga un "fork" al repositorio y cree un "pull request". También puede simplemente abrir un "issue" con la etiqueta "mejora".
¡No olvide darle una estrella al proyecto! ¡Gracias de nuevo!

1. Fork al Proyecto
2. Cree una nueva rama para su característica (`git checkout -b feature/newFeature`)
3. Commit para los cambios (`git commit -m 'Add some newFeature'`)
4. Push a la nueva rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

[Volver al menú](#top)

<hr>

<!-- LICENSE -->

<a name="licencia"></a>

## LICENCIA

Distribuido bajo la licencia MIT. Consulte `LICENSE.txt` para obtener más información.

[Volver al menú](#top)

<hr>

<!-- CONTACT -->

<a name="contacto"></a>

## CONTACTO

Marcelo Farias - [+54 9 3512601888] - hmfarias7@gmail.com

[Volver al menú](#top)

<hr>

<!-- ACKNOWLEDGMENTS -->

<!-- MARKDOWN LINKS & IMAGES -->

<!-- [statuss-shield]: https://img.shields.io/badge/STATUS-Developing-green -->

[statuss-shield]: https://img.shields.io/badge/STATUSS-finished-green
[statuss-url]: https://https://github.com/hmfarias/NotreDame#readme
[forks-shield]: https://img.shields.io/github/forks/hmfarias/NotreDame
[forks-url]: https://github.com/hmfarias/NotreDame/network/members
[stars-shield]: https://img.shields.io/github/stars/hmfarias/NotreDame
[stars-url]: https://github.com/hmfarias/NotreDame/stargazers
[issues-shield]: https://img.shields.io/github/issues/hmfarias/NotreDame
[issues-url]: https://github.com/hmfarias/NotreDame/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg
[license-url]: https://github.com/hmfarias/NotreDame/blob/master/LICENSE.txt
[product-screenshot]: https://github.com/hmfarias/NotreDame/blob/main/assets/images/screenShot.webp
[product-screenshot-navbar]: https://github.com/hmfarias/NotreDame/blob/main/assets/images/navbar.webp
[others-url]: https://github.com/hmfarias/NotreDame
