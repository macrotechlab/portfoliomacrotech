/* CONFIGURAÇÃO RÁPIDA
   1) Troque o telefone pelo WhatsApp do negócio, com código do país e DDD.
      Exemplo: 5511999999999 (55 + 11 + número), somente dígitos.
   2) Edite a mensagem inicial e personalize os textos/nome no index.html.
*/
const WHATSAPP_PHONE = "5511999999999";
const WHATSAPP_MESSAGE = "Olá! Gostaria de saber mais sobre as soluções da SuaMarca.";

const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuButton && mainNav) {
  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    menuButton.setAttribute("aria-label", isExpanded ? "Abrir menu" : "Fechar menu");
    mainNav.classList.toggle("is-open", !isExpanded);
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menu");
      mainNav.classList.remove("is-open");
    });
  });
}

const phoneDigits = WHATSAPP_PHONE.replace(/\D/g, "");
const whatsappUrl = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
document.querySelectorAll(".js-whatsapp").forEach((link) => {
  link.href = whatsappUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

const yearElement = document.getElementById("current-year");
if (yearElement) yearElement.textContent = new Date().getFullYear();
