<?php
// update from database
// print_r($_POST);
$connect = mysqli_connect('localhost','root', '');

if ($connect->connect_error) {
    die("Connection failed: " . $connect->connect_error);
  }
  echo "Connected successfully";
  
  $sql = "Update  phonebook.details set  firstname='$_POST[fname]', lastname='$_POST[lname]',phone=$_POST[phone],email='$_POST[email]' where ID=$_POST[id]";


if(mysqli_query($connect, $sql)){
    echo "Records updated successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($connect);
}

$connect->close();
// header("Location: http://localhost/mitra/phone-book/");
 ?>

