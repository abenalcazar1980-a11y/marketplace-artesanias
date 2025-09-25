// Lista de productos artesanales
const productos = [
    { nombre: "Pulsera artesanal", precio: 5, imagen: "https://via.placeholder.com/150" },
    { nombre: "Sombrero de paja toquilla", precio: 25, imagen: "https://via.placeholder.com/150" },
    { nombre: "Bolso tejido", precio: 15, imagen: "https://via.placeholder.com/150" }
];

// Contenedor de productos en el DOM
const contenedor = document.getElementById("productos");

// Mostrar productos en la página
productos.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${p.imagen}" alt="${p.nombre}" width="100%">
        <h3>${p.nombre}</h3>
        <p>Precio: $${p.precio}</p>
        <button>Comprar</button>
    `;

    contenedor.appendChild(card);
});
