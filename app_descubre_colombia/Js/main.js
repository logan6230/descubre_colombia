$(document).ready(function () {
    const products = [
      {
        nombre: "Ecoparque los Saltos",
        lugar: "Antioquia",
        informacion: "Más Información",
        img: "parque6.jpg",
        distancia: "1 Km",
        url: "servicios.html",
      },
      {
        nombre: "Las Flores",
        lugar: "Caldas",
        informacion: "Más Información",
        img: "parque1.jpg",
        distancia: "120 Km",
        url: "servicios.html",
      },
      {
        nombre: "El Silencio",
        lugar: "Santa Marta",
        informacion: "Más Información",
        img: "parque2.jpg",
        distancia: "15 Km",
        url: "servicios.html",
      },
      {
        nombre: "Café Mañanero",
        lugar: "Quindío",
        informacion: "Más Información",
        img: "parque3.jpg",
        distancia: "5 Km",
        url: "servicios.html",
      },
      {
        nombre: "El Fin del Mundo",
        lugar: "Putumayo",
        informacion: "Más Información",
        img: "parque4.jpg",
        distancia: "200 Km",
        url: "servicios.html",
      },
      {
        nombre: "Las Cascadas",
        lugar: "Huila",
        informacion: "Más Información",
        img: "parque5.jpg",
        distancia: "45 Km",
        url: "servicios.html",
      },
    ];
  
    addProducts(products);
  });
  
  function addProducts(products) {
    const productHTML = products.map(({ nombre, lugar, informacion, img, distancia, url }) => `
      <div class='col-md-4 col-sm-4'>
        <div class='card container'>
          <div class='card-body'>
            <img src='img/${img}' alt='${nombre}' />
            <p class='p-nombre'>${nombre}</p>
            <p class='p-lugar'>${lugar}</p>
            <a href='${url}'>
              <p class='badge badge-pill badge-primary'>${informacion}</p>
            </a>
            <div>
              <p class='badge badge-pill badge-secondary'>${distancia}</p>
            </div>
          </div>
        </div>
      </div>
    `).join("");
  
    $(".add").append(productHTML);
  }
  