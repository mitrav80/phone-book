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
          <th class ='header'>ID</th> 

          <th class ='header'>First Name</th>

          <th class ='header'>Last Name</th>

          <th class ='header'>Phone Number</th>

          <th class ='header'>Email Adress</th>

          </tr>";

 while($row = mysqli_fetch_assoc($result)) {

    echo "<tr id=$row[ID]>";

    echo "<td>" . $row["ID"] . "</td>";
    

    echo "<td>" . $row["Firstname"] . "</td>";
      
    echo "<td>" . $row["Lastname"] . "</td>";
      
    echo "<td>" . $row['Phone'] . "</td>";
      
    echo "<td>" . $row['Email'] . "</td>";

    echo "<td> <button onclick = 'removeFormList(this,$row[ID])' class='remove' > Delete </button> </td>";

    echo "<td> <button onclick = 'editList($row[ID])' class='edit' > Edit </button> </td>";

    
      
     echo "</tr>";
      
        }
      
      echo "</table><br><br>";

  } else {
    echo "0 results";
  }
  echo " <button onclick ='backToAdd()' class='addnew'> Addnew </button> </td>";


echo " <div id='formEdit' class='dont_show'> 
          ID: <input type='text' id='id' name='ID' readonly><br><br>   
          First Name: <input type='text' name='fname' id='fname'><br><br>
          last Name: <input type='text' name='lname' id='lname'><br><br>
          Phone Number: <input type='text' name='phone' id='phone'><br><br>
          Email: <input type='text' name='email' id='email'><br><br>
          <button onclick='updateList()' id='update' class='update1'>Update</button>

      </div> ";


$connect->close();