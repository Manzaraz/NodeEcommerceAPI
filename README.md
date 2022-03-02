# NodeEcommerceAPI

[![N|Solid](https://i.ibb.co/X58M6Vm/Manzi-Banner2x.png)](https://manzaraz.github.io)

Les presento mi REST API, destinado para un ecommerce que estaré por implementar proximamente; por lo pronto me he encargado de realizar un front-end de prueba, al cual pueden acceder a haciendo click en la imagen 👇🏼 en donde se puede ver la interacción

[![N|Solid](https://i.ibb.co/LNBHQFh/Mi-pel-cula-1.gif)](https://manzi-front-nodetester.netlify.app/#/pay)

Si hicieron click en la imagen, seguramente pudieron interactuar a traves de la UI destinada a probar el endpoint de pago, para lo cual utilicé _Stripe_, este framework es un paquete integrado de productos para pago.

Estas son las tecnologías que utilicé:

<img src="https://img.icons8.com/color/96/000000/nodejs.png" alt="Node JS"/>
<img src="https://img.icons8.com/color/96/000000/express.png" alt="Express JS"/>
<img src="https://img.icons8.com/color/96/000000/mongodb.png" alt="Mongo DB">Mongo DB</image>
<img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png">Mongoose</image>
<img src="https://img.icons8.com/color/96/000000/java-web-token.png">JWT</image>
<img src="https://img.icons8.com/nolan/96/stripe.png"/>

## Empenzando

Utilizando _NodeJS_ como lenguaje Back-end, empecé a diagramar las rutas mediante la librería de _ExpressJS_, que junto a _mongoose_, pude manipular los datos y almacenarlo en mi _DBMS_ favorito (_MongoDB_), para crear las rutas de:

- Usuario
- Autenticación
- Producto
- Carrito
- Orden
- Stripe

A las cuales y gracias a la librería de _JsonWebToken_, pude crear unos métodos para verificar los Token de accesos que me permiten la propagación de identaidad y privilegios (_claims_) que me autorizarán cierto tipo de acciones como como buscar productos, el login, agregar a productos a mi carrito, o en el caso del usuario Admin, que me permitan hacer un CRUD de productos y ódenes.

[![N|Solid](https://i.ibb.co/Z1ZD1zv/login.png)](https://manzi-node-ecommerce-api.herokuapp.com)
[![N|Solid](https://i.ibb.co/LC31YBS/products-List.png)](https://manzi-node-ecommerce-api.herokuapp.com)

### ⚠️ Nota

Para poder interactuar con la APIRest que se encuentra deployada en
[Heroku](https://manzi-node-ecommerce-api.herokuapp.com), es necesario que como primer paso utilicen el endpoint de /api/register para generar el usuario ya sea utilizando Postman o Insomnia, luego hacer el /api/login para obtener el token y de este modo, poder interactuar de manera correcta con la API y el DBMS.

## Please visit my social networks and give me a like. Thanks for coming. 👋🏼

| [Portfolio](https://manzaraz.github.io) | [GitHub](https://github.com/Manzaraz) | [LinkedIn](https://www.linkedin.com/in/manzaraz) | [Twitter](https://twitter.com/MagnusManz) | [Instagram](https://www.instagram.com/magnusmanz/) |
