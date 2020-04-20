let canvas = document.getElementById('c1'); // Get canvas element
let ctx = canvas.getContext('2d'); // Get canvas context


ctx.beginPath();
ctx.moveTo(100, 100); // Позиционируем перо на первую точку
ctx.lineTo(150, 150); // Задаем координаты линии
ctx.strokeStyle = 'red'; // Задаем цвет линии
ctx.lineWidth = 5; // Задаем толщину линии
ctx.stroke(); // Даем линии графическую обводку

ctx.lineTo(300, 50);  // Линия пойдет от последней нарисованной точки.
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 50); // Задали новые координаты пера
ctx.lineTo(300, 50);
ctx.strokeStyle = 'blue';
ctx.lineWidth = 20;
ctx.lineCap = 'round'; // Задает обрамление краев линии (round, square, butt - по-умолчанию)
ctx.stroke(); // В этом случае обе линии будут синими. Canvas считает, что это все пас одним путем. Чтобы такого не совершать, нужно начинать
// новый путь! Для этого существует метод beginPath(). Вставил beginPath(); Нужно применять перед каждым новым отрезком,
// который должен отличаться по параметрам!

ctx.clearRect(0, 0, 400, 200);

// Draw Triangle

ctx.beginPath();
ctx.moveTo(50, 150);
ctx.lineTo(150, 50);
ctx.lineTo(200, 150);
ctx.lineTo(50, 150);
ctx.lineWidth = 5;
ctx.lineCap = 'square';
ctx.fillStyle = 'yellow';
ctx.stroke();

ctx.fill(); // fill triangle

ctx.closePath(); // Метод замыкает путь автоматически



