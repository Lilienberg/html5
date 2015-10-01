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
    // console.log(myMedel);
    // console.log("Medelvärdet av arrayen är " + (mySum/myArray.length).toFixed(0));
    myMedel = mySum/myArray.length;
    // console.log(myMedel);
    // console.log(Math.min(myArray[0], myArray[1], myArray[2], myArray[3], myArray[4], myArray[5], myArray[6]));
    myMin = Math.min(myArray[0], myArray[1], myArray[2], myArray[3], myArray[4], myArray[5], myArray[6]);
    // console.log(Math.max(myArray[0], myArray[1], myArray[2], myArray[3], myArray[4], myArray[5], myArray[6]));
    myMax = Math.max(myArray[0], myArray[1], myArray[2], myArray[3], myArray[4], myArray[5], myArray[6]);
    var myNewArray = [Math.floor(myMedel), myMin, myMax];
    console.log(myNewArray);
    
}
tentamen();