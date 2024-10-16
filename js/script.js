function hamburg() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(0px)";
}

function cancel() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(-500px)";
}

const text = [" Back-End", " Front-End"];

let speed = 100;
const textElements = document.querySelector(".typewrinter-text");
let textIndex = 0;
let characterIndex = 0;

function typeWriter() {
  if (characterIndex < text[textIndex].length) {
    textElements.innerHTML += text[textIndex].charAt(characterIndex);
    characterIndex++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  if (textElements.innerHTML.length > 0) {
    textElements.innerHTML = textElements.innerHTML.slice(0, -1);
    setTimeout(eraseText, 50);
  } else {
    textIndex = (textIndex + 1) % text.length;
    characterIndex = 0;
    setTimeout(typeWriter, 500);
  }
}

window.onload = typeWriter;
