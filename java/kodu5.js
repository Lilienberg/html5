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
konvertera();