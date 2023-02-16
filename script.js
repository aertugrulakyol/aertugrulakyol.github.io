var animation = bodymovin.loadAnimation({
  container: document.getElementById("scroll-down"),
  path: "./scrolldown.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
  name: "scroll-down-animation",
});

var typed = new Typed(".typer-line-one", {
  strings: ["<i>user<br>experience<br>designer</i>", "<i>user<br>interface<br>designer</i>", "<i>full<br>stack<br>designer</i>"],
  typeSpeed: 100,
  fadeOut: true,
  fadeOutClass: "typed-fade-out",
  fadeOutDelay: 1000,
  loop: true,
  smartBackspace: false,
  showCursor: false,
});
