const openModalButton = document.getElementById("openModalButton");
const modal = document.getElementById("modal");
const closeModalButton = document.getElementById("closeModalButton");
const formSection = document.querySelector(".form-section");
const modalContent = document.querySelector(".modal-content");
const registrationForm = document.getElementById("registrationForm");

// Відкриття модального вікна при натисканні на кнопку
openModalButton.addEventListener("click", function () {
  // Переміщення форми в модал
  modalContent.appendChild(registrationForm);
  modal.style.display = "block";
});

// Закриття модального вікна при натисканні на хрестик
closeModalButton.addEventListener("click", function () {
  // Повернення форми назад
  formSection.appendChild(registrationForm);
  modal.style.display = "none";
});

// Закриття модального вікна, якщо натиснути поза нього
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    formSection.appendChild(registrationForm);
    modal.style.display = "none";
  }
});
