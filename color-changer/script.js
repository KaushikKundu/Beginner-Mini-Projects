const box1 = document.getElementById("box-1");
const box2 = document.getElementById("box-2");
const box3 = document.getElementById("box-3");
const box4 = document.getElementById("box-4");

const background = document.body;
const container = document.querySelector(".container");

function colorChanger(e) {
    let clickedBox = e.target;
    let boxColor = window.getComputedStyle(clickedBox).backgroundColor;
    let backgroundColor = window.getComputedStyle(background).backgroundColor;
  console.log(window.getComputedStyle(background))
    backgroundColor == boxColor
      ? (background.style.backgroundColor = "white")
      : (background.style.backgroundColor = boxColor);
    // backgroundColor = white won't work. We are simply assigning value to a variable. TO change the css property , style must be used.
    }
box1.addEventListener("click", (e) => {
    colorChanger(e);
});
box2.addEventListener("click", (e) => {
    colorChanger(e);
});
box3.addEventListener("click", (e) => {
    colorChanger(e);
});
box4.addEventListener("click", (e) => {
    colorChanger(e);
});