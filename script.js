// ---------- STUDY STREAK ----------
let streak = localStorage.getItem("studyStreak") || 0;
document.getElementById("streak").innerText = `🔥 Study Streak: ${streak} days`;

function increaseStreak() {
  streak++;
  localStorage.setItem("studyStreak", streak);
  document.getElementById("streak").innerText = `🔥 Study Streak: ${streak} days`;
}

// ---------- SUMMARY ----------
function makeSummary() {
  const text = document.getElementById("inputText").value.trim();
  if (!text) return alert("Please paste text first!");

  increaseStreak();

  const sentences = text.split(".").slice(0, 3).join(".");
  document.getElementById("output").innerText =
    "📌 Summary:\n" + sentences + ".";
}

// ---------- NOTES ----------
function makeNotes() {
  const text = document.getElementById("inputText").value.trim();
  if (!text) return alert("Please paste text first!");

  increaseStreak();

  const sentences = text.split(".");
  let notes = "📝 Notes:\n";

  sentences.forEach(s => {
    if (s.trim().length > 20) {
      notes += "• " + s.trim() + "\n";
    }
  });

  document.getElementById("output").innerText = notes;
}

// ---------- SMART FLASHCARDS ----------
function makeFlashcards() {
  const text = document.getElementById("inputText").value.trim();
  if (!text) return alert("Please paste text first!");

  increaseStreak();

  const sentences = text.split(".");
  let html = "<h3>🧠 Flashcards</h3>";

  sentences.forEach((s, index) => {
    if (s.trim().length > 25) {
      html += `
        <div class="flashcard">
          <b>Q${index + 1}:</b> What does this sentence explain?<br>
          <button onclick="this.nextElementSibling.style.display='block'">
            Show Answer
          </button>
          <div class="answer">${s.trim()}</div>
        </div>
      `;
    }
  });

  document.getElementById("output").innerHTML = html;
}

// ---------- THEME TOGGLE ----------
function toggleTheme() {
  document.body.classList.toggle("light");

  const btn = document.getElementById("themeToggle");
  btn.innerText = document.body.classList.contains("light")
    ? "🌞 Light Mode"
    : "🌙 Dark Mode";
}
