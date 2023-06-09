const openMenuButtonElement = document.querySelector('[data-type="open-menu"]');

const nav = document.querySelector('nav');

openMenuButtonElement.addEventListener('click', function () {
  const expanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', !expanded);
  const menu = this.nextElementSibling;
  menu.classList.add('enabled');
});

const closeButtonElement = nav.firstElementChild;
closeButtonElement.addEventListener('click', () => {
  nav.classList.remove('enabled');
});
