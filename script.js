
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const invitation = document.getElementById("invitation");
const success = document.getElementById("success");

function escapeButton() {
    const margin = 15;

    const maxX = window.innerWidth - noBtn.offsetWidth - margin;
    const maxY = window.innerHeight - noBtn.offsetHeight - margin;

    const x = margin + Math.random() * Math.max(0, maxX - margin);
    const y = margin + Math.random() * Math.max(0, maxY - margin);

    noBtn.style.position = "fixed";
    noBtn.style.zIndex = "9999";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
    noBtn.style.right = "auto";
    noBtn.style.transition = "left 0.15s ease, top 0.15s ease";
}

// کامپیوتر
noBtn.addEventListener("mouseenter", escapeButton);

// موبایل
noBtn.addEventListener("touchstart", function(e) {
    e.preventDefault();
    escapeButton();
}, { passive: false });

// قبول دعوت
yesBtn.addEventListener("click", function() {
    invitation.classList.add("hidden");
    success.classList.remove("hidden");
});
