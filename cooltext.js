"use strict";

// store text
const textContainer = document.querySelector("#cooltext");
let text = textContainer.textContent;
textContainer.textContent = "";
console.log(text);
// split text into spans
text = text.trim();
text = text.split("");
console.log(text);

// add text to html

for (let i = 0; i < text.length; i++) {
  const newChar = document.createElement("span");
  newChar.textContent = text[i];
  textContainer.appendChild(newChar);
  if (newChar.textContent === " ") {
    document.querySelector("span:last-child").classList.add("space");
  }
  document.querySelector("span:last-child").classList.add("fadetext");
  console.log(newChar);

  // set animation delay
  document.querySelector("span:last-child").style.setProperty("--delay", i);
  document
    .querySelector("span:last-child")
    .style.setProperty("--length", text.length);
}
// add animation class
