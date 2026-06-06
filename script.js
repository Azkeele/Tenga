document.addEventListener("DOMContentLoaded", () => {

  const canvas = document.getElementById("bg");
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawBackground();
  }

  window.addEventListener("resize", resizeCanvas);

  function drawBackground() {

    // limpiar
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // fondo blanco
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const colors = [
      "#ff3b30", // rojo
      "#ffcc00", // amarillo
      "#34c759", // verde
      "#007aff"  // azul
    ];

    function splatter(x, y, color) {
      const drops = 80;

      for (let i = 0; i < drops; i++) {

        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 140;

        const dx = Math.cos(angle) * radius;
        const dy = Math.sin(angle) * radius;

        const size = Math.random() * 6;

        ctx.globalAlpha = Math.random() * 0.4 + 0.2;

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
    }

    // evitar el centro (zona típica de productos)
    const marginX = canvas.width * 0.25;
    const marginY = canvas.height * 0.25;

    function getSafePosition() {
      let x, y;

      do {
        x = Math.random() * canvas.width;
        y = Math.random() * canvas.height;
      } while (
        x > marginX &&
        x < canvas.width - marginX &&
        y > marginY &&
        y < canvas.height - marginY
      );

      return { x, y };
    }

    // cantidad controlada (no saturar)
    const splatterCount = 5;

    for (let i = 0; i < splatterCount; i++) {
      const { x, y } = getSafePosition();

      const color = colors[Math.floor(Math.random() * colors.length)];

      splatter(x, y, color);
    }
  }

  resizeCanvas();

});