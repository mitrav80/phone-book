
<?php
// delete from database
print_r($_POST);
$connect = mysqli_connect('localhost','root', '');

if ($connect->connect_error) {
    die("Connection failed: " . $connect->connect_error);
  }
  echo "Connected successfully";
  
  $sql = "Delete from phonebook.details where ID=$_POST[id]";


if(mysqli_query($connect, $sql)){
    echo "Records deleted successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($connect);
}

$connect->close();
// header("Location: http://localhost/mitra/phone-book/");
?>

