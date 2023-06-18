window.addEventListener('DOMContentLoaded', function () {
  var swiperWrapper = document.querySelector('.swiper-wrapper');
  var swiperSlides = Array.from(document.querySelectorAll('.swiper-slide'));
  var currentPosition = 0;
  var slideWidth = swiperSlides[0].offsetWidth;

  function updateSlidePosition() {
    swiperWrapper.style.transform = 'translateX(' + (-currentPosition * slideWidth) + 'px)';
  }

  function slideTo(index) {
    if (index >= 0 && index < swiperSlides.length) {
      currentPosition = index;
      updateSlidePosition();
    }
  }

  // Add event listeners for swiping
  swiperWrapper.addEventListener('touchstart', handleTouchStart);
  swiperWrapper.addEventListener('touchmove', handleTouchMove);

  var startX = null;
  function handleTouchStart(event) {
    startX = event.touches[0].clientX;
  }

  function handleTouchMove(event) {
    if (!startX) return;

    var currentX = event.touches[0].clientX;
    var diff = startX - currentX;

    if (diff > 0) {
      slideNext();
    } else if (diff < 0) {
      slidePrev();
    }

    startX = null;
  }

    
  // Add navigation buttons
  var swiperButtons = document.querySelectorAll('.op_swiper_buttons button');

  for (var i = 0; i < swiperButtons.length; i++) {
    swiperButtons[i].classList.add('op_swiper_button');
    swiperButtons[i].addEventListener('click', createButtonClickHandler);
  }

  function createButtonClickHandler() {
    var currentButton = this;
  
  // Remove active class from all buttons
  for (var i = 0; i < swiperButtons.length; i++) {
    swiperButtons[i].classList.remove('active');
  }
  
  // Add active class to the clicked button
  currentButton.classList.add('active');
  
  // Get the index of the clicked button
  var index = Array.from(swiperButtons).indexOf(currentButton);
  
  // Call the slideTo function with the index
  slideTo(index);
  }
});