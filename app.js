const playBtn = document.getElementById("play-btn");
const insectsWrap = document.querySelectorAll(".insects__wrap");
const intro = document.querySelector(".intro");
const characterSelection = document.querySelector(".character-selection");
const gameWindow = document.querySelector(".game");
const winWidth = window.innerWidth;
const winHeight = window.innerHeight;
let insectAmount = 2;
let scoreAmount = 0;
let seconds = 0;
let insectImage = "";

document.addEventListener("click", playGame);
document.addEventListener("click", addInsect);

function playGame(e) {
  e.preventDefault();
  if (e.target.dataset.btn === "play") {
    intro.style.marginTop = "-100vh";
  } else if (e.target.dataset.btn === "insect") {
    characterSelection.style.marginTop = "-100vh";
    insectImage = e.target.querySelector("img").src;
    setInterval(startTimer, 1000);
    setTimeout(renderImage, 1000);
  }
}

function startTimer() {
  seconds++;

  let hrs = seconds / 3600;
  let mins = (seconds - hrs * 3600) / 60;
  let secs = seconds % 60;

  if (secs < 10) secs = "0" + secs;
  if (mins < 10) mins = "0" + mins;

  document.querySelector(".timer").innerText = `${mins}:${secs}`;
}

function addInsect(e) {
  if (e.target.classList.value === "insect") {
    e.target.parentNode.classList.add("clicked");

    setTimeout(() => {
      document.querySelector(".clicked").remove();
      for (var i = 0; i < insectAmount; i++) {
        (() => {
          setTimeout(() => {
            renderImage();
          }, i * 1000);
        })(i);
      }
    }, 1000);

    scoreAmount++;
    document.querySelector(".score").innerText = scoreAmount;
  }
}

function renderImage() {
  let randomTop = Math.floor(getRandomNumber(0, winHeight));
  let randomLeft = Math.floor(getRandomNumber(0, winWidth));

  let newInsect = document.createElement("div");
  newInsect.classList.add("insect-wrapper");
  newInsect.style.left = `${randomLeft}px`;
  newInsect.style.top = `${randomTop}px`;
  newInsect.innerHTML = `<img class="insect" src="${insectImage}" style="transform: rotate(${
    Math.random() * 360
  }deg)"/>`;

  gameWindow.appendChild(newInsect);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
