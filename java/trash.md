var newP = document.createElement("p");
var insideP = document.createTextNode("Förnamn:     " + fNamnCheck.value);
newP.appendChild(insideP);
var whereToPutP = document.getElementById("popupText");
whereToPutP.appendChild(newP);