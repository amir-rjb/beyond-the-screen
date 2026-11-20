const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const modal = document.getElementById('comingSoonModal');
const closeModal = document.getElementById('closeModal');
const modalOkay = document.getElementById('modalOkay');
const startButtons = [document.getElementById('startButton'), document.getElementById('bottomStartButton')];

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  });
});

function showComingSoon() {
  modal.hidden = false;
  closeModal.focus();
}
function hideComingSoon() {
  modal.hidden = true;
}

startButtons.forEach((button) => button.addEventListener('click', showComingSoon));
closeModal.addEventListener('click', hideComingSoon);
modalOkay.addEventListener('click', hideComingSoon);
modal.addEventListener('click', (event) => {
  if (event.target === modal) hideComingSoon();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.hidden) hideComingSoon();
});

document.getElementById('year').textContent = new Date().getFullYear();
