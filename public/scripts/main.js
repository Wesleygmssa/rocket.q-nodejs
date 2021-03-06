import Modal from "./modal.js";

const modal = Modal();

const modalTitle = document.querySelector(".modal h2");
const modalDescription = document.querySelector(".modal p");
const modalButton = document.querySelector(".modal button");

//Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach((button) => {
  //adicionar a escuta
  button.addEventListener("click", handleClick);
  //   button.addEventListener("click", () => {
  //     modal.open();
  //   });
  //   modal.open();
});

/*Quando o botão delete for clicado ele abre a modal */
const deleteButton = document.querySelectorAll(".actions a.delete");

deleteButton.forEach((button) => {
  button.addEventListener("click", (event) => handleClick(event, false));
});

function handleClick(event, check = true) {
  event.preventDefault();
  //verificção para mudar o dexto de acordo ao compente selecionado
  const text = check ? "Marcar como lida" : "Excluir"; // ternario
  const slug = check ? "check" : "delete";
  const roomId = document.querySelector("#room-id").dataset.id;
  const questionId = event.target.dataset.id; // o elemento TARGET que aconteceu o evento

  const form = document.querySelector(".modal form");
  form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`);

  modalTitle.innerHTML = `${text} esta pergunta`;
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`;
  modalButton.innerHTML = `Sim, ${text.toLowerCase()}`;
  check
    ? modalButton.classList.remove("red")
    : modalButton.classList.add("red");

  //abrir modal
  modal.open();
}
