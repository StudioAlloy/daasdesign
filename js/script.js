const toggles = document.querySelectorAll('.project-toggle');

function toggleFn() {
  const toggleThis = this.dataset.projecten;
  const toggleFull = document.querySelector(`#include--projecten__content__full--${toggleThis}`);
  console.log(toggleFull);
  toggleFull.classList.toggle('active');
}

toggles.forEach(toggle => toggle.addEventListener('click', toggleFn) );
