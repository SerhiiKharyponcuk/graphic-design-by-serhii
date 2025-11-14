document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");

    window.addEventListener("load", () => {
        preloader.style.opacity = "0";

        setTimeout(() => {
            preloader.style.display = "none";
        }, 500);
    });
});
