let btn = document.querySelectorAll(".drum").length;
for (let i = 0 ; i < btn ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , function () {
     var hello = this.innerHTML;
    makeSound(hello);
    ani(hello);

    })
}

document.addEventListener("keypress" , function (event){
    makeSound(event.key);
    ani(event.key);
})

function makeSound(key){

  switch(key) {
    case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
      break;
    case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
      break;
      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
      break;
      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
      break;
      case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
      break;
      case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
      break;
      case "l":
        var kickbass = new Audio("sounds/kick-bass.mp3");
        kickbass.play();
      break;



    default:
      
  }

}


function ani(currkey){
  var activeKey = document.querySelector("." + currkey); 
   activeKey.classList.add("pressed");
   setTimeout(() => {
    activeKey.classList.remove("pressed");
   }, 150);

}




