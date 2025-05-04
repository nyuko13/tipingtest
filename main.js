const words = [
  { jp: "さくら", romaji: "sakura" },
  { jp: "くるま", romaji: "kuruma" },
  { jp: "やま", romaji: "yama" },
  { jp: "かわ", romaji: "kawa" }
];

let currentWord = {};
const wordEl = document.getElementById("word");
const inputEl = document.getElementById("input");
const resultEl = document.getElementById("result");
const soundEl = document.getElementById("type-sound");

function playSound() {
  soundEl.currentTime = 0;
  soundEl.play();
}

function showNewWord() {
  currentWord = words[Math.floor(Math.random() * words.length)];
  wordEl.textContent = currentWord.jp;
  inputEl.value = "";
  resultEl.textContent = "";
}

inputEl.addEventListener("input", () => {
  playSound();

  if (inputEl.value === currentWord.romaji) {
    resultEl.textContent = "正解！";
    setTimeout(showNewWord, 1000);
  }
});

showNewWord();
