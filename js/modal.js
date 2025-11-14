// ===== MODAL ===== //
const modal = document.getElementById("modal");
const backdrop = document.getElementById("modal-backdrop");

// Кнопки відкриття
const headerBtn = document.querySelector(".header__link"); 
const workBtn = document.querySelector(".work__button");

// ВІДКРИТТЯ
function openModal(e) {
  e.preventDefault(); // Щоб не скролило до #contacts
  modal.classList.add("open");
  backdrop.classList.add("open");
}

// ЗАКРИТТЯ
function closeModal() {
  modal.classList.remove("open");
  backdrop.classList.remove("open");
}

// Відкриття по кліку
headerBtn?.addEventListener("click", openModal);
workBtn?.addEventListener("click", openModal);

// Закриття натиском на фон
backdrop.addEventListener("click", closeModal);

// Закриття ESC
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModal();
});
