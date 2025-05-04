const words = [
  { jp: "さくら", romaji: "sakura" },
  { jp: "くるま", romaji: "kuruma" },
  { jp: "やま", romaji: "yama" },
  { jp: "かわ", romaji: "kawa" },
  { jp: "にんげん", romaji: "ningen" },
  { jp: "プール", romaji: "pu-ru" },
  { jp: "りんご", romaji: "ringo" },
  { jp: "かめ", romaji: "kame" },
  { jp: "中川家", romaji: "nakagawake" },
  { jp: "ハイドロポンプ", romaji: "haidoroponpu" }
];

let currentWord = {};
const wordEl = document.getElementById("word");
const inputEl = document.getElementById("input");
const resultEl = document.getElementById("result");
const soundEl = document.getElementById("type-sound");

function playSound() {
  soundEl.currentTime = 0;
  soundEl.play().catch(err => {
    console.warn("音の再生に失敗:", err);
  });
}
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
