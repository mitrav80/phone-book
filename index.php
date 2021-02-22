<?php
$connect = mysqli_connect('localhost','root', '');

if ($connect->connect_error) {
    die("Connection failed: " . $connect->connect_error);
  }
  echo "Connected successfully";
  
$sql = "select * from phonebook.details";
$result = mysqli_query($connect, $sql);
if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
      echo "first name: " . $row["Firstname"]. "last Name: " . $row["Lastname"]. "Phone: " . $row["Phone"]. "email: " .$row["email"] "<br>";
    }
  } else {
    echo "0 results";
  }

$connect->close();