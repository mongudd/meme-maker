const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(500, 500, 15, 100);
ctx.fillRect(665, 500, 15, 100);
ctx.fillRect(560, 500, 60, 200);
ctx.arc(590, 420, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(610, 410, 8, 1 * Math.PI, 2 * Math.PI);
ctx.arc(570, 410, 8, 1 * Math.PI, 2 * Math.PI);
ctx.fill();
