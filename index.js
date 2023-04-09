// // Event listener for buttons press.
for(var i =0; i<document.querySelectorAll(".drum").length ; i++){   // adding event listeners to all buttons through for loop.
    document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
            var buttonInnerHtml = this.innerHTML;                // STORING the inner html (text) of the element. // this returns identity of elements.
            soundPlay(buttonInnerHtml); }
            );
}

// Event listener for keyboard press.
document.addEventListener("keypress" , function(event){   //  event -- inside paranthesis allow us to tap into the 
    var Keypress = event.key;                         //  event that triggers the event listener.  //  key -- gives the key pressed like a, n,b,f ,k ,K,L,P .....   
    soundPlay(Keypress) ;     
}); 

// function that makes sound.

function soundPlay(text){
    switch (text){
        case "W":
            var Tom1 = new Audio("sounds/tom-1.mp3");    //  Tom1 ,Tom2 ,Crash ..... are javascript objects.
            Tom1.play();
            break;

        case "A":
            var Tom2 = new Audio("sounds/tom-2.mp3");
            Tom2.play();
            break
        case "S":
            var Tom3 = new Audio("sounds/tom-3.mp3");
            Tom3.play();
            break;
        
        case "D":
            var Tom4 = new Audio("sounds/tom-4.mp3");
            Tom4.play();
            break
        case "J":
            var Snare = new Audio("sounds/snare.mp3");
            Snare.play();
            break;
        
        case "K":
            var Crash = new Audio("sounds/crash.mp3");
            Crash.play();
            break
        case "L":
            var Kick = new Audio("sounds/kick-bass.mp3");
            Kick.play();
            break;

            // for samll aplabets
        case "w":
            var Tom1 = new Audio("sounds/tom-1.mp3");    //  Tom1 ,Tom2 ,Crash ..... are javascript objects.
            Tom1.play();
            break;

        case "a":
            var Tom2 = new Audio("sounds/tom-2.mp3");
            Tom2.play();
            break
        case "s":
            var Tom3 = new Audio("sounds/tom-3.mp3");
            Tom3.play();
            break;
        
        case "d":
            var Tom4 = new Audio("sounds/tom-4.mp3");
            Tom4.play();
            break
        case "j":
            var Snare = new Audio("sounds/snare.mp3");
            Snare.play();
            break;
        
        case "k":
            var Crash = new Audio("sounds/crash.mp3");
            Crash.play();
            break
        case "l":
            var Kick = new Audio("sounds/kick-bass.mp3");
            Kick.play();
            break
        default:
            alert("wrong button or key pressed");
    }
};
