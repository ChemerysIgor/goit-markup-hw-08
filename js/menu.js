(() => {
    const refs = {
        openMenuBtn: document.querySelector(".burger-btn"),
        closeMenuBtn: document.querySelector(".mob__btn"),
        menu: document.querySelector(".mob__menu"),
    };

    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);

    function toggleMenu() {
        refs.menu.classList.toggle("is-hidden");
    }
})();