function traerInformacion(){
    $.ajax({
        url:"https://ga8471d13e5a4c3-tiendainv.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/proveedor/proveedor",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            $("#resultado").empty();
            pintarRespuesta(respuesta.items);
        }
        });

}
function pintarRespuesta(items){

    let mytable="<table>";
    mytable+="<td>"+"ID"+"</td>"
    mytable+="<td>"+"NOMBRE"+"</td>"
    mytable+="<td>"+"CORREO"+"</td>"
    mytable+="<td>"+"TELEFONO"+"</td>"
    
    for(i=0;i<items.length;i++){
        mytable+="<tr>";
        mytable+="<td>"+items[i].id+"</td>";
        mytable+="<td>"+items[i].nombre+"</td>";
        mytable+="<td>"+items[i].correo+"</td>";
        mytable+="<td>"+items[i].telefono+"</td>";
        mytable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button></td>";
        mytable+="</tr>";
    }
    mytable+="</table>";
    $("#resultado").append(mytable);

}

function guardarInformacion(){
    let myData={
        id:$("#ID").val(),
        nombre:$("#NOMBRE").val(),
        correo:$("#CORREO").val(),
        telefono:$("#TELEFONO").val(),
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ga8471d13e5a4c3-tiendainv.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/proveedor/proveedor",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#ID").val("");
        $("#NOMBRE").val("");
        $("#CORREO").val("");
        $("#TELEFONO").val("");
            
            traerInformacion();
            alert("Se ha guardado la información")
        }
        });
}

function editarInformacion(){
    let myData={
        id:$("#ID").val(),
        nombre:$("#NOMBRE").val(),
        correo:$("#CORREO").val(),
        telefono:$("#TELEFONO").val(),
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ga8471d13e5a4c3-tiendainv.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/proveedor/proveedor",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#ID").val("");
        $("#NOMBRE").val("");
        $("#CORREO").val("");
        $("#TELEFONO").val("");
            traerInformacion();
            alert("Se ha actualizado la informacion")
        }
        });
}

function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ga8471d13e5a4c3-tiendainv.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/proveedor/proveedor",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("Se ha eliminado la informacion")
        }
        });
}