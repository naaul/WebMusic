var drums = ("./assets/sounds/crash.mp3", "./assets/sounds/kick-bass.mp3", "./assets/sounds/snare.mp3", "./assets/sounds/tom-1.mp3", "./assets/sounds/tom-2.mp3", "./assets/sounds/tom-3.mp3", "./assets/sounds/tom-4.mp3");

for (var i = 0; i < 7; i++) {
    document.querySelectorAll(".button-drum")[i].addEventListener("click", function (event){
        MakeSound(this.innerText);
        buttonPressed(this.innerText);
        
    })
        
}

document.addEventListener("keydown", function(event) {
    MakeSound(event.key);
    buttonPressed(event.key);
})

function MakeSound (key) {
    switch (key) {
        case "1":
            var drum1 = new Audio("./assets/sounds/crash.mp3");
            drum1.play(); 
            break;
        case "2":
            var drum2 = new Audio("./assets/sounds/kick-bass.mp3");
            drum2.play();
            break;
        case "3":
            var drum3 = new Audio("./assets/sounds/snare.mp3");
            drum3.play();
            break;
        case "4":
            var drum4 = new Audio("./assets/sounds/tom-1.mp3");
            drum4.play();
            break;
        case "5":
            var drum5 = new Audio("./assets/sounds/tom-2.mp3");
            drum5.play();
            break;
        case "6":
            var drum6 = new Audio("./assets/sounds/tom-3.mp3");
            drum6.play();
            break;
        case "7":
            var drum7 = new Audio("./assets/sounds/tom-4.mp3");
            drum7.play();
            break;
        default:
            console.log("switch cases error");
            break;
    }
}

function buttonPressed (key) {
    var mybuttom = document.querySelector('#b' + key);
    mybuttom.classList.add("pressed");

    setTimeout(function () {
        mybuttom.classList.remove("pressed");
    }, 100)
}

var itembutton1 = document.querySelector(".itembutton1");
itembutton1.addEventListener("click", function(){AnimateButton(itembutton1)});

var itembutton2 = document.querySelector(".itembutton2");
itembutton2.addEventListener("click", function(){AnimateButton(itembutton2)});

function AnimateButton (item) {
    item.classList.add("pressed");
    setTimeout(function () {
        item.classList.remove("pressed");
    }, 100);
};
