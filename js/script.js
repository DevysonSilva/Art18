// Header navigation toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("[data-animate]");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const animation = el.getAttribute("data-animate");
        el.classList.add(`animate-${animation}`, "visible");
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.2 }); // 20% visível para acionar

  elements.forEach(el => observer.observe(el));
});

// FAQ toggle
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    item.classList.toggle('active');
  });
});

// Número do WhatsApp (com DDI + DDD)
const telefoneWhatsApp = "5581986309453";

document.getElementById("form-contato").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !mensagem) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Monta o texto para o WhatsApp
  const texto = `Olá, meu nome é ${nome}.%0A%0A${mensagem}`;
  const url = `https://wa.me/${telefoneWhatsApp}?text=${texto}`;

  // Abre no WhatsApp
  window.open(url, "_blank");
});

// Limpa os campos do formulário
document.getElementById("nome").value = "";
document.getElementById("mensagem").value = "";
