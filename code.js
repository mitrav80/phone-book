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
   console.log(r.parentNode.parentNode.id);
   confirm ("Are you sure to remove ?");
   var i = r.parentNode.parentNode.rowIndex;
   document.getElementById("table1").deleteRow(i);
}

// add button
//function Additem(){
 //  let Fname = document.getElementById("fname").value;
   // Lname = document.getElementById("lname").value;
  // let Phone = document.getElementById("unit").value;
 
//}