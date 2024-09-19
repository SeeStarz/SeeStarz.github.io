const disabled = document.getElementsByClassName("jsonly");

for (const elem of disabled) {
  elem.style.display = "block";
  elem.style.visibility = "visible";
}

current_slide = 1;
function changeSlide(n) {
  const slides = document.getElementsByClassName("Slides");
  for (const emogus of slides) {
    emogus.style.display = "none";
    emogus.style.visibility = "hidden";
  }

  let i = current_slide + n;
  if (i < 0) {
    i = slides.length - 1;
  }
  if (i >= slides.length) {
    i = 0;
  }
  slides[i].style.display = "block";
  slides[i].style.visibility = "visible";
  current_slide = i;
}
document.getElementById("projectright").onclick = function () {
  changeSlide(1);
};

document.getElementById("projectleft").onclick = function () {
  changeSlide(-1);
};
