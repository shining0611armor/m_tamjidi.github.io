
// Init AOS
AOS.init({
  once: true,
  duration: 800,
  offset: 120,
});

// Typed.js for hero tagline
var typed = new Typed('#typed', {
  strings: [
    'Computer Vision Researcher',
    'Machine Learning Engineer',
    'Digital Electronics Engineer'
  ],
  typeSpeed: 60,
  backSpeed: 30,
  loop: true
});
