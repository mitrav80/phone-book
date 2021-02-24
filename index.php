<?php
$connect = mysqli_connect('localhost','root', '');

if ($connect->connect_error) {
    die("Connection failed: " . $connect->connect_error);
  }
  
$sql = "select * from phonebook.details";
$result = mysqli_query($connect, $sql);
if (mysqli_num_rows($result) > 0) {

    echo " <link rel='stylesheet' href='style.css'>

        <script src='code.js'></script>
        
        <table id='table1' class ='orginal' border = '1'>

          <tr>

          <th class ='header'>First Name</th>

          <th class ='header'>Last Name</th>

          <th class ='header'>Phone Number</th>

          <th class ='header'>Email Adress</th>

          </tr>";

 while($row = mysqli_fetch_assoc($result)) {
    echo "<tr id=$row[Phone]>";

    echo "<td>" . $row["Firstname"] . "</td>";
      
    echo "<td>" . $row["Lastname"] . "</td>";
      
    echo "<td>" . $row['Phone'] . "</td>";
      
    echo "<td>" . $row['Email'] . "</td>";

    echo "<td> <button onclick = 'removeFormList(this)' > Delete </button> </td>";

    echo "<td> <button> Edit </button> </td>";


      
     echo "</tr>";
      
        }
      
      echo "</table>";

  } else {
    echo "0 results";
  }


$connect->close();