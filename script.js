function getText() {
  return document.getElementById("inputText").value.trim();
}

/* ---------- SUMMARY ---------- */
function makeSummary() {
  let text = getText();

  if (!text) {
    document.getElementById("output").innerText =
      "Please paste some text first.";
    return;
  }

  let sentences = text.split(/[\.\!\?]/).filter(s => s.length > 30);
  let summary = sentences.slice(0, 2).join(". ") + ".";

  document.getElementById("output").innerText =
    "Summary:\n" + summary;
}

/* ---------- NOTES ---------- */
function makeNotes() {
  let text = getText();

  if (!text) {
    document.getElementById("output").innerText =
      "Please paste some text first.";
    return;
  }

  let sentences = text.split(/[\.\!\?]/).filter(s => s.length > 20);

  let notes = sentences.slice(0, 5)
    .map(s => "• " + s.trim())
    .join("\n");

  document.getElementById("output").innerText =
    "Notes:\n" + notes;
}

/* ---------- FLASHCARDS ---------- */
function makeFlashcards() {
  let text = getText();

  if (!text) {
    document.getElementById("output").innerText =
      "Please paste some text first.";
    return;
  }

  let sentences = text.split(/[\.\!\?]/).filter(s => s.length > 25);

  let html = "<h3>Flashcards</h3>";

  sentences.slice(0, 5).forEach((s, i) => {
    html += `
      <div style="border:1px solid #ccc; padding:10px; margin:10px;">
        <b>Question ${i + 1}:</b><br>
        What does this sentence explain?
        <br><br>
        <button onclick="this.nextElementSibling.style.display='block'">
          Show Answer
        </button>
        <p style="display:none; margin-top:10px;">
          <b>Answer:</b> ${s.trim()}
        </p>
      </div>
    `;
  });

  document.getElementById("output").innerHTML = html;
}

/* ---------- TIMER ---------- */
let timer;
function startTimer() {
  let study = document.getElementById("studyTime").value * 60;
  if (!study) return;

  clearInterval(timer);
  let display = document.getElementById("timerDisplay");

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
