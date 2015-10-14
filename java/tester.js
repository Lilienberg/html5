validering.onclick = function()
{
    console.log("ADAM SUCCEED");
    var eleman = document.getElementById("knapp");
    eleman.disabled = false;
    
    if (valederingForNamn === true && valederingEfterNamn === true && valederingPostNr === true && valederingEpost === true)
    {
        console.log("ADAM SUCCEED");
    }
}

var newDiv = document.createElement("div"); 
    var newContent = document.createTextNode("Hi there and greetings!");
    var popupTextFinns = document.getElementById("putPopupTextHere");
    newDiv.appendChild(newContent);
    var currentDiv = document.getElementById("div1"); 
    document."popup".insertBefore(newDiv, currentDiv);
    
function popup() 
{
    w.document.write(document.getElementById('example_text').value);

    w.document.close(); 

}