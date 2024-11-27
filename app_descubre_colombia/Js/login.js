var url = "http://localhost/descubre_colombia/api_descubre_colombia/";

var usuario = document.getElementById("usuario");
var password = document.getElementById("pass");
var menus = document.getElementById("menu");

function iniciarSesion() {
  var datosEnviar = { usuario: this.usuario.value, password: this.pass.value };

  fetch(url + "auth", { method: "POST", body: JSON.stringify(datosEnviar) })
    .then((respuesta) => respuesta.json())
    .then((datosRespuesta, array) => {
      if (!datosRespuesta) {        
        location.href = url + "logica/indexAdministrador.php";
      } else {
        alert(datosRespuesta.result.error_msg);
      }
    })
    .catch(console.log(datosEnviar));
}
