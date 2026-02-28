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

    ctx.beginPath();
    ctx.arc(200, 500, 300, Math.PI, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(450, 500, 250, Math.PI, 2 * Math.PI);
    ctx.fill();
}

/* ============================= */
/* DINOSAURIO                    */
/* ============================= */

function dibujarDinosaurio(ctx) {
    dibujarCola(ctx);
    dibujarCuerpo(ctx);
    dibujarPatas(ctx);
    dibujarCuello(ctx);
    dibujarCabeza(ctx);
    dibujarOjo(ctx);
    dibujarPlacas(ctx);
    dibujarManchas(ctx);
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
    ctx.moveTo(490, 300);
    ctx.quadraticCurveTo(600, 250, 570, 320);
    ctx.quadraticCurveTo(540, 350, 490, 330);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}
function dibujarCuello(ctx) {
    ctx.fillStyle = "#66BB6A";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;

    for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.ellipse(260, 270 - (i * 35), 35, 25, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    }
}
function dibujarCabeza(ctx) {
    ctx.fillStyle = "#4CAF50";
    ctx.beginPath();
    ctx.moveTo(220, 130);
    ctx.lineTo(300, 130);
    ctx.quadraticCurveTo(330, 130, 330, 160);
    ctx.lineTo(330, 190);
    ctx.quadraticCurveTo(330, 220, 300, 220);
    ctx.lineTo(220, 220);
    ctx.quadraticCurveTo(190, 220, 190, 190);
    ctx.lineTo(190, 160);
    ctx.quadraticCurveTo(190, 130, 220, 130);
    ctx.fill();
}
function dibujarOjo(ctx) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(280, 160, 15, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(285, 160, 7, 0, Math.PI * 2);
    ctx.fill();
}
function dibujarPatas(ctx) {
    ctx.fillStyle = "#66BB6A";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;

    const patas = [
        {x: 300, y: 350},
        {x: 350, y: 350},
        {x: 400, y: 350},
        {x: 450, y: 350}
    ];

    patas.forEach(pata => {
        // pata
        ctx.beginPath();
        ctx.roundRect(pata.x, pata.y, 40, 90, 15);
        ctx.fill();
        ctx.stroke();

        // uñas
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(pata.x + 10, pata.y + 90, 5, 0, Math.PI * 2);
        ctx.arc(pata.x + 20, pata.y + 90, 5, 0, Math.PI * 2);
        ctx.arc(pata.x + 30, pata.y + 90, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#66BB6A";
    });
}
function dibujarPlacas(ctx) {
    ctx.fillStyle = "#1976D2";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(330 + i * 40, 260);
        ctx.lineTo(350 + i * 40, 220);
        ctx.lineTo(370 + i * 40, 260);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
}
function dibujarManchas(ctx) {
    ctx.fillStyle = "#8BC34A";

    const manchas = [
        {x: 310, y: 290, r: 15},
        {x: 340, y: 260, r: 20},
        {x: 380, y: 280, r: 18},
        {x: 410, y: 300, r: 12},
        {x: 360, y: 310, r: 10}
    ];

    manchas.forEach(m => {
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx.fill();
    });
}