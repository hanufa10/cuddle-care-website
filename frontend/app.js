const menuIcon = document.getElementById('menu-toggle');
const openIcon = document.getElementById('open-icon');
const closeIcon = document.getElementById('close-icon');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
  openIcon.style.display = openIcon.style.display === 'none' ? 'inline' : 'none';
  closeIcon.style.display = closeIcon.style.display === 'inline' ? 'none' : 'inline';
});

  // Function to check if an element is in the viewport
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }

  // Apply the 'visible' class to make elements fade in
  function fadeInOnScroll() {
    const elements = document.querySelectorAll('*');  // Apply to all elements on the page

    elements.forEach(el => {
      if (isInViewport(el)) {
        el.classList.add('visible');
      }
    });
  }

  // Trigger the function on scroll
  window.addEventListener('scroll', fadeInOnScroll);

  // Run it initially in case elements are already in view
  fadeInOnScroll();


  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      item.classList.toggle('active');

      // Optional: close others
      document.querySelectorAll('.faq-item').forEach(i => {
        if (i !== item) i.classList.remove('active');
      });
    });
  });

