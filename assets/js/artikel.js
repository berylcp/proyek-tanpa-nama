const navbarToggleInput = document.querySelector(".navbar__toggle input");
const navbarNav = document.querySelector(".navbar__nav");

function toggleSidebar() {
  navbarNav.classList.toggle("show");
}

navbarToggleInput.addEventListener("click", function () {
  toggleSidebar();
});
