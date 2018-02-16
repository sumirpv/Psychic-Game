var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var win = 0;
var loss = 0;
var guess = 9;
var userinput = [];


var userLetter = document.getElementById("userchoice");

//  press function is 
for (var i = 10; i > 0; i--) {

    document.onkeyup = function (event) {

        
        //produce random letters
        var computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        //comparin the letters
        var userLetter = event.key;
        userinput.push(userLetter)

        console.log("user : " + userLetter);
        console.log("comp  : " + computerLetter);

        if (userLetter === computerLetter) {
            win++;
            console.log("win");
        }
        else {

            loss++;
            console.log("lost");
        }


        var score = "<p>Wins : " + win + "</p>" +
            "<p>Loss : " + loss + "</p>" +
            "<p>Guess left :  " + guess + "</p>" +
            "<p> Your Guess So Far : " + userinput + " </p>" +
            "<p> Computer Guess  " + computerLetter + " </p>";

        document.getElementById("psychicGame").innerHTML = score;
        guess--;
        console.log("guess" + guess);
        if (guess < 0) {
            loss = 0;
            guess = 9;
            userinput=[];
        }

    };

}

