<?php
$firstName ='';
$LastName ='';
$phone ='';
$email ='';

if ($_POST['FirstName']) {
    $firstName = $_POST['FirstName'];
}

if ($_POST['LastName']) {
    $LastName = $_POST['LastName'];
}
if ($_POST['phone']) {
    $phone = $_POST['phone'];
}
if ($_POST['Email']) {
    $email = $_POST['Email'];
}


$connect = mysqli_connect('localhost','root', '');

if ($connect->connect_error) {
    die("Connection failed: " . $connect->connect_error);
  }
  echo "Connected successfully";
  
  $sql = "INSERT INTO phonebook.details (firstname, lastname,phone, email)
VALUES ('$firstName', '$LastName','$phone','$email')";

if(mysqli_query($connect, $sql)){
    echo "Records inserted successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($connect);
}

$connect->close();
header("Location: http://localhost/mitra/phone-book/");
?>

  