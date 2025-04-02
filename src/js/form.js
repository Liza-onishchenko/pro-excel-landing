const countdownElement = document.getElementById("countdown");
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function updateCountdown() {
  const targetDate = new Date("2025-04-03T00:00:00").getTime();
  const currentDate = new Date().getTime();
  const timeLeft = targetDate - currentDate;

  console.log("Time left (ms):", timeLeft);

  if (timeLeft <= 0) {
    daysElement.textContent = "00";
    hoursElement.textContent = "00";
    minutesElement.textContent = "00";
    secondsElement.textContent = "00";
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  daysElement.textContent = days.toString().padStart(2, "0");
  hoursElement.textContent = hours.toString().padStart(2, "0");
  minutesElement.textContent = minutes.toString().padStart(2, "0");
  secondsElement.textContent = seconds.toString().padStart(2, "0");
}

const countdownInterval = setInterval(updateCountdown, 1000);

// Клонування таймера для модального вікна
const modalFormContainer = document.getElementById("modalFormContainer");
const clonedCountdown = countdownElement.cloneNode(true); // Клонування існуючого таймеру
modalFormContainer.appendChild(clonedCountdown);

// Оновлення елементів таймера в модальному вікні
const clonedDaysElement = clonedCountdown.querySelector("#days");
const clonedHoursElement = clonedCountdown.querySelector("#hours");
const clonedMinutesElement = clonedCountdown.querySelector("#minutes");
const clonedSecondsElement = clonedCountdown.querySelector("#seconds");

function updateClonedCountdown() {
  clonedDaysElement.textContent = daysElement.textContent;
  clonedHoursElement.textContent = hoursElement.textContent;
  clonedMinutesElement.textContent = minutesElement.textContent;
  clonedSecondsElement.textContent = secondsElement.textContent;
}

setInterval(updateClonedCountdown, 1000);
