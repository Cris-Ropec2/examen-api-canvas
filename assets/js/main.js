/*
==========================================================
Aplicación: Dinosaurio con API Canvas
Autor: Cristopher Rodríguez Pérez
Curso: Graficación
Fecha: 28/02/2026

Descripción:
Aplicación web desarrollada con JavaScript y la API 
Canvas de HTML5 que dibuja un dinosaurio por medio 
de figuras geométricas.

La aplicación incluye:
- Escenario (fondo, sol, nubes y suelo)
- Dinosaurio compuesto por múltiples funciones
- Uso de transformaciones 
- Manejo de capas mediante orden de dibujo

Tecnologías utilizadas:
- HTML5
- CSS3
- JavaScript
- API Canvas
==========================================================
*/


/* ===================================================== */
/* INICIALIZACIÓN DEL CANVAS                            */
/* ===================================================== */
window.onload = function () {
    // Obtener referencia al elemento canvas del HTML
    const canvas = document.getElementById("canvasDino");
    // Obtener referencia al elemento canvas del HTML
    const ctx = canvas.getContext("2d");

    // Definir tamaño del canvas
    canvas.width = 600;
    canvas.height = 500;

    /* ============================= */
    /* DIBUJO DEL ESCENARIO          */
    /* ============================= */
    dibujarFondo(ctx);
    dibujarSol(ctx);
    dibujarNube(ctx, 250, 100);
    dibujarNube(ctx, 420, 150);
    dibujarSuelo(ctx);

    /* ============================= */
    /* DIBUJO DEL DINOSAURIO         */
    /* ============================= */

    // Se usa translate para mover el dinosaurio ligeramente al frente
    ctx.save();
    ctx.translate(-100, 0);
    dibujarDinosaurio(ctx);
    ctx.restore();
};

/* ===================================================== */
/* ESCENARIO                                             */
/* ===================================================== */

/**
 * Dibuja el fondo del cielo
 */
function dibujarFondo(ctx) {
    ctx.fillStyle = "#6ec1e4";
    ctx.fillRect(0, 0, 600, 500);
}
/**
 * Dibuja el sol utilizando un círculo
 */
function dibujarSol(ctx) {
    ctx.fillStyle = "#FFD54F";
    ctx.beginPath();
    ctx.arc(120, 100, 60, 0, Math.PI * 2);
    ctx.fill();
}
/**
 * Dibuja una nube usando tres círculos superpuestos
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} x - Posición horizontal
 * @param {number} y - Posición vertical
 */
function dibujarNube(ctx, x, y) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, Math.PI * 2);
    ctx.arc(x + 30, y - 15, 30, 0, Math.PI * 2);
    ctx.arc(x + 60, y, 25, 0, Math.PI * 2);
    ctx.fill();
}
/**
 * Dibuja el suelo con formas semicirculares
 */
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

/* ===================================================== */
/* DINOSAURIO                                            */
/* ===================================================== */

/**
 * Función principal que organiza el dibujo del dinosaurio
 */
function dibujarDinosaurio(ctx) {
    dibujarCola(ctx);
    dibujarPatas(ctx); 
    dibujarCuello(ctx);   
    dibujarCuerpo(ctx);   
    dibujarManchas(ctx);  
    dibujarPlacas(ctx);
    dibujarCabeza(ctx);
}
/**
 * Dibuja el cuerpo principal usando elipse
 */
function dibujarCuerpo(ctx) {
    // Parte principal
    ctx.fillStyle = "#66BB6A";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.ellipse(380, 315, 160, 80, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Parte inferior con color diferente
    ctx.fillStyle = "#8BC34A";
    ctx.beginPath();
    ctx.ellipse(380, 330, 150, 60, 0, 0, Math.PI);
    ctx.fill();
}
/**
 * Dibuja la cola usando curvas cuadráticas
 */
function dibujarCola(ctx) {

    // Parte externa
    ctx.fillStyle = "#9CCC65";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.moveTo(480, 300);                      
    ctx.quadraticCurveTo(580, 300, 630, 230);  
    ctx.quadraticCurveTo(650, 380, 460, 340);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();


    // Parte interna con tono distinto
    ctx.fillStyle = "#66BB6A";

    ctx.beginPath();
    ctx.moveTo(485, 300);
    ctx.quadraticCurveTo(565, 285, 610, 250);
    ctx.quadraticCurveTo(590, 355, 480, 325);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();  
}
/**
 * Dibuja el cuello segmentado usando rectángulos redondeados
 */
function dibujarCuello(ctx) {
    ctx.fillStyle = "#66BB6A";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;

    for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        ctx.roundRect(200, 260 - (i * 28), 55, 35, 20);
        ctx.fill();
        ctx.stroke();
    }
}
/**
 * Dibuja el cuello segmentado usando rectángulos redondeados
 */
function dibujarCabeza(ctx) { 
    ctx.fillStyle = "#66BB6A"; 
    ctx.strokeStyle = "black"; 
    ctx.lineWidth = 3;
    
    ctx.beginPath();
    ctx.roundRect(150, 70, 95, 65, 25); 
    ctx.fill(); 
    ctx.stroke(); 
    
    // OJO 
    ctx.fillStyle = "white"; 
    ctx.beginPath();
    ctx.arc(210, 95, 12, 0, Math.PI * 2); 
    ctx.fill(); 
    ctx.stroke();

    ctx.fillStyle = "black"; 
    ctx.beginPath(); 
    ctx.arc(210, 95, 5, 0, Math.PI * 2); 
    ctx.fill(); 

    // Nariz 
    ctx.beginPath();
    ctx.arc(160, 105, 4, 0, Math.PI * 2); 
    ctx.fill(); ctx.stroke(); 

    // Sonrisa 
    ctx.beginPath();
    ctx.arc(170, 110, 18, 0, Math.PI); 
    ctx.stroke(); 
}
/**
 * Dibuja las patas y sus uñas
 */
function dibujarPatas(ctx) {
    ctx.fillStyle = "#66BB6A";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;

    const patas = [
        {x: 270, y: 365, w: 55, h: 110},
        {x: 290, y: 365, w: 60, h: 110},
        {x: 410, y: 365, w: 55, h: 110},
        {x: 430, y: 365, w: 60, h: 110}
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
/**
 * Dibuja las patas y sus uñas
 */
function dibujarPlacas(ctx) {
    ctx.fillStyle = "#3F51B5";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;

    const placas = [
        {x: 275, y: 255, ang: -0.30},
        {x: 340, y: 238, ang: -0.10},
        {x: 400, y: 235, ang:  0.10},
        {x: 480, y: 250, ang:  0.48},
        {x: 560, y: 275, ang: -0.45}
    ];

    placas.forEach(p => {

    ctx.save();

    // Mover el origen a la base de la placa
    ctx.translate(p.x, p.y); 

    // Mover el origen a la base de la placa
    ctx.rotate(p.ang);       

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(20, -40);
    ctx.lineTo(40, 0);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.restore();
});
}
/**
 * Dibuja manchas decorativas en el cuerpo
 */
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
        {x: 260, y: 310, r: 10}
    ];

    manchas.forEach(m => {
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    });
}