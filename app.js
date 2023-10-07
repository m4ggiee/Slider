let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(n) {
  slides[index].style.left = "-600px";
  index = (n + slides.length) % slides.length;
  slides[index].style.left = "0";
}

function nextSlide() {
  showSlide(index + 1);
}

function prevSlide() {
 showSlide(index -1);
}

let timer = setInterval(nextSlide,3000);

let next = document.getElementById("next");
let prev = document.getElementById("prev");

next.addEventListener("click", function() {
 clearInterval(timer);
 nextSlide();
 timer = setInterval(nextSlide,3000);
});

prev.addEventListener("click", function() {
 clearInterval(timer);
 prevSlide();
 timer = setInterval(nextSlide,3000);
});