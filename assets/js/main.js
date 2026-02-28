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
    dibujarPlacas(ctx);
    dibujarManchas(ctx);
    dibujarCuello(ctx);
    dibujarCabeza(ctx);
    dibujarOjo(ctx);
    dibujarPatas(ctx);
}
function dibujarCuerpo(ctx) {
    ctx.fillStyle = "#4CAF50";
    ctx.beginPath();
    ctx.ellipse(350, 300, 150, 80, 0, 0, Math.PI * 2);
    ctx.fill();
}
function dibujarCola(ctx) {
    ctx.fillStyle = "#4CAF50";
    ctx.beginPath();
    ctx.moveTo(480, 300);
    ctx.quadraticCurveTo(580, 250, 550, 320);
    ctx.quadraticCurveTo(520, 350, 480, 330);
    ctx.fill();
}
function dibujarCuello(ctx) {
    ctx.fillStyle = "#4CAF50";
    ctx.fillRect(230, 180, 60, 140);
}
function dibujarCabeza(ctx) {
    ctx.fillStyle = "#4CAF50";
    ctx.beginPath();
    ctx.roundRect(200, 130, 120, 80, 30);
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
    ctx.fillStyle = "#4CAF50";
    ctx.fillRect(320, 330, 40, 100);
    ctx.fillRect(400, 330, 40, 100);
}
function dibujarPlacas(ctx) {
    ctx.fillStyle = "#1976D2";

    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(300 + i * 40, 240);
        ctx.lineTo(320 + i * 40, 200);
        ctx.lineTo(340 + i * 40, 240);
        ctx.fill();
    }
}
function dibujarManchas(ctx) {
    ctx.fillStyle = "#8BC34A";

    ctx.beginPath();
    ctx.arc(330, 280, 20, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(380, 260, 25, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(420, 300, 18, 0, Math.PI * 2);
    ctx.fill();
}