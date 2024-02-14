const slider = document.querySelector('.activities-slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});

function autoScroll() {
  function scrollRightSlider() {
    slider.scrollLeft += 5;
  }

  function scrollLeftSlider() {
    slider.scrollLeft -= 5;
  }

  let scrollDirection = "right";

  function scroll() {
    if (!isDown) { // Check if the user is not actively interacting with the slider
      if (scrollDirection === "right") {
        if (slider.offsetWidth + slider.scrollLeft >= slider.scrollWidth) {
          scrollDirection = "left";
          console.log("scrolling left");
        } else {
          scrollRightSlider();
          console.log("scrolling right");
        }
      } else {
        if (slider.scrollLeft <= 0) {
          scrollDirection = "right";
          console.log("scrolling right");
        } else {
          scrollLeftSlider();
          console.log("scrolling left");
        }
      }
    }

    setTimeout(scroll, 40);
  }

  setTimeout(scroll, 40);
}

autoScroll();