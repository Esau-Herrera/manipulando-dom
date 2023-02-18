
(() => {
  // Asigna el objet data-form-btn a la bariable btn
  const btn = document.querySelector("[data-form-btn]");
  
  //Funcion anonima o arrow function
  const crearTarea = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const lista = document.querySelector("[data-lista]")
    const tarea = document.createElement("li");
    tarea.classList.add("lista__item");
    input.value = "";
  
    //Crea el div opadre de la lista de tareas
    const contenedroTareas = document.createElement("div");
    contenedroTareas.appendChild(casillaCheck());
  
    const tituloTarea = document.createElement("span");
    tituloTarea.classList.add("item__tarea");
    tituloTarea.innerText = value;
  
    contenedroTareas.appendChild(tituloTarea);
  
    const contenido = `        
      <i class="lista__i fas fa-trash-alt trashIcon icon"></i>`;  
    tarea.appendChild(contenedroTareas);
    lista.appendChild(tarea);
  }
  
  
  //Arrow function o funciones anónimas
  btn.addEventListener("click", crearTarea);
  
  //funcion anonima para crear casilla check
  const casillaCheck = () => {
    const i = document.createElement("i");
    i.classList.add('item__i', 'far', 'fa-check-square', 'icon');
    i.addEventListener("click", tareaCompleta);
    return i;
  }
  
  //Immediatly invoked function expression o IIFE
  const tareaCompleta = (evento) => {
    const elemnto = evento.target;
    elemnto.classList.toggle("fas");
    elemnto.classList.toggle("completeIcon");
    elemnto.classList.toggle("far");
  };  
})();