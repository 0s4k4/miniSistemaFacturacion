document.addEventListener("DOMContentLoaded",function () {

    var categoria;

    MostrarCategorias();

    //boton que vuelvea la pagina
    $('#btnFinalizar').click(function () {
        window.location = '../index.php';
    });

    //boton que muestra el dialogo de agregar
    $('#btnAgregar').click(function () {
        LimpiarFormulario();
        $('#btnConfirmarAgregar').show();
        $('#btnModificar').hide();
        $('#btnBorrar').hide();
        $('#ModalEditar').modal();
    });

    $('#btnConfirmarAgregar').click(function () {
        RecolectarDatosFormulario();
        if (!EntradaFormularioCorrecto())
            return;
        $("#ModalEditar").modal('hide');
        EnviarInformacion("agregar");
    });

    $('#btnBorrar').click(function () {
        $("#ModalEditar").modal('hide');
        $("#ModalConfirmarBorrar").modal();
    });

    $('#btnConfirmarBorrado').click(function () {
        $("#ModalConfirmarBorrar").modal('hide');
        $RecolectarDatosFormulario();
        $("#ModalEditar").modal('hide');
        EnviarInformacion("borrar");
    });

    $('#btnModificar').click(function () {
        RecolectarDatosFormulario();
        if(!EntradaFormularioCorrecto())
            return;
        $("#ModalEditar").modal('hide');
        EnviarInformacion("modificar");
    });

})