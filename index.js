for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}
document.addEventListener("keydown", function(event) {
    makeSound(event.key)
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var sound = new Audio('sounds/crash.mp3');
            sound.play();
            break;
        case "a":
            var sound = new Audio('sounds/Kick-bass.mp3');
            sound.play();
            break;
        case "s":
            var sound = new Audio('sounds/snare.mp3');
            sound.play();
            break;
        case "d":
            var sound = new Audio('sounds/tom-1.mp3');
            sound.play();
            break;
        case "j":
            var sound = new Audio('sounds/tom-2.mp3');
            sound.play();
            break;
        case "k":
            var sound = new Audio('sounds/tom-3.mp3');
            sound.play();
            break;
        case "l":
            var sound = new Audio('sounds/tom-4.mp3');
            sound.play();
            break;
        default:
            console.log(key);
    }
};

function buttonAnimation(currentKey) {
    var activButton = document.querySelector("." + currentKey)
    activButton.classList.add("pressed")

    setTimeout(function() {
        activButton.classList.remove("pressed");
    }, 100);
}
//