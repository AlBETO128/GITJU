function objectAjax(){
	var xmlhttp = false;
	try{
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e){
		try{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");			
		} catch (E){
			xmlhttp = false;	
		}		
	}
	if(!xmlhttp && typeof XMLHttpRequest!='undefined'){
		xmlhttp = new XMLHttpRequest();
	}
	return xmlhttp;
}
//Inicializo automaticamente la funcion read al entrar a la pagina o recargar la pagina;
addEventListener('load', read, false);

function read(){
        $.ajax({        
        		type: 'POST',
                url:   '?c=administrator&m=table_users',               
                beforeSend: function () {
                        $("#information").html("Procesando, espere por favor...");
                },
                success:  function (response) {
                        $("#information").html(response);
                }
        });
}

function register(){
	nombre 		= document.formUser.nombre.value;
	laboratorio 	= document.formUser.laboratorio.value;
	via_de_admin 		= document.formUser.via_de_admin.value;
	contenido 			= document.formUser.contenido.value;
	presentacion 			= document.formUser.presentacion.value;
	ajax = objectAjax();
	ajax.open("POST", "?c=administrator&m=registeruser", true);
	ajax.onreadystatechange=function() {
		if(ajax.readyState==4){			
			read();			
			alert('Los datos guardaron correctamente.');			
			$('#addUser').modal('hide');
		}
	}
ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
ajax.send("nombre="+nombre+"&laboratorio="+laboratorio+"&via_de_admin="+via_de_admin+"&contenido="+contenido+"&presentacion="+presentacion);
}	

function update(){
	id 			= document.formUserUpdate.id.value;
	nombre 		= document.formUserUpdate.nombre.value;
	laboratorio 	= document.formUserUpdate.laboratorio.value;
	via_de_admin 		= document.formUserUpdate.via_de_admin.value;
	contenido 		= document.formUserUpdate.contenido.value;
	presentacion 		= document.formUserUpdate.presentacion.value;
	ajax = objectAjax();
	ajax.open("POST", "?c=administrator&m=updateuser", true);
	ajax.onreadystatechange=function() {
		if(ajax.readyState==4){
			read();
			$('#updateUser').modal('hide');
		}
	}
ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
ajax.send("nombre="+nombre+"&laboratorio="+laboratorio+"&via_de_admin="+via_de_admin+"&contenido="+contenido+"&presentacion="+presentacion+"&id="+id);

}

function deleteUser(id){	
	if(confirm('¿Esta seguro de eliminar este registro?')){						
	ajax = objectAjax();
	ajax.open("POST", "?c=administrator&m=deleteuser", true);
	ajax.onreadystatechange=function() {
		if(ajax.readyState==4){			
			read();		
		}
	}
	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send("id="+id);
	}
}

function ModalRegister(){
	$('#addUser').modal('show');
}

function ModalUpdate(id,nombre,laboratorio,via_de_admin,contenido,presentacion){			
	document.formUserUpdate.id.value 			= id;
	document.formUserUpdate.nombre.value 			= nombre;
	document.formUserUpdate.laboratorio.value 	= laboratorio;
	document.formUserUpdate.via_de_admin.value 		= via_de_admin;
	document.formUserUpdate.contenido.value 		= contenido;
	document.formUserUpdate.presentacion.value 		= presentacion;
	$('#updateUser').modal('show');
}

/*
	CRUD creado por Oscar Amado
	Contacto: oscarfamado@gmail.com
*/