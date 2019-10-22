window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
const input = document.querySelector("input");
recognition.interimResults = true;

let p = document.createElement("p");
const words = document.querySelector(".words");
words.appendChild(p);

recognition.addEventListener("result", e => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join("");

  p.textContent = transcript;
  input.setAttribute("placeholder", transcript);

  if (e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
  }
});

mic = document.querySelector(".fas");
mic.addEventListener("click", () => {
  mic.classList.add("active");
  recognition.start();
});

recognition.addEventListener("end", () => {
  mic.classList.remove("active");
});
