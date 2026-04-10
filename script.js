document.addEventListener("DOMContentLoaded", () => {

  const colors = [
    "rgba(103, 150, 79, 0.4)",
    "rgba(194, 96, 143, 0.66)",
    "rgba(52, 134, 215, 0.77)",
    "rgba(246, 207, 188, 0.78)"
  ];

  for (let i = 0; i < 12; i++) {
    const blot = document.createElement("div");

    blot.style.position = "fixed";
    blot.style.width = Math.random() * 300 + 150 + "px";
    blot.style.height = blot.style.width;

    blot.style.left = Math.random() * 100 + "vw";
    blot.style.top = Math.random() * 100 + "vh";

    blot.style.background = colors[Math.floor(Math.random() * colors.length)];
    blot.style.borderRadius = "50%";

    blot.style.filter = "blur(40px)";
    blot.style.zIndex = "-1";
    blot.style.pointerEvents = "none";

    document.body.appendChild(blot);
  }

});