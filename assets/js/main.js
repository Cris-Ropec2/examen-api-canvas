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

    dibujarEscenario(ctx);
    dibujarDinosaurio(ctx);
};

/* ============================= */
/* FUNCIÓN: Dibujar Escenario    */
/* ============================= */
function dibujarEscenario(ctx) {

    // Fondo cielo
    ctx.fillStyle = "#6ec1e4";
    ctx.fillRect(0, 0, 600, 500);

    // Suelo
    ctx.fillStyle = "#4CAF50";
    ctx.beginPath();
    ctx.arc(200, 500, 300, Math.PI, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(450, 500, 250, Math.PI, 2 * Math.PI);
    ctx.fill();
}

/* ============================= */
/* FUNCIÓN: Dibujar Dinosaurio   */
/* ============================= */
function dibujarDinosaurio(ctx) {

    // Cuerpo
    ctx.fillStyle = "#4CAF50";
    ctx.beginPath();
    ctx.ellipse(350, 300, 150, 80, 0, 0, Math.PI * 2);
    ctx.fill();

    // Cuello
    ctx.fillRect(230, 180, 60, 140);

    // Cabeza
    ctx.beginPath();
    ctx.roundRect(200, 130, 120, 80, 30);
    ctx.fill();

    // Ojo
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(280, 160, 15, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(285, 160, 7, 0, Math.PI * 2);
    ctx.fill();

    // Patas
    ctx.fillStyle = "#4CAF50";
    ctx.fillRect(320, 330, 40, 100);
    ctx.fillRect(400, 330, 40, 100);
}