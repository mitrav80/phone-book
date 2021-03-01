var fs = require("fs");
console.log("Going to write into existing file");
// Open a new file with name input.txt and write Simply Easy Learning! to it.
fs.writeFile('input.txt', 'Simply Easy Learning!', function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("Data written successfully!");
   console.log("Let's read newly written data");
   // Read the newly written file and print all of its content on the console
   fs.readFile('input.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });
});
//delete button
function removeFormList(r){
  // console.log(r.parentNode.parentNode.id);
  var e = confirm ("Are you sure to remove ?");
  if (e == true) {
   var i = r.parentNode.parentNode.rowIndex;
   document.getElementById("table1").deleteRow(i);
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
    console.log(id);
    console.log(table);
    table.cells[0].innerHTML = document.getElementById("fname").value;
    table.cells[1].innerHTML = document.getElementById("fname").value;
    table.cells[2].innerHTML = document.getElementById("lname").value;
    table.cells[3].innerHTML = document.getElementById("phone").value;
    table.cells[4].innerHTML = document.getElementById("email").value;
    var x = document.getElementById("formEdit");
      if (x.style.display === "") {
       x.classList.toggle("show");
      } else {
       x.classList.toggle("dont_show");

      }
   };


// add button
//function Additem(){
 //  let Fname = document.getElementById("fname").value;
   // Lname = document.getElementById("lname").value;
  // let Phone = document.getElementById("unit").value;
 
//}