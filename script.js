let name = document.getElementById("nameInput").value;
let profession = document.getElementById("professionInput").value;
let age = document.getElementById("ageInput").value;

function addData(){
  
}


let newElement = document.createElement("h3");

let newText = document.createTextNode("this is just text");
newElement.appendChild(newText);
document.getElementById("container2").appendChild(newElement);
console.log(newElement);