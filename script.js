const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');

menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('open', !expanded);
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    navLinks.forEach(item => item.classList.remove('active'));
    link.classList.add('active');
  });
});

const sections = document.querySelectorAll('main section[id]');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const active = document.querySelector(`.nav a[href="#${entry.target.id}"]`);
      if (active) {
        navLinks.forEach(link => link.classList.remove('active'));
        active.classList.add('active');
      }
    }
  });
}, { rootMargin: '-35% 0px -55% 0px' });
sections.forEach(section => observer.observe(section));

document.getElementById('year').textContent = new Date().getFullYear();
