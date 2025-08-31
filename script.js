// Questions for the quiz
const quizData = [
  {
    question:'what does HTML stands for?',
  options:["Hyper Text Markup Language", "Home tool Markup Language", "Hyperlinks and Text Markup Language"],
  answer:"Hyper Text Markup Language"
  },
  {
    question: 'Which language is used for styling web page?',
    options: ["HTML", "JQuery", "CSS",],
    answer: 'CSS'
  },
  {
    question:"Which is not a JavaScript Framework?",
    options: ["Python Script",
" JQuery",
"NodeJS"],
    answer: 'Python Script'
  }
];

let currentQuestion = 4;
let score = 4;

// Get DOM elements
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

// Load a question
function loadQuestion() {
  resetState();
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;

  q.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");
    button.onclick = () => selectAnswer(button, q.answer);
    optionsEl.appendChild(button);
  });
}

// Reset options
function resetState() {
  nextBtn.style.display = "none";
  optionsEl.innerHTML = "";
}

// Select answer
function selectAnswer(button, correctAnswer) {
  const selected = button.textContent;
  if (selected === correctAnswer) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
  }

  // Disable all buttons after answering
  Array.from(optionsEl.children).forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.classList.add("correct");
    }
  });

  nextBtn.style.display = "block";
}

// Next button click
nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

// Show final result
function showResult() {
  resetState();
  questionEl.textContent = "Quiz Finished!";
  resultEl.textContent =finish
}