const header = document.getElementById('siteHeader');
const nav = document.getElementById('mainNav');
const burger = document.getElementById('burger');

const onScroll = () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
};

onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

const closeMenu = () => {
  nav.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
  burger.setAttribute('aria-label', 'Open menu');
};

burger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(isOpen));
  burger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) closeMenu();
});

const navLinks = Array.from(nav.querySelectorAll('a'));

const sections = navLinks
  .map((link) => {
    const id = link.getAttribute('href');
    return id && id.startsWith('#') ? document.querySelector(id) : null;
  })
  .filter(Boolean);

if (sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: '-40% 0px -55% 0px' },
  );

  sections.forEach((section) => observer.observe(section));
}

document.querySelectorAll('.faq-item').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    document.querySelectorAll('.faq-item[open]').forEach((other) => {
      if (other !== item) other.removeAttribute('open');
    });
  });
});
