const nav = document.querySelector('.nav');
const menuBtn = document.querySelector('.menu-btn');
const langButtons = document.querySelectorAll('[data-lang-toggle]');

if (menuBtn) {
  menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
}

langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-lang') || 'fr';
    const next = current === 'fr' ? 'en' : 'fr';
    document.documentElement.setAttribute('data-lang', next);
    document.documentElement.lang = next;
    localStorage.setItem('websterr_lang', next);
  });
});

const savedLang = localStorage.getItem('websterr_lang') || 'fr';
document.documentElement.setAttribute('data-lang', savedLang);
document.documentElement.lang = savedLang;
