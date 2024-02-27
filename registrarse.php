<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "unitydesk";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Recoger los datos del formulario
$nombre = $_POST['nombre'];
$apellidos = $_POST['apellidos'];
$email = $_POST['email'];
$contrasena = $_POST['contrasena'];

// Preparar la sentencia SQL
$sql = "INSERT INTO usuarios (nombre, apellidos, email, contrasena)
VALUES ('$nombre', '$apellidos', '$email', '$contrasena')";

// Ejecutar la sentencia SQL
if ($conn->query($sql) === TRUE) {
  echo "Nuevo registro creado con éxito";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerrar la conexión
$conn->close();
?>