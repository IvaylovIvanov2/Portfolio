// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuTitle = document.querySelector(".menu-title");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  menuBtn.classList.toggle("close");
  menu.classList.toggle("show");
  menuTitle.classList.toggle("hide");
  menuNav.classList.toggle("show");
  menuBranding.classList.toggle("show");
  navItems.forEach(n => n.classList.toggle("show"));
}
