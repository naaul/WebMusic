for (var x = 0; x < 7; x++) {
    document.querySelectorAll(".piano-tecla")[x].addEventListener("click", function() {
        var thistext = this.innerText;
        MakeSound(thistext, "click");
    })
    }


var bug1 = true
var bug2 = true
var bug3 = true
var bug4 = true
var bug5 = true
var bug6 = true
var bug7 = true

document.addEventListener("keydown", function(event) {
    MakeSound(event.key, "tecla");
});


function MakeSound (key, type) {
    switch (key) {
        case "1":
            if (bug1 === true){
                var piano1 = new Audio("./assets/sounds/piano1.mp3");
                piano1.play()
                var tecla_animate = "#img-piano" + key
                AnimatePiano(tecla_animate)
                if (type === "tecla"){
                    bug1 = false
                    document.addEventListener("keyup", function(event){if (event.key === "1"){bug1 = true}});
                }
            }
            break;
        case "2":
            if (bug2 === true){
                var piano2 = new Audio("./assets/sounds/piano2.mp3");
                piano2.play()
                var tecla_animate = "#img-piano" + key
                AnimatePiano(tecla_animate)
                if (type === "tecla"){
                    bug2 = false
                    document.addEventListener("keyup", function(event){if (event.key === "2"){bug2 = true}})
                }
            }
            break;
        case "3":
            if (bug3 === true){
                var piano3 = new Audio("./assets/sounds/piano3.mp3");
                piano3.play()
                var tecla_animate = "#img-piano" + key
                AnimatePiano(tecla_animate)
                if (type === "tecla"){
                    bug3 = false
                    document.addEventListener("keyup", function(event){if (event.key === "3"){bug3 = true}})
                }
            }
            break;4
        case "4":
            if (bug4 === true){
                var piano4 = new Audio("./assets/sounds/piano4.mp3");
                piano4.play()
                var tecla_animate = "#img-piano" + key
                AnimatePiano(tecla_animate)
                if (type === "tecla"){
                    bug4 = false
                    document.addEventListener("keyup", function(event){if (event.key === "4"){bug4 = true}})
                }
            }
            break;
        case "5":
            if (bug5 === true){
                var piano5 = new Audio("./assets/sounds/piano5.mp3");
                piano5.play()
                var tecla_animate = "#img-piano" + key
                AnimatePiano(tecla_animate)
                if (type === "tecla"){
                    bug5 = false
                    document.addEventListener("keyup", function(event){if (event.key === "5"){bug5 = true}})
                }
            }
            break;
        case "6":
            if (bug6 === true){
                var piano6 = new Audio("./assets/sounds/piano6.mp3");
                piano6.play()
                var tecla_animate = "#img-piano" + key
                AnimatePiano(tecla_animate)
                if (type === "tecla"){
                    bug6 = false
                    document.addEventListener("keyup", function(event){if (event.key === "6"){bug6 = true}})
                }
            }
            break;
        case "7":
            if (bug7 === true){
                var piano7 = new Audio("./assets/sounds/piano7.mp3");
                piano7.play()
                var tecla_animate = "#img-piano" + key
                AnimatePiano(tecla_animate)
                if (type === "tecla"){
                    bug7 = false
                    document.addEventListener("keyup", function(event){if (event.key === "7"){bug7 = true}})
                }
            }
            break;
    
        default:
            console.log("switch error")
            break;
    }
}

var itembutton1 = document.querySelector(".itembutton1");
itembutton1.addEventListener("click", function(){AnimateButton(itembutton1)});

var itembutton2 = document.querySelector(".itembutton2");
itembutton2.addEventListener("click", function(){AnimateButton(itembutton2)});

function AnimateButton (item) {
    item.classList.add("pressed");
    setTimeout(function () {
        item.classList.remove("pressed");
    }, 100);};

function AnimatePiano (item) {
    var tecla_pressed = document.querySelector(item);
    tecla_pressed.classList.add("tecla-pressed");
    setTimeout(function () {
        tecla_pressed.classList.remove("tecla-pressed");
    }, 250);}