const img = document.querySelector("#img_slideshow");
const buttonLeft = document.querySelector("#button_left");
const buttonRight = document.querySelector("#button_right");

let imgIndex = 1;

buttonLeft.addEventListener("click", () => {
  if (imgIndex === 1) {
    img.setAttribute("src", img.getAttribute("src").replace(imgIndex, "4"));
    imgIndex = 4;
  } else {
    img.setAttribute(
      "src",
      img.getAttribute("src").replace(imgIndex, imgIndex - 1),
    );
    imgIndex--;
  }
});

buttonRight.addEventListener("click", () => {
  if (imgIndex === 4) {
    img.setAttribute("src", img.getAttribute("src").replace(imgIndex, "1"));
    imgIndex = 1;
  } else {
    img.setAttribute(
      "src",
      img.getAttribute("src").replace(imgIndex, imgIndex + 1),
    );
    imgIndex++;
  }
});