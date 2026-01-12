function getText() {
  return document.getElementById("inputText").value.trim();
}

/* -------- SUMMARY -------- */
function makeSummary() {
  let text = getText();

  if (!text) {
    document.getElementById("output").innerText =
      "Please paste text first.";
    return;
  }

  let sentences = text.split(/[\.\!\?]/).filter(s => s.length > 30);

  let summary = sentences.slice(0, 2).join(". ") + ".";

  document.getElementById("output").innerText =
    "Summary:\n" + summary;
}

/* -------- NOTES -------- */
function makeNotes() {
  let text = getText();

  if (!text) {
    document.getElementById("output").innerText =
      "Please paste text first.";
    return;
  }

  let sentences = text.split(/[\.\!\?]/).filter(s => s.length > 20);

  let notes = sentences.slice(0, 5)
    .map(s => "• " + s.trim())
    .join("\n");

  document.getElementById("output").innerText =
    "Notes:\n" + notes;
}

/* -------- FLASHCARDS -------- */
function makeFlashcards() {
  let text = getText();
  if (!text) {
    document.getElementById("output").innerText =
      "Please paste text first.";
    return;
  }

  let sentences = text.split(/[\.\!\?]/).filter(s => s.length > 25);

  let cards = sentences.slice(0, 3).map((s, i) =>
    `Q${i + 1}: What does this mean?\nA: ${s.trim()}`
  ).join("\n\n");

  document.getElementById("output").innerText =
    "Flashcards:\n\n" + cards;
}

/* -------- TIMER -------- */
let timer;
function startTimer() {
  let study = document.getElementById("studyTime").value * 60;
  let display = document.getElementById("timerDisplay");

  if (!study) return;

  clearInterval(timer);

  timer = setInterval(() => {
    let min = Math.floor(study / 60);
    let sec = study % 60;
    display.innerText = min + ":" + (sec < 10 ? "0" : "") + sec;
    study--;

    if (study < 0) {
      clearInterval(timer);
      alert("Time to take a break!");
    }
  }, 1000);
}
