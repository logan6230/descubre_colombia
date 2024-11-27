function mostrarDatos(){
    $.ajax({
        type:"POST",
        url:"../vista/usuariosRegistrados.php",
        succes:function(r){
            $('#tablaDatos').html(r);
        }
    })
}