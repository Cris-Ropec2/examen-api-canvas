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

    dibujarFondo(ctx);
    dibujarSuelo(ctx);
    dibujarDinosaurio(ctx);
};

/* ============================= */
/* ESCENARIO                     */
/* ============================= */

function dibujarFondo(ctx) {
    ctx.fillStyle = "#6ec1e4";
    ctx.fillRect(0, 0, 600, 500);
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
    dibujarCuerpo(ctx);
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