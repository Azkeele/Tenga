document.addEventListener("DOMContentLoaded", () => {

  const canvas = document.getElementById("bg");
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener("resize", resize);

  const colors = [
    "#F15A24",
    "#3D315B",
    "#41B6A6",
    "#7A89A6",
    "#5E827F"
  ];

  const blobs = [];

  for (let i = 0; i < colors.length; i++) {

    blobs.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,

      baseRadius: 250 + Math.random() * 200,

      speedX: (Math.random() - 0.5) * 0.8,
      speedY: (Math.random() - 0.5) * 0.8,

      phase: Math.random() * Math.PI * 2,

      color: colors[i]
    });
  }

  function drawBlob(blob, time) {

    const points = 24;

    ctx.beginPath();

    for (let i = 0; i <= points; i++) {

      const angle = (i / points) * Math.PI * 2;

      const wave =
        Math.sin(angle * 3 + time * 0.001 + blob.phase) * 40 +
        Math.cos(angle * 2 - time * 0.0015 + blob.phase) * 25;

      const radius = blob.baseRadius + wave;

      const px = blob.x + Math.cos(angle) * radius;
      const py = blob.y + Math.sin(angle) * radius;

      if (i === 0) {
        ctx.moveTo(px, py);
      } else {
        ctx.lineTo(px, py);
      }
    }

    ctx.closePath();

    const gradient = ctx.createRadialGradient(
      blob.x,
      blob.y,
      0,
      blob.x,
      blob.y,
      blob.baseRadius
    );

    gradient.addColorStop(0, blob.color + "DD");
    gradient.addColorStop(1, blob.color + "00");

    ctx.fillStyle = gradient;
    ctx.fill();
  }

  function animate(time) {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.globalCompositeOperation = "screen";

    blobs.forEach(blob => {

      blob.x += blob.speedX;
      blob.y += blob.speedY;

      if (blob.x < -300) blob.x = canvas.width + 300;
      if (blob.x > canvas.width + 300) blob.x = -300;

      if (blob.y < -300) blob.y = canvas.height + 300;
      if (blob.y > canvas.height + 300) blob.y = -300;

      drawBlob(blob, time);
    });

    requestAnimationFrame(animate);
  }

  animate(0);

});