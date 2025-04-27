// Smooth parallax scrolling effect
document.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / docHeight;
  
  const video = document.querySelector('.background-video');
  if (video) {
    video.style.setProperty('--scroll', scrollFraction);
    video.classList.add('parallax-scroll');
  }
});

// Reveal feature cards on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.feature-card').forEach(card => {
  observer.observe(card);
});
