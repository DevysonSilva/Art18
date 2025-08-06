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