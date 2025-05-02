const menuIcon = document.getElementById('menu-toggle');
const openIcon = document.getElementById('open-icon');
const closeIcon = document.getElementById('close-icon');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
  openIcon.style.display = openIcon.style.display === 'none' ? 'inline' : 'none';
  closeIcon.style.display = closeIcon.style.display === 'inline' ? 'none' : 'inline';
});
