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



// add button
//function Additem(){
 //  let Fname = document.getElementById("fname").value;
   // Lname = document.getElementById("lname").value;
  // let Phone = document.getElementById("unit").value;
 
//}