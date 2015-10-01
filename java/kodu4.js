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

var funkFarhenheit = function(){
var farhenheit = prompt("Farhenheit?");
var celsius = (farhenheit-32)/1.8;
alert(farhenheit + " degrees farhenheit equals " + celsius.toFixed(1) + " degrees celsius.");
}

var funkCelcius = function(){
var celcius = prompt("Celcius?");
var farhenheit = (celcius*1.8) + 32
alert(celcius + " degrees celsius equals " + farhenheit.toFixed(1) + " degrees farhenheit.");
}

