

function traerInformacion(){


    $.ajax({
        url:"https://ga8471d13e5a4c3-tiendainv.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/inventario/inventario",
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
    let myTable="<table>";
    myTable+="<td>"+"ID"+"</td>"
    myTable+="<td>"+"CATEGORIA"+"</td>";
    myTable+="<td>"+"DESCRIPCION"+"</td>";
    myTable+="<td>"+"CANTIDAD DISPONIBLE"+"</td>";
    myTable+="<td>"+"LOTE"+"</td>";
    myTable+="<td>"+"ID PROVEEDOR"+"</td>";
    myTable+="<td>"+"CODIGO PRODUCTO"+"</td>";
    for(i=0;i<items.length; i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].categoria+"</td>";
        myTable+="<td>"+items[i].descripcion+"</td>";
        myTable+="<td>"+items[i].cantidad_disponible+"</td>";
        myTable+="<td>"+items[i].lote+"</td>";
        myTable+="<td>"+items[i].cod_id_prov+"</td>";
        myTable+="<td>"+items[i].cod_produc+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button></td>";
        myTable+="</tr>";

    }
    myTable+="</table>";
    $("#resultado").append(myTable);
}
function guardarInformacion(){
    let myData={
        id:$("#ID").val(),
        categoria:$("#CATEGORIA").val(),
        descripcion:$("#DESCRIPCION").val(),
        cantidad_disponible:$("#CANTIDAD_DISPONIBLE").val(),
        lote:$("#LOTE").val(),
        cod_id_prov:$("#COD_ID_PROV").val(),
        cod_produc:$("#COD_PRODUC").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ga8471d13e5a4c3-tiendainv.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/inventario/inventario",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            
            $("#ID").val();
            $("#CATEGORIA").val("");
            $("#DESCRIPCION").val("");
            $("#CANTIDAD_DISPONIBLE").val("");
            $("#LOTE").val("");
            $("#COD_ID_PROV").val("");
            $("#COD_PRODUC").val("");
            traerInformacion();
            alert("se ha guardado el dato")
        }
        });
}
function editarInformacion(){
    let myData={
        id:$("#ID").val(),
        categoria:$("#CATEGORIA").val(),
        descripcion:$("#DESCRIPCION").val(),
        cantidad_disponible:$("#CANTIDAD_DISPONIBLE").val(),
        lote:$("#LOTE").val(),
        cod_id_prov:$("#COD_ID_PROV").val(),
        cod_produc:$("#COD_PRODUC").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData)
    $.ajax({
        url:"https://ga8471d13e5a4c3-tiendainv.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/inventario/inventario",
    type:"PUT",
    data:dataToSend,
    contentType:"application/JSON",
    datatype:"JSON",
    success:function(respuesta){
        $("#resultado").empty();
        $("#ID").val();
        $("#CATEGORIA").val("");
        $("#descripcion").val("");
        $("#CANTIDAD_DISPONIBLE").val("");
        $("#LOTE").val("");
        $("#COD_ID_PROV").val("");
        $("#COD_PRODUC").val("");
        traerInformacion();
        alert("se ha actualizado")
    }
    });
} 
function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://ga8471d13e5a4c3-tiendainv.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/inventario/inventario",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("se ha elimidado...");
        }
    });
}
