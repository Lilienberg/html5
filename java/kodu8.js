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

birthDay();
