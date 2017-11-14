const hoochButton = document.getElementById("hoochButton");
const fancyButton = document.getElementById("fancyButton");

hoochButton.addEventListener('click', () => {
    var passwordGuess = prompt("Psst...What's the password?");
    var password = false;
    var speakeasy = "BOURBON";
    if (passwordGuess.toUpperCase() == speakeasy) {
            alert("That's it! You may enter!");
            var password = true;
            } else if (passwordGuess.toUpperCase() != speakeasy) {
                var passwordGuess2 = prompt("That ain't it. Try again. It's a liquor made in Kentucky.");
            } if (passwordGuess2.toUpperCase() == speakeasy) {
                alert("Congrats! You may enter.");
                var password = true;
            } else if (passwordGuess2.toUpperCase() != speakeasy) {
                var passwordguess3 = prompt("Nope. Try again. Say...are you a fan of BOURBON?");
                if (passwordguess3.toUpperCase() == speakeasy) {
                        alert("Dude, finally! You may now enter.");
                        var password = true;
            } else {
                alert("I'm a nice guy. I'll got ahead and let you in.");
                var password = true;
            }
        }
});

fancyButton.addEventListener('click', () => {
    var passwordGuess10 = prompt("You know the drill...What's the password?");
    var password2 = false;
    var speakeasy2 = "VODKA";
    if (passwordGuess10.toUpperCase() == speakeasy2) {
            alert("You may enter.");
            var password2 = true;
            } else if (passwordGuess10.toUpperCase() != speakeasy2) {
                var passwordGuess20 = prompt("Sorry, man. Say...ever been to Russia?");
            } if (passwordGuess20.toUpperCase() == speakeasy2) {
                alert("Good work! Enjoy!");
                var password = true;
            } else if (passwordGuess20.toUpperCase() != speakeasy2) {
                var passwordguess30 = prompt("Nope. Try again. You like VODKA in your potatoes?");
                if (passwordguess30.toUpperCase() == speakeasy2) {
                        alert("My dog could have gotten in at this point! You may now enter.");
                        var password = true;
            } else {
                alert("I may get kicked out, but the hey, I'll let you in anyway.");
                var password = true;
            }
        }
});
    