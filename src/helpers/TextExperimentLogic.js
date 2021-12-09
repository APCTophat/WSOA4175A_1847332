

/*
let TextComplete = false;
var i = 0;
var txt = "The Cat (Filosus malum) is a domestic species of small, very carnivorous mammal. Better know for being the only domesticated cat species (for good reason), its wild relatives are like Lions n shit. For some reason, humans value these clawing anger in a bottle for companionship. What do they even do? Hunt rodents? Like, I could do that too you know! And there are like 60 different breeds or whatever. You know there are like 190 species of Dogs (Optimum Canine) right. We are just far superior. So, we can all just agree that we are better than those furry claw machines. We give you unconditional love, we snuggle with you when you are sad, we love running (like A LOT), and we always bark at everything to make sure you know that it is there. Does a ‘Cat’ follow you around everywhere, even when you go to the bathroom? Do Cat’s run up and down whenever you arrive home? No, I didn’t think so. Written by the superior pet. PS: Give treats and belly rubs THANK YOU!";

document.addEventListener("keypress", isTyping);
document.getElementById("ClearButton").addEventListener("click", function() {
    clearText();
  });

function isTyping(){
    if(TextComplete == false){
        revealText();
    }
} 

function revealText(){

        document.getElementById("ArtSpace").innerHTML += txt.charAt(i);
        i++;

        if(i >= txt.length){
            TextComplete = true;
            console.log("WE done here");
        }
        
}

function clearText(){
    document.getElementById("ArtSpace").innerHTML = "";
    i = 0;
    TextComplete = false;
} */