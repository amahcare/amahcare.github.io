var cn = "http://localhost:50753/requestnoti.ashx?Comando=";
var loader = document.getElementById("loader");

function registrarme(){
    $("#loader").addClass("loadFondo");
    loader.style.display = 'block';
    var nombre = document.getElementById("Nombre").value; 
    var email = document.getElementById("Correo").value; 
    var tel = document.getElementById("Telefono").value; 
    var cat = document.getElementById("Cat").value; 
    var com = document.getElementById("Com").value; 
    var datos = { Nombre: nombre, Email: email , Tel: tel, Categoria: cat, Com: com };

    datos=JSON.stringify(datos);   

    if(nombre != "" && email != "" && tel != "" && cat != ""){
        $.ajax({
            type: "post",
            url: cn + "SendTeam",
            crossDomain: true,
            data: datos,               
            dataType : 'json',     
            contentType : "application/json; charset=utf-8", 
            success: function (result) {
                loader.style.display = 'none';
                $("#loader").removeClass("loadFondo");
                $("#Nombre").val("");
                $("#Correo").val("");
                $("#Telefono").val("");
                $("#Cat").val("");
                $("#Com").val("");
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
            showToast('warning', 'Agregue los datos solicitados');
            $("#loader").removeClass("loadFondo");
    }
}