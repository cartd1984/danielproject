const hoochButton = document.getElementById("hoochButton");
const fancyButton = document.getElementById("fancyButton");

var speakeasy = prompt("Psst...What's the password?");

hoochButton.addEventListener('click', () => {
    prompt("Psst...What's the password?");
       function enterDoor () {
        if (speakeasy.toUpperCase() === 'BOURBON') {
            document.write("That's it! You may enter!");
            } else if (speakeasy.toUpperCase() !== 'BOURBON') {
                prompt("That ain't it. Try again. It's a liquor made in Kentucky.");
            } else if (speakeasy.toUpperCase() !== 'BOURBON') {
                prompt("Nope. Try again. Say...are you a fan of BOURBON?");
            } else {
                prompt("I'm a nice guy. Normally I don't do this, but you can come in.");
            }
        }
    });
    
    
    
    
    
    
 