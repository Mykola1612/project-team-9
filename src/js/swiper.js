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
    
      // Adjust the number of visible cards to 1 for mobile screens
      var numVisibleCards = window.innerWidth < 768 ? 1 : 2.5;
    
      // Calculate the slide width based on the number of visible cards
      slideWidth = swiperWrapper.offsetWidth / numVisibleCards;

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

  // Adjust number of visible cards based on screen width
  function adjustVisibleCards() {
    var screenWidth = window.innerWidth;
    var numVisibleCards = 1; // Default for screen width less than 768px

    if (screenWidth >= 768 && screenWidth < 1200) {
      numVisibleCards = 2.5;
    } else if (screenWidth >= 1200) {
      numVisibleCards = 4;
    }

    // Calculate the slide width based on the number of visible cards
    slideWidth = swiperWrapper.offsetWidth / numVisibleCards;

    // Update the slide position to reflect the changes
    updateSlidePosition();
  }

  // Call the adjustVisibleCards function initially and on window resize
  adjustVisibleCards();
  window.addEventListener('resize', adjustVisibleCards);
});