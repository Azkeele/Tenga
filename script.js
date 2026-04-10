document.addEventListener("DOMContentLoaded", () => {

  const colors = [
    "rgba(255, 59, 48, 0.8)",   // rojo
    "rgba(255, 204, 0, 0.8)",   // amarillo
    "rgba(52, 199, 89, 0.8)",   // verde
    "rgba(0, 122, 255, 0.8)"    // azul
  ];

  function createSplatter(x, y, color) {
    const blot = document.createElement("div");

    const size = Math.random() * 120 + 60;

    blot.style.position = "fixed";
    blot.style.left = x + "px";
    blot.style.top = y + "px";
    blot.style.width = size + "px";
    blot.style.height = size + "px";

    // centro fuerte (menos blur)
    blot.style.background = color;
    blot.style.borderRadius = "50%";

    // EXPLOSIÓN de gotas usando box-shadow
    let shadows = [];
    for (let i = 0; i < 20; i++) {
      const offsetX = (Math.random() - 0.5) * 200;
      const offsetY = (Math.random() - 0.5) * 200;
      const blur = Math.random() * 10;
      const spread = Math.random() * 6;

      shadows.push(`${offsetX}px ${offsetY}px ${blur}px ${spread}px ${color}`);
    }

    blot.style.boxShadow = shadows.join(",");

    blot.style.pointerEvents = "none";
    blot.style.zIndex = "-1";

    document.body.appendChild(blot);

    // gotas pequeñas extra
    for (let i = 0; i < 15; i++) {
      const dot = document.createElement("div");

      const dSize = Math.random() * 8 + 3;

      dot.style.position = "fixed";
      dot.style.width = dSize + "px";
      dot.style.height = dSize + "px";

      dot.style.left = x + (Math.random() - 0.5) * 300 + "px";
      dot.style.top = y + (Math.random() - 0.5) * 300 + "px";

      dot.style.background = color;
      dot.style.borderRadius = "50%";

      dot.style.pointerEvents = "none";
      dot.style.zIndex = "-1";

      document.body.appendChild(dot);
    }

    // DRIP (chorreo)
    if (Math.random() > 0.5) {
      const drip = document.createElement("div");

      drip.style.position = "fixed";
      drip.style.left = x + size / 2 + "px";
      drip.style.top = y + size / 2 + "px";

      drip.style.width = Math.random() * 6 + 2 + "px";
      drip.style.height = Math.random() * 120 + 40 + "px";

      drip.style.background = color;
      drip.style.borderRadius = "50%";

      drip.style.filter = "blur(1px)";

      drip.style.zIndex = "-1";
      drip.style.pointerEvents = "none";

      document.body.appendChild(drip);
    }
  }

  // generar varias salpicaduras
  for (let i = 0; i < 8; i++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    const color = colors[Math.floor(Math.random() * colors.length)];

    createSplatter(x, y, color);
  }

});