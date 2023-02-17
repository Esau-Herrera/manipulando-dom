const btn = document.querySelector("[data-form-btn]");

const crearTarea = (evento) => {
  evento.preventDefault();
  input = document.querySelector("[data-form-input]");
}


//Arrow function o funciones anónimas
btn.addEventListener("click", crearTarea);