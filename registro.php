<?php

$servername = "localhost"; // Cambiar si es necesario
$username = "root"; // Cambiar al nombre de usuario de tu base de datos
$password = ""; // Cambiar a la contraseña de tu base de datos
$database = "usuarios"; // Cambiar al nombre de tu base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Comprobar si se han enviado datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $apellidos = $_POST['apellidos'];
    $email = $_POST['email'];
    $contraseña = $_POST['contrasena'];

    // Preparar la consulta SQL para insertar los datos en la tabla
    $sql = "INSERT INTO usuarios (nombre, apellidos, email, contrasena) VALUES ('$nombre', '$apellidos', '$email', '$contraseña')";

    // Ejecutar la consulta y verificar si se ha insertado correctamente
    if ($conn->query($sql) === TRUE) {
        echo "Registro exitoso";
    } else {
        echo "Error al registrar: " . $sql . "<br>" . $conn->error;
    }
}

// Cerrar conexión
$conn->close();
?>