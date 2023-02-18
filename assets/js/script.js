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
  //Con esto se escribe este codigo en el .html 
  const contenido = `<div>
    <i class="item__i far fa-check-square icon"></i>
    <span class="item__tarea">${value}</span>
    </div>
    <i class="lista__i fas fa-trash-alt trashIcon icon"></i>`
  tarea.innerHTML = contenido;

  lista.appendChild(tarea);
}


//Arrow function o funciones anónimas
btn.addEventListener("click", crearTarea);