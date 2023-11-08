<?php
/*
	CRUD creado por Oscar Amado
	Contacto: oscarfamado@gmail.com
*/
class administratorController extends Administrator{

	function index(){
		require_once('views/all/header.php');
		require_once('views/all/nav.php');
		require_once('views/index/index.php');
		require_once('views/index/modals.php');
		require_once('views/all/footer.php');
	}

	function table_users(){
		?>
		<table class="table table-bordered">
			<thead>
				<tr>
				<th>id</th>
				<th>Nombres</th>
				<th>Laboratorio</th>
				<th>Via de Administracion</th>
				<th>Contenido</th>
				<th>Presentacion</th>
				<th>Dosis</th>
				</tr>
			</thead>
			<tbody >		
		<?php
		foreach (parent::get_view_users()	as $data) {
		?>
		<tr>
			<td><?php echo $data->id_user; ?> </td>
			<td><?php echo $data->nombre_user; ?> </td>
			<td><?php echo $data->laboratorio_user; ?> </td>
			<td><?php echo $data->via_de_admin_user; ?> </td>
			<td><?php echo $data->contenido_user; ?> </td>
			<td><?php echo $data->presentacion_user; ?> </td>
			
			<td>
			  <div class="btn-group">
			    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
			    Seleccionar <span class="caret"></span></button>
			    <ul class="dropdown-menu" role="menu">
			      <li><a href="#" onclick="ModalUpdate('<?php echo $data->id_user; ?>','<?php echo $data->nombre_user; ?>','<?php echo $data->laboratorio_user; ?>','<?php echo $data->via_de_admin_user; ?> ','<?php echo $data->contenido_user; ?> ','<?php echo $data->presentacion_user; ?> ');">Actualizar</a></li>
			      <li><a href="#" onclick="deleteUser('<?php echo $data->id_user; ?>');">Borrar</a></li>
			    </ul>
			  </div>
			</td>
		</tr>
		<?php
		}
		?>
			</tbody>
		</table>	
	<?php	
    }
    
	function deleteuser(){		
			parent::set_delete_user($_REQUEST['id']);		
    }

	function registeruser(){
		$data = array(
					'nombre' 		=> $_REQUEST['nombre'],
					'laboratorio' => $_REQUEST['laboratorio'],
					'via_de_admin'		=> $_REQUEST['via_de_admin'],
					'contenido'		=> $_REQUEST['contenido'],
					'Presentacion'		=> $_REQUEST['Presentacion']
					);		
					parent::set_register_user($data);		
    }    
    
	function updateuser(){
		$data = array(
					'id'		=> $_REQUEST['id'],
					'nombre' 		=> $_REQUEST['nombre'],
					'laboratorio' => $_REQUEST['laboratorio'],
					'via_de_admin'		=> $_REQUEST['via_de_admin'],
					'contenido'		=> $_REQUEST['contenido'],
					'presentacion'		=> $_REQUEST['presentacion']
					);		
			parent::set_update_user($data);		
	}    
    
}

