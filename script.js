const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-nav');

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('open');
  });
}

const filterButtons = document.querySelectorAll('.filter-btn');
const resources = document.querySelectorAll('.resource');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    resources.forEach((card) => {
      const matches = filter === 'all' || card.dataset.category === filter;
      card.style.display = matches ? '' : 'none';
    });
  });
});

const form = document.querySelector('#contact-form');
const feedback = document.querySelector('#form-feedback');

if (form && feedback) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const nome = String(data.get('nome') || '').trim();
    const email = String(data.get('email') || '').trim();
    const messaggio = String(data.get('messaggio') || '').trim();

    if (!nome || !email || !messaggio) {
      feedback.textContent = 'Compila tutti i campi obbligatori prima di inviare.';
      feedback.style.color = '#b42318';
      return;
    }

    feedback.textContent = `Grazie ${nome}, abbiamo ricevuto la tua richiesta. Ti contatteremo presto.`;
    feedback.style.color = '#067647';
    form.reset();
  });
}
