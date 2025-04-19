"use strict";

// get box with defined id
const box = document.getElementById("the_box");


// array of colors
let colors = ["red", "green", "purple", "orange", "dodgerblue"]

// count for colors
let count = 0;

// function to change the color of the box to the next color in the array
function recolorBox() {
  box.style.backgroundColor = colors[count];

  //increment count where modulo is used to loop back to the beginning of the array
    count = (count + 1) % colors.length;
}

//recolorBox();
box.addEventListener("click", recolorBox);


// have circle follow mouse
// get circle with defined id
const circle = document.getElementById("the_circle");

// to prevent circle from blocking click events
circle.style.pointerEvents = "none";

// function to handle mousemove event
function handleMouseMove(event) {
    circle.style.left = event.clientX - circle.offsetWidth / 2 + "px";
    circle.style.top = event.clientY - circle.offsetHeight / 2 + "px";
}


// get the button with the defined id
const button = document.getElementById("toggleFollowButton");

// variable to check if circle should follow mouse
let followMouse = false;

// add mousemove event listener to the document for following the mouse
function toggleFollowMouse() {
  followMouse = !followMouse;  

  if (followMouse) {
    // allow the circle to follow the mouse anywhere on the screen by attaching the mousemove event listener to the document
    box.removeEventListener("mousemove", handleMouseMove); 
    document.addEventListener("mousemove", handleMouseMove); 
  } else {
    // allow the circle to follow the mouse only inside the box by attaching the mousemove event listener to the box
    document.removeEventListener("mousemove", handleMouseMove);
    box.addEventListener("mousemove", handleMouseMove);
  }
}

// Add event listener to the button to toggle mouse follow
button.addEventListener("click", toggleFollowMouse);

// Initially, add mousemove event listener to the box to constrain circle inside the box
box.addEventListener("mousemove", handleMouseMove);