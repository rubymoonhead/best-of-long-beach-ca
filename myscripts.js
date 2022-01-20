// Responsive navmenu
// Adds class active when user clicks on hamburger

const hamburger = document.querySelector(".hamburger");
const navbarLinks = document.querySelector(".navbar-links");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
	hamburger.classList.toggle("active");
	navbarLinks.classList.toggle("active");
}

// Close hamburger when user clicks on a navlink

const navLink = document.querySelectorAll(".navlink");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
	hamburger.classList.remove("active");
	navbarLinks.classList.remove("active");
}