<?php
$connect = mysqli_connect('localhost','root', '');

if ($connect->connect_error) {
    die("Connection failed: " . $connect->connect_error);
  }
  
$sql = "select * from phonebook.details";
$result = mysqli_query($connect, $sql);
if (mysqli_num_rows($result) > 0) {

    echo "<table border='1'>

<tr>

<th>First Name</th>

<th>Last Name</th>

<th>Phone Number</th>

<th>Email Adress</th>

</tr>";

 while($row = mysqli_fetch_assoc($result)) {
    echo "<tr>";

    echo "<td>" . $row["Firstname"] . "</td>";
      
    echo "<td>" . $row["Lastname"] . "</td>";
      
    echo "<td>" . $row['Phone'] . "</td>";
      
    echo "<td>" . $row['Email'] . "</td>";
      
     echo "</tr>";
      
        }
      
      echo "</table>";

  } else {
    echo "0 results";
  }

$connect->close();