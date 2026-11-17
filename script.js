
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const invitation = document.getElementById("invitation");
const success = document.getElementById("success");

// دکمه نمی‌پذیرم فرار می‌کند!
function escapeButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const x = Math.random() * Math.max(0, maxX);
    const y = Math.random() * Math.max(0, maxY);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseenter", escapeButton);
noBtn.addEventListener("touchstart", function(e) {
    e.preventDefault();
    escapeButton();
});

// قبول دعوت
yesBtn.addEventListener("click", function() {
    invitation.classList.add("hidden");
    success.classList.remove("hidden");
});
