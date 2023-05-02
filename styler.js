"use strict";

const styleAButton = document.getElementById("styleA");
const styleBButton = document.getElementById("styleB");
const styleSheetLink = document.getElementById("styleSheet");

styleAButton.addEventListener("click", function() {
  if (styleSheetLink.getAttribute("href") !== "styleA.css") {
    styleSheetLink.setAttribute("href", "styleA.css");
  }
});

styleBButton.addEventListener("click", function() {
  if (styleSheetLink.getAttribute("href") !== "styleB.css") {
    styleSheetLink.setAttribute("href", "styleB.css");
  }
});