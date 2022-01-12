var canvas = document.getElementById('documentDrawArea');
var ctx = canvas.getContext('2d'); //tipo 2 dimensiones
var rect = canvas.getBoundingClientRect() //devolver la posicion left y top
var x = 0, y=0, dibujando = false, color = 'black', grosor = 1;
var correccionX, correccionY;


function defColor(c) {
    color = c;
}

function defGrosor(g) {
    grosor = g;
}

canvas.addEventListener('mousedown', function(e){
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    dibujando = true;
});

canvas.addEventListener('mousemove', function(e){
    if (dibujando === true){
        dibujar(x, y, e.clientX - rect.left, e.clientY - rect.top);
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
    }
});

canvas.addEventListener('touchstart', function(e){
            // Versión touch, pantalla tactil
        x = event.changedTouches[0].pageX - rect.left;
        y = event.changedTouches[0].pageY - rect.top;
        dibujando = true;
});

canvas.addEventListener('touchmove', function(e){
    if (dibujando === true){
        // Versión touch, pantalla tactil
        dibujar(x, y, event.changedTouches[0].pageX - rect.left, event.changedTouches[0].pageY - rect.top);
        x = event.changedTouches[0].pageX - rect.left;
        y = event.changedTouches[0].pageY - rect.top;
    }
});


canvas.addEventListener('mouseup', function(e){
    if (dibujando === true){
        dibujar(x, y, e.clientX - rect.left, e.clientY - rect.top);
        x = 0;
        y = 0;
        dibujando = false;
    }
});

function dibujar(x1, y1, x2, y2){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = grosor;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}

