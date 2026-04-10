const rainContainer = document.createElement("div");
rainContainer.classList.add("rain");
document.body.appendChild(rainContainer);

function createDrop() {
  const drop = document.createElement("div");

  const size = Math.random() * 3 + 2; // tamaño
  const left = Math.random() * window.innerWidth;

  drop.classList.add("drop");
  drop.style.left = left + "px";
  drop.style.width = size + "px";
  drop.style.height = size * 6 + "px";
  drop.style.animationDuration = (Math.random() * 2 + 2) + "s";

  rainContainer.appendChild(drop);

  setTimeout(() => {
    drop.remove();
  }, 4000);
}

setInterval(createDrop, 120);