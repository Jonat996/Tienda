function traerInformacion(){
    $.ajax({
        url:"https://ga8471d13e5a4c3-tiendainv.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/producto/producto",
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
    mytable+="<td>"+"codigo"+"</td>"
    mytable+="<td>"+"nombre"+"</td>"
    mytable+="<td>"+"fecha_vencimiento"+"</td>"
    mytable+="<td>"+"stock"+"</td>"
    
    for(i=0;i<items.length;i++){
        mytable+="<tr>";
        mytable+="<td>"+items[i].codigo+"</td>";
        mytable+="<td>"+items[i].nombre+"</td>";
        mytable+="<td>"+items[i].fecha_vencimiento+"</td>";
        mytable+="<td>"+items[i].stock+"</td>";
        mytable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button></td>";
        mytable+="</tr>";
    }
    mytable+="</table>";
    $("#resultado").append(mytable);

}

function guardarInformacion(){
    let myData={
        codigo:$("#CODIGO").val(),
        nombre:$("#NOMBRE").val(),
        fecha_vencimiento:$("#FECHA_VENCIMIENTO").val(),
        stock:$("#STOCK").val(),
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ga8471d13e5a4c3-tiendainv.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/producto/producto",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#CODIGO").val("");
        $("#NOMBRE").val("");
        $("#FECHA_VENCIMIENTO").val("");
        $("#STOCK").val("");
            
            traerInformacion();
            alert("Se ha guardado la información")
        }
        });
}

function editarInformacion(){
    let myData={
        codigo:$("#CODIGO").val(),
        nombre:$("#NOMBRE").val(),
        fecha_vencimiento:$("#FECHA_VENCIMIENTO").val(),
        stock:$("#STOCK").val(),
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ga8471d13e5a4c3-tiendainv.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/producto/producto",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#CODIGO").val("");
        $("#NOMBRE").val("");
        $("#FECHA_VENCIMIENTO").val("");
        $("#STOCK").val("");
            traerInformacion();
            alert("Se ha actualizado la informacion")
        }
        });
}

function borrarElemento(idElemento){
    let myData={
        codigo:idElemento
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ga8471d13e5a4c3-tiendainv.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/producto/producto",
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