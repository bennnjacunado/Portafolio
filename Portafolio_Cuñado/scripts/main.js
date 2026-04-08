/* --- ETAPA 4: MANIPULACIÓN DEL DOM E INTERACTIVIDAD --- */

/* PASO 1: INSTANCIAR REFERENCIAS A LOS NODOS DEL DOM
   Utilizamos el método getElementById() perteneciente al objeto global 'document'.
   Este método recibe como parámetro un string (cadena de texto) con el valor del atributo 'id'
   del elemento HTML, y retorna la referencia a ese nodo en el DOM.
   Guardamos estas referencias declarando constantes (const) para asegurar que la referencia en memoria no sea reasignada.
*/

const botonAbrir = document.getElementById('btn-diagnostico');
const botonCerrar = document.getElementById('btn-cerrar');
const ventanaModal = document.getElementById('modal-info');


/* PASO 2: REGISTRO DE MANEJADORES DE EVENTOS (EVENT LISTENERS)
   Invocamos el método addEventListener() sobre los nodos de los botones.
   Este método recibe dos parámetros obligatorios:
   1. El tipo de evento a escuchar (el string 'click').
   2. Una función 'callback' (función anónima) que contiene el bloque de instrucciones 
      que se ejecutará o "disparará" cuando el evento ocurra.
*/

botonAbrir.addEventListener('click', function() {
    /* Invocamos el método nativo showModal() perteneciente a la API del elemento HTMLDialogElement.
       Este método renderiza la etiqueta <dialog> en la capa superior (top layer) del navegador,
       bloqueando la interacción con el resto del documento principal (comportamiento modal). */
    ventanaModal.showModal();
});

botonCerrar.addEventListener('click', function() {
    /* Invocamos el método nativo close() sobre el nodo del dialog.
       Este método cambia el estado del elemento a oculto y devuelve el foco al documento. */
    ventanaModal.close();
});
/* --- ETAPA 7: LÓGICA DEL MODO OSCURO (ESTILO SUTIL) --- */

/* 1. Capturamos el nodo del botón flotante */
const botonTema = document.getElementById('btn-tema');
const iconoTema = document.getElementById('icono-tema');

botonTema.addEventListener('click', function() {
    document.body.classList.toggle('modo-oscuro');
    
    if (document.body.classList.contains('modo-oscuro')) {
        iconoTema.src = "images/sol.png";
    } else {
        iconoTema.src = "images/luna.png";
    }
});

/* --- ETAPA 10: LÓGICA DEL SEGUIDOR DE CURSOR --- */

const dot = document.getElementById("cursor-dot");
const outline = document.getElementById("cursor-outline");

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // el punto sigue EXACTO
    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
});

// el círculo sigue con retraso (efecto pro)
let outlineX = 0;
let outlineY = 0;

function animate() {
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;

    outline.style.left = outlineX + "px";
    outline.style.top = outlineY + "px";

    requestAnimationFrame(animate);
}

animate();