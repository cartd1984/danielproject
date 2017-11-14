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
        var passwordguess2 = prompt("That ain't it. Try again. It's a liquor made in Kentucky.");
    } else if (passwordGuess2.toUpperCase() == speakeasy) {
        alert("Congrats! You may enter.");
        var password = true;
    } else if (passwordGuess2.toUpperCase() != speakeasy) {
        var passwordGuess3 = prompt("Nope. Try again. Say...are you a fan of BOURBON?");
    } else if (passwordGuess3.toUpperCase() == speakeasy) {
        alert("Dude, finally! You may now enter.");
        var password = true;
    } else {
        alert("I'm a nice guy. I'll got ahead and let you in.");
        var password = true;
    }
});
    
    
    
    
    
    
 