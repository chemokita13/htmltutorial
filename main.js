const siBtn = document.getElementById("siBtn");

siBtn.addEventListener("click", () => alert("Sabria que aceptarias"));

const noBtn = document.getElementById("noBtn");

function moveBtn() {
    const x = Math.floor(Math.random() * 500);
    const y = Math.floor(Math.random() * 500);
    noBtn.style.top = y + "px";
    noBtn.style.left = x + "px";
}

noBtn.addEventListener("click", moveBtn);
noBtn.addEventListener("mousemove", moveBtn);
