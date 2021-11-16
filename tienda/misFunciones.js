function traerInformacion(){


    $.ajax({
        url:"https://g4211eec2985e64-cloud.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
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
    myTable+="<td>"+"id"+"</td>"
    myTable+="<td>"+"name"+"</td>";
    myTable+="<td>"+"email"+"</td>";
    myTable+="<td>"+"age"+"</td>";
    for(i=0;i<items.length; i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button></td>";
        myTable+="</tr>";

    }
    myTable+="</table>";
    $("#resultado").append(myTable);
}
function guardarInformacion(){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g4211eec2985e64-cloud.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacion();
            alert("se ha guardado el dato")
        }
        });
}
function editarInformacion(){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData)
    $.ajax({
        url:"https://g4211eec2985e64-cloud.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
    type:"PUT",
    data:dataToSend,
    contentType:"application/JSON",
    datatype:"JSON",
    success:function(respuesta){
        $("#resultado").empty();
        $("#id").val("");
        $("#name").val("");
        $("#email").val("");
        $("#age").val("");
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
        url:"https://g4211eec2985e64-cloud.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
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
