document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("showMoreBtn");
    const card = document.querySelector(".reviews__item--three");

    if (btn) {
        btn.addEventListener("click", () => {
            card.style.display = "block";
            btn.style.display = "none"; // кнопка зникає
        });
    }
});