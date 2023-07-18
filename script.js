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
  
  var button = document.querySelector('.dropbtn > svg');
  button.style.transform = dropdown.classList.contains("show") ? "rotate(90deg)" : "none";
  button.style.transition = "0.2s ease-out";
}