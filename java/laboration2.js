// Variablar
var valideringPopUp = document.getElementById("valideringPopUp");
var fNamnCheck = document.getElementById("fNamn");
var eNamnCheck = document.getElementById("eNamn");
var pNummerCheck = document.getElementById("pNummer");
var ePostCheck = document.getElementById("ePost");
var prisModell = document.getElementById("prisModell");
var valideringKnapp = document.getElementById("knapp");
var valideringForNamn = false;
var valideringEfterNamn = false;
var valideringPostNr = false;
var valideringEpost = false;
var sendPopUp = document.getElementById("sendPopUp");
var closePopUp = document.getElementById("closePopUp");
var pNummerKlar = [];
var submitForm = document.getElementById("form");
var firstNameTextOn = document.getElementById("firstName");
var lastNameTextOn = document.getElementById("lastName");
var postNumberTextOn = document.getElementById("postNumber");
var ePostTextOn = document.getElementById("ePostText");
var prisModellTextOn = document.getElementById("prisModellVal");


// Slut på Variablar
// ---------------------------------------------------------------
// Funktion för färg om fel
    function blurFunctionError(inputId) {
        document.getElementById(inputId).style.backgroundColor = "red"; 
    }
// Slut på funktion för färg om rätt 
// ---------------------------------------------------------------
// Funktion för färg om rätt
    function blurFunctionCorrect(inputId) {
        document.getElementById(inputId).style.backgroundColor = "green"; 
    }
// Slut på funktion för färg om rätt
// ---------------------------------------------------------------
// Funktion Firstname
fNamnCheck.onblur = function()
{
var checkIfLetters = /^[A-Öa-ö]+$/;
    //console.log(fNamnCheck.value.length);
    if (fNamnCheck.value.match(checkIfLetters) && fNamnCheck.value.length <= 25)
    {
        blurFunctionCorrect("fNamn");
        valideringForNamn = true;
        validering();
        //console.log("ADAM SUCCEED");
    } else
    {
        blurFunctionError("fNamn");
        valideringForNamn = false;
        validering();
        //console.log("ADAM FAILED");
    }
    
}
// Slut på funktion Firstname
// ---------------------------------------------------------------
// Funktion Lastname
eNamnCheck.onblur = function()
{
var checkIfLetters = /^[A-Öa-ö]+$/;
    // console.log(eNamnCheck.value.length);
    if (eNamnCheck.value.match(checkIfLetters) && eNamnCheck.value.length <= 25)
    {
        blurFunctionCorrect("eNamn");
        valideringEfterNamn = true;
        validering();
        //console.log("ADAM SUCCEED");
    } else
    {
        blurFunctionError("eNamn");
        valideringEfterNamn = false;
        validering();
        //console.log("ADAM FAILED");
    }
}
// Slut på funktion Lastname
// ---------------------------------------------------------------
// Funktionen postnummer
pNummerCheck.onblur = function()
{
    var checkPost = /^(\d{5}|\d{3}-\d{2}|\d{3} \d{2}|[Ss][Ee]\d{5}|[Ss][Ee]\d{3}-\d{2}|[Ss][Ee]\d{3} \d{2}|[Ss][Ee] \d{5}|[Ss][Ee] \d{3}-\d{2}|[Ss][Ee] \d{3} \d{2})$/ 
    if (pNummerCheck.value.match(checkPost))
    {
        // console.log(document.form.pNummer.value.length);
        var pNummerLangd = document.form.pNummer.value.length;
        var pNummerCell = document.form.pNummer.value;
        var pNummerTrim = [];
        for (i=0; i < pNummerLangd; i++)
        {
            if (!isNaN(pNummerCell[i]) && pNummerCell[i] != " ")
            {
                pNummerTrim[i] = pNummerCell[i];
            }
            // var a = isNaN(document.form.pNummer.value[i]);
            // console.log(document.form.pNummer.value[i]);
        }
        pNummerKlar = pNummerTrim.join('');
        // console.log (pNummerKlar);
        blurFunctionCorrect("pNummer");
        valideringPostNr = true;
        validering();
        //console.log("ADAM SUCCEED");
    } else
    {
        blurFunctionError("pNummer");
        valideringPostNr = false;
        validering();
        //console.log("ADAM FAILED");
    }
    
}
// Slut på funktionen postnummer
// ---------------------------------------------------------------
// Funktionen epost
ePostCheck.onblur = function()
{     
var checkEmail = /^[A-Za-z0-9._]+@[A-Za-z0-9.]+\.[A-Za-z]{2,4}$/;
      if (ePostCheck.value.match(checkEmail))
    {
        blurFunctionCorrect("ePost");
        valideringEpost = true;
        validering();
       // console.log("ADAM SUCCEED");
    } else
    {
        blurFunctionError("ePost");
        valideringEpost = false;
        validering();
       // console.log("ADAM FAILED");
    }
    // console.log("kommer aldrig in");
}
// Slut på funktionen epost
// ---------------------------------------------------------------
// validering knappen
var validering = function()
{
    if (valideringForNamn === true && valideringEfterNamn === true && valideringEpost === true && valideringPostNr === true)
    {
        (document.getElementById("knapp")).disabled = false;
    } else {
        (document.getElementById("knapp")).disabled = true;
    }
}
// Slut på validering knappen
// ---------------------------------------------------------------
// Pop Up knappar
valideringKnapp.onclick = function()
{
    var inputFirstName = document.createTextNode(" " + fNamnCheck.value);
    firstNameTextOn.appendChild(inputFirstName);
    
    var inputLastName = document.createTextNode(" " + eNamnCheck.value);
    lastNameTextOn.appendChild(inputLastName);
    
    var inputPostNumber = document.createTextNode(" " + pNummerKlar);
    postNumberTextOn.appendChild(inputPostNumber);
    
    var inputEpostText = document.createTextNode(" " + ePostCheck.value);
    ePostTextOn.appendChild(inputEpostText);
    
    var inputPrisModell = document.createTextNode(" " + prisModell.value);
    prisModellTextOn.appendChild(inputPrisModell);
    
    
    valideringPopUp.style.display = "block";
closePopUp.onclick = function()
{
    valideringPopUp.style.display = "none";
    firstNameTextOn.removeChild(inputFirstName);
    lastNameTextOn.removeChild(inputLastName);
    postNumberTextOn.removeChild(inputPostNumber);
    ePostTextOn.removeChild(inputEpostText);
    prisModellTextOn.removeChild(inputPrisModell);
}

sendPopUp.onclick = function()
{
    submitForm.submit();
}
}
// Slut Pop Up knappar
// ---------------------------------------------------------------
