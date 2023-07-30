//var cn = "http://localhost:50753/requestnoti.ashx?Comando=";
var cn = "http://amahcare-prod.us-east-1.elasticbeanstalk.com/REQ.ashx?Comando=";
var loader = document.getElementById("loader");

function registrarmeNews(){
    $("#loader").addClass("loadFondo");
    loader.style.display = 'block';
    var email = document.getElementById("CorreoNews").value; 

    var datos = { Email: email, App: "Amah" };

    datos=JSON.stringify(datos);   

    if( email ){
        $.ajax({
            type: "post",
            url: cn + "SendNews",
            crossDomain: true,
            data: datos,               
            dataType : 'json',     
            contentType : "application/json; charset=utf-8", 
            success: function (result) {
                loader.style.display = 'none';
                $("#loader").removeClass("loadFondo");
                $("#CorreoNews").val("");
                showToast('success', 'Registro agregado');
                
            },
            error: function (jqXmlHttpRequest, textStatus, errorThrown) {   
                loader.style.display = 'none';
                console.log(jqXmlHttpRequest, textStatus, errorThrown);
                showToast('error', 'Ocurrió un error');
            }
        });
    }
    else{
            loader.style.display = 'none';
            //alert("Agregue los datos");
            $("#loader").addClass("loadFondo");
            showToast('warning', 'Agregue su correo');
            $("#loader").removeClass("loadFondo");
    }
}