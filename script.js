document.addEventListener("DOMContentLoaded", () => {

  const colors = [
    "rgba(190, 245, 162, 0.54)",
    "rgba(214, 103, 159, 0.64)",
    "rgba(83, 169, 255, 0.6)",
    "rgba(244, 171, 135, 0.66)"
  ];

  for (let i = 0; i < 14; i++) {
    const blot = document.createElement("div");

    const size = Math.random() * 300 + 120;

    blot.style.position = "fixed";
    blot.style.width = size + "px";
    blot.style.height = size + "px";

    blot.style.left = Math.random() * 100 + "vw";
    blot.style.top = Math.random() * 100 + "vh";

    blot.style.background = colors[Math.floor(Math.random() * colors.length)];

    /* 🔥 CLAVE: romper el círculo perfecto */
    blot.style.borderRadius =
      `${40 + Math.random() * 30}% ${60 + Math.random() * 30}% ${50 + Math.random() * 30}% ${40 + Math.random() * 30}% / 
       ${60 + Math.random() * 30}% ${40 + Math.random() * 30}% ${60 + Math.random() * 30}% ${50 + Math.random() * 30}%`;

    blot.style.filter = "blur(35px)";

    blot.style.transform =
      `scale(${0.8 + Math.random() * 1.4}) rotate(${Math.random() * 360}deg) skew(${Math.random() * 20}deg)`;

    blot.style.opacity = "0.9";
    blot.style.zIndex = "-1";
    blot.style.pointerEvents = "none";

    document.body.appendChild(blot);
  }

});