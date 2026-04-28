// Script para funcionar o hamgurguer
const btn = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

(btn,
  addEventListener("click", () => {
    nav.classList.toggle("active");
  }));