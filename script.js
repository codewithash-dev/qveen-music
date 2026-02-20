// Minimal JS interactions for the moments gallery.
document.addEventListener('DOMContentLoaded', function () {
  var arrow = document.querySelector('.moments-arrow--right');
  var track = document.querySelector('.moments-track');
  var slides = Array.prototype.slice.call(document.querySelectorAll('.moments-slide'));
  var modal = document.querySelector('.moments-modal');
  var modalImg = document.querySelector('.moments-modal-image');
  var modalClose = document.querySelector('.moments-modal-close');
  var modalPrev = document.querySelector('.moments-modal-nav--prev');
  var modalNext = document.querySelector('.moments-modal-nav--next');
  var modalLike = document.querySelector('.moments-modal-like');
  var modalLikeCount = document.querySelector('.moments-modal-like-count');
  var scrollTopBtn = document.querySelector('.scroll-top-btn');
  var likedSet = new Set();
  var currentIndex = 0;

  if (arrow && track) {
    arrow.addEventListener('click', function () {
      track.scrollBy({ left: 300, behavior: 'smooth' });
    });
  }

  function updateLikeUi(index) {
    slides.forEach(function (slide, i) {
      slide.classList.toggle('is-liked', likedSet.has(i));
      var heart = slide.querySelector('.moments-like-btn');
      if (heart) {
        heart.textContent = likedSet.has(i) ? '♥' : '♡';
      }
    });

    if (modalLike && modalLikeCount) {
      var liked = likedSet.has(index);
      modalLike.classList.toggle('is-liked', liked);
      modalLike.textContent = liked ? '♥' : '♡';
      modalLikeCount.textContent = liked ? '1' : '0';
    }
  }

  function openModal(index) {
    var slide = slides[index];
    if (!slide || !modal || !modalImg) {
      return;
    }
    var img = slide.querySelector('img');
    if (!img) {
      return;
    }

    currentIndex = index;
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    updateLikeUi(currentIndex);
  }

  function closeModal() {
    if (!modal) {
      return;
    }
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function stepModal(direction) {
    if (!slides.length) {
      return;
    }
    var total = slides.length;
    var nextIndex = (currentIndex + direction + total) % total;
    openModal(nextIndex);
  }

  slides.forEach(function (slide, index) {
    slide.addEventListener('click', function () {
      openModal(index);
    });
    slide.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openModal(index);
      }
    });

    var tileLike = slide.querySelector('.moments-like-btn');
    if (tileLike) {
      tileLike.addEventListener('click', function (event) {
        event.stopPropagation();
        if (likedSet.has(index)) {
          likedSet.delete(index);
        } else {
          likedSet.add(index);
        }
        updateLikeUi(currentIndex);
      });
    }
  });

  if (modalLike) {
    modalLike.addEventListener('click', function (event) {
      event.stopPropagation();
      if (likedSet.has(currentIndex)) {
        likedSet.delete(currentIndex);
      } else {
        likedSet.add(currentIndex);
      }
      updateLikeUi(currentIndex);
    });
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  if (modalPrev) {
    modalPrev.addEventListener('click', function () {
      stepModal(-1);
    });
  }
  if (modalNext) {
    modalNext.addEventListener('click', function () {
      stepModal(1);
    });
  }
  if (modal) {
    modal.addEventListener('click', function (event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', function (event) {
    if (!modal || !modal.classList.contains('is-open')) {
      return;
    }
    if (event.key === 'Escape') {
      closeModal();
    } else if (event.key === 'ArrowLeft') {
      stepModal(-1);
    } else if (event.key === 'ArrowRight') {
      stepModal(1);
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', function () {
      var shouldShow = window.scrollY > 220;
      scrollTopBtn.classList.toggle('is-visible', shouldShow);
    });
  }

  updateLikeUi(currentIndex);
});
