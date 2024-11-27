$(document).ready(function () {
    const products = [
      {
        nombre: "Kayak",
        descripcion: "Disfruta de una aventura inolvidable por nuestro río rápido y correntoso, te brindamos seguridad para que goces una experiencia 100% divertida",
        informacion: "Reserva tu aventura",
        img: "kayak.jpg",
        precio: 50000,
      },
      {
        nombre: "Casa en el árbol",
        descripcion: "Olvida el estrés de la ciudad y pasa una noche inolvidable en nuestras casas elevadas, suspendidas en los árboles. Consigue llegar a una segunda dimensión.",
        informacion: "Reserva tu aventura",
        img: "casaArbol.jpg",
        precio: 70000,
      },
      {
        nombre: "Sendero Ancestral",
        descripcion: "Recorre los caminos de la vida y libera las malas energías en nuestros senderos. No esperes a que te lo cuenten, experiméntalo tú mismo.",
        informacion: "Reserva tu aventura",
        img: "sendero.jpg",
        precio: 30000,
      },
      {
        nombre: "Amanecer sureño",
        descripcion: "Pasa la mejor noche de tu vida en nuestra zona de camping al aire libre y experimenta un hermoso paisaje al ver el amanecer en el sur del país.",
        informacion: "Reserva tu aventura",
        img: "amanecer.jpg",
        precio: 20000,
      },
      {
        nombre: "Tour del más allá",
        descripcion: "Agrupa las aventuras en un solo paquete: camina, escala, cruza ríos y disfruta de nuestro paisaje de cascadas. Al final del tour, recordarás que fuiste más allá.",
        informacion: "Reserva tu aventura",
        img: "tour.jpg",
        precio: 58000,
      },
      {
        nombre: "Conexión montañera",
        descripcion: "Vive algo diferente y conéctate con las montañas de nuestro paisaje. Cada espacio será una conexión única.",
        informacion: "Reserva tu aventura",
        img: "conexion.jpg",
        precio: 25000,
      },
    ];
  
    addProducts(products);
  });
  
  function addProducts(products) {
    const formatter = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    });
  
    const productHTML = products.map(({ nombre, descripcion, informacion, img, precio }) => `
      <div class='col-md-4 col-sm-4'>
        <div class='card container'>
          <div class='card-body'>
            <img src='img/servicios/${img}' alt='${nombre}' />
            <p class='p-nombre badge badge-pill badge-success'>${nombre}</p>
            <p class='p-nombre'>${descripcion}</p>
            <a href='formulario.html'>
              <p class='badge badge-pill badge-primary'>${informacion}</p>
            </a>
            <div>
              <p class='badge badge-pill badge-secondary'>${formatter.format(precio)}</p>
            </div>
          </div>
        </div>
      </div>
    `).join("");
  
    $(".add").append(productHTML);
  }
  