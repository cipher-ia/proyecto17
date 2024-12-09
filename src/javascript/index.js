$(function() {

    $('#listar').on("click", function(){

        $.get("https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes"),function(data) {

            $('#resListar').text("Ok");
        }

        
        
    })


    $('#leer').on("click", function () {
        $.get("https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes/1", function (data) {
            $('#resLeer').text("Ok");
        });
    });

$('#crear').on("click", function () {
    $.post("https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes", {
        nombre: "Irving",
        valor: 2910,
        
        function (data) {
        $('#resCrear').text("Ok");

    } 
    });
});


$('#actualizar').on("click", function () {
    $.ajax({
        url: "https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes/1",
        type: "PUT",
        data: JSON.stringify({ nombre: "Dato Actualizado", valor: 2991 }),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            $('#resActualizar').text("Ok");
        }
    });
});

$('#borrar').on("click", function () {
    $.ajax({
        url: "https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes/1",
        type: "DELETE",
        success: function () {
            $('#resBorrar').text("Ok");
        }
    });
});

});









