
//funcion anonima para crear casilla check
const casillaCheck = () => {
  const i = document.createElement("i");
  i.classList.add('item__i', 'far', 'fa-check-square', 'icon');
  i.addEventListener("click", tareaCompleta);
  return i;
};  
const tareaCompleta = (evento) => {
  const elemnto = evento.target;
  elemnto.classList.toggle("fas");
  elemnto.classList.toggle("completeIcon");
  elemnto.classList.toggle("far");
};

export default casillaCheck;