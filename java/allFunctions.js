//Uppgift1 funktionen
var uppgift1 = function (){

console.log("Hello World");
alert("Rad 1 \nRad 2");
}

//Array till generateTable
var myArray = [[], [], [], [], [], [], [], [], []];
myArray[0][0] = "Förnamn";
myArray[0][1] = "Efternamn";
myArray[0][2] = "Telefon";
myArray[1][0] = "Haris";
myArray[1][1] = "Kljajic";
myArray[1][2] = "7716";
myArray[2][0] = "Mats";
myArray[2][1] = "Loock";
myArray[2][2] = "7714";
myArray[3][0] = "Adam";
myArray[3][1] = "Lilienberg";
myArray[3][2] = "9007";
myArray[4][0] = "Cute AF";
myArray[4][1] = "Fishmoose";
myArray[4][2] = "1337";
myArray[5][0] = "Haris";
myArray[5][1] = "Kljajic";
myArray[5][2] = "7716";
myArray[6][0] = "Mats";
myArray[6][1] = "Loock";
myArray[6][2] = "7714";
myArray[7][0] = "Adam";
myArray[7][1] = "Lilienberg";
myArray[7][2] = "9007";
myArray[8][0] = "Cute AF";
myArray[8][1] = "Fishmoose";
myArray[8][2] = "1337";

// guessNumber funktionen
var guessNumber = function(){
    var computerNumber = Math.floor( Math.random() * 101)+1;
    var compare = false;
    var counter = 0;
    
    while(!compare){
        counter++;
        var humanNumber = prompt("Guess a number, I'm thinking on a number between 1 and 100");
        if (humanNumber > computerNumber){
            alert(humanNumber + " is not the number, My number is lower");
        } else if (humanNumber < computerNumber){
            alert(humanNumber + " is not the number, My number is higher");
        } else{
            alert("The secret number was " + computerNumber + ".\nYou got the correct answer in " + counter + " guesses.")
            compare=true;
        }
    }
}

// Farhenheit funktionen
var funkFarhenheit = function(){
var farhenheit = prompt("Farhenheit?");
var celsius = (farhenheit-32)/1.8;
alert(farhenheit + " degrees farhenheit equals " + celsius.toFixed(1) + " degrees celsius.");
}

// Celsius funktionen
var funkCelcius = function(){
var celcius = prompt("Celcius?");
var farhenheit = (celcius*1.8) + 32
alert(celcius + " degrees celsius equals " + farhenheit.toFixed(1) + " degrees farhenheit.");
}

// Meny funktionen
var meny = function(){
var menyVal = prompt("0. Exit \n1. Farhenheit to Celcius \n2. Celsius to Farenheit \n3. Guess number");
switch(menyVal) {
    case '0':
        break;
    case '1':
        funkFarhenheit();
        meny();
        break;
    case '2':
        funkCelcius();
        meny();
        break;
    case '3':
        guessNumber();
        meny();
        break;
    default:
        alert("'" + menyVal + "'" + " is not an option")
        meny();
        break;
    }
}

// Konvertera funktionen
var konvertera = function(){
var myString = prompt ("Text här");
var newString = [];
    for (i=0; i < myString.length; i++)
    {
            if (myString[i] === 'a' || myString[i] === 'A') 
            {
                newString[i] = '#';
            } 
            else if (myString[i] >= 'b' && myString[i] <= 'ö')
            {
                newString[i] = myString[i].toUpperCase();
            } 
            else if (myString[i] >= 'B' && myString[i] <= 'Ö')
            {
                newString[i] = myString[i].toLowerCase();
            } 
            else
            {
                newString[i] = myString[i];
            }
    }
    console.log(newString.join(''));
}

//Triangel funktionen
var triangel = function()
{
var a = prompt ("Ange längden på kateter 1");
var b = prompt ("Ange längden på kateter 2");

var c =  Math.sqrt((Math.pow(a, 2)) + (Math.pow(b, 2)));
console.log (c);  
}

//Birthday funktionen
var birthDay = function()
{
var val1 = prompt("Vilken månad fyller du år (1-12)?");
var day = prompt("Vilket dag fyller du år (1-31)?");
var month = val1 - 1;
var currentTime = new Date();
var currentYear = currentTime.getFullYear();
var currentDay = currentTime.getDate();
var currentMonth = currentTime.getMonth();

var oneDayInMilliSeconds = 24*60*60*1000; 
var currentDate = new Date(currentYear,currentMonth,currentDay);
var birthDate = new Date(currentYear,month,day);

if (birthDate < currentDate)
{
    birthDate = new Date((currentYear +1),month,day);
    var numberOfDays = Math.round((birthDate.getTime() - currentDate.getTime())/(oneDayInMilliSeconds));
    // alert("if");
} else
{
    var numberOfDays = Math.round((birthDate.getTime() - currentDate.getTime())/(oneDayInMilliSeconds));
    // alert("else");
}


console.log("Det är " + numberOfDays + " dagar kvar till din födelsedag som inträffar " + birthDate);
}

//Generate table funktionen
var generateTable = function()
{
var tabell = ("<table border='1'> \n");
var cell = 0;
    for (i = 0; i < myArray.length; i++)
    {
        if (i === 0)
        {
            var currentCell = myArray[i];
        
            for (j = 0; j < currentCell.length; j++)
                {
                    tabell += "<th>\n";
                    // console.log(currentCell[j]);
                    tabell += currentCell[j];
                    tabell += "</th>\n";
                }
                tabell += "</tr>\n";  
        }
    
        else if (i % 2 === 0)
        {
            tabell += "<tr bgcolor='#99cc66'>\n";
            var currentCell = myArray[i];
        
            for (j = 0; j < currentCell.length; j++)
                {
                    tabell += "<td>\n";
                    // console.log(currentCell[j]);
                    tabell += currentCell[j];
                    tabell += "</td>\n";
                }
                tabell += "</tr>\n";
        } 
        else
        {
            var currentCell = myArray[i];
             tabell += "<tr>\n";
             for (j = 0; j < currentCell.length; j++)
            {
                tabell += "<td>\n";
                // console.log(currentCell[j]);
                tabell += currentCell[j];
                tabell += "</td>\n";
            }
                tabell += "</tr>\n";
        }
        
    }
    document.write(tabell);
}

//Tentamen funktionen
var tentamen = function()
{
var myArray = [10,2,89,9,65,13,3];
var mySum = 0;
var myMin = 0;
var myMax = 0;
var myMedel = 0;

    for (i=0; i < myArray.length; i++)
    {
        mySum += myArray[i];
    }
    // console.log("Medelvärdet av arrayen är " + (mySum/myArray.length).toFixed(0));
    myMedel = mySum/myArray.length;
    // console.log(Math.min(myArray[0], myArray[1], myArray[2], myArray[3], myArray[4], myArray[5], myArray[6]));
    myMin = Math.min(myArray[0], myArray[1], myArray[2], myArray[3], myArray[4], myArray[5], myArray[6]);
    // console.log(Math.max(myArray[0], myArray[1], myArray[2], myArray[3], myArray[4], myArray[5], myArray[6]));
    myMax = Math.max(myArray[0], myArray[1], myArray[2], myArray[3], myArray[4], myArray[5], myArray[6]);
    var myNewArray = [myMedel.toFixed(0), myMin, myMax];
    console.log(myNewArray);
    
}
