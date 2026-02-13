// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

let noScale = 1;
let yesScale = 1;

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});





noBtn.addEventListener("click", () => {
    // Riduci NO
    noScale -= 0.15;

    noBtn.style.transform = `scale(${noScale})`;

    // Ingrandisci YES
    yesScale += 0.4;
    yesBtn.style.transform = `scale(${yesScale})`;
});

yesBtn.addEventListener("click", () => {
    title.innerHTML = "SHIIIIIIIII, T'AMOOOOO 💝<br>Guarda, anche Kodino è contento!";

    catImg.src = "koda.gif";
    catImg.style.width = "180px";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});
