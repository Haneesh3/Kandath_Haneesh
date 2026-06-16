window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); } });
}, { threshold: 0.1 });
revealEls.forEach(el => observer.observe(el));

function showExp(idx, btn) {
  document.querySelectorAll('.exp-panel').forEach((p,i) => {
    p.classList.toggle('active', i === idx);
  });
  document.querySelectorAll('.exp-nav-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}
