<?php
include 'pay.html';
include('D:\xampp\htdocs\serie_tp6\connect.php');

if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}

// Insert data into table
$Name = $_POST['Name'];
$cvv = $_POST['cvv'];
$date_expiration = $_POST['expiry-date'];
$nom_titulaire = $_POST['cardholder-name'];
$numCarte = $_POST['card-number'];

$sql = "INSERT INTO reservation (Name, cvv, date_expiration, nom_titulaire, numCarte) VALUES ('$Name', '$cvv', '$date_expiration', '$nom_titulaire', '$numCarte')";

if ($con->query($sql) === TRUE) {
  echo "Payment information added successfully";
} else {
  echo "Error adding payment information: " . $con->error;
}

$con->close();

?>