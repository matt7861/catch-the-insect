const playBtn = document.getElementById("play-btn");
const insectsWrap = document.querySelectorAll(".insects__wrap");
const intro = document.querySelector(".intro");
const characterSelection = document.querySelector(".character-selection");

document.addEventListener("click", playGame);

function playGame(e) {
  e.preventDefault();
  if (e.target.dataset.btn === "play") {
    intro.style.marginTop = "-100vh";
  } else if (e.target.dataset.btn === "insect") {
    characterSelection.style.marginTop = "-100vh";
  }
}

// transition screen when play is clicked (add class or change style)

// store selected insect src in a variable and add styling or class to transition to next screen
