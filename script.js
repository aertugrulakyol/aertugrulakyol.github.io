const $bigBall = document.querySelector(".cursor__ball--big");
const $smallBall = document.querySelector(".cursor__ball--small");
const $hoverables = document.querySelectorAll(".hoverable");

// Listeners
document.body.addEventListener("mousemove", onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener("mouseenter", onMouseHover);
  $hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, 0.4, {
    x: e.pageX - 15,
    y: e.pageY - 15,
  });
  TweenMax.to($smallBall, 0.1, {
    x: e.pageX - 5,
    y: e.pageY - 7,
  });
}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, 0.3, {
    scale: 3,
  });
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, 0.3, {
    scale: 1,
  });
}

const anchors = document.querySelectorAll(".boing");

anchors.forEach((anchor) => {
  anchor.addEventListener("mousedown", function () {
    anchor.style.transform = "translateY(2px)";
  });
  anchor.addEventListener("mouseup", function () {
    anchor.style.transform = "translateY(0)";
  });
  anchor.addEventListener("touchstart", function () {
    anchor.style.transform = "translateY(2px)";
  });
  anchor.addEventListener("touchend", function () {
    anchor.style.transform = "translateY(0)";
  });
  anchor.addEventListener("mouseenter", function () {
    anchor.style.transform = "translateY(2px)";
  });
  anchor.addEventListener("mouseleave", function () {
    anchor.style.transform = "translateY(0)";
  });
});

const shadows = document.querySelectorAll(".shadow");

shadows.forEach((anchor) => {
  anchor.addEventListener("mousedown", function () {
    anchor.style.boxShadow = "none";
  });
  anchor.addEventListener("mouseup", function () {
    anchor.style.boxShadow = "var(--shadow)";
  });
  anchor.addEventListener("touchstart", function () {
    anchor.style.boxShadow = "none";
  });
  anchor.addEventListener("touchend", function () {
    anchor.style.boxShadow = "var(--shadow)";
  });
  anchor.addEventListener("mouseenter", function () {
    anchor.style.boxShadow = "none";
  });
  anchor.addEventListener("mouseleave", function () {
    anchor.style.boxShadow = "var(--shadow)";
  });
});


//-----------------------------carousel-----------------------------//

const sliderContainers = document.querySelectorAll('.outer');
const sliderInners = document.querySelectorAll('.inner');
const progressBars = document.querySelectorAll('.progress-bar');

sliderContainers.forEach((sliderContainer, index) => {
  const sliderInner = sliderInners[index];
  const progressBar = progressBars[index];
  let isMouseDown = false;
  let startX;
  let scrollLeft;

  sliderContainer.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    sliderContainer.classList.add('grabbing');
    startX = e.pageX - sliderContainer.offsetLeft;
    scrollLeft = sliderContainer.scrollLeft;
  });

  sliderContainer.addEventListener('mouseup', () => {
    isMouseDown = false;
    sliderContainer.classList.remove('grabbing');
  });

  sliderContainer.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - sliderContainer.offsetLeft;
    const walk = (x - startX) * 1.5; // Adjust the scroll speed if needed
    sliderContainer.scrollLeft = scrollLeft - walk;
  });

  sliderContainer.addEventListener('scroll', updateProgressBar);

  function updateProgressBar() {
    const scrollWidth = sliderInner.scrollWidth - sliderInner.clientWidth;
    const scrollPosition = sliderContainer.scrollLeft;
    const progress = (scrollPosition / scrollWidth) * 100;
    progressBar.style.width = progress + '%';
  }
});



const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const sliderContainer = document.getElementById('sliderContainer');

let scrollInterval;

leftArrow.addEventListener('mousedown', () => {
  scrollInterval = setInterval(() => {
    sliderContainer.scrollBy({
      left: -500, // Adjust the scroll distance if needed
      behavior: 'smooth'
    });
  }, 100); // Adjust the scrolling speed if needed
});

leftArrow.addEventListener('mouseup', () => {
  clearInterval(scrollInterval);
});

leftArrow.addEventListener('mouseleave', () => {
  clearInterval(scrollInterval);
});

rightArrow.addEventListener('mousedown', () => {
  scrollInterval = setInterval(() => {
    sliderContainer.scrollBy({
      left: 500, // Adjust the scroll distance if needed
      behavior: 'smooth'
    });
  }, 100); // Adjust the scrolling speed if needed
});

rightArrow.addEventListener('mouseup', () => {
  clearInterval(scrollInterval);
});

rightArrow.addEventListener('mouseleave', () => {
  clearInterval(scrollInterval);
});


/*------------------------------------*/

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");
  
  var button = document.querySelector('.dropbtn > img');
  button.style.transform = dropdown.classList.contains("show") ? "rotate(90deg)" : "none";
  button.style.transition = "0.2s ease-out";
}