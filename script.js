const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => io.observe(el));

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const scrollSpy = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(a => {
        const active = a.getAttribute('href') === '#' + e.target.id;
        a.classList.toggle('nav-active', active);
      });
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => scrollSpy.observe(s));
/* ── STAGE MODAL ── */
function openStage(id) {
  const overlay = document.getElementById('stageOverlay');
  document.querySelectorAll('.stage-content').forEach(el => el.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeStage(event, force) {
  if (force || (event && event.target === document.getElementById('stageOverlay'))) {
    document.getElementById('stageOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeStage(null, true);
});