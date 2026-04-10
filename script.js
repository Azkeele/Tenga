document.addEventListener("DOMContentLoaded", () => {

  const colors = [
    "rgba(180,190,175,0.20)",
    "rgba(210,190,200,0.18)",
    "rgba(200,210,220,0.16)",
    "rgba(200,180,170,0.14)"
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