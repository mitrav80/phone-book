//delete button
function removeFormList(r,id){
  // console.log(r.parentNode.parentNode.id);
  var e = confirm ("Are you sure to remove ?");
  if (e == true) {
   var i = r.parentNode.parentNode.rowIndex;
   var xhttp = new XMLHttpRequest();
   
   xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
         document.getElementById("table1").deleteRow(i);
      }
   };
   xhttp.open("POST", "del.php", true);
   xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   xhttp.send("id="+id);
} 
}
function editList(edit){
      var x = document.getElementById("formEdit");
      if (x.style.display === "") {
       x.classList.toggle("show");
      } else {
       x.classList.toggle("dont_show");

      }
      // console.log(edit);
   
     var table=document.getElementById(edit);
     console.log(table.cells.length);
   //   for (i=0; i<table.cells.length; i++ ){
   //      //rIndex=this.rowIndex;
   //      console.log(table.cells[i].innerHTML);


    
     document.getElementById("id").value= table.cells[0].innerHTML;
     document.getElementById("fname").value= table.cells[1].innerHTML;
     document.getElementById("lname").value= table.cells[2].innerHTML;
     document.getElementById("phone").value= table.cells[3].innerHTML;
     document.getElementById("email").value= table.cells[4].innerHTML;

   //  }
   }

   function updateList()
   {
      var id = document.getElementById('id').value
      var table=document.getElementById(id);
      var fname = document.getElementById("fname").value;
      var lname = document.getElementById("lname").value;
      var phone = document.getElementById("phone").value;
      var email = document.getElementById("email").value;
      console.log(id);
      console.log(table);
      
      table.cells[0].innerHTML = id;
      table.cells[1].innerHTML = fname;
      table.cells[2].innerHTML = lname;
      table.cells[3].innerHTML = phone;
      table.cells[4].innerHTML = email;

      var x = document.getElementById("formEdit");
         if (x.style.display === "") {
         x.classList.toggle("show");
         } else {
         x.classList.toggle("dont_show");

         }
         var xhttp = new XMLHttpRequest();
      
         xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
               document.getElementById("table1").deleteRow(i);
            }
         };
         xhttp.open("POST", "update.php", true);
         xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
         xhttp.send("id="+id+"&fname="+fname+"&lname="+lname+"&phone="+phone+"&email="+email);
   } 
   
   function backButton()
      {
         window.history.back();
      
   }

   function backToAdd(){
      location.href ="http://localhost/mitra/phone-book/add.html";
   }

function search() {
      'use strict';

      var TableFilter = (function(myArray) {
          var search_input;

          function _onInputSearch(e) {
              search_input = e.target;
              var tables = document.getElementsByClassName(search_input.getAttribute('details'));
              myArray.forEach.call(tables, function(details) {
                  myArray.forEach.call(details.tBodies, function(tbody) {
                      myArray.forEach.call(tbody.rows, function(row) {
                          var text_content = row.textContent.toLowerCase();
                          var search_val = search_input.value.toLowerCase();
                          row.style.display = text_content.indexOf(search_val) > -1 ? '' : 'none';
                      });
                  });
              });
          }
      });
      document.getElementById("search").innerHTML = search();
   }function search() {
      // Declare variables
      var input, filter, table, tr, td, i;
      input = document.getElementById("search");
      filter = input.value.toUpperCase();
      table = document.getElementById("details");
      tr = table.getElementsByTagName("tr");
    
      // Loop through all table rows, and hide those who don't match the search query
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
