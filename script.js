function getText() {
  return document.getElementById("inputText").value;
}

function makeSummary() {
  let text = getText();
  document.getElementById("output").innerText =
    "Summary:\n" + text.split(".").slice(0, 2).join(".");
}

function makeNotes() {
  let text = getText();
  let sentences = text.split(".");
  let notes = sentences.map(s => "- " + s).join("\n");
  document.getElementById("output").innerText = "Notes:\n" + notes;
}

function makeFlashcards() {
  let text = getText();
  let sentences = text.split(".");
  document.getElementById("output").innerText =
    "Flashcard:\nQ: What is the topic?\nA: " + sentences[0];
}

let timer;
function startTimer() {
  let study = document.getElementById("studyTime").value * 60;
  let display = document.getElementById("timerDisplay");
  let message = document.getElementById("timerMessage");

  clearInterval(timer);
  message.innerText = "Study time!";
  
  timer = setInterval(() => {
    let minutes = Math.floor(study / 60);
    let seconds = study % 60;
    display.innerText = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    study--;

    if (study < 0) {
      clearInterval(timer);
      alert("Time to take a break!");
    }
  }, 1000);
}
