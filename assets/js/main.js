/*
==================================================
Aplicación: Dibujo de Dinosaurio con API Canvas
Autor: Cristopher Rodríguez Pérez
Curso: Graficación
Fecha: 28/02/2026
Descripción:
Aplicación web que dibuja un dinosaurio utilizando
la API Canvas de HTML5.
En esta misma web se mostrara la imagen de referencia.
==================================================
*/
window.onload = function () {
    const canvas = document.getElementById("canvasDino");
    const ctx = canvas.getContext("2d");

    canvas.width = 600;
    canvas.height = 500;

    //ESENARIO
    dibujarFondo(ctx);
    dibujarSol(ctx);
    dibujarNube(ctx, 250, 100);
    dibujarNube(ctx, 420, 150);
    dibujarSuelo(ctx);

    //DINOSAURIO 
    dibujarDinosaurio(ctx);
};

/* ============================= */
/* ESCENARIO                     */
/* ============================= */

function dibujarFondo(ctx) {
    ctx.fillStyle = "#6ec1e4";
    ctx.fillRect(0, 0, 600, 500);
}
function dibujarSol(ctx) {
    ctx.fillStyle = "#FFD54F";
    ctx.beginPath();
    ctx.arc(120, 100, 60, 0, Math.PI * 2);
    ctx.fill();
}
function dibujarNube(ctx, x, y) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, Math.PI * 2);
    ctx.arc(x + 30, y - 15, 30, 0, Math.PI * 2);
    ctx.arc(x + 60, y, 25, 0, Math.PI * 2);
    ctx.fill();
}
function dibujarSuelo(ctx) {
    ctx.fillStyle = "#4CAF50";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.arc(200, 520, 200, Math.PI, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(450, 520, 200, Math.PI, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

/* ============================= */
/* DINOSAURIO                    */
/* ============================= */

function dibujarDinosaurio(ctx) {
    dibujarCola(ctx);        
    dibujarCuerpo(ctx);      
    dibujarManchas(ctx);     
    dibujarPlacas(ctx);      
    dibujarPatas(ctx);       
    dibujarCuello(ctx);      
    dibujarCabeza(ctx);   
}
function dibujarCuerpo(ctx) {
    // Color principal
    ctx.fillStyle = "#66BB6A";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.ellipse(360, 310, 160, 90, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Parte inferior (segundo color)
    ctx.fillStyle = "#8BC34A";
    ctx.beginPath();
    ctx.ellipse(360, 340, 150, 60, 0, 0, Math.PI);
    ctx.fill();
}
function dibujarCola(ctx) {
    ctx.fillStyle = "#66BB6A";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.moveTo(470, 300);
    ctx.quadraticCurveTo(610, 250, 600, 320);
    ctx.quadraticCurveTo(580, 350, 450, 330);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Parte inferior clara
    ctx.fillStyle = "#9CCC65";
    ctx.beginPath();
    ctx.moveTo(470, 325);
    ctx.quadraticCurveTo(560, 310, 540, 345);
    ctx.quadraticCurveTo(520, 355, 470, 340);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}
function dibujarCuello(ctx) {
    ctx.fillStyle = "#66BB6A";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;

    for (let i = 0; i < 6; i++) {  
        ctx.beginPath();
        ctx.roundRect(330, 270 - (i * 28), 60, 35, 20);
        ctx.fill();
        ctx.stroke();
    }
}
function dibujarCabeza(ctx) {
    ctx.fillStyle = "#66BB6A";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.roundRect(315, 80, 90, 65, 25);
    ctx.fill();
    ctx.stroke();

    // Ojo
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(355, 105, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(360, 105, 5, 0, Math.PI * 2);
    ctx.fill();

    // Nariz
    ctx.beginPath();
    ctx.arc(390, 105, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Sonrisa
    ctx.beginPath();
    ctx.arc(365, 120, 18, 0, Math.PI);
    ctx.stroke();
}
function dibujarOjo(ctx) {
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.arc(335, 60, 13, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(340, 60, 6, 0, Math.PI * 2);
    ctx.fill();
}
function dibujarPatas(ctx) {
    ctx.fillStyle = "#66BB6A";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;

    const patas = [
        {x: 280, y: 360, w: 50, h: 95},
        {x: 340, y: 360, w: 50, h: 95},
        {x: 420, y: 350, w: 65, h: 110},
        {x: 500, y: 350, w: 65, h: 110}
    ];

    patas.forEach(pata => {

        ctx.beginPath();
        ctx.roundRect(pata.x, pata.y, pata.w, pata.h, 20);
        ctx.fill();
        ctx.stroke();

        // uñas
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(pata.x + 15, pata.y + 100, 6, 0, Math.PI * 2);
        ctx.arc(pata.x + 30, pata.y + 100, 6, 0, Math.PI * 2);
        ctx.arc(pata.x + 45, pata.y + 100, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#66BB6A";
    });
}
function dibujarPlacas(ctx) {
    ctx.fillStyle = "#3F51B5";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;

    const placas = [
        {x: 330, y: 240},
        {x: 370, y: 225},
        {x: 410, y: 215},
        {x: 450, y: 220},
        {x: 490, y: 235},
        {x: 530, y: 255},
        {x: 570, y: 275}
    ];

    placas.forEach(p => {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + 20, p.y - 40);
        ctx.lineTo(p.x + 40, p.y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    });
}
function dibujarManchas(ctx) {
    ctx.fillStyle = "#8BC34A";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    const manchas = [
        {x: 300, y: 300, r: 20},
        {x: 340, y: 270, r: 15},
        {x: 380, y: 310, r: 18},
        {x: 420, y: 280, r: 12},
        {x: 460, y: 300, r: 16},
        {x: 500, y: 290, r: 14},
        {x: 520, y: 315, r: 12},
        {x: 360, y: 340, r: 10},
        {x: 440, y: 345, r: 12}
    ];

    manchas.forEach(m => {
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    });
}