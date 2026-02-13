// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

const letterWindow = document.querySelector(".letter-window");

// Scale state
let noScale = 1;
let yesScale = 1;

// Helpers
function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

// Gestiamo translate + scale insieme (così non si rompono tra loro)
let noTX = 0;
let noTY = 0;

function applyNoTransform() {
  noBtn.style.transform = `translate(${noTX}px, ${noTY}px) scale(${noScale})`;
}

function applyYesTransform() {
  yesBtn.style.transform = `scale(${yesScale})`;
}

// Open letter
envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";

  setTimeout(() => {
    letterWindow.classList.add("open");
  }, 50);
});

// NO: su mobile non esiste mouseover, quindi usiamo pointerenter + pointerdown
function moveNoButton() {
  // distanza un po' più ampia su schermi piccoli
  const isSmall = window.matchMedia("(max-width: 420px)").matches;
  const dist = isSmall ? 90 : 60;

  const ang = Math.random() * Math.PI * 2;
  noTX = Math.cos(ang) * dist;
  noTY = Math.sin(ang) * dist;

  noBtn.style.transition = "transform 0.2s ease";
  applyNoTransform();
}

// scappa quando provi ad avvicinarti col dito o col mouse
noBtn.addEventListener("pointerenter", moveNoButton);
noBtn.addEventListener("pointerdown", moveNoButton);

// se riesce a cliccarlo: NO più piccolo, YES più grande
noBtn.addEventListener("click", (e) => {
  e.preventDefault();

  noScale = clamp(noScale - 0.15, 0.2, 1);
  yesScale = clamp(yesScale + 0.25, 1, 3.2);

  // mantieni lo spostamento corrente ma applica anche lo scale
  applyNoTransform();
  applyYesTransform();

  // se diventa microscopico, fallo sparire del tutto (opzionale ma carino)
  if (noScale <= 0.22) {
    noBtn.style.opacity = "0";
    noBtn.style.pointerEvents = "none";
  }
});

yesBtn.addEventListener("click", () => {
  title.innerHTML = "SHIIIIIIIII, T'AMOOOOO 💝<br>Guarda, anche Kodino è contento!";

  catImg.src = "koda.gif";

  // lascia che il CSS gestisca le dimensioni su mobile
  // (niente width fissa qui)

  letterWindow.classList.add("final");
  buttons.style.display = "none";
  finalText.style.display = "block";
});