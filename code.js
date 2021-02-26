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
function editList(){
      var x = document.getElementById("formEdit");
      if (x.style.display === "") {
       x.classList.toggle("show");
      } else {
       x.classList.toggle("dont_show");

     }
   
     var table=document.getElementById("details"),rIndex;
     for (i=1; i<table.row.length; i++ ){
        rIndex=this.rowIndex;


     document.getElementById("fname").value= this.cells[0].innerHTML;
     document.getElementById("lname").value= this.cells[1].innerHTML;
     document.getElementById("phone").value= this.cells[2].innerHTML;
     document.getElementById("email").value= this.cells[3].innerHTML;

    };

    table.rows[rIndex].cells[0].innerHTML = Document.getElementById("fname");
    table.rows[rIndex].cells[1].innerHTML = Document.getElementById("lname");
    table.rows[rIndex].cells[2].innerHTML = Document.getElementById("phone");
    table.rows[rIndex].cells[3].innerHTML = Document.getElementById("email");
   };


// add button
//function Additem(){
 //  let Fname = document.getElementById("fname").value;
   // Lname = document.getElementById("lname").value;
  // let Phone = document.getElementById("unit").value;
 
//}