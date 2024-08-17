$("button").click(function(){
    var word = this.innerHTML;
    sounds(word);
    anime(word);
    
    
})

document.addEventListener("keypress", function(event){
    sounds(event.key);
    anime(event.key);
});

function sounds(key){
    switch (key) {
        case "w":
            var t1 = new Audio("sounds/tom-1.mp3");
            t1.play();
        
            break;
        case "a":
            var t2 = new Audio("sounds/tom-2.mp3");
            t2.play();
            
            break;
        case "s":
            var t3 = new Audio("sounds/tom-3.mp3");
            t3.play();
            
            break;
        case "d":
            var t4 = new Audio("sounds/tom-4.mp3");
            t4.play();
            
            break;
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            
            break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            
            break;
        default:
            break;
    }

}

function anime(currentkey){
    $("."+currentkey).addClass("pressed");
    setTimeout(function(){
        $("."+currentkey).removeClass("pressed");
    }, 100);
    

}