const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

const colors = [
  "#ff3838",
  "#ffb8b8",
  "#c56cf0",
  "#ff9f1a",
  "#fff200",
  "#32ff7e",
  "#7efff5",
];

const randomX = Math.random() * 800;
const randomY = Math.random() * 800;
console.log(randomX, randomY);

function onClick(event) {
  ctx.beginPath();
  const randomX = Math.random() * 800;
  const randomY = Math.random() * 800;
  console.log(randomX, randomY);
  ctx.moveTo(randomX, randomY);
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
}

canvas.addEventListener("mousemove", onClick);
canvas.addEventListener("mousemove", onMouseMoveCounter);
