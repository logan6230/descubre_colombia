let registros = [];
function agregarRegistro() {

    function Usuario(nombreUsuario, anoNacimiento, contrasenaUsuario) {
        this.usuario = nombreUsuario;
        this.anoNacimiento = anoNacimiento;
        this.contrasena = contrasenaUsuario;
    }

    var usuario = document.getElementById("nombre_usuario").value;
    var anoNacimiento = (document.getElementById("anoNacimiento_usuario").value);
    var contrasena = document.getElementById("contrasena_usuario").value;

    registroNuevo = new Usuario(usuario, anoNacimiento, contrasena);
    registros.push(registroNuevo);
    
    //EncontrarUsuarioPorEdad(registros);
    

}

function EncontrarUsuarioPorEdad(arreglo) {
    usuarioMayor="";
    var edadMayor=2023;
    arreglo.forEach(element => {

        if(element.anoNacimiento <= edadMayor){
            edadMayor = element.anoNacimiento;
            usuarioMayor =  element;
        }
    });
    //console.log("el eusuario mayor es",usuarioMayor);
    return usuarioMayor;
}
//console.log(registros);
//console.log("Este es el arreglo", registros);

module.exports.registros = registros;
module.exports.EncontrarUsuarioPorEdad = EncontrarUsuarioPorEdad;
module.exports.agregarRegistro = agregarRegistro;