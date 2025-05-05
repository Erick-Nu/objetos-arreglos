
// Objeto que representa un producto en Amazon  

const productoAmazon = {
    nombre: "Sony WH-CH520 - Auriculares inalámbricos",
    marca: "Sony",
    precio: 27.80,
    disponible: true,
    factor_de_forma: "Sobre la oreja",
    calificacion: 4.4
    };

const { nombre, marca, precio, disponible, factor_de_forma, calificacion } = productoAmazon;

  // Mostrar la información por consola usando una plantilla de cadena de texto
    console.log(`Producto en Amazon
    Nombre      : ${nombre}
    Marca       : ${marca}
    Precio      : $ ${precio}
    Disponible  : ${disponible ? 'Sí' : 'No'}
    Factor de forma: ${factor_de_forma}
    Calificación: ${calificacion} estrellas`);


// Arreglo de productos en Amazon

// Arreglo de objetos: cada uno representa un producto
const productosAmazon = [
    {
        nombre: "SAMSUNG Monitor de computadora",
        marca: "SAMSUNG",
        precio: 199.99,
        calificacion: 4.4,
        disponible: true
    },
    {
        nombre: "Fusion5 Tablet PC con Windows 11 de 10.1 pulgadas",
        marca: "Fusion5",
        precio: 269.95,
        calificacion: 4.2,
        disponible: false
    },
    {
        nombre: "HP Computadora portátil 17",
        marca: "HP",
        precio: 838.00,
        calificacion: 4.2,
        disponible: true
    }
];

  // Mostrar los productos por consola
console.log("Productos en Amazon:");
for (let i = 0; i < productosAmazon.length; i++) {
    console.log("Producto", i + 1);
    console.log("Nombre     :", productosAmazon[i].nombre);
    console.log("Marca      :", productosAmazon[i].marca);
    console.log("Precio     : $ ", productosAmazon[i].precio);
    console.log("Calificación:", productosAmazon[i].calificacion, "estrellas");
    console.log("Disponible :", productosAmazon[i].disponible);
    console.log("----------------------------");
}
