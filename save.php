<?php
$firstName ='';
$LastName ='';
$phone ='';
$email ='';

if (isset($_POST['FirstName'])) {
    $firstName = $_POST['FirstName'];
    echo $firstName;    
}

if (isset($_POST['LastName'])) {
    $LastName = $_POST['LastName'];
}
if (isset($_POST['phone'])) {
    $phone = $_POST['phone'];
}
if (isset($_POST['Email'])) {
    $email = $_POST['Email'];
}

if  ($firstName && $LastName && $phone && $email ){
    
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

}
header("Location: http://localhost/mitra/phone-book/");


  