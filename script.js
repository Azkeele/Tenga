document.addEventListener("DOMContentLoaded", () => {

  const colors = [
    "rgba(190, 245, 162, 0.54)",
    "rgba(214, 103, 159, 0.64)",
    "rgba(83, 169, 255, 0.6)",
    "rgba(244, 171, 135, 0.66)"
  ];

  for (let i = 0; i < 14; i++) {
    const blot = document.createElement("div");

    const width = Math.random() * 260 + 140;
    const height = Math.random() * 320 + 160;

    blot.style.position = "fixed";
    blot.style.width = width + "px";
    blot.style.height = height + "px";

    blot.style.left = Math.random() * 100 + "vw";
    blot.style.top = Math.random() * 100 + "vh";

    /* sensación líquida */
    const color = colors[Math.floor(Math.random() * colors.length)];

    blot.style.background = `
      radial-gradient(circle at 30% 30%, ${color}, transparent 70%),
      radial-gradient(circle at 70% 60%, ${color}, transparent 75%)
    `;

    /* forma más “gota / pintura” */
    blot.style.borderRadius =
      `${60 + Math.random() * 30}% ${40 + Math.random() * 40}% ${70 + Math.random() * 20}% ${50 + Math.random() * 30}% / 
       ${40 + Math.random() * 30}% ${60 + Math.random() * 30}% ${50 + Math.random() * 30}% ${70 + Math.random() * 20}%`;

    blot.style.filter = "blur(12px)";

    /* leve estiramiento tipo líquido */
    blot.style.transform =
      `scale(${0.9 + Math.random() * 1.2}) rotate(${Math.random() * 360}deg)`;

    blot.style.opacity = "1";
    blot.style.zIndex = "-1";
    blot.style.pointerEvents = "none";

    document.body.appendChild(blot);
  }

});