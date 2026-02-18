// Minimal JS: moments gallery arrow scroll (no framework)
document.addEventListener('DOMContentLoaded', function () {
  var arrow = document.querySelector('.moments-arrow--right');
  var track = document.querySelector('.moments-track');
  if (arrow && track) {
    arrow.addEventListener('click', function () {
      track.scrollBy({ left: 300, behavior: 'smooth' });
    });
  }
});
