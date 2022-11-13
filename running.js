let player_1 = document.getElementById("player1");
let player_2 = document.getElementById("player2");
let player_3 = document.getElementById("player3");
let doll = document.getElementById("doll");
let x = 0;
let y = false;
// How to Play Pop Up
document.getElementById("how_to_play_popup").style.visibility = "visible";
// Doll Movement / Audio RedLight & GreenLight /
var doll_move;
document.getElementById("start1").addEventListener("click", () => {
  document.getElementById("how_to_play_popup").style.visibility = "hidden";
  document.getElementById("green_light").play();
  document.getElementById("green_light_img").style.visibility = "visible";
   doll_move = setInterval(() => {
    if (
      doll.src == "http://127.0.0.1:5500/running_images/black.png"
    ) {
      doll.src = "http://127.0.0.1:5500/running_images/red.png";
      document.getElementById("red_light_img").style.visibility = "visible";
      document.getElementById("green_light_img").style.visibility = "hidden";
      document.getElementById("red_light").play();
    } else if (
      doll.src == "http://127.0.0.1:5500/running_images/red.png"
    ) {
      doll.src = "http://127.0.0.1:5500/running_images/black.png";
      document.getElementById("red_light_img").style.visibility = "hidden";
      document.getElementById("green_light_img").style.visibility = "visible";
      document.getElementById("green_light").play();
    }
  }, 2500);
});
// Player Running Image Changing
let running_image_change = (value) => {
  if (
    document.getElementsByClassName("player")[value].src ==
    "http://127.0.0.1:5500/running_images/right_leg.png"
  ) {
    document.getElementsByClassName("player")[value].src =
      "http://127.0.0.1:5500/running_images/left_leg.png";
  } else if (
    document.getElementsByClassName("player")[value].src ==
    "http://127.0.0.1:5500/running_images/left_leg.png"
  ) {
    document.getElementsByClassName("player")[value].src =
      "http://127.0.0.1:5500/running_images/right_leg.png";
  }
};
let count = 0;
// Key Press for Player Running & GameWin/GameOver condition
window.addEventListener("keypress", (event) => {
  y = true;
  x += 50;
  switch (event.key) {
    case "a":
      player_1.style.transform += `translateX(50px)`;
      running_image_change(0);
      break;
    case "s":
      player_2.style.transform += `translateX(50px)`;
      running_image_change(1);
      break;
    case "d":
      player_3.style.transform += `translateX(50px)`;
      running_image_change(2);
      break;
  }
  // Game over condition
  if (doll.src == "http://127.0.0.1:5500/running_images/red.png") {
    if (y == true) {
      
      setTimeout(() => {
        document.getElementById("popup1").style.visibility = "visible";
        document.getElementById("gameover").play();
      }, 300);
      clearInterval(doll_move);
    }
  }
  // Game Win condition
  if (x == 3200) {
    document.getElementById("popup1").style.visibility = "visible";
    document.getElementById("GameOver").style.right = "35%";
    document.getElementById("caption").src = "./image/You_Win_Pink.png";
    document.getElementById("winner").play();
    clearInterval(doll_move);
  }
});
// When user not pressing key......
window.addEventListener("keyup", () => {
  y = false;
});
// Restart Button
document.getElementById("restart_btn").addEventListener("click", () => {
  location.reload();
});
document.getElementById("restart").addEventListener("click", () => {
  location.reload();
});
