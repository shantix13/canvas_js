let canvas = document.getElementById('c1'); // Get canvas element
let ctx = canvas.getContext('2d'); // Get canvas context

ctx.fillStyle = 'red';  // Defer element colour
ctx.fillRect(100, 50, 150, 75); // Fill rectangle fillRect(x, y, width, height) in px black colour by default


ctx.fillStyle = 'blue';
ctx.fillRect(150, 100, 100, 50);

//ctx.clearRect(0, 0, 400, 200); // Erase Canvas element

ctx.clearRect(150, 100, 50, 50);


ctx.rect(5, 10, 100, 100); // Рисуем прямоугольник разных типов. Этой командой только задаем координаты
ctx.strokeStyle = 'green'; // Задаем цвет заливки
ctx.lineWidth = 10; // Задаем ширину линии обводки
ctx.fillStyle = 'orange'; //
ctx.fill(); // Заливаем прямоугольник
ctx.stroke(); // Создаем обводку по заданным координатам.

