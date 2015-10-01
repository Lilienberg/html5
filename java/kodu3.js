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

guessNumber();
