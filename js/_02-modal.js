document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal-overlay");
  const modalWindow = document.querySelector(".modal");
  const body = document.body;

  // THANKS SCREEN
  const thanks = document.getElementById("modal-thanks");
  const backBtn = document.getElementById("thanks-back");

  // FORM
  const form = document.querySelector(".modal-form");
  const inputs = document.querySelectorAll(".modal-input");
  const errorMsg = document.getElementById("modal-error"); // ❗ елемент помилки

  // ВСІ кнопки, які повинні відкривати модалку
  const openButtons = [
    document.querySelector(".header__link"),
    document.querySelector(".button"),
    document.querySelector(".work__button")
  ];

  // ВІДКРИТТЯ
  function openModal(e) {
    if (e) e.preventDefault();
    modal.classList.add("active");
    body.classList.add("modal-open");

    // При кожному відкритті очищаємо помилки
    errorMsg.classList.remove("active");
    inputs.forEach(i => (i.style.borderColor = "rgba(255,0,0,0.6)"));
  }

  // ЗАКРИТТЯ
  function closeModal() {
    modalWindow.classList.add("closing");

    setTimeout(() => {
      modal.classList.remove("active");
      modalWindow.classList.remove("closing");
      body.classList.remove("modal-open");
      errorMsg.classList.remove("active"); // Приховуємо помилку при закритті
    }, 350);
  }

  // Обробка кнопок
  openButtons.forEach(btn => {
    if (btn) btn.addEventListener("click", openModal);
  });

  // Закриття по кліку на бекдроп
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Закриття по ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      thanks.classList.remove("active");
    }
  });

  // Валідація + THANKS
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.style.borderColor = "#ff0000";
        valid = false;
      } else {
        input.style.borderColor = "rgba(255,0,0,0.6)";
      }
    });

    // ❗ ПОКАЗАТИ ПОВІДОМЛЕННЯ ПРО ПОМИЛКУ
    if (!valid) {
      errorMsg.classList.add("active");
      return;
    }

    // Якщо все правильно → ховаємо помилку
    errorMsg.classList.remove("active");

    // Приховуємо модалку
    modal.classList.remove("active");

    // Показуємо THANK YOU
    thanks.classList.add("active");

    // Очищаємо форму
    inputs.forEach(input => (input.value = ""));
  });

  // Back → повернення з thanks screen
  backBtn.addEventListener("click", () => {
    thanks.classList.remove("active");
  });
});
