// Script para funcionar o hamgurguer
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("ativo");
  });
});

// Evita que atualiza a pagina ao clickar em enviar
const form = document.getElementById("meuForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // 🚫 impede o reload da página

  console.log("Form enviado!");
});
form.addEventListener("submit", function(event) {
  event.preventDefault();

  form.reset();
});  
  //limpa o formulario apos enviar o alerta