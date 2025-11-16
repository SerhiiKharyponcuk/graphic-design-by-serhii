document.addEventListener("DOMContentLoaded", () => {

  const burgerBtn = document.querySelector(".header__burger"); 
  const burgerOverlay = document.getElementById("burger-overlay");
  const burgerClose = document.getElementById("burger-close");
  const burgerLinks = document.querySelectorAll(".burger-link"); // всі посилання меню

  // ВІДКРИТТЯ МЕНЮ
  burgerBtn.addEventListener("click", () => {
    burgerOverlay.classList.add("active");
    document.body.classList.add("modal-open");  // блокує скрол
  });

  // ФУНКЦІЯ ЗАКРИТТЯ
  function closeBurger() {
    burgerOverlay.classList.remove("active");
    document.body.classList.remove("modal-open");
  }

  // ЗАКРИТТЯ ПО КНОПЦІ CLOSE
  burgerClose.addEventListener("click", closeBurger);

  // ЗАКРИТТЯ ПО ФОНУ
  burgerOverlay.addEventListener("click", (e) => {
    if (e.target === burgerOverlay) {
      closeBurger();
    }
  });

  // ЗАКРИТТЯ ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeBurger();
    }
  });

  // ПЛАВНИЙ ПЕРЕХІД + ЗАКРИТТЯ МЕНЮ ПРИ КЛІКУ НА ПОСИЛАННЯ
  burgerLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href");
      const section = document.querySelector(targetId);

      closeBurger(); // закриваємо меню

      // плавно скролимо
      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth" });
      }, 300); // трішки затримки для плавності
    });
  });

});
