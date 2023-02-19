import casillaCheck from "../components/casillaCheck.js";
import borrarIcono from "../components/borrarIcono.js";

// Asigna el objet data-form-btn a la bariable btn
const btn = document.querySelector("[data-form-btn]");

//Funcion anonima o arrow function
const crearTarea = (evento) => {
  evento.preventDefault();
  const input = document.querySelector("[data-form-input]");
  const value = input.value;
  const lista = document.querySelector("[data-lista]");
  const tarea = document.createElement("li");
  tarea.classList.add("lista__item");
  input.value = "";

  //Crea el div opadre de la lista de tareas
  const contenedroTareas = document.createElement("div");
  
  const tituloTarea = document.createElement("span");
  tituloTarea.classList.add("item__tarea");
  tituloTarea.innerText = value;    
  contenedroTareas.appendChild(casillaCheck());
  contenedroTareas.appendChild(tituloTarea);

  tarea.appendChild(contenedroTareas);
  tarea.appendChild(borrarIcono());
  lista.appendChild(tarea);
};

btn.addEventListener("click", crearTarea);  


//para que las variables no puedan se accesibles al usuario mediante el navegador
// se colocan dentro de la siguiente extructura

//Immediatly invoked function expression o IIFE
/*
(() => {
  
})();
*/