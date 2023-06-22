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

// dropwodnbutton

document.addEventListener("click", function (event) {
  var dropdowns = document.getElementsByClassName("menu-item");
  var buttons = document.getElementsByTagName("button");
  for (var i = 0; i < dropdowns.length; i++) {
    var dropdown = dropdowns[i];
    var button = buttons[i];
    if (event.target !== dropdown && event.target !== button) {
      dropdown.style.display = "none";
    }
  }
});

function toggleDropdown(event, dropdownNumber) {
  event.stopPropagation();
  var dropdown = document.getElementById("dropdown" + dropdownNumber);
  var dropdowns = document.getElementsByClassName("menu-item");
  for (var i = 0; i < dropdowns.length; i++) {
    var otherDropdown = dropdowns[i];
    if (otherDropdown !== dropdown) {
      otherDropdown.style.display = "none";
    }
  }
  dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";

  // Add CSS transitions
  dropdown.style.opacity = "0";
  dropdown.style.bottom = "50%";
  dropdown.style.transition =
    "opacity 0.3s ease-in-out, bottom 0.3s ease-in-out";
  setTimeout(function () {
    dropdown.style.opacity = "1";
    dropdown.style.bottom = "100%";
  }, 0);
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

const modeSwitchBtn = document.getElementById("mode-switch");
const root = document.documentElement;
const body = document.body;

// Retrieve the saved preference from local storage, if any
const savedPreference = localStorage.getItem("preference");
if (savedPreference) {
  applyPreference(savedPreference);
  modeSwitchBtn.checked = savedPreference === "light";
}

modeSwitchBtn.addEventListener("change", () => {
  if (modeSwitchBtn.checked) {
    applyPreference("light");
    localStorage.setItem("preference", "light");
  } else {
    applyPreference("dark");
    localStorage.setItem("preference", "dark");
  }
});

function applyPreference(preference) {
  if (preference === "light") {
    root.style.setProperty("--dark", "#fff");
    root.style.setProperty("--light", "#1b1f22");
    root.style.setProperty("--shadow", "var(--shadow-dark-high)");
    root.style.setProperty("--background", "#0f0f10");
  } else {
    root.style.setProperty("--dark", "#1b1f22");
    root.style.setProperty("--light", "#fff");
    root.style.setProperty("--shadow", "var(--shadow-light-medium)");
    root.style.setProperty("--background", "#e6edf2");
  }
}



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