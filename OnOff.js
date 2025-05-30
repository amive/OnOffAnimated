let button = document.getElementById("button");
let buttonSwitch = document.getElementById("buttonSwitch");
let body = document.body;
let audio = new Audio("assets/click.wav");
let isClickable = true;
let Status = 1;
button.addEventListener("click", (toggle) => {
  if (!buttonContainer.contains(toggle.target)) return;
  if (!isClickable) return;
  isClickable = false;
  if (Status === 0) {
    buttonSwitch.style.right = 1 + "px";
    buttonSwitch.style.backgroundColor = "#505050";
    buttonSwitch.style.borderTopLeftRadius = 9 + "px";
    buttonSwitch.style.borderBottomLeftRadius = 9 + "px";
    buttonSwitch.style.borderTopRightRadius = 0;
    buttonSwitch.style.borderBottomRightRadius = 0;
    body.style.backgroundColor = "black";
    document.getElementById("toFrown").beginElement();
    audio.play();
    Status = 1;
    console.log("off");
  } else if (Status === 1) {
    buttonSwitch.style.right = -60 + "px";
    buttonSwitch.style.backgroundColor = "#FACC33";
    buttonSwitch.style.borderTopLeftRadius = 0;
    buttonSwitch.style.borderBottomLeftRadius = 0;
    buttonSwitch.style.borderTopRightRadius = 9 + "px";
    buttonSwitch.style.borderBottomRightRadius = 9 + "px";
    body.style.backgroundColor = "rgb(1, 125, 134)";
    document.getElementById("toSmile").beginElement();
    audio.play();
    Status = 0;
    console.log("on");
  }

  setTimeout(() => {
    isClickable = true;
  }, 400);
});
