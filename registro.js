$(document).ready(function () {

    $("#btnEnviar").click(function () {
        $("#formulario").submit();
    })

    $("#btnGenerar").click(function () {
        let nombre = $("#txtNombre").val();
        let apellidos = $("#txtApellidos").val();
        let username = $("#txtUsername").val();
        let mail = $("#txtMail").val();
        let password = $("#txtPassword").val();
        let res = validarDatos(nombre, apellidos, username, mail, password)
        if (res) {
            $("#exampleModal").modal("show");
            $("#res").html("")
            $("#res").append("<p>");
            $("#res").append("Nombre Completo: " + nombre + " " + appaterno + "<br>");
            $("#res").append("Nombre de Usuario: " + username + "<br>");
            $("#res").append("Correo electronico: " + mail + "<br>");
            $("#res").append("Contraseña: " + password + "<br>");
            $("#res").append("</p>");
        }
    })

    function validarDatos(nombre, apellidos, username, mail, password) {
        const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,12}$/;

        if (String(nombre).length < 3 || String(nombre).length > 20) {
            /* Validacion Nombre */
            $("#check").html("<div class='alert alert-danger w-50 mx-auto text-center' >Nombre debe tener largo entre 3 y 20 caracteres</div>");
        } else if (String(apellidos).length < 3 || String(apellidos).length > 70) {
            /* Validacion Apellidos */
            $("#check").html("<div class='alert alert-danger w-50 mx-auto text-center' >Usuario debe tener un maximo de 15 caracteres</div>");
        } else if (String(username).length >= 15) {
            /* Validacion Nombre de Usuario */
            $("#check").html("<div class='alert alert-danger w-50 mx-auto text-center' >El correo debe ser existente </div>");
        } else if (!mailRegex.test(mail)) {
            /* Validacion Correo Electrónico */
            $("#check").html("<div class='alert alert-danger w-50 mx-auto text-center' >Crea una contraseña segura </div>");
        } else if (!passwordRegex.test(password)) {
            /* Validacion Contraseña */
            $("#check").html("<div class='alert alert-danger w-50 mx-auto text-center'> Contraseña debe tener entre 8 y 12 caracteres, e incluir una mayúscula, una minúscula, un número y un caracter especial</div>");
        } else {
            /* Confirmacion :D */
            return true;
        }
        return false;
    }
});
