document.addEventListener("DOMContentLoaded", () => {

  const canvas = document.getElementById("bg");
  const ctx = canvas.getContext("2d");

  const colors = [
    "#F15A24",
    "#3D315B",
    "#41B6A6",
    "#7A89A6",
    "#5E827F"
  ];

  const blobs = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  for (let i = 0; i < 8; i++) {
    blobs.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,

      radius: Math.random() * 350 + 250,

      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,

      color: colors[i % colors.length]
    });
  }

  function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    blobs.forEach(blob => {

      blob.x += blob.vx;
      blob.y += blob.vy;

      if (blob.x < -blob.radius)
        blob.x = canvas.width + blob.radius;

      if (blob.x > canvas.width + blob.radius)
        blob.x = -blob.radius;

      if (blob.y < -blob.radius)
        blob.y = canvas.height + blob.radius;

      if (blob.y > canvas.height + blob.radius)
        blob.y = -blob.radius;

      const gradient = ctx.createRadialGradient(
        blob.x,
        blob.y,
        0,
        blob.x,
        blob.y,
        blob.radius
      );

      gradient.addColorStop(0, blob.color + "55");
      gradient.addColorStop(1, blob.color + "00");

      ctx.fillStyle = gradient;

      ctx.beginPath();
      ctx.arc(
        blob.x,
        blob.y,
        blob.radius,
        0,
        Math.PI * 2
      );

      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();
});
