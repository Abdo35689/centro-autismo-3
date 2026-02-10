const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const links = document.querySelectorAll('.nav-list a');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  links.forEach((link) => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}
