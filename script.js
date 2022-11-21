const textEl = document.getElementById("text");

const speedEl = document.getElementById("speed");
const scoreEl = document.getElementById("score");

const text = "Welcome to our country";
id = 1;
let speed = 300 / 1;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, id);
  scoreEl.innerText = textEl.innerText.length;
  id++;

  if (id > text.length) {
    id = 1;
  }
  setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
