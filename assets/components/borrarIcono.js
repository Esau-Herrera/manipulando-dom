//Funcion anonima para borrar icono y tarea
const borrarIcono = () => {
  const i = document.createElement("i");
  i.classList.add('lista__i', 'fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener("click", borrarTarea);
  return i;
};

const borrarTarea = (evento) => {
  const padre = evento.target.parentElement;
  padre.remove();
};

export default borrarIcono;